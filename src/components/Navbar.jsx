import React, { useState } from 'react'
import { Box, HStack, Hide, Image, Show, Text, Stack } from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import { NavLink } from 'react-router-dom';



function Navbar() {
    const [show, setShow] = useState(false);
    const Handleclick = () => setShow(!show);
    const HoverBox = {
        color: "grey",
        w: "max-content",
        transition: "all 0.2s ease-in-out",
        margin: "1em",
        "_hover": {
            color: "#fff",
            borderBottom: "1px solid #f9d542"
        }
    }

    return (
        <Box bg="blackAlpha.900"
            color="#fff"
            p={[4]}
            position="relative"
            px={["1em", "3em", "10em"]}
        >
            <HStack justify="space-between">
                <Text fontSize={["1.4rem", "1.5rem", "1.8rem"]}
                    fontWeight="bold"
                    letterSpacing="2px"

                >AE<span style={{ color: "#f9d542" }} >G</span>IS</Text>
                <Hide above='md'>
                    {
                        show ? <CloseIcon onClick={Handleclick} /> : <HamburgerIcon onClick={Handleclick} />
                    }
                </Hide>

                <Show above='md'>
                    <Stack direction="row"
                        gap="2rem"
                        alignItems="center"
                    >

                        <Box sx={HoverBox}><NavLink to='/'>Home</NavLink></Box>
                        <Box sx={HoverBox}><NavLink to='/who'>Who We Are</NavLink></Box>
                        <Box sx={HoverBox}><NavLink to='/what'>What We Do</NavLink></Box>
                        <Box sx={HoverBox}><NavLink to='/client'>Clients</NavLink></Box>

                        <Box sx={HoverBox}><NavLink to='/contact'>Contact</NavLink></Box>
                    </Stack>

                </Show>

            </HStack>

            {
                show ? <Box onClick={Handleclick}>
                    <Box sx={HoverBox}><NavLink to='/'>Home</NavLink></Box>
                    <Box sx={HoverBox}><NavLink to='/who'>Who We Are</NavLink></Box>
                    <Box sx={HoverBox}><NavLink to='/what'>What We Do</NavLink></Box>
                    <Box sx={HoverBox}><NavLink to='/client'>Clients</NavLink></Box>

                    <Box sx={HoverBox}><NavLink to='/contact'>Contact</NavLink></Box>

                </Box> : ''
            }

        </Box >
    )
}

export default Navbar
