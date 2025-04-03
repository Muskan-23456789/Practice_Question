import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { NotesContext } from '../context/NotesContext'
import { TrashIcon } from '@heroicons/react/24/outline'

const NoteCard = ({ id, title, body }) => {
    const { deleteNote, darkMode } = useContext(NotesContext)

    return (
        <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{body.substring(0, 100)}...</p>
            <div className="flex justify-between items-center">
                <Link 
                    to={`/note/${id}`}
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
                >
                    Read More
                </Link>
                <button
                    onClick={() => deleteNote(id)}
                    className="text-red-600 hover:text-red-800"
                >
                    <TrashIcon className="h-5 w-5" />
                </button>
            </div>
        </div>
    )
}

export default NoteCard 