import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  HStack,
  Box,
  useToast,
  IconButton,
  Textarea,
  Heading,
  Text
} from "@chakra-ui/react";
import { AddIcon, AttachmentIcon, CheckIcon, DeleteIcon } from '@chakra-ui/icons'
import React from "react";

export default function DeleteSiteModal({ isOpen, onClose, }: { isOpen: boolean; onClose: () => void }) {

  return (
    <Modal isOpen={isOpen} size="xl" onClose={onClose}>
      <ModalOverlay />
      <ModalContent pt={4} pb={4} pl={4} pr={4} >
        <ModalHeader>Delete Site</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack alignItems={'flex-start'}>
            <HStack>
              <Box bgColor="#ED1C2552" borderRadius="50%" p={3}>
                <DeleteIcon fontSize="40px" color="red" />
              </Box>
              <Text >Are you sure you want to delete this site? Once deleted, you cannot undo this action.</Text>
            </HStack>
          </VStack>

        </ModalBody>

        <ModalFooter mt={8}>
          <HStack justifyContent="space-between">
            <Button onClick={onClose}
              bg="transparent"
              color="#1818183D"
              border="1px"
              borderRadius="base"
              borderColor="#1818183D">Cancel</Button>
            <Button bgColor="red" color="white" >Delete User</Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
