import * as React from 'react'
import { css } from 'styled-components'
import { Box as BoxComponent } from '../Box/index.tsx'

import type { Story } from '@storybook/react'

const BOX_STYLE = css`
  &:hover {
    background-color: red;
  }
`

export default {
  title: 'shintarou/Box',
}

const Template: Story<React.ComponentProps<typeof BoxComponent>> = (args) => (
  <BoxComponent {...args} css={BOX_STYLE} />
)
// export const Box = Template.bind({})
export const Box: Story<React.ComponentProps<typeof Template>> = Template.bind({})

Box.args = {
  children: 'This is a simple Box component.',
  backgroundColor: 'blue',
  border: '1px solid black',
  padding: '2rem',
  maxWidth: '10rem',
}
