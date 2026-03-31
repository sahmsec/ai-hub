import React from 'react';
import { RxCross2 } from 'react-icons/rx';
import { toast } from 'react-toastify';

const Cart = ({ carts, setCarts }) => {
    const totalValue = carts.reduce((sum, item) => sum + item.price, 0);
    const handlePayment = () => {
        setCarts([]);
        carts.length === 0 ? toast.error("Nothing to checkout!") : toast.success("Checkout success!")
    }
     
    const handleDelete = (item) => {
        const filteredItems = carts.filter(c => c.id !== item.id);
        setCarts(filteredItems);
        toast.error(item.title + " deleted!");
    }

    return (
        <div className='p-40'>
            <h1 className="text-4xl font-bold mb-10">Your cart</h1>

            {
                carts.length === 0 && <p className='text-center text-2xl font-semibold'>Cart is empty</p>
            }
            {carts.map(item =>

                <div className='flex items-center justify-between px-6 py-3 rounded-2xl bg-yellow-50 my-4 shadow-lg shadow-black-500/50' key={item.id}>
                    <div className='flex gap-6 items-center'>
                        <div className="">
                            <img className="h-20 w-20 object-contain" src={item.image} alt="" />
                        </div>
                        <div className="">
                            <h2 className="font-bold text-3xl">{item.title}</h2>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <h2 className="font-semibold text-2xl">${item.price}/month</h2>
                        <button onClick={() => handleDelete(item)} className='btn rounded-full p-3 btn-error'>
                            <RxCross2/>
                        </button>

                    </div>


                </div>

            )}

            <div className='flex justify-between items-center px-10 py-8 mt-10 bg-black text-white'>
                <h2 className='text-3xl font-bold'>Total</h2>
                <h2 className='text-3xl font-bold'>${totalValue}</h2>
            </div>


            <button className='btn w-full text-2xl font-bold text-white py-7 mt-10 bg-red-700 ' onClick={handlePayment}>
                Proceed To Checkout
            </button>


        </div>
    );
};

export default Cart;