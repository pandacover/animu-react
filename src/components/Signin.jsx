import { Link, useHistory } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import '../css/Signup.css';

export const Signin = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch {
      setError('Failed to login');
    }
    setLoading(false);
  }

  return (
    <div className='form-container'>

      <div className="video-bg">
        <video width='100%' autoPlay loop>
          <source src='/obito-mask.mp4' type='video/mp4' />
        </video>
      </div>
      <div className="black-bg" />

      <form className='form' onSubmit={handleSubmit} >
        <div className="form-title">
          <span>ANIMU</span> <br />
          <span className='title-txt'>Signin to explore our Animu Community!</span> <br />
          {error && <span className='error'>{error}</span>}
        </div>
        <div className="email">
        <input type="email" name='email' placeholder='Email' className='form-item' ref={emailRef} />
        </div>
        <div className="password">
        <input type="password" name='password-1' placeholder='Password' className='form-item' ref={passwordRef} />
        </div>
        <div className='submit'>
          <button type="submit" className='form-item submit-btn' disabled={loading}><span>Signin</span></button>
        </div>
        <div className="terms">
          <span style={{display: 'block', fontSize: '15px'}}>Need an account? <Link to='/signup' className='alt-link'>Signup</Link> to our Animu community!</span> <br />
          <span>By signing up, you agree to our Terms, Data Policy and Cookies Policy.</span>
        </div>
      </form>
    </div>
  )
}
