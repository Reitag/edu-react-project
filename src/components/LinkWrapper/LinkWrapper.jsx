"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import cn from "classnames";

export const LinkWrapper = ({ to, children, styles, end = false }) => {
  const pathname = usePathname();

  const isActive = end ? pathname === to : pathname.startsWith(to);

  return (
    <Link
      href={to}
      className={cn(styles.tabButton, {
        [styles.tabButtonActive]: isActive,
      })}
    >
      {children}
    </Link>
  );
};
