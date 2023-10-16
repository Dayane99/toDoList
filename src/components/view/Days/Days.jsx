import BoxWeek from "../../common/BoxWeek/BoxWeek"
import { DaysStyle } from "./days.style"

const Days = () => {
  return (
    <DaysStyle>
      <BoxWeek diaSemana={"Segunda-feira"} />
      <BoxWeek diaSemana={"Terça-feira"} />
      <BoxWeek diaSemana={"Quarta-feira"} />
      <BoxWeek diaSemana={"Quinta-feira"} />
      <BoxWeek diaSemana={"Sexta-feira"} />
      <BoxWeek diaSemana={"Sábado"} />
      <BoxWeek diaSemana={"Domingo"} />
    </DaysStyle>
  )
}

export default Days
