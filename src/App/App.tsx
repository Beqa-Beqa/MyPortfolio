import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import * as Container from "../Containers";

const App = () => {
  return (
    <div className="px-xl-5 px-md-4 px-sm-2 px-1 py-3">
      <header className="pb-5">
        <Container.Header />
      </header>
      <main className="mt-5 mt-xxl-4">
        <Container.Main />
      </main>
      <footer>
        <Container.Footer />
      </footer>
    </div>
  );
}
 
export default App;