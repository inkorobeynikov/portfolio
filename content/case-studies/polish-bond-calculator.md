---
title: "Polish Treasury Bond Calculator — From Excel to Interactive Web Tool"
type: "Fintech / Product Development / Solo Build"
status: "Live"
featured: false
description: "Interactive calculator comparing 7 Polish treasury bond series against bank deposits. Built as a solo product from idea to production — analysis, UX design, calculation engine, and deployment."
---

# Problem

Polish treasury bonds are a popular savings instrument, but comparing them is hard. The official government site offers no comparison tools. Finanse Bardzo Osobiste (FBO) created an Excel calculator with 500+ rows and 3 worksheets, but it has serious UX limitations: no interactivity, no visualization, confusing structure, and it requires downloading a file.

Existing web tools (kalkulatorobligacji.pl, obligacje.pl) are either outdated, ad-heavy, or don't support multi-year rollovers and macro scenario modeling.

# Approach

I treated this as a product challenge, not a coding exercise:

1. **Research** — Reverse-engineered the FBO Excel calculator to understand the exact financial logic: coupon schedules, capitalization rules, early redemption penalties, Belka tax, IKE exemption
2. **Competitive analysis** — Reviewed existing tools and identified gaps: no rollover support, no deposit comparison, no macro scenario editing
3. **UX decisions** — Designed a 4-step wizard flow instead of the Excel's wall-of-numbers approach: Base Rates → Bond Selection → Macro Scenarios → Results
4. **Architecture** — Chose Next.js with static export for zero-cost hosting and instant loading. Pure client-side calculation engine with no backend dependency
5. **Validation** — Cross-checked all outputs against the original Excel for 7 bond series across multiple horizons

# What It Does

The calculator compares 7 Polish treasury bond series (ROR, DOR, TOS, COI, EDO, ROS, ROD) against a bank deposit over 1-12 years:

- **Macro scenario modeling** — Users define inflation, NBP rate, WIBOR 6M for each year of the horizon
- **Tax handling** — Standard 19% Belka tax with IKE account exemption option
- **Rollover logic** — Bonds that mature before the horizon end are automatically reinvested
- **Early redemption** — Calculates penalty fees when liquidating before maturity
- **Deposit benchmark** — Side-by-side comparison with a savings account at the same horizon
- **Visualization** — Interactive chart showing net value growth for each series over time

# Technical Stack

- Next.js 16 with static export (deployed to /obligacje/)
- TypeScript — strict mode, full type coverage
- Recharts — interactive line chart with responsive layout
- Tailwind CSS v4 — utility-first styling
- Vitest — unit tests for the calculation engine
- GitHub Actions — automated build and deploy to VPS

# Result

A production-ready financial tool that replaces a complex Excel spreadsheet with an intuitive web interface. The tool is live at [ivank.tech/obligacje](https://ivank.tech/obligacje/) and demonstrates the ability to go from a product idea to a working MVP — including financial domain analysis, UX design, and full-stack implementation.
