import { Box, Button, FormControl, FormLabel, Heading, IconButton, Input, Icon, Text, Textarea, Stack, VStack, Container } from '@chakra-ui/react'
import React from 'react'
import { FaUserAlt, FaAt } from "react-icons/fa";
import { AiFillMessage, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

function Contact() {
    return (
        <Box px={4} py={20}>
            <Stack>
                <VStack>
                    <Heading>Send us a Message</Heading>
                    <FormControl >
                        <FormLabel>
                            <Icon as={FaUserAlt} mr={2} />
                            Name:</FormLabel>
                        <Input type='text' mb={4}></Input>
                        <FormLabel>
                            <Icon as={FaAt} mr={2} />
                            Email:</FormLabel>
                        <Input type='email' mb={4}></Input>
                        <FormControl>
                            <Icon as={AiFillMessage} mr={2} />
                            Message</FormControl>
                        <Textarea mb={4}></Textarea>
                        <Button sx={{
                            background: "#f9d542",
                            borderRadius: "2rem",
                            padding: "1.8em",
                            color: "black"

                        }}>
                            <Text fontSize="1.1rem">Submit</Text>
                        </Button>

                    </FormControl>
                </VStack>
                <Container>
                    <Heading>Our Deatails</Heading>
                    <Text>
                        <Icon as={AiOutlineMail} />
                        info@wearesspotlight.co.in
                    </Text>
                    <Text>
                        <Icon as={AiOutlinePhone} />
                        07717 131 511
                    </Text>
                    <Text>
                        <Icon as={GoLocation} />
                        104 Wrington Close,<br />
                        Little Stoke,<br />
                        Bristol <br />
                        BS34 6ET
                    </Text>
                </Container>
            </Stack>

        </Box>
    )
}

export default Contact
