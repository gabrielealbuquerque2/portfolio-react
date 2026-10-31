import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Section from "./Section.jsx";
import { conhecimentos } from "../data.js";

export default function Conhecimentos() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 55%"]
  });

  return (
    <Section id="trilha" titulo="Conhecimentos">
      <div className="trilha" ref={ref}>
        <div className="trilha-trilho" />

        <motion.div
          className="trilha-linha"
          style={{ scaleY: scrollYProgress }}
        />

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {conhecimentos.conhecimentos.map((t, i) => (
            <motion.li
              key={t.titulo}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <span className="ponto" />
              <small>{t.periodo}</small>
              <h3>{t.titulo}</h3>
              <p>{t.local}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </Section>
  );
}