import { Scroll, Timer } from 'phosphor-react'

import logoIgnite from '../../assets/logo-ignite.svg'

import * as S from './styles'

export function Header() {
  return (
    <S.Wrapper>
      <span>
        <img src={logoIgnite} alt="" />
      </span>
      <S.Nav>
        <S.Link to="/" title="Timer">
          <Timer size={24} />
        </S.Link>
        <S.Link to="/history" title="Histórico">
          <Scroll size={24} />
        </S.Link>
      </S.Nav>
    </S.Wrapper>
  )
}
