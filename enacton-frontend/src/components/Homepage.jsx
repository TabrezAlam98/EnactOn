import React from "react";
import { AiOutlineShoppingCart,AiOutlineBars } from "react-icons/ai";
import { TfiWallet } from "react-icons/tfi";
import { LuLayoutGrid } from "react-icons/lu";
import { TbShirtSport } from "react-icons/tb";
import { GiRunningShoe,GiForkKnifeSpoon } from "react-icons/gi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaAngleLeft,FaAngleRight } from "react-icons/fa";
import Tabs from "./Tabs";
import List from "./List";




const Homepage = () => {
  return (
    //main div
    <div className="flex w-screen h-screen bg-[#F2F7FB]">
      {/* left div */}
      <div className="w-[25%] h-screen bg-[#FFFFFF]">
        <img
          className="absolute left-[4%] top-[87px] w-[250px] h-[37.23px]"
          src="https://www.enacton.com/wp-content/uploads/2023/05/Enacton-logo.png"
        />

        {/* Menu */}
        <div className="relative border-solid border-2 border-red-500 w-[40%] top-[277px] m-auto">
          <div className="flex justify-between ml-[20px] mr-[20px] mb-3">
            <AiOutlineShoppingCart className="font-bold text-2xl mt-1" />
            <p className="text-xl">Shop</p>
          </div>
          <div className="flex justify-between ml-[20px] mr-[20px] mb-3">
            <TfiWallet className="font-bold text-2xl mt-1" />
            <p className="text-xl">Wallet</p>
          </div>
          <div className="flex justify-between ml-[20px] mr-[20px] mb-3">
            <LuLayoutGrid className="font-bold text-2xl mt-1" />
            <p className="text-xl">More</p>
          </div>
        </div>
      </div>

      {/* right div */}
      <div className="w-[75%] h-[3000px] bg-red-100">
        <div className="w-[100%] h-[250px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "></div>

        <div className="relative w-[80%] h-[220px] bg-[#F2F7FB] m-auto top-[-50px] ">
          <div className="absolute right-0  w-[55%] h-[100%]">
            <img
              className="w-[100%] h-[100%] "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqb_dwf5K8R88PrLEJNAYvCixAFNI1WbLWQ&usqp=CAU"
            />
          </div>
          <div className="absolute left-[40%] top-[30%] rounded-full  w-[92px] h-[92px] bg-[#f5f7f8]">
            <img
              className="w-[50%] h-[50%] m-auto mt-4"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png"
            />
          </div>
          <p className="font-bold pt-8 pl-8 text-xl decoration-blue-500">
            12% cashback
          </p>
          <p className="w-[24%] text-[16px] leading-5 pt-2 pl-8">
            Shop for the latest shoes for all your sports fun.
          </p>
          <button className="mt-8 ml-8 p-3 bg-blue-400 rounded-full">
            SHOP NOW
          </button>
        </div>

        {/* categories section */}
        <div className="flex flex-row justify-between gap-3 w-[80%] h-[50px] m-auto">
          <div className="w-[100%] rounded-lg bg-gradient-to-r from-[#00ffff] to-blue-300">
            <TbShirtSport className="text-xl ml-[35px] mt-1 text-teal-50" />
            <p className="text-m text-center text-teal-50">travel</p>
          </div>
          <div className="w-[100%] rounded-lg bg-gradient-to-r from-[#7f0783] to-[#d559d9]">
            <GiRunningShoe className="text-xl ml-[35px] mt-1 text-teal-50" />
            <p className="text-m text-center text-teal-50">alcohol</p>
          </div>
          <div className="w-[100%] rounded-lg bg-gradient-to-r from-[#7f0783] to-[#ea7267]">
            <HiOutlineShoppingBag className="text-xl ml-[35px] mt-1 text-teal-50" />
            <p className="text-m text-center text-teal-50">markets</p>
          </div>
          <div className="w-[100%] rounded-lg bg-gradient-to-r from-[#e54514] to-[#ef978f]">
            <GiForkKnifeSpoon className="text-xl ml-[35px] mt-1 text-teal-50" />
            <p className="text-m text-center text-teal-50">fasion</p>
          </div>
          <div className="w-[100%] rounded-lg bg-gradient-to-r from-[#c15b3c] to-[#cc5531]">
            <TbShirtSport className="text-xl ml-[35px] mt-1 text-teal-50" />
            <p className="text-m text-center text-teal-50">technology</p>
          </div>
          <div className="w-[100%] rounded-lg bg-gradient-to-r from-[#00ffff] to-blue-300">
            <GiRunningShoe className="text-xl ml-[35px] mt-1 text-teal-50" />
            <p className="text-m text-center text-teal-50">food</p>
          </div>
          <div className="w-[100%] rounded-lg bg-gradient-to-r from-[#7f0783] to-[#d559d9]">
            <HiOutlineShoppingBag className="text-xl ml-[35px] mt-1 text-teal-50" />
            <p className="text-m text-center text-teal-50">fitness</p>
          </div>
          <div className="w-[100%] rounded-lg bg-gradient-to-r from-[#7f0783] to-[#ea7267]">
            <GiForkKnifeSpoon className="text-xl ml-[35px] mt-1 text-teal-50" />
            <p className="text-m text-center text-teal-50">baby</p>
          </div>
          <div className="w-[100%] rounded-lg bg-teal-50 ">
            <AiOutlineBars className="text-xl ml-[35px] mt-1 text-gray-300" />
            <p className="text-m text-center text-gray-300">categoreis</p>
          </div>
        </div>

        {/*feature section */}
        <div className="flex w-[95%] h-[203px] m-auto mt-11">
          <FaAngleLeft className="absolute mt-[135px] text-3xl ml-[10px]  text-gray-400" />
          <div className="flex gap-4 w-[85%] h-[200px] m-auto mt-11">
            <div className="w-[100%] h-[100%]">
              {/* image box */}
              <div className="w-[100%] h-[50%] ">
                <img className="w-[100%] h-[100%] rounded-t-3xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWTTtGJ038MXheNSYSfRC-7YC6M_TskSL0Vw&usqp=CAU"/>
                <p className="relative mt-[-70px] text-center text-teal-50 text-bold text-4xl">adidas</p>
              </div>
              {/* description box */}
              <div className="w-[100%] h-[50%] bg-teal-50 rounded-b-3xl">
                <div className="flex justify-evenly pt-5">
                  <p className="text-gray-400">Up to</p>
                  <p className="text-teal-400">8%</p>
                  <p className="text-gray-400">cashback!</p>
                </div>
                <p className="text-gray-400 ml-3">was 4%</p>
              </div>
            </div>
            <div className="w-[100%] h-[100%]">
              {/* image box */}
              <div className="w-[100%] h-[50%] ">
                <img className="w-[100%] h-[100%] rounded-t-3xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStyEgCrDmIH_-LRlqNdU50gDjBW_dxg8b8GQ&usqp=CAU"/>
                <p className="relative mt-[-70px] text-center text-teal-50 text-bold text-4xl">Bonds</p>
              </div>
              {/* description box */}
              <div className="w-[100%] h-[50%] bg-teal-50 rounded-b-3xl">
                <div className="flex justify-evenly pt-5">
                  <p className="text-gray-400">Up to</p>
                  <p className="text-teal-400">8%</p>
                  <p className="text-gray-400">cashback!</p>
                </div>
                <p className="text-gray-400 ml-3">was 4%</p>
              </div>
            </div>
            <div className="w-[100%] h-[100%]">
              {/* image box */}
              <div className="w-[100%] h-[50%] ">
                <img className="w-[100%] h-[100%] rounded-t-3xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-GsfMGHZWbUR0NzAMchmd-gprL9Rea1HEJQ&usqp=CAU"/>
                <p className="relative mt-[-70px] text-center text-teal-50 text-bold text-3xl">GROUPON</p>
              </div>
              {/* description box */}
              <div className="w-[100%] h-[50%] bg-teal-50 rounded-b-3xl">
                <div className="flex justify-evenly pt-5">
                  <p className="text-gray-400">Up to</p>
                  <p className="text-teal-400">8%</p>
                  <p className="text-gray-400">cashback!</p>
                </div>
                <p className="text-gray-400 ml-3">was 4%</p>
              </div>
            </div>
            <div className="w-[100%] h-[100%]">
              {/* image box */}
              <div className="w-[100%] h-[50%] ">
                <img className="w-[100%] h-[100%] rounded-t-3xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBXYcMPdKbV71R-zTfdhQF2r_d5tJ_Qat6rw&usqp=CAU"/>
                <p className="relative mt-[-70px] text-center text-teal-50 text-bold text-3xl">amazon</p>
              </div>
              {/* description box */}
              <div className="w-[100%] h-[50%] bg-teal-50 rounded-b-3xl">
                <div className="flex justify-evenly pt-5">
                  <p className="text-gray-400">Up to</p>
                  <p className="text-teal-400">8%</p>
                  <p className="text-gray-400">cashback!</p>
                </div>
                <p className="text-gray-400 ml-3">was 4%</p>
              </div>
            </div>
            <div className="w-[100%] h-[100%]">
              {/* image box */}
              <div className="w-[100%] h-[50%] ">
                <img className="w-[100%] h-[100%] rounded-t-3xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNSLB7CmAqVGRr3VVcc7vQFPFBK-49-2y-gA&usqp=CAU"/>
                <p className="relative mt-[-70px] text-center text-teal-50 text-bold text-3xl">DELL</p>
              </div>
              {/* description box */}
              <div className="w-[100%] h-[50%] bg-teal-50 rounded-b-3xl">
                <div className="flex justify-evenly pt-5">
                  <p className="text-gray-400">Up to</p>
                  <p className="text-teal-400">8%</p>
                  <p className="text-gray-400">cashback!</p>
                </div>
                <p className="text-gray-400 ml-3">was 4%</p>
              </div>
            </div>
          </div>
          <FaAngleRight className="absolute right-8 mt-[135px] text-3xl ml-[10px]  text-gray-400"/>
        </div>


        {/* tabs */}
        <div className="flex gap-11 w-[85%] h-[400px] m-auto mt-[100px]">
          <div className="w-[50%] h-[100%]  bg-orange-200">
            <Tabs/>
          </div>
          <div className="w-[50%] h-[100%]  bg-red-400">
            <List/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
