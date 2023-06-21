import './App.css'
import Icon1 from './assets/images/Icon1';
import Icon2 from './assets/images/Icon2';
import Icon3 from './assets/images/Icon3';
import Icon4 from './assets/images/Icon4';
import Logo from './assets/images/logo';
import Menu from './assets/images/menu';

function App() {


  return (
    <div className="App">
      <div className="logo-container">
        <div className="logos">
          <img
            src={Logo}
            alt="ironhack-logo"
            className="ironhack-logo"
          />
          <img src={Menu} alt="menu-logo" className="menu-logo" />
        </div>
        <div className="p-container">
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn how to use the most popular frontend library,and
            become a super Ninja developer.
          </p>
          <button> Awsome!</button>
        </div>
      </div>
      <div className="images-container">
        <img src={Icon1} alt="icon-1" />
        <img src={Icon2} alt="icon-2" />
        <img src={Icon3} alt="icon-3" />
        <img src={Icon4} alt="icon-4" />
      </div>
      <div class="text-container">
        <div class="row">
          <h2>Declarative</h2>
          <h4>React makes it painless to create interactive UIs.</h4>
        </div>
        <div class="row">
          <h2>Components</h2>
          <h4>Build encapsulated components that manage their state.</h4>
        </div>
        <div class="row">
          <h2>Single-Way</h2>
          <h4>A set of immutable values are passed to the component's.</h4>
        </div>
        <div class="row">
          <h2>JSX</h2>
          <h4>Statically-typed designed to run on modern browsers.</h4>
        </div>
      </div>
    </div>
  );
}

export default App
