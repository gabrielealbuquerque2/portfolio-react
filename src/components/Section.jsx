import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Section({ id, titulo, children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.12, 0.88, 1], [0, 1, 1, 0.15]);
  const y = useTransform(scrollYProgress, [0, 0.12], [70, 0]);
  return (
    <section id={id} ref={ref} className="secao">
      <motion.div style={{ opacity, y }} className="secao-conteudo">
        {titulo && (
          <motion.h2
            className="secao-titulo"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {titulo}
          </motion.h2>
        )}
        {children}
      </motion.div>
    </section>
  );
}

const gabriele = {

  name: 'Gabriele Albuquerque',
  degree: 'Computer Science Student - 4th Semester',
  university: 'UNIFOR',

  skills: ['Java',  'JavaScript',  'HTML',  'CSS',  'React',  'MySQL',  'Android'], 
   
  communicative: true,    
  teamPlayer: true,   
  problemSolver: true,

  hireable: function() {

    return (
      this.hardWorker &&
      this.quickLearner &&
      this.teamPlayer &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  }
};