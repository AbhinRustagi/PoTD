import Month from "@/components/Month";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto px-5 py-5 max-w-4xl">
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Photo of The Day 📸</h1>
        <p className="text-sm text-gray-300">
          A photobook by{" "}
          <Link
            href="https://www.abhin.dev/"
            target="_blank"
            className="underline"
          >
            Abhin Rustagi
          </Link>
          .
        </p>
      </header>
      <main className="my-6">
        <Month
          month="January"
          year={2019}
          thumbnails={[{ src: "", alt: "", caption: "" }]}
        />
      </main>
    </div>
  );
}
