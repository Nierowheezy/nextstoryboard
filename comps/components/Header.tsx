import React from 'react'
import {
    Box,
    Flex,
    Text,
    Stack,
    Button,
    HStack,
    useDisclosure,
    InputGroup, Input, InputLeftElement, Heading
} from "@chakra-ui/react";
import AddSiteModal from './Modal/AddSiteModal';
import { AddIcon, SearchIcon } from "@chakra-ui/icons";


const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <AddSiteModal
                isOpen={isOpen}
                onClose={onClose}
            />
            <Box px={4}>
                <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                    <Box style={{ cursor: 'pointer' }}>
                        <Heading as="h6" size="lg">My Sites</Heading>
                    </Box>


                    <Flex alignItems={"center"}>
                        <HStack direction={"row"} spacing={7}>
                            <InputGroup w={280} bgColor="gray.100" borderColor="gray.700" borderRadius="base" my={3} width='100%'>
                                <InputLeftElement
                                    pointerEvents="none"
                                    children={<SearchIcon color="gray.800" />}
                                />
                                <Input
                                    placeholder="search for a site..."
                                    variant="flushed"
                                    name="search for a site..."
                                    borderBottom="none"
                                    _placeholder={{ color: 'gray.800' }}
                                />
                            </InputGroup>
                            <Button bgColor="#F6B319" color="white" leftIcon={<AddIcon style={{ color: 'white' }} />} onClick={onOpen}  >Add New Site</Button>
                        </HStack>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}

export default Header