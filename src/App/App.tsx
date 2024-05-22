import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import * as Container from "../Containers";

const App = () => {
  return (
    <div>
      <header>
        <Container.Header />
      </header>
      <main className="px-xl-5 px-md-4 px-sm-2 px-1 py-3">
        <Container.Main />
      </main>
      <footer className="pb-4" style={{marginTop: 100}}>
        <Container.Footer />
      </footer>
    </div>
  );
}
 
export default App;