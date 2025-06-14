'use client'

import Head from 'next/head'
import Header from './header'
import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  Tag,
  SimpleGrid,
  List,
  ListItem,
  ListIcon,
  Divider,
  Flex,
  Icon,
  Avatar,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { FiCheckCircle, FiBriefcase, FiAward, FiUser, FiCpu, FiBookOpen, FiMoon, FiSun } from 'react-icons/fi'
import { useState } from 'react'

export default function ProfilePage() {
  const { colorMode, toggleColorMode } = useColorMode()
  const [lang, setLang] = useState<'ja' | 'en'>('ja')
  // カラーモードごとの色
  const sectionBg = useColorModeValue('white', 'gray.800')
  const mainBg = useColorModeValue('blue.50', 'gray.900')
  const headingColor = useColorModeValue('blue.600', 'blue.300')
  const accentColor = useColorModeValue('blue.400', 'blue.200')
  const iconColor = useColorModeValue('blue.500', 'blue.200')
  const timelineColor = useColorModeValue('blue.100', 'blue.700')
  const listIconColor = useColorModeValue('blue.400', 'blue.200')

  // テキスト定義
  const texts = {
    ja: {
      intro: "はじめまして。東京都在住のソフトウェアエンジニアです。Webアプリケーション開発を中心に、フロントエンド・バックエンド問わず幅広く経験があります。新しい技術やチーム開発が大好きです。",
      introTitle: "自己紹介",
      skillsTitle: "スキル",
      certTitle: "保有資格",
      careerTitle: "経歴",
      skills: ["TypeScript", "React", "Next.js", "Node.js", "Python", "AWS"],
      certs: [
        "応用情報技術者試験",
        "AWS Certified Solutions Architect – Associate",
        "TOEIC 800点"
      ],
      careers: [
        "2022年〜現在: 株式会社サンプルテック ソフトウェアエンジニア",
        "2020年〜2022年: 株式会社WebWorks フロントエンドエンジニア",
        "2016年〜2020年: 東京工業大学 情報工学系 卒業"
      ]
    },
    en: {
      intro: "Hello! I'm a software engineer based in Tokyo, Japan. I have broad experience in both frontend and backend web application development. I love learning new technologies and working in teams.",
      introTitle: "About Me",
      skillsTitle: "Skills",
      certTitle: "Certificates",
      careerTitle: "Career",
      skills: ["TypeScript", "React", "Next.js", "Node.js", "Python", "AWS"],
      certs: [
        "Applied Information Technology Engineer Examination",
        "AWS Certified Solutions Architect – Associate",
        "TOEIC Score: 800"
      ],
      careers: [
        "2022–Present: SampleTech Inc. Software Engineer",
        "2020–2022: WebWorks Inc. Frontend Engineer",
        "2016–2020: Tokyo Institute of Technology, Dept. of Computer Science"
      ]
    }
  }

  return (
    <>
      <Header lang={lang} setLang={setLang} />
      <Box pt="80px" minH="100vh" bg={mainBg}>
        <Container maxW={'3xl'} p={0} position="relative">
          {/* 自己紹介 */}
          <Box
            mb={12}
            p={8}
            borderRadius="xl"
            boxShadow="lg"
            bgGradient={useColorModeValue('linear(to-r, blue.100, white)', 'linear(to-r, gray.800, gray.900)')}
            position="relative"
            overflow="hidden"
          >
            <Flex align="center" mb={4}>
              <Avatar
                name="Taro Yamada"
                src="https://avatars.githubusercontent.com/u/9919?s=200&v=4" // 仮の顔イラスト画像URL
                size="lg"
                mr={4}
              />
              <Box>
                <Heading size="lg" color={headingColor} mb={1}>
                  {texts[lang].introTitle}
                </Heading>
                <Box w="40px" h="3px" bg={accentColor} borderRadius="full" mb={2} />
              </Box>
            </Flex>
            <Text fontSize="lg">
              {texts[lang].intro}
            </Text>
          </Box>

          <Divider my={8} />

          {/* スキル */}
          <Box mb={12} p={8} borderRadius="xl" boxShadow="lg" bg={sectionBg}>
            <Flex align="center" mb={4}>
              <Icon as={FiCpu} color={iconColor} boxSize={6} mr={2} />
              <Heading size="lg" color={headingColor} mb={1}>
                {texts[lang].skillsTitle}
              </Heading>
            </Flex>
            <Box w="40px" h="3px" bg={accentColor} borderRadius="full" mb={4} />
            <SimpleGrid columns={[2, 3]} spacing={4}>
              {texts[lang].skills.map((skill) => (
                <Tag key={skill} size="lg" colorScheme="blue" borderRadius="full">{skill}</Tag>
              ))}
            </SimpleGrid>
          </Box>

          <Divider my={8} />

          {/* 資格 */}
          <Box mb={12} p={8} borderRadius="xl" boxShadow="lg" bg={sectionBg}>
            <Flex align="center" mb={4}>
              <Icon as={FiAward} color={iconColor} boxSize={6} mr={2} />
              <Heading size="lg" color={headingColor} mb={1}>
                {texts[lang].certTitle}
              </Heading>
            </Flex>
            <Box w="40px" h="3px" bg={accentColor} borderRadius="full" mb={4} />
            <List spacing={3}>
              {texts[lang].certs.map((cert) => (
                <ListItem key={cert}>
                  <ListIcon as={FiAward} color={listIconColor} />
                  {cert}
                </ListItem>
              ))}
            </List>
          </Box>

          <Divider my={8} />

          {/* 経歴 */}
          <Box mb={12} p={8} borderRadius="xl" boxShadow="lg" bg={sectionBg}>
            <Flex align="center" mb={4}>
              <Icon as={FiBookOpen} color={iconColor} boxSize={6} mr={2} />
              <Heading size="lg" color={headingColor} mb={1}>
                {texts[lang].careerTitle}
              </Heading>
            </Flex>
            <Box w="40px" h="3px" bg={accentColor} borderRadius="full" mb={4} />
            <Stack spacing={0} position="relative" ml={4}>
              <Box
                position="absolute"
                left={-6}
                top={6}
                bottom={2}
                w="2px"
                bg={timelineColor}
                zIndex={0}
              />
              <List spacing={6} zIndex={1}>
                {texts[lang].careers.map((career) => (
                  <ListItem key={career} position="relative">
                    <ListIcon as={FiBriefcase} color={listIconColor} />
                    {career}
                  </ListItem>
                ))}
              </List>
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  )
}