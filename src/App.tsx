import styles from "./App.module.css";
import Form from "./components/Form/Form";

function App() {
  return (
    <>
      <h1 className={styles.title}>BUSCADOR DE CLIMA</h1>
      <div className={styles.conteiner}>
        <Form />
        <p>2</p>
      </div>
    </>
  );
}

export default App;
