"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Image,
  Button,
  Tooltip,
  useDisclosure,
  Checkbox,
} from "@nextui-org/react";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FaBitcoin } from "react-icons/fa";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, Link} from "@nextui-org/react";
import ModalPopUp from "./modal/modal";



interface PropsData {
  name?: string;
  amount: string | number;
  color?: string;
  image?: string;
  email?: string;
  width?: number;
}

export default function Wallets(props: PropsData) {
  const color = props.color ? `bg-${props.color}` : "bg-default-100";

  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <><Card
      className={`w-[100%] md:w-[${props.width}% || 33.33%] h-[100%] ${color}`}
    >
      {props.email || props.name || props.image ? (
        <CardHeader className="flex gap-3">
          {props.image ? (
            <div className="flex justify-between w-full">
              <div className="flex gap-3">
                <Image
                  alt="Profileimg"
                  height={40}
                  radius="sm"
                  src={props?.image}
                  width={40} />
                <div className="flex flex-col">
                  <p className="text-md text-default-800">{props.name}</p>
                  <p className="text-small text-default-800">{props?.email}</p>
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <p>{props?.amount}</p>
                <FaBitcoin />
              </div>
            </div>
          ) : (
            <div>Rate</div>
          )}
        </CardHeader>
      ) : (
        <>
          <CardHeader className="flex gap-3">
            <div className="flex justify-between w-full">
              <div className="flex gap-3">
                <div className="flex flex-col">
                  <p className="text-md text-default-800">1253765765765</p>
                  <p className="text-small text-default-800">High</p>
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <div className="flex gap-2">
                  <Tooltip content="Add Funds" color="success">
                    <Button onPress={onOpen}>
                      <HiOutlineViewGridAdd />
                    </Button>
                  </Tooltip>
                  <Tooltip content="Transfer Funds" color="danger">
                    <Button>
                      <FaMoneyBillTransfer />
                    </Button>
                  </Tooltip>
                </div>
              </div>
            </div>
          </CardHeader>
          <Divider />
        </>
      )}
      <CardBody>
        {props.email || props.name || props.image ? (
          <div>
            <p className="text-4xl font-bold text-yellow-500">hello</p>
          </div>
        ) : (
          <div className="justify-center">
            <p className="text-default-100">Recent Transaction</p>
          </div>
        )}
      </CardBody>
      {/* <Divider/> */}
      {/* <CardFooter>
      <Link
        isExternal
        showAnchorIcon
        href="https://github.com/nextui-org/nextui"
      >
        Visit source code on GitHub.
      </Link>
    </CardFooter> */}
    </Card>
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="top-center"
    >
        <ModalPopUp title="Add Funds" />
      </Modal></>
  );
}
