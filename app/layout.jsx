import "./globals.css";

export const metadata = {
  title: "AnchorPoint Security Group",
  description: "Professional Security for Hotels, Residential Buildings & Events",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
