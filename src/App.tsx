import "./App.css";
import { PlateEditor } from "./components/pages/editor";

function App() {
  return (
    <div className="flex items-start justify-center bg-slate-100 h-screen">
      <div className="w-5/6">
        <PlateEditor />
      </div>
    </div>
  );
}

export default App;
