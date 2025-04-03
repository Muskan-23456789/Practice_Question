import { useContext } from "react";
import { Link } from "react-router-dom";
import { NotesContext } from "../context/NotesContext";
import Hero from "../components/Hero";
import NoteCard from "../components/NoteCard";
import Loading from "../components/Loading";

const Home = () => {
  const { notes, loading, darkMode } = useContext(NotesContext);

  return (
    <div className={darkMode ? "bg-gray-900 text-white" : "bg-gray-50"}>
      <Hero />
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Notes</h2>
          <Link
            to="/create"
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Note Create
          </Link>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note.id} {...note} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
