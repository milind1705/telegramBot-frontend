import Head from "next/head";
import Image from "next/image";
import Cards from "../packages/comps/Cards";
import React from "react";
import styles from "../styles/Home.module.css";
import Pay from "../packages/comps/Pay-section";
import Card from "../packages/comps/Card";
const { getData } = require("../packages/comps/db");

const foods = getData();

export default function Home() {
  return (
    <>
      <div className="max-w-5xl m-auto mx-5 min-w-5xl">
        <div className="grid grid-cols-3 gap-2">
          {foods.map((food) => {
            return <Card food={food} key={food.id} />;
          })}
        </div>
        <div className="py-2 pt-8">
          <button
            type="button"
            className=" w-full max-w-3xl focus:outline-none text-white bg-green  focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          >
            VIEW ORDER
          </button>
        </div>
      </div>
    </>
  );
}
