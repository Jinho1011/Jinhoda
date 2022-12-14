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
  const emojis = ["π", "βΊοΈ", "π³", "π»", "π", "ποΈ", "π¨", "βοΈ", "β€οΈ"]
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)]

  return (
    <FooterContainer>
      <FooterText>Β© {new Date().getFullYear()} jinhoda</FooterText>
      <Emoji text={randomEmoji} />
    </FooterContainer>
  )
}

export default Footer
