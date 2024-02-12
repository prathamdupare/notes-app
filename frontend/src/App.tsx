import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <div className="h-screen">
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
