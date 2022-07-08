export default function Pay({ cartItems, setShowCheckout }) {
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
  return (
    <>
      <div className="max-w-2xl ">
        <div className="mt-8 ">
          <div className="inline-block min-w-full pt-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full ">
                <thead className="bg-gray-50 ">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left pt-8 text-sm font-semibold text-gray-900 sm:pl-6 uppercase"
                    >
                      Your Order
                    </th>
                    <th
                      scope="col"
                      className="px-8 py-3.5 text-right text-sm  pt-6 " onClick={()=>setShowCheckout(false)}
                    >
                     <button
        type="button"
        className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-sm font-medium  shadow-sm text-green "
      >
         Edit
      </button>
                    </th>
                  </tr>
                </thead>
                {cartItems.length > 0 ? (
                  <tbody className="bg-white divide-y divide-lightgray">
                    {cartItems.map((item) => (
                      <tr key={item.type}>
                        <td className="py-4 pl-4 pr-3 text-sm whitespace-nowrap ">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-10 h-10 rounded-full"
                                src={item.image}
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="font-semibold">{item.name}</div>
                              <div className="text-gray">{item?.type}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-8 py-4 text-sm text-gray-500 whitespace-nowrap ">
                          <div className="text-right text-gray-900">
                            {item.price * item.quantity}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                ) : (
                  ""
                )}
              </table>
              <button
                type="button"
                className="absolute inset-x-0 bottom-0 inline-flex items-center w-full py-4 pl-40 text-sm font-medium leading-4 text-white bg-green "
              >
                PAY ₹ {totalPrice}
              </button>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
