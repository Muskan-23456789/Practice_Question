import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NotesContext } from "../context/NotesContext";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { addNote, darkMode } = useContext(NotesContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: Date.now(),
      title,
      body,
    };
    addNote(newNote);
    navigate("/");
  };

  return (
    <div className={`container mx-auto p-6 ${darkMode ? "text-white" : ""}`}>
      <h2 className="text-2xl font-bold mb-6">Create New Note</h2>
      <form onSubmit={handleSubmit} className="max-w-2xl">
        <div className="mb-4">
          <label className="block mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded-lg text-gray-800"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Content</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full p-2 border rounded-lg h-40 text-gray-800"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Create Note
        </button>
      </form>
    </div>
  );
};

export default CreateNote;
