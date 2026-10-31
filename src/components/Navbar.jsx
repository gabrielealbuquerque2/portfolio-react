import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { User, Route, Presentation, Mail } from "lucide-react";

const links = [
  { href: "#sobre", label: "Sobre", Icone: User },
  { href: "#trilha", label: "Conhecimentos", Icone: Route },
  { href: "#projetos", label: "Projetos", Icone: Presentation },
  { href: "#contato", label: "Contato", Icone: Mail },
];

export default function Navbar() {
  const [rolou, setRolou] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setRolou(v > 40));

  return (
    <motion.header
      className={`navbar ${rolou ? "navbar--rolou" : ""}`}
      initial={{ y: -90 }}
      animate={{ y: 0, paddingTop: rolou ? 10 : 24, paddingBottom: rolou ? 10 : 24 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <a href="#inicio" className="logo">GA.</a>
      <nav>
        {links.map(({ href, label, Icone }) => (
          <a key={href} href={href}>
            <Icone size={18} strokeWidth={1.75} />
            {label}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}