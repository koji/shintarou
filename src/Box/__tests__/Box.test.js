import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Box } from '../';
describe('Box', async () => {
    it('should render box component with props', async () => {
        render(_jsx(Box, { backgroundColor: "#fff", padding: "2rem", children: "test" }));
        const box = screen.getByText('test');
        expect(box).toHaveStyle('background-color: #fff');
        expect(box).toHaveStyle('padding: 2rem');
        expect(box.innerHTML).toEqual('test');
    });
    it('should render box component with props specific width and height', () => {
        render(_jsx(Box, { backgroundColor: "#fff000", width: "20rem", height: "5rem", children: "width-height" }));
        const box = screen.getByText('width-height');
        expect(box).toHaveStyle('background-color: #fff000');
        expect(box).toHaveStyle('width: 20rem');
        expect(box).toHaveStyle('height: 5rem');
        expect(box.innerHTML).toEqual('width-height');
    });
    it('should render box component with props border-radius', () => {
        render(_jsx(Box, { backgroundColor: "#fff000", width: "20rem", height: "5rem", borderRadius: "2rem", children: "border-radius" }));
        const box = screen.getByText('border-radius');
        expect(box).toHaveStyle('border-radius: 2rem');
        expect(box.innerHTML).toEqual('border-radius');
    });
});
