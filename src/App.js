import logo from './logo.svg';
import './App.css';
import TicTacToe from './components/tic/tic';
import TodoApp from './components/todo/TodoApp';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/tictactoe" element={<TicTacToe/>} />

      <Route path="/todo" element={<TodoApp/>} />
      


    </Routes>
    </BrowserRouter>
  );
}

export default App;
