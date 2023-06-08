import './App.css'
import icone1 from './assets/images/icone1'    
import icone2 from './assets/images/icone2'       
import icone3 from './assets/images/icone3'      
import icone4 from './assets/images/icone4'  
import logo from './assets/images/logo'  
import menu from './assets/images/menu' 
       



function App() {


  return (
    <div className="App">
<nav><img src={logo} alt="logo" /><img src={menu} alt="menu" /></nav>
<h1>Say hello to ReactJS</h1>
<h4>Say you will learn </h4>
    </div>
  );
}

export default App
