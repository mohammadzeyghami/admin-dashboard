import { Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "./Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {
  Contacts,
  Dashboard,
  FAQ,
  Team,
  Invoices,
  Form,
  Pie,
  Geogeraphy,
  Calendarr,
} from "./scence/dashboard";
import { Sidebarr, Topbar } from "./scence/global";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className="app">
          <Sidebarr />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/bar" element={<Dashboard />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/geography" element={<Geogeraphy />} />
              <Route path="/calendar" element={<Calendarr />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

// cssBaseline resert css styles to defaults
