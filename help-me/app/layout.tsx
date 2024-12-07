import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import homeIcon from "../public/home-svgrepo-com.svg";
import questionIcon from "../public/question-circle-svgrepo-com.svg";
import faqIcon from "../public/faq.svg";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="flex flex-row items-center justify-between p-4 bg-gray-100 border-b border-solid border-black">
          <h1 className="text-xl font-bold italic">Help-me!</h1>
          <nav className="flex flex-row gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src={homeIcon} className="w-5" alt="homeIcon" />
              <span>Home</span>
            </Link>
            <Link href="/questions" className="flex items-center gap-2">
              <Image src={questionIcon} className="w-5" alt="questionIcon" />
              <span>Questions</span>
            </Link>
            <Link href="/faq" className="flex items-center gap-2">
              <Image src={faqIcon} className="w-5" alt="faqIcon" />
              <span>FAQ</span>
            </Link>
          </nav>

          <div className="flex gap-4">
            <button className="w-24 py-1 rounded-3xl bg-[var(--darkcolor)] text-[var(--lightcolor)]">
              Login
            </button>
            <button className="w-24 py-1 rounded-3xl border-2 border-[var(--darkcolor)] border-solid bg-[var(--lightcolor)] text-[var(--darkcolor)]">
              Sign up
            </button>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
