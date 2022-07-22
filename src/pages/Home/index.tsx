import { Play } from 'phosphor-react'

import * as S from './styles'

export function Home() {
  return (
    <S.Wrapper>
      <S.Form>
        <S.FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <input id="task" />

          <label htmlFor="minutesAmount">durante</label>
          <input type="number" id="minutesAmount" />

          <S.TimerItem>minutos.</S.TimerItem>
        </S.FormContainer>

        <S.CountdownContainer>
          <S.TimerItem>0</S.TimerItem>
          <S.TimerItem>0</S.TimerItem>
          <S.Separator>:</S.Separator>
          <S.TimerItem>0</S.TimerItem>
          <S.TimerItem>0</S.TimerItem>
        </S.CountdownContainer>

        <button type="submit">
          <Play size={24} />
          Começar
        </button>
      </S.Form>
    </S.Wrapper>
  )
}
