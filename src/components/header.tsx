import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Button, Buttons, ButtonText, Container } from "./styles"

const NavContainer = styled.nav`
  height: 60px;
`

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoContainer = styled.div`
  /* height: 100%; */
`

const MenuContainer = styled.div``

const Header = () => {
  return (
    <NavContainer>
      <HeaderContainer>
        <LogoContainer>
          <StaticImage
            className="j-logo"
            src="../images/logo.png"
            placeholder="none"
            height={20}
            // quality={100}
            alt="Logo here"
          />
        </LogoContainer>
        <MenuContainer>
          <Buttons>
            <Button>
              <ButtonText>Category</ButtonText>
            </Button>
            <Button>
              <ButtonText>Abount</ButtonText>
            </Button>
          </Buttons>
        </MenuContainer>
      </HeaderContainer>
    </NavContainer>
  )
}

export default Header
