import '../css/Signup.css';

export const Signup = () => {
  return (
    <div className='form-container'>

      <div className="video-bg">
        <video width='100%' autoPlay loop>
          <source src='/obito-mask.mp4' type='video/mp4' />
        </video>
      </div>
      <div className="black-bg" />

      <form action="" className='form' >
        <div className="form-title">
          <span>ANIMU</span> <br />
          <span className='title-txt'>Signup to explore our Animu Community!</span>
        </div>
        <div className="username">
          <input type="text" name='username' placeholder='Username' className='form-item' />
        </div>
        <div className="email">
        <input type="email" name='email' placeholder='Email' className='form-item' />
        </div>
        <div className="password">
        <input type="password" name='password-1' placeholder='Password' className='form-item' />
        </div>
        <div className="password">
        <input type="password" name='password-2' placeholder='Confirm Password' className='form-item' />
        </div>
        <div className='submit'>
          <button type="submit" className='form-item submit-btn'><span>Signup</span></button>
        </div>
        <div className="terms">
          <span>By signing up, you agree to our Terms , Data Policy and Cookies Policy .</span>
        </div>
      </form>
    </div>
  )
}
