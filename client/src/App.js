import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import { Container } from 'semantic-ui-react';
import About from './pages/About';
import ComponentDemo from './pages/ComponentDemo';
import Footer from './components/Footer';
import Clock from './components/Clock';
import UseStateTutorial from './pages/UseStateTutorial';
import UseEffectTutorial from './pages/UseEffectTutorial';

function App() {
  return (
    <>
      <NavBar/>
      <Container>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/componentDemo' component={ComponentDemo} />
          <Route exact path='/clock' component={Clock} />
          <Route exact path='/use_state_tutorial' component={UseStateTutorial} />
          <Route exact path='/use_effect_tutorial' component={UseEffectTutorial} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
