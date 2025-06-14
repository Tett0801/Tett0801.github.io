'use client'

import React from 'react'
import {
  Flex,
  Icon,
  Text,
  Button,
  useColorModeValue,
  IconButton,
  useColorMode,
} from '@chakra-ui/react'
import { FiCode, FiUser, FiFolder, FiMail, FiMoon, FiSun, FiGlobe } from 'react-icons/fi'
import { useRouter } from 'next/navigation'

const navItems = [
  { name: 'Profile', path: '/', icon: FiUser },
  { name: 'Projects', path: '/projects', icon: FiFolder },
  { name: 'Contact', path: '/contact', icon: FiMail },
]

interface HeaderProps {
  lang: 'ja' | 'en'
  setLang: (lang: 'ja' | 'en') => void
}

export default function Header({ lang, setLang }: HeaderProps) {
  const router = useRouter()
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      px={8}
      py={4}
      bg={useColorModeValue('white', 'gray.900')}
      borderBottom="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      position="fixed"
      top={0}
      zIndex={100}
    >
      <Flex align="center">
        <Icon as={FiCode} boxSize={6} color="green.400" mr={2} />
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Portfolio
        </Text>
      </Flex>
      <Flex align="center">
        {navItems.map((item) => (
          <Button
            key={item.name}
            variant="ghost"
            leftIcon={<Icon as={item.icon} />}
            onClick={() => router.push(item.path)}
            mx={2}
          >
            {item.name}
          </Button>
        ))}
        <IconButton
          aria-label="Toggle language"
          icon={<FiGlobe />}
          onClick={() => setLang(lang === 'ja' ? 'en' : 'ja')}
          variant="ghost"
          size="lg"
          ml={0}
          title={lang === 'ja' ? 'Switch to English' : '日本語に切り替え'}
        />
        <Text fontSize="md" fontWeight="bold" mx={2}>
          {lang === 'ja' ? 'JP' : 'EN'}
        </Text>
        <IconButton
          aria-label="Toggle color mode"
          icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
          onClick={toggleColorMode}
          variant="ghost"
          size="lg"
          ml={2}
        />
      </Flex>
    </Flex>
  )
}
