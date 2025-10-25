import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  BgContainer,
  Heading,
  Paragraph,
  ColorsContainer,
  ColorSelector,
  GenerateButton,
  DirectionsContainer,
  ColorValue,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    color1: '#8ae323',
    color2: '#014f7b',
    direction: 'top',
    generate: false,
  }

  onChangeColor1 = event => {
    this.setState({color1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({color2: event.target.value})
  }

  onChangeDirection = value => {
    this.setState({direction: value})
  }

  onGenerateGradient = () => {
    this.setState(prevState => ({generate: !prevState.generate}))
  }

  render() {
    const {color1, color2, direction, generate} = this.state
    const gradientValue = `to ${direction}, ${color1}, ${color2}`

    return (
      <BgContainer
        data-testid="gradientGenerator"
        gradientValue={generate ? gradientValue : 'to top, #8ae323, #014f7b'}
      >
        <Heading>Generate a CSS Color Gradient</Heading>

        <Paragraph>Choose Direction</Paragraph>
        <DirectionsContainer>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              directionDetails={each}
              isActive={direction === each.value}
              changeDirection={this.onChangeDirection}
            />
          ))}
        </DirectionsContainer>

        <Paragraph>Pick the Colors</Paragraph>
        <ColorsContainer>
          <ColorSelector>
            <ColorValue>{color1}</ColorValue>
            <input
              type="color"
              value={color1}
              onChange={this.onChangeColor1}
              style={{
                width: '80px',
                height: '40px',
                border: 'none',
                outline: 'none',
                background: 'transparent',
                cursor: 'pointer',
              }}
            />
          </ColorSelector>

          <ColorSelector>
            <ColorValue>{color2}</ColorValue>
            <input
              type="color"
              value={color2}
              onChange={this.onChangeColor2}
              style={{
                width: '80px',
                height: '40px',
                border: 'none',
                outline: 'none',
                background: 'transparent',
                cursor: 'pointer',
              }}
            />
          </ColorSelector>
        </ColorsContainer>

        <GenerateButton type="button" onClick={this.onGenerateGradient}>
          Generate
        </GenerateButton>
      </BgContainer>
    )
  }
}

export default GradientGenerator
