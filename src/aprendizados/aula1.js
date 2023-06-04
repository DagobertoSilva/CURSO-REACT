import './App.css';

function App() {
 const name = 'Dagoberto';  // criando uma constante

 const newname = name.toLocaleUpperCase(); //atrabuindo a variável nome para a variável newname e a colocando em LETRAS MAIÚSCULA 

 function sum(a,b){ // função soma(parâmetros a e b) , me retorna a+b
     return a+b; 
 }

 const url = 'https://via.placeholder.com/150';

  return (
    <div className="App">
     <h1>Alterando JSX</h1>
     <p>olá {newname}</p> /*chamando e mostrando a variável newname*/
     <p>Soma:{sum(2,9)}</p> 
     <img src={url} alt="Minha imagem"/> 
    </div>
  );
}

export default App;
