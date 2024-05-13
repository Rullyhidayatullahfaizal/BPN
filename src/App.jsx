import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Report } from "./pages/Report";
import { NoPage } from "./pages/NoPage";
import { Auth } from "./pages/Auth";
import { DetailPeta } from "./pages/DetailPeta";
import { Logo } from "./pages/Logo";
import { Struktur } from "./pages/Struktur";




function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="report" element={<Report />} />
        <Route path="login" element={<Auth />} />
        <Route path="peta" element={<DetailPeta />} />
        <Route path="logo" element={<Logo />} />
        <Route path="struktur" element={<Struktur />} />        
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
