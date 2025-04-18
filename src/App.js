import Nav from "./Component/Header1.jsx/Nav";
import Carous from "./Component/Carousel/Carous";
import Footer from "./Component/Threelayer1/Footer.jsx/Footer";
import { Route, Routes } from "react-router-dom";
import Registerpage from "./Component/Header1.jsx/Registerpage";
import LoginPage from "./Component/Header1.jsx/LoginPage";



function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" Component={Carous} />
        <Route path="/register" Component={Registerpage} />
        <Route path="/login" Component={LoginPage} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
