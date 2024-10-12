import Link from "next/link";

export const metadata = {
  title: "IO",
};

export default function () {
  return (
    <div>
      <Link
        style={{
          color: "green",
        }}
        href="/io/some/mdx"
      >
        Link button
      </Link>
      <br />
      change dir
    </div>
  );
}
