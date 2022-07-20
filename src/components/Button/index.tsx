import * as Styles from './styles'

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'danger' | 'success'
}

export function Button({ variant = 'primary' }: ButtonProps) {
  return <Styles.ButtonWrapper variant={variant}>enviar</Styles.ButtonWrapper>
}
