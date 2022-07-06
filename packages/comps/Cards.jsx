import React from "react";
import Image from "next/image";
export default function Cards() {
  return (
    <>
      <div className="text-3xl">Food Menu</div>
      <div className="max-w-5xl min-w-full mx-3">
        <div className="grid grid-cols-3 gap-4 mr-2">
          <div className="py-2">
            <Image
              src="/Images/burger.png"
              alt="product Image"
              width={96}
              height={96}
            />
            <p className="pb-2 text-sm">
              Burger. <span className="font-bold">₹4.99</span>{" "}
            </p>
            <button className="px-8 py-1 text-lg font-bold text-white rounded-xl bg-orange">ADD</button>
          </div>
          <div className="py-2">
            <Image
              src="/Images/fries.png"
              alt="product Image"
              width={96}
              height={96}
            />
            <p className="pb-2 text-sm">
              Fries . <span className="font-bold" >₹4.99</span>{" "}
            </p>
            <button className="px-8 py-1 text-lg font-bold text-white rounded-xl bg-orange">ADD</button>
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
            <button className="px-8 py-1 text-lg font-bold text-white rounded-xl bg-orange">ADD</button>
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
            <button className="px-8 py-1 text-lg font-bold text-white rounded-xl bg-orange">ADD</button>
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
            <button className="px-8 py-1 text-lg font-bold text-white rounded-xl bg-orange">ADD</button>
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
            <button className="px-8 py-1 text-lg font-bold text-white rounded-xl bg-orange">ADD</button>
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
            <button className="px-8 py-1 text-lg font-bold text-white rounded-xl bg-orange">ADD</button>
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
            <button className="px-8 py-1 text-lg font-bold text-white rounded-xl bg-orange">ADD</button>
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
            <button className="px-8 py-1 text-lg font-bold text-white rounded-xl bg-orange">ADD</button>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
