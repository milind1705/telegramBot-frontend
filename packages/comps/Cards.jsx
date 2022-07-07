import React, {useEffect, useState} from "react";
import Image from "next/image";
import Button from "./Button";
const items = [
      {
        name: 'Burger',
        price: 150,
        image:
          '/Images/burger.jpeg',
      },
      {
        name: 'Hotdog',
        price: 100,
        image:
          '/Images/hot_dog.png',
      },
      {
        name: 'Fries',
        price: 60,
        image:
          '/Images/fries.png',
      },
      {
        name: 'kebab',
        price: 250,
        image:
          '/Images/Kebab.png',
      },
      {
        name: 'Pizza',
        price: 350,
        image:
          '/Images/pizza.png',
      },
      {
        name: 'Donuts',
        price: 50,
        image:
          '/Images/donuts.png',
      },
      {
        name: 'Popcorn',
        price: 120,
        image:
          '/Images/popcorn.png',
      },
      {
        name: 'coca',
        price: 60,
        image:
          '/Images/coca.png',
      },
      {
        name: 'Icecream',
        price: 90,
        image:
          '/Images/icecream.png',
      },
    ]
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
      {/* <div className="text-3xl bg-orange">main</div> */}
      <div className="max-w-5xl m-auto mx-5 min-w-5xl">
        <div className="grid grid-cols-3 gap-2">
          {items.map((item) =>{
            return(
              <div key={item.type} className="w-32 px-2 ">
            {showAddButton ? null : <div 
           className="w-6 h-6 mt-2 ml-20 -mb-4 text-center text-white rounded-full bg-orange">{noOfItems}</div>}
          
            <Image
              src={item.image}
              alt="product Image"
              width={80}
              height={80}
            />
            <p className="mb-1 text-base ">
              {item.name}.<span className="font-bold" >₹{noOfItems === 0 ? item.price : noOfItems * item.price}</span>{" "}
            </p>
            <div>
              {showAddButton ? <button className="px-7 py-1.5 text-lg font-base text-white rounded-xl bg-orange" onClick={clickAddButton}>ADD</button> : <Button noOfItems ={noOfItems} setNoOfItems = {setNoOfItems}/>  } 
            </div>
          </div>
            )
          })}
          
        </div>
        <div className="py-2 pt-8">
        <button type="button" className=" w-full max-w-3xl focus:outline-none text-white bg-green  focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">VIEW ORDER</button>
        </div>
      </div>{" "}
    </>
  );
}


{/* <div>
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
          </div> */}