---
title: "Learning Bot Admin — Language Learning Platform"
type: "Pet / R&D / Architecture Demo"
status: "Active"
description: "Admin web app and API for managing a language-learning Telegram bot. Multi-language support, AI-assisted content generation, and comprehensive word/user management."
---

# Learning Bot Admin

An admin web app + API for inspecting and managing data for a language-learning Telegram bot.

---

## What the product is

- **Admin web app** + **Admin API** for a language-learning Telegram bot (bot itself is a separate repo)
- Supports **per-language database configuration** (stored in Supabase) and **per-language MongoDB** data (words, bot users, sessions)
- Provides **word editing** (definitions, translations, examples, grammar, audio), **user dictionary management**, and **AI-assisted content/audio regeneration**
- Production-leaning CRUD flows: login, language DB selection, listings, edits
- AI regeneration runs synchronously and relies on external services (OpenAI, GCS)

---

## Core user flows

1. **Admin login** → token stored in localStorage → select a language database → navigate admin area
2. **Manage language databases** — list/create/update/delete, activate/deactivate
3. **Browse Mongo collections** (botusers, words, sessions) with search, sort, pagination, and word-specific filters
4. **View/edit a word entry** — update fields manually, edit grammar JSON, or regenerate definition/translations/examples/audio with AI; save changes
5. **Batch AI regeneration** for multiple words: preview changes, optionally apply word normalization, promote generated audio, or cancel
6. **View bot user details and progress** — open user dictionary; edit repetition parameters or delete/mark entries as new
7. **Update per-language settings** (currently Google Cloud Storage bucket name)

---

## System architecture

### Frontend
- **React SPA** (Vite + Tailwind) under `/admin` routes
- React Router, Redux for auth and language DB list
- Auth uses localStorage for JWT; axios interceptor injects `Authorization: Bearer`

### Backend
- **Express API** at `/api/admin`, protected by JWT auth
- Routing: `/api/admin/login` returns JWT; `/select-language` issues a new JWT with `selectedLanguageDbId`
- JWT middleware attaches `req.adminUser` for protected routes

### Data & integrations
- **Supabase** for `admin_users` and `language_dbs` configuration
- **MongoDB** per language for words, botusers, sessions
- **OpenAI** for text and TTS regeneration
- **Google Cloud Storage** for audio files

### Environment wiring
- Vite dev proxy and Nginx in production route `/api/admin` to the admin server

---

## Key services

| Service | Responsibility |
|---------|----------------|
| `admin-auth-service` | Supabase lookup + bcrypt, JWT generation |
| `language-db-service` | CRUD for language DBs; closes Mongo connections on URI changes |
| `mongo-admin-service` | List/get documents (whitelisted collections), word read/update |
| `user-dictionary-service` | Query/update per-user vocabulary entries and join with words |
| `ai-regenerate-service` | OpenAI regeneration, audio preview/apply/cancel |
| `ai-batch-regenerate-service` | Batch processing with preview workflow |
| `audio-storage-service` | GCS uploads, temp paths, promotion, deletion |

---

## Learning & repetition logic

- User vocabulary entries live under `botusers.vocabulary` and reference words by ObjectId
- Each entry stores: `repetition`, `easeFactor`, `interval`, and `nextRepetition`
- **Status derived in Mongo aggregation:**
  - `new` if `nextRepetition` is null
  - `due` if `nextRepetition <= now`
  - `scheduled` otherwise

**Admin actions:**
- Update repetition fields and `nextRepetition`
- Mark as new by setting `nextRepetition` to null
- Delete vocabulary entries

*Note: The actual spaced-repetition algorithm that updates these fields lives in the bot repo.*

---

## Scalability & extensibility

- **Multi-language support** modeled as a Supabase-backed registry of language DBs
- Selected DB is embedded in JWT and used to resolve Mongo URI per request
- Mongo connections are **pooled and cached** with explicit cleanup on DB changes and shutdown
- AI regeneration is scoped (definition/translations/examples/audio/all) with strict JSON responses and language-specific prompts
- Batch mode includes preview/apply/cancel workflows
- Audio regeneration uses **temp files in GCS** with validated paths, then promotes to stable final paths for safe preview and rollback
- Admin endpoints restrict Mongo access to a **whitelist of collections** to limit exposure

---

## DevOps & operations

### Docker
- **Server container** (Node 20, TypeScript build)
- **App container** (Vite build served by Nginx)
- `docker-compose.yml` for prod and `docker-compose.dev.yml` with live mounts and health checks

### Environment variables
- `ADMIN_JWT_SECRET`, Supabase URL and service role key
- OpenAI key, GCS bucket and credentials
- `VITE_API_HOST` for local proxy target

### Testing
- Frontend component tests with Vitest/RTL
- No server test suite in this repo (yet)

---

## Technical highlights

- **Multi-language architecture** with dynamic Mongo connection resolution per request
- **AI-assisted content pipeline** with preview/apply/cancel workflow
- **Secure audio handling** with temp → final path promotion
- **JWT-based auth** with language context embedded in token
- **Production-ready Docker setup** with separate server and app containers

---

## Limitations & future improvements

| Area | Current State | Planned |
|------|---------------|---------|
| AI regeneration | Synchronous in request handlers | Background queue with retry policy |
| Auth | JWT + localStorage, single role | RBAC, refresh tokens |
| Error handling | Inconsistent, console-based logging | Structured logs, consistent responses |
| Testing | Frontend tests only | Server-side test suite |
| Schema validation | Minimal, relies on Mongo flexibility | Zod/Joi validation layer |

---

## Tech stack

**Frontend:** React, Vite, Tailwind CSS, Redux, React Router, Axios
**Backend:** Node.js, Express, TypeScript
**Database:** MongoDB, Supabase (PostgreSQL)
**AI:** OpenAI API (GPT-4, TTS)
**Storage:** Google Cloud Storage
**DevOps:** Docker, Nginx, GitHub Actions
