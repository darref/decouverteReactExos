import Counter from './Counter.tsx';
import './HelloWorld.css'; // Importez le fichier CSS global ici.
import HelloWorld from './HelloWorld.tsx';
import List from './List.tsx';
import NameForm from './NameForm.tsx';
import Todolist from './Todolist.tsx';

function App() {
  return (
    <div className="App red-text">
      {/* <HelloWorld /> */}
      {/* <Counter /> */}
      {/* <List /> */}
      {/* <NameForm /> */}
      <Todolist />
    </div>
  );
}

export default App;