declare const Prism: typeof import('prismjs');
import './prism/prism.js'
import './tailwind.css'
import './App.css'
import { ToastContainer } from 'react-toastify';
import useConsoleToasts from './hooks/use-console-toasts.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MarkdownViewer from './components/markdown-viewer';
import homeContent from './docs/home.md?raw';
import Home from './components/home';

function App() {

  useConsoleToasts();

  Prism.highlight('const a = 2;', Prism.languages.javascript, 'javascript');
  return (
    <>
    <Router>
        <nav>
            <div className="max-w-6xl mx-auto px-4 ml-36">
                <div className="flex justify-between">
                    <div className="flex space-x-4 pl-36">
                        <div className="flex items-center space-x-1">
                            <a href="#" className="py-5 px-3 text-white hover:text-green-200">Home</a>
                            <a href="#" className="py-5 px-3 text-white hover:text-green-200">About</a>
                            <a href="#" className="py-5 px-3 text-white hover:text-green-200">Prompt Engineering</a>
                            <a href="#" className="py-5 px-3 text-white hover:text-green-200">Blogs</a>
                            <a href="#" className="py-5 px-3 text-white hover:text-green-200">Essays</a>
                            <a href="#" className="py-5 px-3 text-white hover:text-green-200">Lesson Plans</a>
                            <a href="#" className="py-5 px-3 text-white hover:text-green-200">Quizzes</a>
                        </div>
                    </div>
                    <div className="flex items-center space-x-1">
                        <a href="#" className="py-5 px-3">Help</a>
                    </div>
                </div>
            </div>
      </nav>
      <Routes>
          <Route path="/" element={<Home content={homeContent}/>} />
          <Route path="/markdown" element={<MarkdownViewer content={homeContent} />} />
      </Routes>
      <ToastContainer position="bottom-right" />
      </Router>
    </>
  )
}

export default App
