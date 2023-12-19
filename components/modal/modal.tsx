import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";
interface PropsData {
    title: string;
}

export default function ModalPopUp(props: PropsData) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{props.title}</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Number"
                  placeholder="Enter Amount"
                  variant="bordered"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Okay
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
    </>
  );
}
