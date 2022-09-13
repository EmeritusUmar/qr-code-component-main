/*eslint-disable*/

import React from 'react';
import Card from '../Card/Card';

function Main() {
  return (
    <div>
      <div className='flex justify-center items-center h-[100vh]'>
        <div className='bg-[#D5E1EF] w-[1400px] md:h-[724px] h-full left-[70px] top-[166px] drop-shadow-lg'>
          <div className='flex justify-center h-full items-center'>
            <Card/>
          </div>
        </div>
      </div>

        <div className="md:block text-center  hidden mb-3">
      Challenge by <a className="underline font-bold" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a className="underline font-bold" href="https://umarmusa.netlify.app/" target="_blank" >Umar Musa</a>.
        </div>
    </div>
    

  );
}

export default Main;
