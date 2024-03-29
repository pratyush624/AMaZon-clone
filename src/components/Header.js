
import Image from "next/image";
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";

import { signIn, signOut, useSession } from "next-auth/client"
import {useRouter} from "next/router"
import {useSelector} from 'react-redux';
import { selectItems } from "../slices/basketSlice";

const Header = () => {

    // use Session hook
    const [session] = useSession()

    // use Router hook
    const router = useRouter()

    // to grab something from redux store using selector
    const items = useSelector(selectItems)


    return (
        <header className="sticky top-0 z-50">
            {/* Top nav */}
            <div className="bg-amazon_blue flex items-center flex-grow p-1 py-2">
                <div className="flex mt-2 items-center flex-grow sm:flex-grow-0">
                    <Image
                        onClick={() => router.push('/')}
                        src="https://links.papareact.com/f90"
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </div>
                {/* searchbar */}
                <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                    <input
                        className="p-2 h-full w-5 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
                        type="text"
                    />
                    <SearchIcon className="h-12 p-4" />
                </div>
                
                {/* right-side icons */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div onClick={!session ? signIn : signOut} className="cursor-pointer link">
                        <p className="hover:underline">
                            {session ? `Hello ${session.user.name}` : 'Sign In'}
                        </p>
                        <p className="font-extrabold md:text-sm">{session ? "Sign Out" : "Accounts & lists"}</p>
                    </div>

                    <div onClick={() => session && router.push("/orders")} className="cursor-pointer link">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>

                    <div onClick={() => router.push("/checkout")} className="relative link flex items-center">
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
                            {/* for number of items in the basket */}
                            {items.length} 
                        </span>

                        <ShoppingCartIcon className="h-10" />
                        <p className="hidden md:inline font-extrabold md:text-sm mt-2">
                            Basket
                        </p>
                    </div>
                </div>
            </div>

            {/* bottom nav */}
            <div className="flex space-x-3 p-2 pl-6 items-center bg-amazon_blue-light text-white text-sm">
                <p className="flex link items-center">
                    <MenuIcon className="h-6"/>
                     All
                </p>
                <p className="link">Prime Video</p>
                <p className="link">Amazon Business</p>
                <p className="link">Todays's Deals</p>
                <p className="link hidden lg:inline-flex">Electronics</p>
                <p className="link hidden lg:inline-flex">Food & Grocery</p>
                <p className="link hidden lg:inline-flex">Prime</p>
                <p className="link hidden lg:inline-flex">Buy Again</p>
                <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
                <p className="link hidden lg:inline-flex">Health & Personal Care</p>
                
            </div>
        </header>
    );
};

export default Header;
