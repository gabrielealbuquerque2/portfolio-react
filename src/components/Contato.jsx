import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section.jsx";
import { perfil } from "../data.js";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contato() {
  const [form, setForm] = useState({ nome: "", mensagem: "" });
  const [enviado, setEnviado] = useState(false);

  const mudar = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  function enviar(e) {
    e.preventDefault();
    
    const assunto = encodeURIComponent(`Contato de ${form.nome}`);
    const corpo = encodeURIComponent(form.mensagem);
    window.location.href = `mailto:${perfil.email}?subject=${assunto}&body=${corpo}`;
    setEnviado(true);
  }

  return (
    <Section id="contato" titulo="Contato">
      <AnimatePresence mode="wait">
        {!enviado ? (
          <motion.form
            key="form"
            onSubmit={enviar}
            className="form"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            exit={{ opacity: 0, y: -20 }}
          >
            <label>Seu nome
              <input name="nome" value={form.nome} onChange={mudar} required />
            </label>
            <label>Mensagem 
              <textarea name="mensagem" rows="4" value={form.mensagem} onChange={mudar} required />
            </label>
            <motion.button type="submit" className="botao" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              Enviar mensagem
            </motion.button>
          </motion.form>
        ) : (
          <motion.div key="ok" className="ok" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
            <p>Mensagem pronta no seu e-mail. Obrigado, {form.nome}!</p>
            <button className="botao botao--vazio" onClick={() => setEnviado(false)}>Escrever outra</button>
          </motion.div>
        )}
      </AnimatePresence>
      <p className="redes">
        <a href={perfil.github} target="_blank" rel="noreferrer">
          <FaGithub size={20} /> GitHub
        </a>
        <a href={perfil.linkedin} target="_blank" rel="noreferrer">
          <FaLinkedin size={20} /> LinkedIn
        </a>
      </p>
    </Section>
  );
}
