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
  categories: readonly {
    readonly type: string
  }[]
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
            {[...new Set(categories.map(category => category.type))].map(
              type => {
                return (
                  <Link to={`/categories/${type}`} key={type}>
                    <Button>
                      <ButtonText>{type}</ButtonText>
                    </Button>
                  </Link>
                )
              }
            )}
          </Buttons>
          <ThemeToggle />
        </MenuContainer>
      </HeaderContainer>
    </NavContainer>
  )
}

export default Header
