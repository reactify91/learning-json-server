import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Create from "./components/Create";
import Detail from "./components/Detail";
import Details from "./components/Details";
import Home from "./components/Home";
function App() {
  return (
    <>
      <Router>
        <nav className="h-16 bg-indigo-800 text-white font-semibold text-2xl flex items-center">
          <Link className="ml-10 cursor-pointer" to="/">
            HomePage
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/details" element={<Details />} />
          <Route path="/details/:detailId" element={<Detail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
