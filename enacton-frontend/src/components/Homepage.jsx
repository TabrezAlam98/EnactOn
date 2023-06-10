import React from "react";
import { AiOutlineShoppingCart,AiOutlineBars } from "react-icons/ai";
import { TfiWallet } from "react-icons/tfi";
import { LuLayoutGrid } from "react-icons/lu";
import { TbShirtSport } from "react-icons/tb";
import { GiRunningShoe,GiForkKnifeSpoon } from "react-icons/gi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaAngleLeft,FaAngleRight } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import { AiTwotoneFire,AiOutlineSearch } from "react-icons/ai";
import Tabs from "./Tabs";
import List from "./List";
import Swiper from "./Swiper";




const Homepage = () => {
  return (
    //main div
    <div className="flex w-full h-full bg-[#F2F7FB]">
      {/* left div */}
      <div className="w-[25%] h-screen bg-[#FFFFFF]">
        <img
          className="relative left-[8%] top-[87px] w-[80%] h-[37.23px]"
          src="https://www.enacton.com/wp-content/uploads/2023/05/Enacton-logo.png"
        />

        {/* Menu */}
        <div className="relative  w-[45%] top-[200px] m-auto">
          <div className="flex justify-between ml-[20px] mr-[20px] mb-3 text-teal-400">
            <AiOutlineShoppingCart className="font-bold text-2xl mt-1 mr-2" />
            <p className="text-xl">Shop</p>
          </div>
          <div className="flex justify-between ml-[20px] mr-[20px] mb-3 text-gray-300">
            <TfiWallet className="font-bold text-2xl mt-1 mr-2" />
            <p className="text-xl ">Wallet</p>
          </div>
          <div className="flex justify-between ml-[20px] mr-[20px] mb-3 text-gray-300">
            <LuLayoutGrid className="font-bold text-2xl mt-1 mr-2" />
            <p className="text-xl">More</p>
          </div>
        </div>
      </div>

      {/* right div */}
      <div className="w-[75%] h-full bg-gray-200">
        <div className="w-[100%] h-[250px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-b-[30%]">
          {/* searchbox and logo box */}
          <div className="relative flex justify-between top-20 w-[80%] h-8 m-auto ">
            <div className=" w-[30%] h-8  border-solid border-2 bg-gray-200 rounded-2xl">
              <div className="flex">
              <AiOutlineSearch className="font-bold text-2xl mt-1 ml-2   text-[#FFFFFF]"/>
              <input placeholder="Search online stores" className="bg-gray-200 w-[80%] "/>
            
              </div>
              
            </div>
            <AiTwotoneFire className="font-bold text-2xl   text-[#FFFFFF]" />
          </div>
        </div>

        <div className="relative w-[80%] h-[220px] bg-[#F2F7FB] m-auto top-[-80px] rounded-2xl">
          <div className="absolute right-0  w-[55%] h-[100%] ">
            <img
              className="w-[100%] h-[100%] rounded-2xl "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqb_dwf5K8R88PrLEJNAYvCixAFNI1WbLWQ&usqp=CAU"
            />
          </div>
          <div className="absolute left-[40%] top-[30%] rounded-full  w-[92px] h-[92px] bg-[#f5f7f8]">
            <img
              className="w-[50%] h-[50%] m-auto mt-4"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png"
            />
          </div>
          <p className="font-bold pt-8 pl-8 text-xl text-blue-400">
            12% cashback
          </p>
          <p className="w-[28%] text-[14px] leading-5 pt-2 pl-8 text-gray-400">
            Shop for the latest shoes for all your sports fun.
          </p>
          <button className="mt-8 ml-8 p-2 pl-5 pr-5 bg-blue-400 rounded-3xl  text-[12px] text-[#FFFFFF] ">
            SHOP NOW
          </button>
        </div>

        {/* categories section */}
        <div className="flex flex-row justify-between gap-3 w-[80%] h-[50px] mt-[-50px] m-auto">
          <div className="w-[100%] rounded-lg bg-gradient-to-r from-[#00ffff] to-blue-300">
            <TbShirtSport className="text-xl ml-[25px] mt-1 text-teal-50" />
            <p className="text-[12px] text-center text-teal-50">travel</p>
          </div>
          <div className="w-[100%] rounded-lg bg-gradient-to-r from-[#7f0783] to-[#d559d9]">
            <GiRunningShoe className="text-xl ml-[25px] mt-1 text-teal-50" />
            <p className="text-[12px] text-center text-teal-50">alcohol</p>
          </div>
          <div className="w-[100%] rounded-lg bg-gradient-to-r from-[#7f0783] to-[#ea7267]">
            <HiOutlineShoppingBag className="text-xl ml-[25px] mt-1 text-teal-50" />
            <p className="text-[12px] text-center text-teal-50">markets</p>
          </div>
          <div className="w-[100%] rounded-lg bg-gradient-to-r from-[#e54514] to-[#ef978f]">
            <GiForkKnifeSpoon className="text-xl ml-[25px] mt-1 text-teal-50" />
            <p className="text-[12px] text-center text-teal-50">fashion</p>
          </div>
          <div className="w-[100%] rounded-lg bg-gradient-to-r from-[#c15b3c] to-[#cc5531]">
            <TbShirtSport className="text-xl ml-[25px] mt-1 text-teal-50" />
            <p className="text-[12px] text-center text-teal-50">technology</p>
          </div>
          <div className="w-[100%] rounded-lg bg-gradient-to-r from-[#00ffff] to-blue-300">
            <GiRunningShoe className="text-xl ml-[25px] mt-1 text-teal-50" />
            <p className="text-[12px] text-center text-teal-50">food</p>
          </div>
          <div className="w-[100%] rounded-lg bg-gradient-to-r from-[#7f0783] to-[#d559d9]">
            <HiOutlineShoppingBag className="text-xl ml-[25px] mt-1 text-teal-50" />
            <p className="text-12[px] text-center text-teal-50">fitness</p>
          </div>
          <div className="w-[100%] rounded-lg bg-gradient-to-r from-[#7f0783] to-[#ea7267]">
            <GiForkKnifeSpoon className="text-xl ml-[25px] mt-1 text-teal-50" />
            <p className="text-[12px] text-center text-teal-50">baby</p>
          </div>
          <div className="w-[100%] rounded-lg bg-teal-50 ">
            <AiOutlineBars className="text-xl ml-[25px] mt-1 text-gray-300" />
            <p className="text-[12px] text-center text-gray-300">categoreis</p>
          </div>
        </div>

        {/*feature section */}
        <div className="w-[80%] m-auto mt-10">
        <Swiper/>
        </div>
      


        {/* tabs */}
        <div className="flex gap-11 w-[85%] h-[400px] m-auto mt-[100px]">
          <div className="w-[50%] h-full ">
            <Tabs/>
          </div>
          <div className="w-[50%] h-full">
            <List/>
          </div>
        </div>

        {/* offers section */}
        <div className="grid grid-cols-3 gap-3 w-[85%] pb-10 m-auto">
        <div className="flex w-full h-full m-auto rounded-3xl bg-[#FFFFFF]">
          <div className="w-[50%] h-full  rounded-3xl bg-[#7f7feb]">
            <p className="text-m pl-2 tracking-wide  pt-3 text-[14px] text-teal-50">Up to 20% cashback</p>
            <p className="pl-2 pt-2  pb-3 text-teal-50 text-[12px]">Ends in 3 days</p>
          </div>
          <div className="w-[50%] h-full  rounded-3xl">
          <button className="p-2 text-[10px] m-auto mt-5 ml-5 tracking-wide bg-blue-400 rounded-3xl text-teal-50">SHOP OFFER
          </button>
          <p className="flex justify-center text-center pt-3 text-[12px] text-blue-300">more< BsChevronDown className="mt-1 ml-1"/></p>
          </div>
        </div>
        <div className="flex w-full h-full m-auto rounded-3xl  bg-[#FFFFFF]">
          <div className="w-[50%] h-full  rounded-3xl bg-[#7f7feb]">
            <p className="text-m w-[100%] tracking-wide text-center pt-3 text-[14px] text-teal-50">Buy 2 get 1 free</p>
            <p className="pl-2 pt-2  pb-3 text-teal-50 text-[12px]">Ends in 3 days</p>
          </div>
          <div className="w-[50%] h-full  rounded-3xl">
          <button className="p-2 text-[10px] m-auto mt-5 ml-5 tracking-wide bg-blue-400 rounded-3xl text-teal-50">SHOP OFFER
          </button>
          <p className="flex justify-center text-center pt-3 text-[12px] text-blue-300">more< BsChevronDown className="mt-1 ml-1"/></p>
          </div>
        </div>
        <div className="flex w-full h-full m-auto rounded-3xl  bg-[#FFFFFF]">
          <div className="w-[50%] h-full  rounded-3xl bg-[#7f7feb]">
            <p className="text-m pl-2 tracking-wide pt-3 text-[14px] text-teal-50">Up to 20% cashback</p>
            <p className="pl-2 pt-2  pb-3 text-teal-50 text-[12px]">Ends in 3 days</p>
          </div>
          <div className="w-[50%] h-full  rounded-3xl">
          <button className="p-2 text-[10px] m-auto mt-5 ml-5 tracking-wide bg-blue-400 rounded-3xl text-teal-50">SHOP OFFER
          </button>
          <p className="flex justify-center text-center pt-3 text-[12px] text-blue-300">more< BsChevronDown className="mt-1 ml-1"/></p>
          </div>
        </div>
        <div className="flex w-full h-full m-auto rounded-3xl  bg-[#FFFFFF]">
          <div className="w-[50%] h-full  rounded-3xl bg-[#7f7feb]">
            <p className="text-m  tracking-wide pl-2 pt-3 text-[14px] text-teal-50">Spend $100 get 15% off</p>
            <p className="pl-2 pt-2  pb-3 text-teal-50 text-[12px]">Ends in 3 days</p>
          </div>
          <div className="w-[50%] h-full  rounded-3xl ">
          <button className="p-2 text-[10px] m-auto mt-5 ml-5 tracking-wide bg-blue-400 rounded-3xl text-teal-50">SHOP OFFER
          </button>
          <p className="flex justify-center text-center pt-3 text-[12px] text-blue-300">more< BsChevronDown className="mt-1 ml-1"/></p>
          </div>
        </div>
        <div className="flex w-full h-full m-auto rounded-3xl  bg-[#FFFFFF]">
          <div className="w-[50%] h-full  rounded-3xl bg-[#7f7feb]">
            <p className="text-m pl-2 tracking-wide  pt-3 text-[14px] text-teal-50">Fee shiping on all orders</p>
            <p className="pl-2 pt-2  pb-3 text-teal-50 text-[12px]">Ends in 3 days</p>
          </div>
          <div className="w-[50%] h-full  rounded-3xl">
          <button className="p-2 text-[10px] m-auto mt-5 ml-5 tracking-wide bg-blue-400 rounded-3xl text-teal-50">SHOP OFFER
          </button>
          <p className="flex justify-center text-center pt-3 text-[12px] text-blue-300">more< BsChevronDown className="mt-1 ml-1"/></p>
          </div>
        </div>
        <div className="flex w-full h-full m-auto rounded-3xl  bg-[#FFFFFF]">
          <div className="w-[50%] h-full  rounded-3xl bg-[#7f7feb]">
            <p className="text-m tracking-wide pl-2 pt-3 text-[14px] text-teal-50">Spend $100 get 15% off</p>
            <p className="pl-2 pt-2  pb-3 text-teal-50 text-[12px]">Ends in 3 days</p>
          </div>
          <div className="w-[50%] h-full  rounded-3xl">
          <button className="p-2 text-[10px] m-auto mt-5 ml-5 tracking-wide bg-blue-400 rounded-3xl text-teal-50">SHOP OFFER
          </button>
          <p className="flex justify-center text-center pt-3 text-[12px] text-blue-300">more< BsChevronDown className="mt-1 ml-1"/></p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
