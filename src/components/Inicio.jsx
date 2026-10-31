import { motion } from "framer-motion";
import Faixa from "./Faixa.jsx";
import { perfil } from "../data.js";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } } };
const letra = { hidden: { y: "110%", rotate: 8 }, show: { y: 0, rotate: 0, transition: { type: "spring", stiffness: 140, damping: 16 } } };
const subir = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } };

export default function Inicio() {
  return (
    <section id="inicio" className="hero">
      <motion.div
      className="forma forma-anel"
      aria-hidden="true"
      animate={{ y: [0, -18, 0], x: [0, 8, 0] }}
      transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />

      <motion.div variants={container} initial="hidden" animate="show" className="hero-texto">
        <motion.p variants={subir} className="hero-ola">olá, eu sou</motion.p>
        <h1 className="hero-nome" aria-label={perfil.nome}>
          {perfil.nome.split(" ").map((palavra, a) => (
            <span key={a} className="palavra">
              {palavra.split("").map((c, b) => (
                <span key={b} className="mascara" aria-hidden="true">
                  <motion.span variants={letra} whileHover={{ y: -14, color: "#fff" }} style={{ display: "inline-block" }}>{c}</motion.span>
                </span>
              ))}
            </span>
          ))}
        </h1>
        <motion.div variants={subir} className="hero-acoes">
          <motion.a href="#projetos" className="botao" whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.94 }}>Ver projetos</motion.a>
          <motion.a href="#contato" className="botao botao--vazio" whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.94 }}>Falar comigo</motion.a>
        </motion.div>
      </motion.div>
      <Faixa itens={perfil.skills} />
    </section>
  );
}