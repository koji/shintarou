import { render, screen } from '@testing-library/react'
import { Box } from '../index'

describe('Box', async () => {
  it('should render box component with props', async () => {
    await render(
      <Box backgroundColor="#fff" padding="2rem">
        test
      </Box>,
    )
    const box = await screen.getByText('test')
    expect(box).toHaveStyle('background-color: #fff')
    expect(box).toHaveStyle('padding: 2rem')
    expect(box.innerHTML).toEqual('test')
  })
})
