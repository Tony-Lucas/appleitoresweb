import './css/style.css'
import Login from './components/Login/Login'
import PaginaInicial from './components/PaginaInicial/PaginaInicial';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Cadastro from './components/Cadastro/Cadastro'
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/paginainicial" component={PaginaInicial}/>
          <Route path="/cadastro" component={Cadastro}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
