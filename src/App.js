import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import Home from "./pages/home";
import EntregaPedido from "./pages/entregaPedido";
import PedidoConfirmado from "./pages/pedidoConfirmado";
import { tema } from "./theme/theme";
import Header from "./components/header";
function App() {
  return (
    <ThemeProvider theme={tema}>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/entregaPedido" element={<EntregaPedido />} />
        <Route path="/pedidoConfirmado" element={<PedidoConfirmado />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
