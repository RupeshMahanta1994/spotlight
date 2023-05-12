import { Box, Button, Circle, Container, HStack, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Who() {
    return (
        <Box>
            <Box
                px={["1em", "3em", "10em"]}
                py={["3em", "3em", "6em"]}
            >
                <VStack alignItems="flex-start">
                    <Heading>Our Team</Heading>
                    <Text>
                        We’re a small
                        team with lots
                        of experience,
                        and we work with
                        a network of
                        creatives around the UK.
                    </Text>
                    <Stack flexDirection={["column", "row", "row"]}>
                        <HStack>
                            <Circle size={20} bg="#f9d542" >
                                W
                            </Circle>
                            <VStack>
                                <Heading>Rich Weatherson</Heading>
                                <Text>FOUNDER & PARTNER</Text>
                                <Text>
                                    Rich has over a decade of experience
                                    working as a freelance videographer
                                    and has worked with multinational
                                    clients such as Discovery and Sky.
                                </Text>
                            </VStack>
                        </HStack>

                        <HStack >
                            <Circle size={20} bg="#f9d542" >
                                W
                            </Circle>
                            <VStack>
                                <Heading>Rich Weatherson</Heading>
                                <Text>FOUNDER & PARTNER</Text>
                                <Text>
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
                <Text>
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
