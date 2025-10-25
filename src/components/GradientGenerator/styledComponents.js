import styled from 'styled-components'

export const BgContainer = styled.div`
  background-image: linear-gradient(${props => props.gradientValue});
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: 'Roboto';
`

export const Heading = styled.h1`
  font-size: 28px;
  margin-bottom: 12px;
`

export const Paragraph = styled.p`
  font-size: 16px;
  margin: 10px 0;
`

export const DirectionsContainer = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 12px;
  margin-bottom: 20px;
  padding: 0;
`

export const ColorsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px 0;
`

export const ColorSelector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ColorValue = styled.p`
  font-weight: bold;
  margin-bottom: 6px;
`

export const GenerateButton = styled.button`
  background-color: #00c9b7;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 12px;

  &:hover {
    background-color: #00a899;
  }
`
