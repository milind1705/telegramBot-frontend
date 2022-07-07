import React, {useEffect, useState} from "react";
import Image from "next/image";
import Button from "./Button";
const items = [
      {
        id:1,
        name: 'Burger',
        price: 150,
        quantity:0,
        image:
          '/Images/burger.jpeg',

        },
      {
        id:2,
        name: 'Hotdog',
        price: 100,
        quantity:0,
        image:
          '/Images/hot_dog.png',

        },
      {
        id:3,
        name: 'Fries',
        price: 60,
        quantity:0,
        image:
          '/Images/fries.png',
  
        },
      {
        id:4,
        name: 'kebab',
        price: 250,
        quantity:0,
        image:
          '/Images/kebab.png',
  
        },
      {
        id:5,
        name: 'Pizza',
        price: 350,
        quantity:0,
        image:
          '/Images/pizza.png',
  
        },
      {
        id:6,
        name: 'Donuts',
        price: 50,
        quantity:0,
        image:
          '/Images/donuts.png',
 
        },
      {
        id:7,
        name: 'Popcorn',
        price: 120,
        quantity:0,
        image:
          '/Images/popcorn.png',

        },
      {
        id:8,
        name: 'coca',
        price: 60,
        quantity:0,
        image:
          '/Images/coca.png',
   
        },
      {
        id:9,
        name: 'Icecream',
        price: 90,
        quantity:0,
        image:
          '/Images/icecream.png',

      },
    ]
export default function Cards() {
  const [showAddButton, setShowAddButton]= useState(true)
  const [selectedItem, setSelectedItem] = useState({})
  const [noOfItems, setNoOfItems] =useState(0)

  // useEffect(()=>{
    
  // },[])
  const clickAddButton = (id)=>{
    setSelectedItem(items[id-1])
    // setNoOfItems(1)
  }
  console.log(selectedItem)
  
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
              <div key={item.id} className="w-32 px-2 ">
            {showAddButton ? null : <div 
           className="w-6 h-6 mt-2 ml-20 -mb-4 text-center text-white rounded-full bg-orange">{item.quantity}</div>}
          
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
              {showAddButton ? <button className="px-7 py-1.5 text-lg font-base text-white rounded-xl bg-orange" 
              onClick={()=>{
                setSelectedItem(items[id])
              }}>ADD</button> : <Button noOfItems ={noOfItems} setNoOfItems = {setNoOfItems}/>  } 
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
