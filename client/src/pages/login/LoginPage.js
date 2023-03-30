import React, { useState, useContext,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./assets/login.css";
import { RootStoreContext } from '../../store/rootStore';



const LoginPage = () => {
  const { setUserInfo, logOut } = useContext(RootStoreContext);


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [LoginMessage, setLoginMessage] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    // Function to run on mount
    logOut()
  }, []); // Empty dependency array

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${process.env.REACT_APP_API_URL}/funny-api/login`, {
        email,
        password,
      })
      .then((response) => {
        console.log(response.data.user);
        setUserInfo(response.data.user);
        setTimeout(() => {
          navigate("/");
        }, 1000);
        setErrorMessage(null)
        setLoginMessage('Login Successfully! Hoping in Homepage...')
        localStorage.setItem("token", response.data.token);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.response.data);
      });
  };

  return (
    <div className="flex w-screen h-screen">
      <div className="w-[60%] px-[30px] h-full flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="w-[80%]  min-[1024px]:max-w-[700px]"
        >
          <div className="login-form flex flex-col gap-[36px] justify-center items-center">
            <div className="register-login-boxtitle mb-4">
              <h2>Login box</h2>
            </div>
            <div className="input-effect-div input-effect">
              <input
                type="email"
                name="email"
                className="effect-20 placeholder:text-transparent"
                value={email}
                onChange={handleEmailChange}
                required
                placeholder="email"
              />
              <label>Your email</label>
              <span className="focus-border">
                <i></i>
              </span>
            </div>
            <div className="input-effect-div input-effect">
              <input
                type="password"
                name="password"
                className="effect-20 placeholder:text-transparent"
                value={password}
                onChange={handlePasswordChange}
                required
                placeholder="csac"
              />
              <label>Password</label>
              <span className="focus-border">
                <i></i>
              </span>
            </div>
            <div className="flex justify-center items-center flex-col gap-3">
              {errorMessage && <p className='text-[red]'>{errorMessage}</p>}
              {LoginMessage && <p className='text-[green]'>{LoginMessage}</p>}
              <button
                className="bg-[blue] hover:bg-[darkblue] rounded-[8px] outline-none border-none p-[12px] text-white w-full max-w-[200px]"
                type="submit"
              >
                Login
              </button>
              <p>
                Still not have an account?{" "}
                <a href="/register" className="underline text-[blue]">
                  Start your journey here!
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
      <div className="w-[40%] bg-sky-500 h-full p-5 grid justify-center items-center">
        <div className="relative">
          <div className="container fixed drop-animation top-[calc(30px+1.25rem)] right-0 bg-white shadow-xl w-[200px] mr-[calc(30px+1.25rem)] h-[200px] flex justify-center items-center rounded-[50%]">
            <div className="row">
              <div className="col-md-12 text-center">
                <h3 className=" animate-charcter-logo flex flex-col">
                  <p className="self-start">Funny</p>
                  <p className="self-start pl-[50px]">movies</p>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className='self-start'>
          <div>
            <p className='mb-[20px] text-[2.5rem] text-shadow font-bold text-white'>
              We'll give you:
            </p>
          </div>
          <div className='login-text-animation'>
            <span></span>
            <div className="message text-center">
              <div className="word1 text-[#F2921D]">joyful</div>
              <div className="word2 text-[#ed3957]">knowledge</div>
              <div className="word3 text-[#ed9fb1]">love</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
