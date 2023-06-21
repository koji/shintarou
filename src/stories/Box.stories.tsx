import * as React from 'react'
import { css } from 'styled-components'
import { Box as BoxComponent } from '../lib/Box'

import type { Story, Meta } from '@storybook/react'

const BOX_STYLE = css`
  &:hover {
    background-color: red;
  }
`

export default {
  title: 'shintarou/Box',
} as Meta

const Template: Story<React.ComponentProps<typeof BoxComponent>> = (args) => (
  <BoxComponent {...args} css={BOX_STYLE} />
)
export const Box = Template.bind({})
Box.args = {
  children: 'This is a simple Box component.',
  backgroundColor: 'blue',
  border: '1px solid black',
  padding: '2rem',
  maxWidth: '10rem',
}
