import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Autoschade Bertie Nijhuis | Schadeherstel Denekamp",
  description:
    "Autoschade Bertie Nijhuis in Denekamp — ijzersterk in schadewerk. Meer dan 40 jaar ervaring in schadeherstel, spuitwerk, deukwerk en hagelschade. BOVAG gecertificeerd.",
  keywords:
    "autoschade, schadeherstel, spuitwerk, deukwerk, hagelschade, Denekamp, BOVAG, carrosserie",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
