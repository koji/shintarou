import { render, screen } from '@testing-library/react'
import { Flex } from '../index'
import { DIRECTION_COLUMN, DIRECTION_ROW } from '../../styles'

describe('Box', async () => {
  it('should render flex component with props - col case', async () => {
    render(
      <Flex backgroundColor="#fff" padding="2rem" flexDirection={DIRECTION_COLUMN}>
        test
      </Flex>,
    )
    const flex = screen.getByText('test')
    expect(flex).toHaveStyle('background-color: #fff')
    expect(flex).toHaveStyle('padding: 2rem')
    expect(flex).toHaveStyle(`flex-direction: ${DIRECTION_COLUMN}`)
    expect(flex.innerHTML).toEqual('test')
  })
  it('should render flex component with props row case', () => {
    render(
      <Flex backgroundColor="#fff000" padding="1rem 2rem" flexDirection={DIRECTION_ROW}>
        test row
      </Flex>,
    )
    const flex = screen.getByText('test row')
    expect(flex).toHaveStyle('background-color: #fff000')
    expect(flex).toHaveStyle('padding: 1rem 2rem')
    expect(flex).toHaveStyle(`flex-direction: ${DIRECTION_ROW}`)
    expect(flex.innerHTML).toEqual('test row')
  })

  it('should render flexbox with specific width and height', () => {
    render(
      <Flex backgroundColor="#fff000" width="10rem" height="20rem">
        test row
      </Flex>,
    )
    const flex = screen.getByText('test row')
    expect(flex).toHaveStyle('background-color: #fff000')
    expect(flex).toHaveStyle('width: 10rem')
    expect(flex).toHaveStyle('height: 20rem')
    expect(flex.innerHTML).toEqual('test row')
  })
})
