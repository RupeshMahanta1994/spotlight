
import { Container, Heading, Box, VStack, Text, Stack, Circle, Button } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'


function What() {
    return (
        <Box>
            <Container>
                <Heading>Our Team</Heading>
                <Text>We’re a small team with
                    lots of experience, and we
                    work with a network of
                    creatives around the UK.</Text>
            </Container>

            <Stack textAlign="center"
                align="center"
                justify="center"
                gap="2rem"
                width="100%"
                flexDirection={["column", "column", "row"]}
            >
                <VStack >
                    <Circle size={40} bg="#f9d542" >
                        W
                    </Circle>
                    <Heading>
                        Rich Weatherson
                    </Heading>
                    <Text>FOUNDER & PARTNER</Text>
                    <Text>
                        Rich has over a decade of
                        experience working as a
                        freelance videographer and
                        has worked with multinational
                        clients such as Discovery and Sky.
                    </Text>
                </VStack>

                <VStack mt={0} >
                    <Circle size={40} bg="#f9d542" >
                        W
                    </Circle>
                    <Heading>
                        Dan Cranney
                    </Heading>
                    <Text>FOUNDER & PARTNER</Text>
                    <Text>
                        Dan has worked a
                        multidisciplinary media
                        creative for over ten
                        years, across videography,
                        web development and design.
                    </Text>
                </VStack>



            </Stack>

            <Container>
                <Heading>Want to join the team?</Heading>
                <Text>We work with freelance contractors around the country.</Text>
                <Text>
                    If you’re a skilled videographer,
                    graphic designer or web developer
                    then click below to send your CV
                    or showreel.
                </Text>
                <Button sx={{
                    borderRadius: "2rem",
                    padding: "1.8em",
                    background: "#f9d542",

                    color: "black"

                }}><NavLink to="/contact">Contact Us</NavLink></Button>
            </Container>
        </Box>
    )
}

export default What
