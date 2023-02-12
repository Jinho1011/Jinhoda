import React from "react"
import { Button, Buttons, ButtonText } from "@styles/styles"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import ThemeToggle from "../themeToggle"

import {
  HeaderContainer,
  LogoContainer,
  MenuContainer,
  NavContainer,
} from "./header.styles"

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
              src="../../../assets/images/jinhoda.png"
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
