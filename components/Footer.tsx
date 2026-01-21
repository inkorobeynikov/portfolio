import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/#skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="h-[12vh] mx-4 mt-8">
      <nav>
        <div className="flex justify-center">
          <ul className="flex gap-8 list-none text-xl flex-wrap justify-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-black no-underline hover:text-gray-500 hover:underline hover:underline-offset-8"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <p className="text-center text-[var(--color-text-secondary)] mt-8">
        Copyright &copy; {currentYear} Ivan Karabeinikau. All Rights Reserved.
      </p>
    </footer>
  );
}
