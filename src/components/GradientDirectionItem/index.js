import {DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, isActive, changeDirection} = props
  const {value, displayText} = directionDetails

  const onClickDirection = () => {
    changeDirection(value)
  }

  return (
    <li>
      <DirectionButton
        type="button"
        isActive={isActive}
        onClick={onClickDirection}
      >
        {displayText}
      </DirectionButton>
    </li>
  )
}

export default GradientDirectionItem
