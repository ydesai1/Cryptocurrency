import "./App.css";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Homepage from "./components/Homepage";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Cryptocurrencies from "./components/Cryptocurrencies";
import News from "./components/News";
import Exchanges from "./components/Exchanges";
import CryptoDetails from "./components/CryptoDetails";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className="app">
          <div className="header">
            <Topbar setIsSidebar={setIsSidebar} />
          </div>
          <div className="nav">
            <Sidebar></Sidebar>
          </div>
          <main className="main">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/news" element={<News />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
