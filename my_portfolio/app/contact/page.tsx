'use client'

import Header from '../header'
import { Box, Heading, Container, Button, Stack } from '@chakra-ui/react'
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'
import { SiQiita } from 'react-icons/si'

export default function ContactPage() {
  return (
    <>
      <Header />
      <Box pt="80px" minH="100vh">
        <Container maxW={'3xl'} p={0}>
          <Heading mb={8}>Contact</Heading>
          <Stack spacing={4} direction="column" align="center">
            <Button
              as="a"
              href="https://github.com/Tett0801"
              target="_blank"
              leftIcon={<FiGithub />}
              colorScheme="gray"
              variant="outline"
              w="250px"
            >
              GitHub
            </Button>
            <Button
              as="a"
              href="https://qiita.com/TeddyTech"
              target="_blank"
              leftIcon={<SiQiita />}
              colorScheme="green"
              variant="outline"
              w="250px"
            >
              Qiita
            </Button>
            <Button
              as="a"
              href="https://www.linkedin.com/in/your-username"
              target="_blank"
              leftIcon={<FiLinkedin />}
              colorScheme="linkedin"
              variant="outline"
              w="250px"
            >
              LinkedIn
            </Button>
            <Button
              as="a"
              href="https://instagram.com/your-username"
              target="_blank"
              leftIcon={<FiInstagram />}
              colorScheme="pink"
              variant="outline"
              w="250px"
            >
              Instagram
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  )
}
