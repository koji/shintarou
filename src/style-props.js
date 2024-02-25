import pick from 'lodash/pick';
const COLOR_PROPS = ['color', 'backgroundColor', 'opacity'];
const TYPOGRAPHY_PROPS = [
    'fontSize',
    'fontWeight',
    'fontStyle',
    'lineHeight',
    'textAlign',
    'textTransform',
    'textDecoration',
    'textOverflow',
];
const SPACING_PROPS = [
    'margin',
    'marginX',
    'marginY',
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft',
    'padding',
    'paddingX',
    'paddingY',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
];
const BORDER_PROPS = [
    'border',
    'borderTop',
    'borderRight',
    'borderBottom',
    'borderLeft',
    'borderRadius',
    'borderWidth',
    'borderColor',
    'boxShadow',
];
const FLEXBOX_PROPS = [
    'flex',
    'alignItems',
    'justifyContent',
    'flexDirection',
    'flexWrap',
    'alignSelf',
    'whiteSpace',
];
const GRID_PROPS = [
    'columnGap',
    'gridGap',
    'gridTemplateAreas',
    'gridTemplateRows',
    'gridTemplateColumns',
    'gridArea',
    'gridRow',
    'gridColumn',
];
const LAYOUT_PROPS = [
    'display',
    'size',
    'width',
    'minWidth',
    'maxWidth',
    'height',
    'minHeight',
    'maxHeight',
    'overflow',
    'overflowX',
    'overflowY',
    'whiteSpace',
    'wordSpacing',
    'cursor',
    'overflowWrap',
];
const POSITION_PROPS = [
    'position',
    'zIndex',
    'top',
    'right',
    'bottom',
    'left',
    'transform',
    'transformOrigin',
];
const TRANSITION_PROPS = ['transition'];
const STYLE_PROPS = [
    ...COLOR_PROPS,
    ...TYPOGRAPHY_PROPS,
    ...SPACING_PROPS,
    ...BORDER_PROPS,
    ...FLEXBOX_PROPS,
    ...GRID_PROPS,
    ...LAYOUT_PROPS,
    ...POSITION_PROPS,
    ...TRANSITION_PROPS,
];
const colorStyles = (props) => {
    return pick(props, COLOR_PROPS);
};
const typographyStyles = (props) => {
    return pick(props, TYPOGRAPHY_PROPS);
};
const spacingStyles = (props) => {
    const { marginX, marginY, paddingX, paddingY, ...styles } = pick(props, SPACING_PROPS);
    if (marginX != null) {
        styles.marginRight = styles.marginRight ?? marginX;
        styles.marginLeft = styles.marginLeft ?? marginX;
    }
    if (marginY != null) {
        styles.marginTop = styles.marginTop ?? marginY;
        styles.marginBottom = styles.marginBottom ?? marginY;
    }
    if (paddingX != null) {
        styles.paddingRight = styles.paddingRight ?? paddingX;
        styles.paddingLeft = styles.paddingLeft ?? paddingX;
    }
    if (paddingY != null) {
        styles.paddingTop = styles.paddingTop ?? paddingY;
        styles.paddingBottom = styles.paddingBottom ?? paddingY;
    }
    return styles;
};
const borderStyles = (props) => {
    return pick(props, BORDER_PROPS);
};
const flexboxStyles = (props) => {
    return pick(props, FLEXBOX_PROPS);
};
const gridStyles = (props) => {
    return pick(props, GRID_PROPS);
};
const layoutStyles = (props) => {
    const { size, ...styles } = pick(props, LAYOUT_PROPS);
    if (size != null) {
        styles.width = styles.width ?? size;
        styles.height = styles.height ?? size;
    }
    return styles;
};
const positionStyles = (props) => {
    return pick(props, POSITION_PROPS);
};
const transitionStyles = (props) => {
    return pick(props, TRANSITION_PROPS);
};
export const styleProps = (props) => ({
    ...colorStyles(props),
    ...typographyStyles(props),
    ...spacingStyles(props),
    ...borderStyles(props),
    ...flexboxStyles(props),
    ...gridStyles(props),
    ...layoutStyles(props),
    ...positionStyles(props),
    ...transitionStyles(props),
});
export const isntStyleProp = (prop) => !STYLE_PROPS.includes(prop);
