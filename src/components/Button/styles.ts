import styled, { css } from 'styled-components'

type ButtonProps = {
  variant: 'primary' | 'secondary' | 'danger' | 'success'
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
}

export const ButtonWrapper = styled.button<ButtonProps>`
  width: 100px;
  height: 40px;

  ${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `
  }}
`
