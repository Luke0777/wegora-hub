import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wegora Hub",
  description: "Moderne WEG-Verwaltung und Eigentümer-Portal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
