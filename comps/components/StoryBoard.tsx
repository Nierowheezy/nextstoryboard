import React from 'react'
import Header from './Header'
import { Tabs, TabList, TabPanels, Tab, TabPanel, background } from '@chakra-ui/react'
import MySites from './MySitesTabs/MySites'
import MyUsers from './MySitesTabs/MyUsers'

const StoryBoard = () => {
    return (
        <>
            <Header />

            <Tabs>
                <TabList>
                    <Tab _selected={{ borderBottomColor: "#F6B319", }} background="none" ml={4}>My Sites</Tab>
                    <Tab _selected={{ borderBottomColor: "#F6B319" }} background="none">My Users</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <MySites />
                    </TabPanel>
                    <TabPanel>
                        <MyUsers />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}

export default StoryBoard