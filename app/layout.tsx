import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MD Ashraful Hoque",
  description:
    "Computer Science Student | Enthusiast in Human-Computer Interaction, Programming | Lifelong Learner",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
