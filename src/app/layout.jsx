import RootLayout from "@/components/RootLayout";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: {
    template: "TechTonic",
    default: "TechTonic ©2023 ",
  },
};

export default function Layout({ children }) {
  return (
    <html
      lang="en"
      className="h-full bg-neutral-950 text-base antialiased text-neutral-100"
    >
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}
        < Analytics />
        </RootLayout>
      </body>
    </html>
  );
}
