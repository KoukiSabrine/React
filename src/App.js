import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';


function App() { 
  const getData=(data)=>{
    let x=9.88
    console.log("aaaa",data,~~x)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          Edit <code>src/App.js</code> and save to reload.
          <Header handleClick={getData}/>
        </div>
       
      </header>
    </div>
  );
}

export default App;
