import { Play } from 'phosphor-react'

import * as S from './styles'

export function Home() {
  return (
    <S.Wrapper>
      <S.Form>
        <S.FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <S.TaskInput
            id="task"
            placeholder="Dê um nome para o seu projeto"
            list="task-suggestions"
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Banana" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <S.MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />

          <span>minutos.</span>
        </S.FormContainer>

        <S.CountdownContainer>
          <S.TimerItem>0</S.TimerItem>
          <S.TimerItem>0</S.TimerItem>
          <S.Separator>:</S.Separator>
          <S.TimerItem>0</S.TimerItem>
          <S.TimerItem>0</S.TimerItem>
        </S.CountdownContainer>

        <S.StartCountdownButton disabled type="submit">
          <Play size={24} />
          Começar
        </S.StartCountdownButton>
      </S.Form>
    </S.Wrapper>
  )
}
