import logo from './logo.svg';
import './App.css';
import './tributeSite.css'
import './jTeams.css'
import LoginForm from './components/LoginForm'
import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'

import Characters from './components/characters';
import About from './components/about';
import Home from './components/home';
import PressRelease from './components/pressRelease'
import TributeSite from './components/tributeSite'
import Terzo_Millennio from './components/Terzo_Millennio';
import Legendary from './components/Legendary_Studios';
import SadePort from './components/Sade';
import v12 from './components/v12'
import fullList from './components/fullList'

import {BrowserRouter, BrowserRouter as Router,Route,Switch} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/about" component={About} />
        <Route  exact path="/home"  component={Home} />
        <Route exact path="/TributeSite" component={TributeSite} />
        <Route  exact path="/characters" component={Characters}  />
        <Route exact  path="/PressRelease"  component={PressRelease} />
        <Route exact path="/Millennio" component={Terzo_Millennio} />
        <Route exact path="/Legendary" component={Legendary} />
        <Route exact path="/Sade" component={SadePort} />
        <Route exact path="/v12" component={v12} />
        <Route exact path="/List" component={fullList} />
        <Route exact path="/JTeams" component={ <ChatEngine
      height="100vh"
      projectID="
      2adc5c7e-4885-4e00-b186-6765ffbb2668"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps} />}
  />} />
        <Home/>
      </Switch>  
  
    </div>
    </BrowserRouter>
  );
}

export default App;
