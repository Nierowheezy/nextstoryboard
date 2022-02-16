import React, { useState } from 'react'
import { data } from '../../../utils/Data/data'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    Checkbox,
    CheckboxGroup,
    Skeleton,
    Box,
    VStack,
    Button,
    HStack,
    useDisclosure


} from '@chakra-ui/react'
import EditSiteModal from '../Modal/EditSiteModal'
import DeleteSiteModal from '../Modal/DeleteSiteModal'

const MySites = () => {
    const { isOpen: isEditOpen, onOpen: onEditOpen, onClose: onEditClose } = useDisclosure()
    const { isOpen: isDeleteOpen, onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure()


    return (
        <>
            <Box bgColor="white" p={10}>
                <Box bgColor="white">
                    <EditSiteModal
                        isOpen={isEditOpen}
                        onClose={onEditClose}
                    />

                    <DeleteSiteModal
                        isOpen={isDeleteOpen}
                        onClose={onDeleteClose}
                    />

                    <Table variant='simple'>
                        <Thead>
                            <Tr bg="#F9F9F9" p="2" >
                                <Th></Th>
                                <Th textTransform={'capitalize'}>Site Name</Th>
                                <Th textTransform={'capitalize'}>Admin</Th>
                                <Th textTransform={'capitalize'}>Creation date & Time</Th>
                                <Th textTransform={'capitalize'}>Actions</Th>
                            </Tr>
                        </Thead>

                        <Tbody>

                            {data &&
                                data.map((sites, index: number) => {

                                    return (
                                        <Tr key={index} cursor={"pointer"}>
                                            <Td><Checkbox></Checkbox></Td>
                                            <Td>{sites.site_name}</Td>
                                            <Td>{sites.admin}</Td>
                                            <Td>{sites.creation_date}</Td>
                                            <Td>
                                                <HStack>
                                                    <Button
                                                        type="button"
                                                        bg="transparent"
                                                        border="1px"
                                                        borderRadius="base"
                                                        borderColor="#1818183D"
                                                        width="inherit"
                                                        onClick={onDeleteOpen}
                                                        mr="8px"
                                                    >
                                                        Delete
                                                    </Button>
                                                    <Button
                                                        type="button"
                                                        bg="transparent"
                                                        border="1px"
                                                        borderRadius="base"
                                                        borderColor="#F6B319"
                                                        width="inherit"
                                                        onClick={onEditOpen}
                                                    >
                                                        Edit
                                                    </Button>
                                                </HStack>
                                            </Td>
                                        </Tr>
                                    );
                                })}
                        </Tbody>
                    </Table>
                </Box>
            </Box>
        </>
    )
}

export default MySites