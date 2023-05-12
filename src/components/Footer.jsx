import React from 'react'
import { Box, VStack, Text, Stack, Circle, HStack, Button, Heading, List, ListItem } from '@chakra-ui/react'

import { NavLink } from 'react-router-dom'

function Footer() {
    const HoverBox = {
        color: "grey",
        w: "max-content",
        transition: "all 0.2s ease-in-out",
        "_hover": {
            color: "#fff",
            borderBottom: "1px solid #f9d542"
        }
    }
    return (
        <Box as='Footer'
            w="100%"
            bg="black"
            color="#fff"
            px={["1em", "3em", "10em"]}
            py={["5em"]}


        >
            <Stack w="100%"
                flexDirection={["column", "row", "row"]}
                gap="4rem"
            >
                <VStack sx={{
                    w: "100%",
                    alignItems: "flex-start",
                    fontsize: "xl"


                }}

                >
                    <Text fontSize="md">
                        We create media
                        content for the
                        construction,
                        property and trades
                        industries, offering
                        videography, web and
                        design services across
                        the UK.
                    </Text>
                    <br />
                    <Text>
                        We pride ourselves on
                        our high standards,
                        from concept right
                        through to completion.
                    </Text>
                    <br />
                    <Text>
                        We are Spotlight Media.
                    </Text>

                </VStack >

                <Stack w="100%"
                    flexDirection={["column", "row", "row"]}
                    gap="2rem">
                    <VStack
                        alignItems="flex-start"
                    >
                        <Heading>Menu</Heading>
                        <Stack direction="column"
                            justifyContent="flex-start"
                        >

                            <Box sx={HoverBox}><NavLink to='/'>Home</NavLink></Box>
                            <Box sx={HoverBox}><NavLink to='/who'>Who We Are</NavLink></Box>
                            <Box sx={HoverBox}><NavLink to='/what'>What We Do</NavLink></Box>
                            <Box sx={HoverBox}><NavLink to='/client'>Clients</NavLink></Box>
                            <Box sx={HoverBox}><NavLink to='/blog'>Blog</NavLink></Box>
                            <Box sx={HoverBox}><NavLink to='/contact'>Contact</NavLink></Box>
                        </Stack>

                    </VStack>

                    <VStack

                        alignItems="flex-start"

                    >
                        <Heading >Contact</Heading>


                        <Text as="span">info@wearespotlight.co.in</Text>


                        <Text as="span">077177 131 511</Text>


                    </VStack>
                </Stack>
            </Stack>

        </Box>
    )
}

export default Footer
