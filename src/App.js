import Footer  from "./components/Footer";
import Header from "./components/Header.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer/>
      </div>
  );
}

export default App;
