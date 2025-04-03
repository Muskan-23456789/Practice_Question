import { useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { NotesContext } from "../context/NotesContext";
import { ArrowLeftIcon, TrashIcon } from "@heroicons/react/24/outline";

const NoteDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { notes, deleteNote, darkMode } = useContext(NotesContext);
  const note = notes.find((note) => note.id === Number(id));

  if (!note) {
    return (
      <div className="container mx-auto p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Note not found</h2>
        <Link to="/" className="text-blue-500 hover:text-blue-600">
          Back to Home
        </Link>
      </div>
    );
  }

  const handleDelete = () => {
    deleteNote(note.id);
    navigate("/");
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50"
      }`}
    >
      <div className="container mx-auto p-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <Link
              to="/"
              className="flex items-center gap-2 text-blue-500 hover:text-blue-600"
            >
              <ArrowLeftIcon className="h-5 w-5" />
              Back to Notes
            </Link>
            <button
              onClick={handleDelete}
              className="flex items-center gap-2 text-red-500 hover:text-red-600"
            >
              <TrashIcon className="h-5 w-5" />
              Delete Note
            </button>
          </div>
          <div
            className={`p-6 rounded-lg shadow-lg ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h1 className="text-3xl font-bold mb-4">{note.title}</h1>
            <p
              className={`whitespace-pre-line ${
                darkMode ? "text-gray-300" : "text-gray-900"
              }`}
            >
              {note.body}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteDetail;
