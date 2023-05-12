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
            borderBottom: "1px solid yellow"
        }
    }

    return (
        <Box bg="blackAlpha.800"
            color="#fff"
            p={[4]}
            position="relative"
        >
            <HStack justify="space-between">
                <Text fontSize={["1.1rem", "1.3rem", "1.5rem"]}
                >Rupesh Mahanta</Text>
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
                        <Box sx={HoverBox}><NavLink to='/blog'>Blog</NavLink></Box>
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
                    <Box sx={HoverBox}><NavLink to='/blog'>Blog</NavLink></Box>
                    <Box sx={HoverBox}><NavLink to='/contact'>Contact</NavLink></Box>

                </Box> : ''
            }

        </Box >
    )
}

export default Navbar
