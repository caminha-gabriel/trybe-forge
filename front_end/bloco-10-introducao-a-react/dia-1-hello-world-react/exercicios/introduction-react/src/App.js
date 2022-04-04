import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const toDoList = ['ler', 'jogar', 'desenhar', 'programar', 'estudar','develop'];

function App() {
  return (
    toDoList.map((das) => Task(das))
  );
}

export default App;
