import styled from 'styled-components'

import { styleProps, isntStyleProp } from '../style-props'

import type { PrimitiveComponent } from '../types'

/**
 * Flex
 *
 * @component
 */
export const Flex: PrimitiveComponent<'div'> = styled.div.withConfig({
  shouldForwardProp: isntStyleProp,
})`
  display: flex;
  ${styleProps}
`
