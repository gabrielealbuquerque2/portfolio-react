import { motion } from "framer-motion";
import Section from "./Section.jsx";
import { perfil } from "../data.js";

export default function Sobre() {
  return (
    <Section id="sobre" titulo="Sobre mim">
      <motion.p
        className="sobre-texto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
      >
        {perfil.resumo}
      </motion.p>
    </Section>
  );
}