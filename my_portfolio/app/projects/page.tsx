'use client'

import Header from '../header'
import { Box, Heading, Container, Text } from '@chakra-ui/react'
import { useState } from 'react'

export default function ProjectsPage() {
  const [lang, setLang] = useState<'ja' | 'en'>('ja')

  return (
    <>
      <Header lang={lang} setLang={setLang} />
      <Box pt="80px" minH="100vh">
        <Container maxW={'3xl'} p={0}>
          <Heading mb={4}>
            {lang === 'ja' ? 'プロジェクト' : 'Projects'}
          </Heading>
          <Text>
            {lang === 'ja'
              ? 'ここにプロジェクト一覧を表示します。'
              : 'Project list will be shown here.'}
          </Text>
        </Container>
      </Box>
    </>
  )
}
