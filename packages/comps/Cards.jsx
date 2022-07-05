import React from "react";
import Image from "next/image";
export default function Cards() {
  return (
    <>
      <div className="text-3xl bg-orange">main</div>
      <div className="max-w-5xl min-w-full mx-3">
        <div className="grid grid-cols-3 gap-2">
          <div>
            <Image
              src="/Images/burger.png"
              alt="product Image"
              width={96}
              height={96}
            />
            <p className="text-base ">
              Burger . <span className="font-bold">₹4.99</span>{" "}
            </p>
            <button className="px-8 py-2 text-lg font-bold text-white rounded-xl bg-orange">ADD</button>
          </div>
          <div>
            <Image
              src="/Images/fries.png"
              alt="product Image"
              width={96}
              height={96}
            />
            <p className="text-base ">
              Fries . <span className="font-bold" >₹4.99</span>{" "}
            </p>
            <button className="px-8 py-2 text-lg font-bold text-white rounded-xl bg-orange">ADD</button>
          </div>
          <div>
            <Image
              src="/Images/hot_dog.png"
              alt="product Image"
              width={96}
              height={96}
            />
            <p className="text-base ">
              Hotdog . <span className="font-bold">₹4.99</span>{" "}
            </p>
            <button className="px-8 py-2 text-lg font-bold text-white rounded-xl bg-orange">ADD</button>
          </div>
          <div>
            <Image
              src="/Images/Kebab.png"
              alt="product Image"
              width={96}
              height={96}
            />
            <p className="text-base ">
              Kebab . <span className="font-bold">₹4.99</span>{" "}
            </p>
            <button className="px-8 py-2 text-lg font-bold text-white rounded-xl bg-orange">ADD</button>
          </div>
          <div>
            <Image
              src="/Images/pizza.png"
              alt="product Image"
              width={96}
              height={96}
            />
            <p className="text-base ">
              Pizza . <span className="font-bold">₹4.99</span>{" "}
            </p>
            <button className="px-8 py-2 text-lg font-bold text-white rounded-xl bg-orange">ADD</button>
          </div>
          <div>
            <Image
              src="/Images/donuts.png"
              alt="product Image"
              width={96}
              height={96}
            />
            <p className="text-base ">
              Donuts . <span className="font-bold">₹4.99</span>{" "}
            </p>
            <button className="px-8 py-2 text-lg font-bold text-white rounded-xl bg-orange">ADD</button>
          </div>
          <div>
            <Image
              src="/Images/popcorn.png"
              alt="product Image"
              width={96}
              height={96}
            />
            <p className="text-base ">
              Popcorn . <span className="font-bold">₹4.99</span>{" "}
            </p>
            <button className="px-8 py-2 text-lg font-bold text-white rounded-xl bg-orange">ADD</button>
          </div>
          <div>
            <Image
              src="/Images/coca.png"
              alt="product Image"
              width={96}
              height={96}
            />
            <p className="text-base ">
              Coke . <span className="font-bold">₹4.99</span>{" "}
            </p>
            <button className="px-8 py-2 text-lg font-bold text-white rounded-xl bg-orange">ADD</button>
          </div>
          <div>
            <Image
              src="/Images/icecream.png"
              alt="product Image"
              width={96}
              height={96}
            />
            <p className="text-base ">
              Icecream . <span className="font-bold">₹4.99</span>{" "}
            </p>
            <button className="px-8 py-2 text-lg font-bold text-white rounded-xl bg-orange">ADD</button>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
