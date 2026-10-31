import { motion } from "framer-motion";

export default function CardProjeto({ projeto, aoAbrir }) {
  return (
    <motion.div
      layoutId={`card-${projeto.titulo}`}
      className="card-externo"
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      exit={{ opacity: 0, scale: 0.85 }}
      transition={{ duration: 0.45 }}
    >
      <div
        role="button"
        tabIndex={0}
        className="card"
        style={{ "--cor": projeto.cor }}
        onClick={() => aoAbrir(projeto)}
        onKeyDown={(e) => e.key === "Enter" && aoAbrir(projeto)}
      >
        <div className="card-faixa" />
        <small>{projeto.categoria}</small>
        <h3>{projeto.titulo}</h3>
        <p>{projeto.descricao}</p>
        <ul>{projeto.tags.map((t) => <li key={t}>{t}</li>)}</ul>
        <span className="card-dica">clique para abrir</span>
      </div>
    </motion.div>
  );
}