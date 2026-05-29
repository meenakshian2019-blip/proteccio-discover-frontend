import "./globals.css";

export const metadata = {
  title: "Proteccio Discover",
  description: "Privacy Intelligence Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}