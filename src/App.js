import { NavBar } from "./Components/Navbar";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./Components/Main";
import { Filtered } from "./Components/Filtered";
import { SingleMovie } from "./SingleMovie";
import { Search } from "./Components/Search";

function App() {
  const [req, setReq] = useState({});

  return (
    <BrowserRouter>
      <NavBar props={{ setReq }} />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/filtered" element={<Filtered props={{ req }} />}></Route>
        <Route path="/singlemovie/:_id" element={<SingleMovie />}></Route>
        <Route path="/search" element={<Search />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
