import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Button, Buttons, ButtonText, Container } from "./styles"
import { Link } from "gatsby"

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

const Header = ({ categories }: { categories: string[] }) => {
  return (
    <NavContainer>
      <HeaderContainer>
        <LogoContainer>
          <StaticImage
            className="j-logo"
            src="../images/logo.png"
            placeholder="none"
            height={20}
            quality={100}
            alt="Logo here"
          />
        </LogoContainer>
        <MenuContainer>
          <Buttons>
            {categories.map(category => {
              return (
                <Link to={`/categories/${category}`} key={category}>
                  <Button>
                    <ButtonText>{category}</ButtonText>
                  </Button>
                </Link>
              )
            })}
          </Buttons>
        </MenuContainer>
      </HeaderContainer>
    </NavContainer>
  )
}

export default Header
