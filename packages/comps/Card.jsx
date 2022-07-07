import React, {useEffect, useState} from "react";
import Image from "next/image";
import Button from "./Button";

export default function Cards({food}) {
    const [showAddButton, setShowAddButton]= useState(true)
  const [noOfItems, setNoOfItems] =useState(0)
  const { name, price, image} = food

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
      <div className="max-w-5xl m-auto mx-5 min-w-5xl">
        <div className="grid grid-cols-3 gap-2">
         
              <div  className="w-32 px-2 ">
            {showAddButton ? null : <div 
           className="w-6 h-6 mt-2 ml-20 -mb-4 text-center text-white rounded-full bg-orange">{noOfItems}</div>}
          
            <Image
              src={image}
              alt="product Image"
              width={80}
              height={80}
            />
            <p className="mb-1 text-base ">
              {name}.<span className="font-bold" >₹{noOfItems === 0 ? price : noOfItems * price}</span>{" "}
            </p>
            <div>
              {showAddButton ? <button className="px-7 py-1.5 text-lg font-base text-white rounded-xl bg-orange" 
             onClick={()=>setNoOfItems(1)}
             >ADD</button> : <Button noOfItems ={noOfItems} setNoOfItems = {setNoOfItems}/>  } 
            </div>
          </div>
            
          
        </div>
       
      </div>{" "}
    </>
  );
}
