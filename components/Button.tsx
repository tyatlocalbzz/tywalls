import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  children: ReactNode;
  className?: string;
  external?: boolean;
}

export default function Button({
  href,
  onClick,
  variant = "primary",
  children,
  className = "",
  external = false,
}: ButtonProps) {
  const base = "btn";
  const style = variant === "primary" ? "btn-primary" : "btn-ghost";
  const classes = `${base} ${style} ${className}`;

  if (href) {
    const isExternal = external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
