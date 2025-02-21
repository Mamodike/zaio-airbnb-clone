import './App.css';
import SearchPage from './components/SearchPage';
import Home from './components/Home';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Modal from './components/Modal';
 
const  App = () => {
  return (
    <div className="App">
            <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Redirect to='/home' />
          </Route>
          <Route path='/home' >
            <Home />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
        </Switch>
        <Route path="/">
          <Modal/>
        </Route>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
