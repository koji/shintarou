import styled from 'styled-components';
import { styleProps, isntStyleProp } from '../style-props';
/**
 * Box
 *
 * @component
 */
export const Box = styled.div.withConfig({
    shouldForwardProp: isntStyleProp,
}) `
  min-width: 0;
  ${styleProps}
`;
