import styled from 'styled-components'

export const DirectionButton = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  background-color: ${props => (props.isActive ? '#00c9b7' : '#ffffff')};
  color: ${props => (props.isActive ? '#ffffff' : '#334155')};
  opacity:${props => (props.isActive ? 1 : 0.5)};
`
