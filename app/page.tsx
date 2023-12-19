"use client"
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import abi from '@/abi.json'
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import {ethers} from "ethers";

export default function Home() {
	const contractAddress = '0xE3302a405369acbD3B85451A771fADe0b52FAc2E'; // Your contract's address
	// Replace with your Ethereum RPC URL
	const rpcUrl = 'https://rpc.testnet.fantom.network'; 
  
	const [contract, setContract] = useState<any>(null);
	const [account, setAccount] = useState<any>(null);
	const [value,setValue] = useState<any>();
	const [providers, setProvider] = useState<any>();
	useEffect(() => {
		// Create an Ethereum provider
		initializeContract();
	  }, [rpcUrl, contractAddress]);

	  const initializeContract = async () => {
		if (typeof window.ethereum !== 'undefined') {
			const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
			
			setProvider(provider)
			// Create a signer if you need to interact with the contract using the user's account
			// const signer = provider.getSigner();
		
			// Create a contract instance
			const metaProvider = new ethers.providers.Web3Provider(window.ethereum);
	    //    await provider.send('eth_requestAccounts', []);
		   const accounts = await metaProvider.listAccounts();
		   console.log('accounts', accounts)
			const signer = provider.getSigner(accounts[0]);
			const contractInstance = new ethers.Contract(contractAddress, abi, signer);
		
			// Set the contract instance in the state
			setContract(contractInstance);
		
			// Fetch the user's Ethereum account (if connected)
			// provider.listAccounts().then((accounts) => {
			//   if (accounts.length > 0) {
			// 	setAccount(accounts[0]);
			//   }
			// });
			}
	  }
	   const callContractFunction = async () => {
		try {
		if (contract) {
			// Example: Call the 'get' function on your smart contract
			const response = await contract.get();
			setAccount(response.toString());
			console.log('Function result:', response.toString());
		} else {
			console.log('Contract or account not initialized.');
		}
		} catch (error) {
		console.error('Error calling function:', error);
		}
  };
  const handleChange = (e: any) => {
	setValue(e.target.value);
}

async function addToBalance() {
	try {
	if(contract) {
		if (typeof (window as any).ethereum !== 'undefined') {
			
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const signer = provider.getSigner();
			const contractSigner = contract.connect(signer);
			const response = await contractSigner.add(12);
			// const provider = new ethers.BrowserProvider(window.ethereum)
			// const signer = await provider.getSigner();
			// // const tx = await signer.sendTransaction({
			// // 	to: "ethers.eth",
			// // 	value: parseEther("1.0")
			// //   });
			
			// // Often you may wish to wait until the transaction is mined
			// //  const receipt = await tx.wait();
			// const contractInstance = new ethers.Contract(contractAddress, abi, signer);
			// console.log('signer', signer, contractInstance);
			// // setContract(contractInstance);
			// const tx = await contractInstance.add(value);
			// await response.wait();
			console.log('Transaction successful');
		}
	} else {
		console.log("not working");
	}
	} catch (error) {
	  console.error('Error:', error);
	}
  }
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<Input value={value} onChange={(e) => handleChange(e)}/>
				<p>{account || 'no amount'}</p>
				<Button onClick={callContractFunction}>Get</Button>
				<Button onClick={addToBalance}>Add</Button>

			</div>
		</section>
	);
}
