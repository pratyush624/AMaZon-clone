import React, { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter"
import {useDispatch} from 'react-redux';
import {addToBasket} from "../slices/basketSlice"
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer} from "react-toastify";


const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({ id, title, price, description, category, image }) => {
    // for rating
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );

    // product is prime or not
    const [hasPrime] = useState(Math.random() < 0.5);
    
    // Add item to Basket function using redux
    const dispatch = useDispatch()
    const addItemToBasket = () => {
        const product = {
            id, 
            title, 
            price, 
            description, 
            category, 
            image,
            rating,
            hasPrime,
        }

        // sending the product as an action to the REDUX store... the basket slice
        toast("Added to basket", {
            type: "success",
          });
        dispatch(addToBasket(product))
    }


    return (
        
        <div className="relative flex flex-col m-5 bg-white z-30 p-10">
            <ToastContainer/>
            {/* category */}
            <p className="absolute top-2 right-2 text-xs italic text-gray-500">{category}</p>

            {/* image */}
            <Image src={image} height={200} width={200} objectFit="contain"/>

            {/* title */}
            <h2 className="my-3 font-bold">{title}</h2>

            {/* rating */}
            <div className="flex">
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <StarIcon className="h-5 text-yellow-500" />
                    ))}
            </div>
            
            {/* description */}
            <p className="font-semibold text-sm my-2 line-clamp-2">{description}</p>

            {/* currency */}
            <div className="mb-5 font-semibold">
                <Currency quantity={price} currency="GBP"/ >
            </div>

            {/* hasPrime */}
            {hasPrime && (
                <div className="flex items-center space-x-2 -mt-5">
                    <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
                    <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                </div>
            )}

            {/* add to basket button */}
            <button onClick={addItemToBasket} className="mt-auto button font-extrabold">Add to Basket</button>

        </div>
    );
};

export default Product;
