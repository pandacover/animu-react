import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Signup } from './components/Signup';
import { Signin } from './components/Signin';
import { Home } from './components/Home';
import { useState, useEffect } from 'react';
import { Loading } from './components/Loading';

export const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])

  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Switch>
          <Route path='/' exact component= { Home } />
          {
            loading ? 
            <Loading 
            loading={loading} 
            color={'#00ffff'}
            size={30}
            /> :
            <Route path='/signup' component= { Signup } />
          }

          {
            loading ? 
            <Loading 
            loading={loading} 
            color={'#00ffff'}
            size={30} /> :
            <Route path='/signin' component= { Signin } /> 
          }
        </Switch>
      </AuthProvider>
    </Router>
  )
} 