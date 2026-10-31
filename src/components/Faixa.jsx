import { motion } from "framer-motion";

export default function Faixa({ itens }) {
  const base = [...itens, ...itens];
  return (
    <div className="marquee" aria-hidden="true">
      <motion.div className="marquee-trilho" animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, duration: 28, ease: "linear" }}>
        {[0, 1].map((k) => (
          <div className="marquee-grupo" key={k}>
            {base.map((t, i) => <span key={i}>{t}<i>✦</i></span>)}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
