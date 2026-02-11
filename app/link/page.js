import React from "react";
import CodeBlock from "../components/CodeBlock";
import Link from "next/link";

const examples = [
  `CLEANEST PATTERN (NEXT.JS APP ROUTER)
import Link from "next/link";

export default function Example() {
  return (
    <Link
      href="/dashboard"
      className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
    >
      Go to Dashboard
    </Link>
  );
}`,
  `WITH BUTTON-STYLE LINK (VERY COMMON IN UI WORK)
<Link
  href="/signup"
  className="inline-block px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
>
  Sign Up
</Link>`,
  `CLEANEST EXTERNAL LINK (OPENS IN NEW TAB)
<Link
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 hover:underline"
>
  Visit Example
</Link>
`,
  `REUSABLE COMPONENT (SUPER CLEAN)
import Link from "next/link";

export function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-gray-700 hover:text-black transition font-medium"
    >
      {children}
    </Link>
  );
}

//USAGE
<NavLink href="/about">About</NavLink>
`,
  `CLEANEST ACTIVE LINK (APP ROUTER, "usePathname")
  //ACTIVE-LINK.JS
  "use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ActiveLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={
        isActive
          ? "text-blue-600 font-semibold"
          : "text-gray-600 hover:text-gray-900"
      }
    >
      {children}
    </Link>
  );
}

//USAGE
<ActiveLink href="/dashboard">Dashboard</ActiveLink>
<ActiveLink href="/settings">Settings</ActiveLink>
  `,
  `ACTIVE LINK WITH TAILWIND VARIANTS (SUPER CLEAN & SCALABLE)
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function ActiveLink({ href, children }) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={clsx(
        "transition-colors",
        pathname === href
          ? "text-blue-600 font-semibold"
          : "text-gray-600 hover:text-gray-900"
      )}
    >
      {children}
    </Link>
  );
}
`,
  `ACTIVE LINK WITH UNDERLINE STYLE (COMMON IN NAVBARS)
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem({ href, children }) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={\`pb-1 border-b-2 $\{
        active
          ? "border-blue-600 text-blue-600"
          : "border-transparent hover:border-gray-300"
      }\`}
    >
      {children}
    </Link>
  );
}
`,
];

const ReactLink = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <Link
        href="/"
        className="text-blue-600 hover:underline text-lg font-medium ml-5"
      >
        Home
      </Link>
      <div className="p-6 space-y-6">
        {examples.map((example, index) => (
          <CodeBlock key={index} code={example} /> //Here code refers to the code inside the component CodeBlock. I can name it anything but both has to be the same.
        ))}
      </div>
    </div>
  );
};

export default ReactLink;
