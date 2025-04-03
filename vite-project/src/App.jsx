import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotesProvider } from "./context/NotesContext";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import CreateNote from "./Pages/CreateNote";
import NoteDetail from "./Pages/NoteDetail";

function App() {
  return (
    <NotesProvider>
      <Router>
        <div className="min-h-screen">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateNote />} />
            <Route path="/note/:id" element={<NoteDetail />} />
          </Routes>
        </div>
      </Router>
    </NotesProvider>
  );
}

export default App;
