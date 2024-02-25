import * as React from 'react'
import { Flex as FlexComponent } from '../Flex'
import { Box } from '../Box'
import { DIRECTION_COLUMN, JUSTIFY_SPACE_AROUND } from '../styles'

import type { Story } from '@storybook/react'

export default {
  title: 'shintarou/Flex',
}

const Template: Story<React.ComponentProps<typeof FlexComponent>> = (args) => (
  <FlexComponent {...args} />
)
export const Flex: Story<React.ComponentProps<typeof Template>> = Template.bind({})
Flex.args = {
  children: [
    <Box key="1" backgroundColor="red">
      This is a flex child
    </Box>,
    <Box key="2" backgroundColor="green">
      This is a flex child
    </Box>,
    <Box key="3" backgroundColor="blue">
      This is a flex child
    </Box>,
  ],
  flexDirection: DIRECTION_COLUMN,
  justifyContent: JUSTIFY_SPACE_AROUND,
  backgroundColor: '#d0d0d0',
  border: '1px solid black',
  padding: '2rem',
  maxWidth: '20rem',
  height: '10rem',
}
