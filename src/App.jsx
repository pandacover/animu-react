import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Signup } from './components/Signup';

export const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Signup path='/signup' component= { Signup } />
        </Switch>
      </Router>
    </>
  )
}
