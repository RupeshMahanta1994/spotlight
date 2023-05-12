
import { Stack, Heading, Box, VStack, Text, Image, Circle, Button, SimpleGrid } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import video from "../assets/video.png"
import data from "./data"
import { useState } from 'react'


const TextSixe = {
    fontSize: {
        base: "1rem",
        md: "1rem",
        lg: "1.2rem"
    }
}




function What() {
    const [show, setShow] = useState(0);
    const HandleClick = (e) => setShow(e);
    const HomeIcons = {
        w: "6rem",
        color: "black"
    }

    const BoxTab = {
        bg: '#e5e5e5',
        p: "1em",
        fontWeight: "bold",
        transition: "all 0.2s ease-in-out",
        "_hover": {
            bg: "#f9d542",

        },

    }
    return (
        <>

            <Box>
                <Box
                    px={["1em", "3em", "10em"]}
                    py={["3em", "3em", "6em"]}
                >
                    <SimpleGrid columns={[null, null, 3]} spacing={["2", "4", "6"]} marginBottom="20px"

                    >
                        <Box sx={BoxTab}

                            onClick={() => HandleClick(0)}
                        >Video Production</Box>

                        <Box sx={BoxTab}

                            onClick={() => HandleClick(1)}
                        >Web Development</Box>

                        <Box sx={BoxTab}
                            onClick={() => HandleClick(2)}
                        >Design & Branding</Box>
                    </SimpleGrid>
                    <SimpleGrid columns={[null, null, 3]} spacing={["2", "4", "6"]}>

                        {data &&
                            data[show].map((item) => {
                                return (
                                    <>
                                        <Box

                                            p="1em"
                                        >
                                            <VStack >
                                                <Circle size={{
                                                    base: "10",
                                                    lg: "16"
                                                }} bg="#f9d542" >
                                                    <Image sx={HomeIcons} src={item.img} alt="" />
                                                </Circle>
                                                <Heading
                                                    fontSize={{
                                                        md: "20px",
                                                        lg: "32px"
                                                    }}
                                                >
                                                    {item.heading}
                                                </Heading>
                                                <Text>
                                                    {item.desc}
                                                </Text>
                                            </VStack>

                                        </Box>
                                    </>
                                )
                            })
                        }

                    </SimpleGrid>

                </Box>


                <Stack
                    background="blackAlpha.100"
                    px={["1em", "3em", "10em"]}
                    py={["3em", "3em", "6em"]}
                    gap="1.5rem"

                >
                    <Heading>Want to join the team?</Heading>
                    <Text fontWeight="bold">We work with freelance contractors around the country.</Text>
                    <Text sx={TextSixe}>
                        If you’re a skilled videographer,
                        graphic designer or web developer
                        then click below to send your CV
                        or showreel.
                    </Text>
                    <Button sx={{
                        w: "max-content",
                        borderRadius: "2rem",
                        padding: "1.8em",
                        background: "#f9d542",

                        color: "black"

                    }}><NavLink to="/contact">Contact Us</NavLink></Button>
                </Stack>
            </Box >
        </>
    )
}

export default What
