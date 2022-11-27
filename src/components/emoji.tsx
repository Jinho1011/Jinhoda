import React from "react"
import styled from "styled-components"

const EmojiText = styled.span``

const Emoji = ({ text }: { text: string }) => {
  return <EmojiText className="emoji">{text}</EmojiText>
}

export default Emoji
