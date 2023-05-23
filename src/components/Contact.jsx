import { Box, Button, FormControl, FormLabel, Heading, IconButton, Input, Icon, Text, Textarea, Stack, VStack, Container } from '@chakra-ui/react'
import React from 'react'
import { FaUserAlt, FaAt } from "react-icons/fa";
import { AiFillMessage, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { NavLink } from 'react-router-dom';

function Contact() {

    const BodyDesign = {
        w: "100%",
        gap: "2rem",
        flexDirection: {
            base: "column",
            md: "row",
            lg: "row"
        },
    }
    return (
        <Box px={["1em", "3em", "10em"]} py={["3em", "3em", "6em"]}>
            <Stack sx={BodyDesign} >
                <VStack alignItems={["flex-start"]} w={{ base: "100%", md: "50%", lg: "50%" }}>
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
                            <Text fontSize="1.1rem">
                                <NavLink to="/">
                                    Submit
                                </NavLink>
                            </Text>
                        </Button>

                    </FormControl>
                </VStack>
                <VStack alignItems={["flex-start"]} w={["100%", "50%", "50%"]}>
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
                </VStack>
            </Stack>

        </Box>
    )
}

export default Contact
