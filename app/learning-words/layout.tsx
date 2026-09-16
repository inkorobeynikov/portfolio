import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn Words",
  description:
    "Try Ivan Karabeinikau's vocabulary learning application with spaced repetition, interactive exercises, and progress tracking.",
  alternates: {
    canonical: "/learning-words",
  },
};

export default function LearningWordsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
