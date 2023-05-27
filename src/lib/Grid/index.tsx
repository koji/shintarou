import styled from 'styled-components'

import { styleProps, isntStyleProp } from '../style-props'

import type { PrimitiveComponent } from '../types'

/**
 * Grid primitive
 *
 * @component
 */
export const Grid: PrimitiveComponent<'div'> = styled.div.withConfig({
  shouldForwardProp: isntStyleProp,
})`
  display: grid;
  ${styleProps}
`
