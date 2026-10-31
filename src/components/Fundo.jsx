import { motion } from "framer-motion";

export default function Fundo() {
  return (
    <div className="fundo" aria-hidden="true">
      <motion.div className="mancha m1" animate={{ x: [0, 80, 0], y: [0, 60, 0] }} transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }} />
      <motion.div className="mancha m2" animate={{ x: [0, -70, 0], y: [0, -80, 0] }} transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }} />
    </div>
  );
}