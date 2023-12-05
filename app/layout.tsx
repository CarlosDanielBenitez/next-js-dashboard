import { IBM } from "./ui/fonts";
import "./ui/global.css"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${IBM.className} antialiased`}>
        {children}
        <footer className="py-10 flex justify-center items-center">Web Development ♥</footer>
      </body>
    </html>
  );
}
