import * as S from './styles'

export function History() {
  return (
    <S.Wrapper>
      <S.Title>Meu histórico</S.Title>

      <S.HistoryList>
        <S.Table>
          <thead>
            <tr>
              <th>Tarefa</th>

              <th>Duração</th>

              <th>Duração</th>

              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Tarefa</td>

              <td>20 minutos</td>

              <td>Há 2 meses</td>

              <td>
                <S.Status statusColor="green">Concluído</S.Status>
              </td>
            </tr>

            <tr>
              <td>Tarefa</td>

              <td>20 minutos</td>

              <td>Há 2 meses</td>

              <td>
                <S.Status statusColor="green">Concluído</S.Status>
              </td>
            </tr>

            <tr>
              <td>Tarefa</td>

              <td>20 minutos</td>

              <td>Há 2 meses</td>

              <td>
                <S.Status statusColor="green">Concluído</S.Status>
              </td>
            </tr>

            <tr>
              <td>Tarefa</td>

              <td>20 minutos</td>

              <td>Há 2 meses</td>

              <td>
                <S.Status statusColor="yellow">Em andamento</S.Status>
              </td>
            </tr>

            <tr>
              <td>Tarefa</td>

              <td>20 minutos</td>

              <td>Há 2 meses</td>

              <td>
                <S.Status statusColor="red">Concluído</S.Status>
              </td>
            </tr>
          </tbody>
        </S.Table>
      </S.HistoryList>
    </S.Wrapper>
  )
}
