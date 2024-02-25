import { jsx as _jsx } from "react/jsx-runtime";
import { Flex as FlexComponent } from '../Flex';
import { Box } from '../Box';
import { DIRECTION_COLUMN, JUSTIFY_SPACE_AROUND } from '../styles';
export default {
    title: 'shintarou/Flex',
};
const Template = (args) => (_jsx(FlexComponent, { ...args }));
// export const Flex = Template.bind({})
export const Flex = Template.bind({});
Flex.args = {
    children: [
        _jsx(Box, { backgroundColor: "red", children: "This is a flex child" }, "1"),
        _jsx(Box, { backgroundColor: "green", children: "This is a flex child" }, "2"),
        _jsx(Box, { backgroundColor: "blue", children: "This is a flex child" }, "3"),
    ],
    flexDirection: DIRECTION_COLUMN,
    justifyContent: JUSTIFY_SPACE_AROUND,
    backgroundColor: '#d0d0d0',
    border: '1px solid black',
    padding: '2rem',
    maxWidth: '20rem',
    height: '10rem',
};
