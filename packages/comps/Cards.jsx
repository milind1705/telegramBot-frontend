import React, {useEffect, useState} from "react";
import Image from "next/image";
import Button from "./Button";

export default function Cards() {
  const [showAddButton, setShowAddButton]= useState(true)
  const [noOfItems, setNoOfItems] =useState(0)
  const clickAddButton = ()=>{
    setNoOfItems(1)
    console.log(noOfItems)
  }
  
  useEffect(()=>{
    if(noOfItems !== 0 ){
      setShowAddButton(false)
    }
    if(noOfItems === 0 ){
      setShowAddButton(true)
    }
  }, [noOfItems])

  return (
    <>
      <div className="text-3xl bg-orange">main</div>
      <div className="max-w-5xl m-auto mx-5 min-w-5xl">
        <div className="grid grid-cols-3 gap-2">
          <div className="w-32 px-2 ">
            {showAddButton ? null : <div 
           className="w-6 h-6 mt-2 ml-20 -mb-4 text-center text-white rounded-full bg-orange">{noOfItems}</div>}
          
            <Image
              src="/Images/burger.png"
              alt="product Image"
              width={80}
              height={80}
            />
            <p className="mb-1 text-base ">
              Burger . <span className="font-bold" >${noOfItems === 0 ? 5 : noOfItems * 5}</span>{" "}
            </p>
            <div>
              {showAddButton ? <button className="px-7 py-1.5 text-lg font-base text-white rounded-xl bg-orange" onClick={clickAddButton}>ADD</button> : <Button noOfItems ={noOfItems} setNoOfItems = {setNoOfItems}/>  } 
            </div>
          </div>
          <div>
          <div className="w-6 h-6 mt-2 ml-20 -mb-4 text-center text-white rounded-full bg-orange">1</div>
            <Image
              src="/Images/fries.png"
              alt="product Image"
              width={80}
              height={80}
            />
            <p className="pb-2 text-sm">
              Fries . <span className="font-bold" >₹4.99</span>{" "}
            </p>
            <button className="px-8 py-1.5 text-lg font-semibold text-white rounded-xl bg-orange">ADD</button>
          </div>
          <div className="py-2">
            <Image
              src="/Images/hot_dog.png"
              alt="product Image"
              width={96}
              height={96}
            />
            <p className="pb-2 text-sm">
              Hotdog. <span className="font-bold">₹4.99</span>{" "}
            </p>
            <button className="px-8 py-1 text-lg font-bold text-white rounded-xl bg-yellow">ADD</button>
          </div>
          <div className="py-2">
            <Image
              src="/Images/Kebab.png"
              alt="product Image"
              width={96}
              height={96}
            />
            <p className="pb-2 text-sm">
              Kebab. <span className="font-bold">₹4.99</span>{" "}
            </p>
            <button className="px-8 py-1 text-lg font-bold text-white rounded-xl bg-yellow">ADD</button>
          </div>
          <div className="py-2">
            <Image
              src="/Images/pizza.png"
              alt="product Image"
              width={96}
              height={96}
            />
            <p className="pb-2 text-sm">
              Pizza. <span className="font-bold">₹4.99</span>{" "}
            </p>
            <button className="px-8 py-1 text-lg font-bold text-white rounded-xl bg-yellow">ADD</button>
          </div>
          <div className="py-2">
            <Image
              src="/Images/donuts.png"
              alt="product Image"
              width={96}
              height={96}
            />
            <p className="pb-2 text-sm">
              Donuts. <span className="font-bold">₹4.99</span>{" "}
            </p>
            <button className="px-8 py-1 text-lg font-bold text-white rounded-xl bg-yellow">ADD</button>
          </div>
          <div className="py-2">
            <Image
              src="/Images/popcorn.png"
              alt="product Image"
              width={96}
              height={96}
            />
            <p className="pb-2 text-sm">
              Popcorn . <span className="font-bold">₹4.99</span>{" "}
            </p>
            <button className="px-8 py-1 text-lg font-bold text-white rounded-xl bg-yellow">ADD</button>
          </div>
          <div className="py-2">
            <Image
              src="/Images/coca.png"
              alt="product Image"
              width={96}
              height={96}
            />
            <p className="pb-2 text-sm">
              Coke. <span className="font-bold">₹4.99</span>{" "}
            </p>
            <button className="px-8 py-1 text-lg font-bold text-white rounded-xl bg-yellow">ADD</button>
          </div>
          <div className="py-2">
            <Image
              src="/Images/icecream.png"
              alt="product Image"
              width={96}
              height={96}
            />
            <p className="pb-2 text-sm">
              Icecream. <span className="font-bold">₹4.99</span>{" "}
            </p>
            <button className="px-8 py-1 text-lg font-bold text-white rounded-xl bg-yellow">ADD</button>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
