import { useRef, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import '../css/Signup.css';

export const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signup } = useAuth();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordConfirmRef.current.value !== passwordRef.current.value) {
      return setError('Password do not match');
    }
    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push('/');

    } catch {
      setError('Failed to create and account');
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
          <span className='title-txt'>Signup to explore our Animu Community!</span> <br />
          {error && <span className='error'>{error}</span>}
        </div>
        <div className="username">
          <input type="text" name='username' placeholder='Username' className='form-item' />
        </div>
        <div className="email">
        <input type="email" name='email' placeholder='Email' className='form-item' ref={emailRef} />
        </div>
        <div className="password">
        <input type="password" name='password-1' placeholder='Password' className='form-item' ref={passwordRef} />
        </div>
        <div className="password">
        <input type="password" name='password-2' placeholder='Confirm Password' className='form-item' ref={passwordConfirmRef} />
        </div>
        <div className='submit'>
          <button type="submit" className='form-item submit-btn' disabled={loading}><span>Signup</span></button>
        </div>
        <div className="terms">
        <span style={{display: 'block', fontSize: '15px'}}>Already have an account? <Link to='/signin' className='alt-link'>Signin</Link>!</span> <br />
          <span>By signing up, you agree to our Terms, Data Policy and Cookies Policy.</span>
        </div>
      </form>
    </div>
  )
}
