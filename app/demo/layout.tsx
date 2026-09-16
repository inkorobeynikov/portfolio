import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/learning-words",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function DemoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
