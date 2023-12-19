import React from "react";
import { ethers } from "ethers";
import {Input} from "@nextui-org/react";
import TextInput from "@/components/input/input";
import contract from '@/utils/contract.json'
export default function Login() {
  const contractAddress = '0x7E11f07C93E57fF445D5CCB42376B93B28869dDA';
  const contractAbi = contract;
  const provider = new ethers.providers.JsonRpcProvider('https://rpc.testnet.fantom.network');
  const signer = 

  return (
    <div className="w-[60%] bg-white">
        <TextInput />
    </div>
  );
}
