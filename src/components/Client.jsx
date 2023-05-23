import React from 'react'
import { NavLink } from 'react-router-dom'
import { Box, Image, Heading, Text, VStack, Button, Stack, Spacer } from '@chakra-ui/react'
import logo1 from "../assets/logo1.png"
import logo2 from "../assets/logo2.png"
import logo3 from "../assets/logo3.png"
import logo4 from "../assets/logo4.png"
import logo5 from "../assets/logo5.png"


function Client() {
    const LogoSize = {
        w: {
            base: "5rem",
            md: "6rem",
            lg: "7rem"
        }
    }

    const LogoBox = {
        w: {
            base: "90%",
            md: "80%",
            lg: "max-content"
        },
        my: "5em",

        background: "lightgrey",
        px: "3em",
        py: "2em",

    }
    return (
        <Box

        >
            <VStack

                w="100%"
                px={["1em", "3em", "10em"]}
                py={["3em", "3em", "6em"]}

                textAlign="left">
                <VStack
                    alignItems="flex-start"
                    gap="0.2rem"
                >
                    <Heading fontSize={["2xl", "2xl", "3xl"]}

                    >
                        We work with some of the
                        UK’s biggest companies and
                        independent contractors.
                    </Heading>
                    <Text fontSize="md">
                        We have bases in Bristol,
                        Birmingham and Brighton, and
                        work across the UK with clients
                        both big and small.
                    </Text>
                    <Text fontSize="md">
                        If you’re interested in working
                        with us then please feel free to
                        give us a call today, or email us,
                        and we’ll get back to you to discuss your project.
                    </Text>
                    <Text fontSize="md" >
                        After your free consultation
                        with a member of our team, we’ll
                        put together a no-obligation quote
                        and take it from there!
                    </Text>

                </VStack>
                <Box sx={LogoBox}>
                    <Stack
                        gap="1.5rem"
                        alignItems="center"
                        justifyContent="center" flexDirection={["column", "row", "row"]}>

                        <Image sx={LogoSize} src={logo1} />
                        <Image sx={LogoSize} src={logo2} />
                        <Image sx={LogoSize} src={logo3} />
                        <Image sx={LogoSize} src={logo4} />
                        <Image sx={LogoSize} src={logo5} />


                    </Stack>
                </Box>
            </VStack>

            <Box
                w="100%"
                bg="black"
                color="#fff"
                px={["1em"]}
                py={["5em"]}
                textAlign="center"
            >
                <VStack spacing="2rem">
                    <Heading>
                        Let's work together
                    </Heading>
                    <Text fontSize="lg">
                        We're always interested
                        in working on new and
                        exciting projects. Get
                        in touch with our team
                        and let's discuss yours
                        today
                    </Text>
                    <Button sx={{
                        background: "#f9d542",
                        borderRadius: "2rem",
                        padding: "1.8em",
                        color: "black"

                    }}>
                        <Text fontSize="1.1rem">
                            <NavLink to="/contact">Contact Us</NavLink></Text>
                    </Button>

                </VStack>

            </Box>
        </Box>
    )
}

export default Client
