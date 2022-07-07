import React, {useState} from "react";
import Image from "next/image";
import Button from "./Button";

export default function Cards() {
  const [showAddButton, setShowAddButton]= useState(true)
  return (
    <>
   
      <div className="text-3xl bg-orange">main</div>
      <div className="max-w-5xl m-auto mx-5 min-w-5xl">
        <div className="grid grid-cols-3 gap-2">
          <div className=" w-32 px-2">
          <div className="bg-orange h-6 w-6 rounded-full text-white text-center ml-24 -mb-4 mt-2">1</div>
            <Image
              src="/Images/burger.png"
              alt="product Image"
              width={80}
              height={80}
            />
            <p className="text-base mb-1 ">
              Burger . <span className="font-bold">$4.99</span>{" "}
            </p>
            <div>
             <button className="px-7 py-1.5 text-lg font-base text-white rounded-xl bg-orange">ADD</button>
            <Button/></div>
          </div>
          <div>
          <div className="bg-orange h-6 w-6 rounded-full text-white text-center ml-24 -mb-4 mt-2">1</div>
            <Image
              src="/Images/fries.png"
              alt="product Image"
              width={80}
              height={80}
            />
            <p className="text-base ">
              Fries . <span className="font-bold" >$4.99</span>{" "}
            </p>
            <button className="px-8 py-1.5 text-lg font-semibold text-white rounded-xl bg-orange">ADD</button>
          </div>
          <div>
            <Image
              src="/Images/hot_dog.png"
              alt="product Image"
              width={100}
              height={120}
            />
            <p className="text-base ">
              Hotdog . <span className="font-bold">$4.99</span>{" "}
            </p>
            <button className="px-8 py-2 text-xl font-bold text-white rounded-xl bg-orange">ADD</button>
          </div>
          <div>
            <Image
              src="/Images/Kebab.png"
              alt="product Image"
              width={100}
              height={120}
            />
            <p className="text-lg ">
              Kebab . <span className="font-bold">$4.99</span>{" "}
            </p>
            <button className="px-8 py-2 text-xl font-bold text-white rounded-xl bg-orange">ADD</button>
          </div>
          <div>
            <Image
              src="/Images/pizza.png"
              alt="product Image"
              width={100}
              height={120}
            />
            <p className="text-lg ">
              Pizza . <span className="font-bold">$4.99</span>{" "}
            </p>
            <button className="px-8 py-2 text-xl font-bold text-white rounded-xl bg-orange">ADD</button>
          </div>
          <div>
            <Image
              src="/Images/donuts.png"
              alt="product Image"
              width={100}
              height={120}
            />
            <p className="text-lg ">
              Donuts . <span className="font-bold">$4.99</span>{" "}
            </p>
            <button className="px-8 py-2 text-xl font-bold text-white rounded-xl bg-orange">ADD</button>
          </div>
          <div>
            <Image
              src="/Images/popcorn.png"
              alt="product Image"
              width={100}
              height={120}
            />
            <p className="text-base ">
              Popcorn . <span className="font-bold">$4.99</span>{" "}
            </p>
            <button className="px-8 py-2 text-lg font-bold text-white rounded-xl bg-orange">ADD</button>
          </div>
          <div>
            <Image
              src="/Images/coca.png"
              alt="product Image"
              width={100}
              height={120}
            />
            <p className="text-base ">
              Coke . <span className="font-bold">$4.99</span>{" "}
            </p>
            <button className="px-8 py-2 text-lg font-bold text-white rounded-xl bg-orange">ADD</button>
          </div>
          <div>
            <Image
              src="/Images/icecream.png"
              alt="product Image"
              width={100}
              height={120}
            />
            <p className="text-base ">
              Icecream . <span className="font-bold">$4.99</span>{" "}
            </p>
            <button className="px-8 py-2 text-lg font-bold text-white rounded-xl bg-orange">ADD</button>
          </div>
          
         
        </div>
      </div>{" "}
    </>
  );
}
