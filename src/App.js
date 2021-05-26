import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import Portfolio from './pages/portfolio';

export default function App() {
  return (
    <Router>
      <div className='app site'>
        <Navbar />
        <div className='site-content'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/portfolio' component={Portfolio} />
          </Switch>
        </div>
        <footer className='container mx-auto px-8 py-4'>
          <small>&copy; Portfolio made with {'<3'}</small>
        </footer>
      </div>
    </Router>
  );
}
