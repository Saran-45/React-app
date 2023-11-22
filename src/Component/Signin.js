import { useState } from 'react';
import '../Assests/Login.css';

const Signin = () => {
  const [visible, setv] = useState(true);

  const change = () => {
    setv(!visible);
  };

  return (
    <>
      <div className='gridmain'>
        <div className='logo'></div>
        <div className={visible ? 'div1' : 'hide'}>
          <div className='login'>
            <h1>&nbsp;Sign Up</h1>
            <input type='email' placeholder='Enter E-mail' className='input'></input>
            <input type='text' placeholder='UserName' className='input'></input>
            <input type='password' placeholder='Enter Password' className='input'></input>
            <h2 className='for'>
              <img src="https://i.pinimg.com/736x/39/21/6d/39216d73519bca962bd4a01f3e8f4a4b.jpg" alt="Avatar" className="avatar"></img>
              <img src="https://i.pinimg.com/564x/8d/f5/e7/8df5e76136dcba44841002494e01e050.jpg" alt="Avatar" className="avatar"></img>
              <img src="https://i.pinimg.com/564x/91/92/1c/91921cec4f8a8cbe3d09e596e0659d81.jpg" alt="Avatar" className="avatar"></img>
            </h2>
            <button className={`${
              visible ? 'switch-method' : 'some-other-class'
            }`} onClick={change}>
              Already have an account?
            </button>
            <button value='Login' className='button1'><b>Sign Up</b></button>
          </div>
        </div>
        <div className={visible ? 'hide' : 'div1'}>
          <div className='login'>
            <h1>&nbsp;Login</h1>
            <input type='email' placeholder='Enter E-mail' className='input'></input>
            <input type='password' placeholder='Enter Password' className='input'></input>
            <p className='for'>
              <p className={`${visible ? 'forget-method' : 'some-other-class'}`}>Forgot password?</p>
            </p>
            <h2 className='for'>
              <img src="https://i.pinimg.com/736x/39/21/6d/39216d73519bca962bd4a01f3e8f4a4b.jpg" alt="Avatar" className="avatar"></img>
              <img src="https://i.pinimg.com/564x/8d/f5/e7/8df5e76136dcba44841002494e01e050.jpg" alt="Avatar" className="avatar"></img>
              <img src="https://i.pinimg.com/564x/91/92/1c/91921cec4f8a8cbe3d09e596e0659d81.jpg" alt="Avatar" className="avatar"></img>
            </h2>
            <button className={`${
              visible ? 'switch-method' : 'some-other-class'
            }`} onClick={change}>
              Don't have an account?
            </button>
            <button value='Login' className='button1'><b>Login</b></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
