import React from 'react';
import image from '../../images/image-qr-code.png';

function Card() {
  return (
    <div className="md:w-[290px] md:h-[450px] h-[497px] w-[320px] bg-white rounded-[18px] flex  items-center flex-col text-center">
      <div>
        <img className="md:w-[260px] md:h-[261px] w-[290px] h-[290px] mt-[15px]  mx-[15px] rounded-[7px]" src={image} alt="QR Scan" />
      </div>
      <p className="mt-[21px] md:text-[20px] font-[Outfit] font-bold md:leading-[25px] text-[22px] leading-[28px]">Improve your front-end <br /> skills by building projects </p>
      <p className="mt-[15px] text-[15px] font-[Outfit] font-normal leading-[17px] md:tracking-[-0.033em] tracking-[0.002em]">
        Scan the QR code to visit Frontend
        <br />
        Mentor and take your coding skills to
        <br />
        the next level
      </p>
    </div>
  );
}

export default Card;
