import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>Добро пожаловать</div>
      <Link href={"/about"}>About</Link>
      <Link href={"/user/10"}>User</Link>
      <Link href={"/rendering/ssr"}>SSR</Link>
      <Link href={"/rendering/ssg"}>SSG</Link>
      <Link href={"/rendering/isr"}>ISR</Link>
    </div>
  );
}
