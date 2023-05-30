import { render, screen } from '@testing-library/react'
import { Flex } from '../index'
import { DIRECTION_COLUMN } from '../../styles'

describe('Box', async () => {
  it('should render box component with props', async () => {
    await render(
      <Flex backgroundColor="#fff" padding="2rem" flexDirection={DIRECTION_COLUMN}>
        test
      </Flex>,
    )
    const flex = await screen.getByText('test')
    expect(flex).toHaveStyle('background-color: #fff')
    expect(flex).toHaveStyle('padding: 2rem')
    expect(flex).toHaveStyle(`flex-direction: ${DIRECTION_COLUMN}`)
    expect(flex.innerHTML).toEqual('test')
  })
})
