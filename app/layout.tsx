import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Art of Making",
  description: "From imagination to interface.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}