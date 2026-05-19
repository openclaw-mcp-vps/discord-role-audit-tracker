import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discord Role Audit Tracker",
  description: "Track Discord role changes and permission audits. Monitor server role assignments, permission changes, and generate compliance reports."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d1fce62c-2953-459d-aa1f-6299a9aea7d9"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
