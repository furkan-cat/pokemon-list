import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Modal } from "@mantine/core";
import PokemonDetail from "./pages/pokemon-detail";
import Home from "./pages/home";
import "./App.css";


function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state && location.state.background;

  return (
    <>
      <Routes location={background || location}>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<PokemonDetail />} />
      </Routes>
      {background && (
        <Routes>
          <Route
            path="/:id"
            element={
              <Modal opened={true} onClose={() => navigate("/")}>
                <PokemonDetail />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;
