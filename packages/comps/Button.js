/* This example requires Tailwind CSS v2.0+ */
import { MinusIcon, PlusIcon } from '@heroicons/react/solid'
import {useState} from "react"

export default function Button({noOfItems, setNoOfItems}) {
  // const [noOfItems, setNoOfItems] =useState(0)
  const decreamentItem = () =>{
    if(noOfItems > 0 ){
      setNoOfItems(noOfItems - 1)
    }
    else{
      setNoOfItems(0)
    }
    
  }
  const increamentItem = () =>{
    setNoOfItems(noOfItems + 1)
  }
  console.log(noOfItems)
  return (
    <span className="relative z-0 inline-flex gap-2 shadow-sm">
      <button
        type="button"
        className="relative inline-flex items-center px-2.5 py-1.5 rounded-md border border-gray-300 bg-red text-sm font-medium text-white hover:bg-gray-50 "
          onClick={decreamentItem}
     >
        <span className="sr-only">Previous</span>
        <MinusIcon className="w-5 h-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        className="-ml-px relative inline-flex items-center px-2.5 py-1.5 rounded-md border border-gray-300 bg-orange text-sm font-medium text-white hover:bg-gray-50 "
        onClick={increamentItem}
        >
        <span className="sr-only">Next</span>
        <PlusIcon className="w-5 h-5" aria-hidden="true" />
      </button>
    </span>
  )
}
