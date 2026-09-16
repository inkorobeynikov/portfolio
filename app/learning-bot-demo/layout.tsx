import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LearnWords App and Telegram Bot",
  description:
    "Explore a vocabulary learning app and Telegram bot with generated cards, spaced repetition, audio, and interactive exercises.",
  alternates: {
    canonical: "/learning-bot-demo",
  },
};

export default function LearningBotDemoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
