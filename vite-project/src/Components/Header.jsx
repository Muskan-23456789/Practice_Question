import { useContext } from "react";
import { Link } from "react-router-dom";
import { NotesContext } from "../context/NotesContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const { darkMode, toggleTheme } = useContext(NotesContext);

  return (
    <header
      className={`p-4 ${darkMode ? "bg-gray-800 text-white" : "bg-white"}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Notes App
        </Link>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-200"
        >
          {darkMode ? (
            <SunIcon className="h-6 w-6" />
          ) : (
            <MoonIcon className="h-6 w-6" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
