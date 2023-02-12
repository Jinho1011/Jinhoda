import styled from "styled-components"

import { Container } from "../../../assets/styles/styles"

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

export { NavContainer, HeaderContainer, LogoContainer, MenuContainer }
