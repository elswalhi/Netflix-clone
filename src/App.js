import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Player from "./pages/Player";
import TVShow from "./pages/TVShow";
import Netflix from "./pages/Netflix";
import MoviePage from "./pages/MoviePage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/player" element={<Player />} />
        <Route path="/tv" element={<TVShow />} />
        <Route path="/" element={<Netflix />} />
        <Route path="/movie" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
