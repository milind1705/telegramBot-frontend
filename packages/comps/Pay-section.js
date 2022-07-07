/* This example requires Tailwind CSS v2.0+ */
const people = [
    {
      name: 'Burger',
      price: '₹150',
     
      type: 'Meat (TM)',
     
      image:
        '/Images/burger.jpeg',
    },
    {
        name: 'Fries',
        price: '₹100',
       
        type: 'Po-ta-toes',
       
        image:
          '/Images/fries.jpeg',
      },
      {
        name: 'Coke',
        price: '₹50',
       
        type: 'The liquid kind',
       
        image:
          '/Images/cock.webp',
      },
      {
        name: 'Donut',
        price: '₹80',
       
        type: 'Hole included',
       
        image:
          '/Images/donut.jpeg',
      },
    // More people...
  ]
  
  export default function Pay() {
    return (
        <>
     
      <div className=" max-w-2xl  ">
        
        <div className="mt-8 ">
          
            <div className="inline-block min-w-full pt-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full ">
                  <thead className="bg-gray-50 ">
                    <tr >
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left pt-8 text-sm font-semibold text-gray-900 sm:pl-6 uppercase">
                      Your Order
                      </th>
                      <th scope="col" className="px-8 py-3.5 text-right text-sm  pt-6 font-normal text-green">
                       Edit
                      </th>
                     
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-lightgray bg-white">
                  {people.map((food) => (
                    <tr key={food.type}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm ">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img className="h-10 w-10 rounded-full" src={food.image} alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="font-semibold">{food.name}</div>
                            <div className="text-gray">{food.type}</div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-8 py-4 text-sm text-gray-500  ">
                        <div className="text-gray-900 text-right">{food.price}</div>
                       
                      </td>
                     
                     
                     
                    </tr>
                  ))}
                </tbody>
                </table>
                <button
        type="button"
        className="inline-flex items-center w-full pl-40 py-4 absolute inset-x-0 bottom-0 text-sm leading-4 font-medium  text-white bg-green "
      >
        PAY ₹380
      </button>
              </div>
              
            </div>
           
        </div>
      </div>   </>
    )
  }
  