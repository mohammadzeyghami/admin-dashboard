import { ColorModeContext, useMode } from "./Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const { theme, colorMode } = useMode();
  return <div className="app"></div>;
}

export default App;
