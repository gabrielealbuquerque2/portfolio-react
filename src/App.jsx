import Fundo from "./components/Fundo.jsx";
import Navbar from "./components/Navbar.jsx";
import Inicio from "./components/Inicio.jsx";
import Sobre from "./components/Sobre.jsx";
import Conhecimentos from "./components/Conhecimentos.jsx";
import Projetos from "./components/Projetos.jsx";
import Contato from "./components/Contato.jsx";

export default function App() {
  return (
    <>
      <Fundo />
      <Navbar />
      <main>
        <Inicio />
        <Sobre />
        <Conhecimentos />
        <Projetos />
        <Contato />
      </main>
      <footer className="rodape">&copy; 2026 Gabriele Albuquerque.</footer>
    </>
  );
}