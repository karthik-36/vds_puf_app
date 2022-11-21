import logo from './logo.svg';
import MainLayout from './MainLayout';
import './App.css';


let title = {
  height: "5vh",
  fontWeight: "bold"
}

function App() {
  return (
    <div className="App">
      <div style = {title}>heading</div>
      <MainLayout/>
    </div>
  );
}

export default App;
