export const metadata = {
  title: "Joseph Burgoyne – Portfolio",
  description: "Timeline portfolio"
};

import "./globals.css";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
