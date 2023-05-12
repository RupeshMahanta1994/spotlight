import React from 'react'
import { Box, VStack, Text, Stack, Circle, HStack, Button, Heading, List, ListItem } from '@chakra-ui/react'


const SpanColor = {
    display: "inline-block",
    color: "#f9d542",
    mx:
        { base: '4px', md: '12px', lg: '15px' }

}

function Home() {
    return (
        <>


            <Box h="90vh"
                w="100%"
                bg="blackAlpha.800"

            >
                <VStack justify="center"

                    height="100%"
                    px={5}
                    spacing="2.2rem"
                >
                    <Heading fontSize={{ base: "4xl", lg: "6xl" }}
                        color="#fff"
                        textAlign="center"
                    >We create content for the
                        <Text as="cite" sx={SpanColor}>construction</Text>,
                        <Text as="cite" sx={SpanColor}>property</Text> and
                        <Text as="cite" sx={SpanColor}>trades </Text>
                        industries.
                    </Heading>
                    <HStack>
                        <Button sx={{
                            background: "#f9d542",
                            borderRadius: "2rem",
                            padding: "1.8em",

                        }}>
                            <Text fontSize="1.1rem">Hire us</Text>
                        </Button>
                        <Button sx={{
                            borderRadius: "2rem",
                            padding: "1.8em",
                            background: "transparent",
                            color: "#93acaf",
                            border: " 1px solid #93acaf"

                        }}>Learn More</Button>

                    </HStack>
                </VStack>
            </Box >



            <Box
                w="100%"
                bg="#fff"
                color="blackAlpha.900"
                px={["1em"]}
                py={["5em"]}
            >
                <VStack justify="center"

                    height="100%"
                    px={5}
                    spacing="2.2rem"
                >
                    <VStack textAlign="center"
                        spacing={8}

                    >
                        <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                            What do we do
                        </Heading>
                        <Text fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                            fontWeight="bold">
                            We create media
                            for the construction,
                            property and trades
                            industries.
                        </Text>
                        <Text fontSize="xl"
                        >
                            We've been videography,
                            web and design services
                            to corporate clients across
                            Bristol, Birmingham and
                            Brighton since 2019.
                        </Text>

                    </VStack>
                    <Stack textAlign="center"
                        align="center"
                        justify="space-between"
                        flexDirection={["column", "column", "row"]}
                    >
                        <VStack >
                            <Circle size={20} bg="#f9d542" >
                                W
                            </Circle>
                            <Heading>
                                Video Production
                            </Heading>
                            <Text>
                                We produce quality
                                content from location
                                tours.
                            </Text>
                        </VStack>

                        <VStack >
                            <Circle size={20} bg="#f9d542" >
                                W
                            </Circle>
                            <Heading>
                                Web Development
                            </Heading>
                            <Text>
                                We design and build fast and functional websites.
                            </Text>
                        </VStack>

                        <VStack >
                            <Circle size={20} bg="#f9d542" >
                                W
                            </Circle>
                            <Heading>
                                Design & Branding
                            </Heading>
                            <Text>
                                We offer a comprehensive digital and print design service.
                            </Text>
                        </VStack>

                    </Stack>

                </VStack>
            </Box>





















            <Box
                w="100%"
                bg="#f9d542"
                color="blackAlpha.900"
                px={["1em"]}
                py={["5em"]}
                textAlign="center"
            >
                <VStack >
                    <Heading>
                        Who we Work with
                    </Heading>
                    <Text>
                        We work with clients nationwide,
                        including some of the UK’s largest
                        companies and independent contractors.
                    </Text>

                </VStack>

            </Box>

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
                    <Text fontSize="xl">
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
                        <Text fontSize="1.1rem">Contact us</Text>
                    </Button>

                </VStack>

            </Box>




        </>

    )
}

export default Home
