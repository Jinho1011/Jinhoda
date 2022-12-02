import React from "react"
import styled from "styled-components"
import Emoji from "./emoji"

const FooterContainer = styled.footer`
  padding: 40px 0;
  display: flex;
  justify-content: center;
`

const FooterText = styled.span`
  color: ${({ theme }) => theme.color.text};
  margin-right: 6px;
`

const Footer = () => {
  const emojis = ["👍", "☺️", "🐳", "👻", "🍎", "🎖️", "🎨", "☀️", "❤️"]
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)]

  return (
    <FooterContainer>
      <FooterText>© {new Date().getFullYear()} jinhoda</FooterText>
      <Emoji text={randomEmoji} />
    </FooterContainer>
  )
}

export default Footer
