import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section.jsx";
import CardProjeto from "./CardProjeto.jsx";
import { projetos } from "../data.js";

export default function Projetos() {
  const [aberto, setAberto] = useState(null);

  useEffect(() => {
    const esc = (e) => e.key === "Escape" && setAberto(null);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  return (
    <Section id="projetos" titulo="Projetos">
      <div className="cards">
        {projetos.map((p) => <CardProjeto key={p.titulo} projeto={p} aoAbrir={setAberto} />)}
      </div>

      <AnimatePresence>
        {aberto && (
          <motion.div className="modal-fundo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setAberto(null)}>
            <motion.div layoutId={`card-${aberto.titulo}`} className="modal" style={{ "--cor": aberto.cor }} onClick={(e) => e.stopPropagation()}>
              <div className="card-faixa" />
              <small>{aberto.categoria}</small>
              <h3>{aberto.titulo}</h3>
              <p>{aberto.detalhes}</p>
              <ul>{aberto.tags.map((t) => <li key={t}>{t}</li>)}</ul>
              <div className="modal-acoes">
                <a className="botao" href={aberto.link}>Ver projeto</a>
                <button className="botao botao--vazio" onClick={() => setAberto(null)}>Fechar</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}