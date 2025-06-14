'use client'

import Header from '../header'
import { Box, Heading, Container, Text } from '@chakra-ui/react'

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <Box pt="80px" minH="100vh">
        <Container maxW={'3xl'} p={0}>
          <Heading mb={4}>Projects</Heading>
          <Text>ここにプロジェクト一覧を表示します。</Text>
        </Container>
      </Box>
    </>
  )
}
