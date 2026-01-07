import "./globals.css";

export const metadata = {
  title: "React Learning App",
  description: "A simple app to learn React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
