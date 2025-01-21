import React from "react";
import Image from "next/image";
import Link from "next/link";


const page = () => {
  return (
    <div className="flex flex-col items-center py-10">
      <Image className="pb-5" src={"/NikeLogo.png"} width={60} height={10} alt="Logo" />
      <h2 className="uppercase w-50 text-center justify-center font-bold text-2xl pb-5"> YOUR ACCOUNT <br />FOR EVERYTHING <br />NIKE </h2>
      <form action="" className="flex flex-col w-96">
        <input className="w-96 border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray" type="text" placeholder="Email Address" />
        <input className="w-96 border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray" type="text" placeholder="Password" />
        <div className="flex justify-between items-center py-5">
          <div>
            <input type="checkbox" id="remember" />
            <label className="ml-2 pl-2 cursor-pointer text-gray-400 " htmlFor="remember"> Keep me signed in</label>
          </div>
          <div>
            <span>
              <a href="#" className="text-[#BCBCBC]">Forgotten your password?</a>
            </span>
          </div>
        </div>
        <p className="text-text-secondary-gray text-gray-400 text-center pb-6">By logging in, you agree to Nike's <Link className="underline" href="#">Privacy Policy</Link> and <Link className="underline" href="#">Terms of Use</Link>.</p>
        <button className='w-[380px] h-[40px] bg-black text-white p-[5px]'>SIGN IN</button>
        <p className="text-center"> <span className="">Not a Member? </span><span className="underline font-bold">Join Us.</span></p>
      </form>
    </div>
  );
};

export default page;