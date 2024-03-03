import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <p className="footer__copy">
        Created by.{" "}
        <Link href="https://s.id/muzaa" className=" text-blue-400">
          Aergia
        </Link>
      </p>
    </footer>
  );
}
