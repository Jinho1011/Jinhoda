import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import { Button, Buttons, ButtonText, Container } from "../../components/styles"

import ThemeToggle from "./themeToggle"

const NavContainer = styled.nav`
  height: 60px;
`

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`

const LogoContainer = styled.div``

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

interface HeaderProps {
  categories: string[]
}

const Header = ({ categories }: HeaderProps) => {
  return (
    <NavContainer>
      <HeaderContainer>
        <LogoContainer>
          <Link to="/">
            <StaticImage
              className="j-logo"
              src="../../assets/images/jinhoda.png"
              placeholder="none"
              height={20}
              quality={100}
              alt="Logo here"
            />
          </Link>
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
          <ThemeToggle />
        </MenuContainer>
      </HeaderContainer>
    </NavContainer>
  )
}

export default Header
