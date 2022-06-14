import "./App.css";
import Main from "./Main";
import { Route, Routes } from "react-router-dom";
import Chinese from "./Chinese";
import Login from "./Login";
import Signup from "./Singup";
import Modify from "./Modify";
import Add from "./Add";
import Detail from "./Detail";
import MyRecife from "./MyRecife";
import Japan from "./Japan";
import Korean from "./Korean";
import Western from "./Western";
import SoutheastAsia from "./SoutheastAsia";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/chinese" element={<Chinese />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/modify/:id" element={<Modify />} />
        <Route path="/add" element={<Add />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/myrecife" element={<MyRecife />} />
        <Route path="/japan" element={<Japan />} />
        <Route path="/korean" element={<Korean />} />
        <Route path="/western" element={<Western />} />
        <Route path="/southeastasia" element={<SoutheastAsia />} />
      </Routes>
    </div>
  );
}

export default App;
