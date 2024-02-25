import { jsx as _jsx } from "react/jsx-runtime";
import { css } from 'styled-components';
import { Box as BoxComponent } from '../Box';
const BOX_STYLE = css `
  &:hover {
    background-color: red;
  }
`;
export default {
    title: 'shintarou/Box',
};
const Template = (args) => (_jsx(BoxComponent, { ...args, css: BOX_STYLE }));
// export const Box = Template.bind({})
export const Box = Template.bind({});
Box.args = {
    children: 'This is a simple Box component.',
    backgroundColor: 'blue',
    border: '1px solid black',
    padding: '2rem',
    maxWidth: '10rem',
};
