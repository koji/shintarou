import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Grid } from '../';
describe('Grid', async () => {
    it('should render box component with props', () => {
        render(_jsx(Grid, { backgroundColor: "#fff", gridColumn: "2rem", children: "test" }));
        const grid = screen.getByText('test');
        expect(grid).toHaveStyle('display: grid');
        expect(grid).toHaveStyle('background-color: #fff');
        expect(grid).toHaveStyle('grid-column: 2rem');
        expect(grid.innerHTML).toEqual('test');
    });
    it('should render box component with props gridTemplateColumns', () => {
        render(_jsx(Grid, { gridTemplateColumns: "auto auto auto", children: "gridTemplateColumns" }));
        const grid = screen.getByText('gridTemplateColumns');
        expect(grid).toHaveStyle('gridTemplateColumns: auto auto auto');
        expect(grid.innerHTML).toEqual('gridTemplateColumns');
    });
    it('should render box component with props gridTemplateColumns', () => {
        render(_jsx(Grid, { gridTemplateRows: "auto auto auto", children: "gridTemplateRows" }));
        const grid = screen.getByText('gridTemplateRows');
        expect(grid).toHaveStyle('gridTemplateRows: auto auto auto');
        expect(grid.innerHTML).toEqual('gridTemplateRows');
    });
});
