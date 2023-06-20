import { render, screen } from '@testing-library/react'
import { Grid } from '../index'

describe('Grid', async () => {
  it('should render box component with props', () => {
    render(
      <Grid backgroundColor="#fff" gridColumn="2rem">
        test
      </Grid>,
    )
    const grid = screen.getByText('test')
    expect(grid).toHaveStyle('display: grid')
    expect(grid).toHaveStyle('background-color: #fff')
    expect(grid).toHaveStyle('grid-column: 2rem')
    expect(grid.innerHTML).toEqual('test')
  })

  it('should render box component with props gridTemplateColumns', () => {
    render(<Grid gridTemplateColumns="auto auto auto">gridTemplateColumns</Grid>)
    const grid = screen.getByText('gridTemplateColumns')
    expect(grid).toHaveStyle('gridTemplateColumns: auto auto auto')
    expect(grid.innerHTML).toEqual('gridTemplateColumns')
  })

  it('should render box component with props gridTemplateColumns', () => {
    render(<Grid gridTemplateRows="auto auto auto">gridTemplateRows</Grid>)
    const grid = screen.getByText('gridTemplateRows')
    expect(grid).toHaveStyle('gridTemplateRows: auto auto auto')
    expect(grid.innerHTML).toEqual('gridTemplateRows')
  })
})
