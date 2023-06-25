import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "@/utils/constants";
import AuthProviders from "./AuthProviders";

const Navbar = () => {
  const session = null;

  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image alt="Flexibble" src="/logo.svg" width={113} height={43} />
        </Link>
        <ul className="xl:flex hidden">
          {NavLinks.map(({ key, href, text }) => (
            <li key={key}>
              <Link href={href}>{text}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flexCenter gap-4">
        {session ? (
          <>
            UserPhoto
            <Link href="create-project">Share Work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
