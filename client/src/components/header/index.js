import React, { useEffect }  from 'react';
import { useRootStore } from '../../store/rootStore';
import "./assets/index.css"
import { observer } from "mobx-react";
import { toJS } from 'mobx';



const Header = observer((props) => {
  const rootStore = useRootStore();
  const data = toJS(rootStore);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
      rootStore.setUserInfo(userInfo);
    }
  }, []);

  const renderUserAction = () => {
    var HTMLUserAction = ''
    if (!data.userInfo) {
        HTMLUserAction = 
        <div className='flex gap-10 justify-end items-center h-full'>
            <div  className='text-[20px] flex items-center font-san underline-offset-1 h-full'>
               <p className='mb-[4px]'> You are currently not logged in. Joy our journey now!</p>
            </div>
            <div className='flex gap-3.5 h-full justify-end items-center'>
                <a href="/login">
                    <p className='user-action-link font-mono text-[#2f6b9f] font-bold text-[21px] transition-all duration-[250ms] ease-out hover:pb-2'>
                        Login
                    </p>
                </a>
                <p className='mb-[4px] text-[18px] text-[grey]'>
                    or
                </p>
                <a href="/register">
                    <p
                        className="user-action-link font-mono text-[#2f6b9f] font-bold text-[21px] transition-all duration-[250ms] ease-out hover:pb-2"
                        type="button"
                    >
                        Register
                    </p>
                </a>
            </div>
        </div>
    }
    else {
        HTMLUserAction = 
        <div className='flex gap-12 justify-end items-center h-full'>
            <div  className='text-[20px] flex items-center font-san underline-offset-1 h-full'>
               <p className='mb-[4px]'> Welcome! {data.userInfo.username}</p>
            </div>
            <div className='flex gap-10 h-full justify-end items-center'>
                {
                    !props.isSharing &&
                    <a href="/sharing">
                        <p style={{wordSpacing: '-8px'}} className='user-action-link font-mono text-[#2f6b9f] font-bold text-[21px] transition-all duration-[250ms] ease-out hover:pb-2'>
                            Share your moment
                        </p>
                    </a>
                }
                <a href="/login">
                    <p
                        className="user-action-link font-mono text-[#2f6b9f] font-bold text-[21px] transition-all duration-[250ms] ease-out hover:pb-2"
                        type="button"
                    >
                        Logout
                    </p>
                </a>
            </div>
        </div>
    }
    return HTMLUserAction;
  }

  return (
    <div className='w-screen fixed z-50 h-[100px] bg-[#BC9476] top-0 shadow-header'>
        <div className='w-full flex justify-between py-3 px-[40px] h-full items-center'>
            <div>
                <a href="/">
                    <div className=" animate-charcter-logo flex flex-col">
                    <p className="self-start text-[20px]">Funny</p>
                    <p className="self-start pl-[50px] text-[20px]">movies</p>
                    </div>
                </a>
            </div>
            <div className='h-full'>
               {renderUserAction()}
            </div>
        </div>
    </div>
  );
});

export default Header;