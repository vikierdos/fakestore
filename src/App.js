import logo from "./logo.svg";
import "./App.css";
import Kosar from "./components/Kosar";
import VasarloTer from "./components/VasarloTer";
import { useContext } from "react";
import { ApiContext } from "./contexts/ApiContext";
import { KosarContext } from "./contexts/KosarContext";

function App() {
  const { termekLista } = useContext(ApiContext);
  const { kosarLista } = useContext(KosarContext);

  return (
    <div className="container">
      <header>
        <h1>FakeStore Webáruház</h1>
      </header>
      <main className="row">
        <aside className="col-lg-4">
          <h4>Kosár</h4>
          <Kosar kosarLista={kosarLista}/>
        </aside>
        <article className="col-lg-8">
          <h4>Termékek</h4>
          {""}
          <VasarloTer termekLista={termekLista} />
        </article>
      </main>
    </div>
  );
}

export default App;
