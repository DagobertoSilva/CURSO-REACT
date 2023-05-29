import './App.css';

function App() {
 const name = 'Dagoberto'

 const newname = name.toLocaleUpperCase()

 function sum(a,b){
     return a+b
 }

 const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
     <h1>Alterando JSX</h1>
     <p>olá {newname}</p>
     <p>Soma:{sum(2,9)}</p>
     <img src={url} alt="Minha imagem"/>
    </div>
  );
}

export default App;
