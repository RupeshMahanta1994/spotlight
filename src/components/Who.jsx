import { Box, Button, Circle, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import one from "../assets/one.png"
import two from "../assets/two.png"

function Who() {

    const TextSixe = {
        fontSize: {
            base: "1rem",
            md: "1rem",
            lg: "1.2rem"
        }
    }
    return (
        <Box>
            <Box
                px={["1em", "3em", "10em"]}
                py={["3em", "3em", "6em"]}
            >
                <VStack alignItems="flex-start">
                    <Heading>Our Team</Heading>
                    <Text sx={TextSixe}>
                        We’re a small
                        team with lots
                        of experience,
                        and we work with
                        a network of
                        creatives around the UK.
                    </Text>
                    <Stack pt="4em" flexDirection={["column", "row", "row"]}>
                        <HStack alignItems={["flex-start"]}>
                            <Circle size={["20", "30", "28"]} bg="#f9d542" >
                                <Image w="90px" src={one} />
                            </Circle>
                            <VStack alignItems={["flex-start"]}>
                                <Heading>Rich Weatherson</Heading>
                                <Text>FOUNDER & PARTNER</Text>
                                <Text sx={TextSixe} lineHeight={{ lg: "2rem" }}>
                                    Rich has over a decade of experience
                                    working as a freelance videographer
                                    and has worked with multinational
                                    clients such as Discovery and Sky.
                                </Text>
                            </VStack>
                        </HStack>

                        <HStack alignItems={["flex-start"]} >
                            <Circle size={["20", "30", "28"]} bg="#f9d542" >
                                <Image w="90px" src={one} />
                            </Circle>
                            <VStack alignItems={["flex-start"]}>
                                <Heading>Rich Weatherson</Heading>
                                <Text>FOUNDER & PARTNER</Text>
                                <Text sx={TextSixe} lineHeight={{ lg: "2rem" }}>
                                    Rich has over a decade of experience
                                    working as a freelance videographer
                                    and has worked with multinational
                                    clients such as Discovery and Sky.
                                </Text>
                            </VStack>
                        </HStack>
                    </Stack>
                </VStack>
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
        </Box>
    )
}

export default Who
