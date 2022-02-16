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
import { AddIcon, AttachmentIcon, CheckIcon } from '@chakra-ui/icons'
import React from "react";

export default function EditSiteModal({ isOpen, onClose, }: { isOpen: boolean; onClose: () => void }) {

  return (
    <Modal isOpen={isOpen} size="md" onClose={onClose}>
      <ModalOverlay />
      <ModalContent pt={12} pb={16} pl={4} pr={4}>
        <ModalHeader>Add New Site</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack alignItems={'flex-start'}>
            <FormControl>
              <FormLabel>Site Name</FormLabel>
              <Input p={6} placeholder='Your site name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Site Description </FormLabel>
              <Input p={6} placeholder='Your site description' />
            </FormControl>

            <HStack pt={4}>
              <Text >Upload your site logo</Text>
            </HStack>

            <Box backgroundColor="#F9F9F9" p={2} width="100%">
              <HStack justifyContent="space-around">
                <HStack>
                  <AttachmentIcon color="#F6B319" />
                  <Text>Required_File.png</Text>
                </HStack>
                <CheckIcon color="green" />
              </HStack>
            </Box>
          </VStack>

        </ModalBody>

        <ModalFooter mt={8}>
          <HStack justifyContent="space-between" width="100%">
            <Button onClick={onClose}
              bg="transparent"
              color="#1818183D"
              border="1px"
              borderRadius="base"
              borderColor="#1818183D">Cancel</Button>
            <Button bgColor="#F6B319" color="white" >Save Changes</Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
