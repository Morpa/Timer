import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Nav = styled.nav`
  display: flex;
  gap: 0.5rem;
`

export const Link = styled(NavLink)`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme['gray-100']};
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;

  &:hover {
    border-bottom: 3px solid ${(props) => props.theme['green-500']};
  }

  &.active {
    color: ${(props) => props.theme['green-500']};
  }
`
