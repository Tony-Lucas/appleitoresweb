import './css/style.css'
import Login from './components/Login/Login'
import PaginaInicial from './components/PaginaInicial/PaginaInicial';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/paginainicial" component={PaginaInicial}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
