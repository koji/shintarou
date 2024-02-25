import styled from 'styled-components';
import { styleProps, isntStyleProp } from '../style-props';
/**
 * Grid
 *
 * @component
 */
export const Grid = styled.div.withConfig({
    shouldForwardProp: isntStyleProp,
}) `
  display: grid;
  ${styleProps}
`;
