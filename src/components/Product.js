import React, { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter"

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({ id, title, price, description, category, image }) => {
    // for rating
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );

    // product is prime or not
    const [hasPrime] = useState(Math.random() < 0.5);

    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-10">
            {/* category */}
            <p className="absolute top-2 right-2 text-xs italic text-gray-500">{category}</p>

            {/* image */}
            <Image src={image} height={200} width={200} objectFit="contain" />

            {/* title */}
            <h2 className="my-3">{title}</h2>

            {/* rating */}
            <div className="flex">
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <StarIcon className="h-5 text-yellow-500" />
                    ))}
            </div>
            
            {/* description */}
            <p className="text-sm my-2 line-clamp-2">{description}</p>

            {/* currency */}
            <div className="mb-5">
                <Currency quantity={price} currency="INR"/ >
            </div>

            {/* hasPrime */}
            {hasPrime && (
                <div className="flex items-center space-x-2 -mt-5">
                    <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
                    <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                </div>
            )}

            {/* add to basket button */}
            <button className="mt-auto button">Add to Basket</button>

        </div>
    );
};

export default Product;
