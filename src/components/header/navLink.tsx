import Link from "next/link";
import { NavLinkProps } from "~types/components";

const NavLink = ({ className, href, text }: NavLinkProps) => {
  return (
    <li>
      <Link href={href}>
        <a className={className}>{text}</a>
      </Link>
    </li>
  );
};

export default NavLink;
