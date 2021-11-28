import styled from 'styled-components'
import { ReactComponent as Logo } from '../../assets/clvr-clothing-logo.svg'

export const HeaderStyled = styled.header`
  width: 90%;
  padding: 20px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #eee;
  height: 100px;
`

export const TitleStyled = styled.div`
  display: flex;
  align-items: center;
`

export const LogoStyled = styled(Logo)`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`
