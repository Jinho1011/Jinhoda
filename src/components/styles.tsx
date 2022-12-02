import styled from "styled-components"

export const Container = styled.div`
  max-width: 1140px;
  width: 100%;
  height: 100%;
  margin: auto;
`

export const Buttons = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
`

export const Button = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0 8px;
  color: #4e5968;
`

export const ButtonText = styled.span`
  padding: 12px 10px;
  font-size: 15px;
  line-height: 20px;
  color: ${({ theme }) => theme.color.text};
  border-radius: 8px;
  border: 0;
  cursor: pointer;
  background-color: transparent;
  text-decoration: none;
  text-align: left;

  &:hover {
    background-color: rgba(2, 32, 71, 0.05);
  }
`
