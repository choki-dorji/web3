import Wallets from "@/components/Card"
import { ethers } from 'ethers'; 
import { FaBitcoin } from "react-icons/fa";
const Wallet = () => {
    const address = '0x3141e54a040d3302385701bfdfdc5964cb82f987bf7c9347de95f9f3ed614c74'
    return (
        <>
        <div className="flex flex-col gap-3 md:flex-row">
            <div className="w-[100%] md:w-[65%]">
                <div className="flex flex-col gap-3 md:flex-row">
                    <Wallets 
                        color="custom-purple" 
                        name="Choki Dorji" 
                        amount={1200} 
                        image="https://i.pravatar.cc/150?u=a04258114e29026708c" 
                        email="ceedeejee@gmnmail.com"
                 
                        />
                    <Wallets name="sdv" amount={1200} image="cxv ,xcbnlx;kl x" />
                </div>
                <div className="flex mt-3 flex-2 gap-3">
                    <Wallets name="sd" amount={1200} image="nzvncxkbjnxclkbjnflkb" width={66.7}  />
                </div>
            </div>   
            <div className="flex-1 w-[100%] md:w-[30%]">
                    <Wallets color="custom-pink" amount={1200} />
            </div>
        </div>
        </>
    )
}

export default Wallet;