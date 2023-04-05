import React from 'react';
import Header from "../../components/header/index";
import Videos from "../../components/videos/index";



const HomePage = () => {

  return (
    <div className='w-full h-full'>
      <Header></Header>
      <div className='mt-[100px] px-[48px] pt-[48px] bg-[#9DB6CC]'>
        <Videos></Videos>
      </div>
    </div>
  );
};

export default HomePage;