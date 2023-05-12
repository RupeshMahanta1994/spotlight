import React from 'react'
import { Box, Container, Heading, Text, VStack, Button } from '@chakra-ui/react'

function Client() {
    return (
        <Box>
            <VStack py={20} px={4}>
                <Heading fontSize="2xl"

                >
                    We work with some of the
                    UK’s biggest companies and
                    independent contractors.
                </Heading>
                <Text fontSize="lg">
                    We have bases in Bristol,
                    Birmingham and Brighton, and
                    work across the UK with clients
                    both big and small.
                </Text>
                <Text fontSize="lg">
                    If you’re interested in working
                    with us then please feel free to
                    give us a call today, or email us,
                    and we’ll get back to you to discuss your project.
                </Text>
                <Text fontSize="lg">
                    After your free consultation
                    with a member of our team, we’ll
                    put together a no-obligation quote
                    and take it from there!
                </Text>
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
                        <Text fontSize="1.1rem">Contact us</Text>
                    </Button>

                </VStack>

            </Box>
        </Box>
    )
}

export default Client
