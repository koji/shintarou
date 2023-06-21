# shintarou/新太郎
shintarou/新太郎 is an npm package to make building web layout easy. This lib has 3 components to create a web ui for reactjs app.
shintarou is easy to install and to use. 

## requirements
- nodejs: v16.9 - v18
- package manager: npm/yarn/pnpm
## How to install

```shell
# npm
npm install shintarou

# yarn
yarn add shintarou

# pnpm
pnpm add shintarou
```


## How to use shintarou/新太郎
### Box
`Box` is the same as `div` but you don't need to use `style={{css}}` for styling a div. You can pass backgroundColor, width, height etc as props.

```ts
import { Box } from 'shintarou'

interface MyFirstBoxProps {
  title: string
  backgroundColor: string
}

export function MyFirstBox({ title, backgroundColor}: MyFirstBoxProps): JSX.Element {
  return (
    <Box backgroundColor={backgroundColor} width="20rem" height="20rem">{title}</Box>
  )
}
```

`codesandbox`  
https://codesandbox.io/p/sandbox/shintarou-box-8s737k


### Flex
`Flex` is `div` with `flex box`.

```ts
import { Box, DIRECTION_COLUMN, DIRECTION_ROW, Flex } from "shintarou";

interface MyFirstFlex {
  direction: string;
}

export function MyFirstFlex({ direction }: MyFirstFlex): JSX.Element {
  return (
    <Flex
      flexDirection={direction === "col" ? DIRECTION_COLUMN : DIRECTION_ROW}
      gridGap="1rem"
    >
      <Box width="10rem" height="10rem" backgroundColor="#ff00ff" />
      <Box width="10rem" height="10rem" backgroundColor="#0000ff" />
      <Box width="10rem" height="10rem" backgroundColor="#ff0000" />
    </Flex>
  );
}
```

`codesandbox`  
https://codesandbox.io/p/sandbox/shintarou-flex-5jdj4k


### Grid
`Grid` is `div` with `grid`.


```ts
import { Box, Grid } from "shintarou";

export function MyFirstGrid(): JSX.Element {
  return (
    <Grid
      gridTemplateColumns="auto auto auto"
      padding="1rem"
      color="black"
      gridGap="1rem"
    >
      <Box width="10rem" height="10rem" backgroundColor="#ff00ff">
        1
      </Box>
      <Box width="10rem" height="10rem" backgroundColor="#0650ff">
        2
      </Box>
      <Box width="10rem" height="10rem" backgroundColor="#af030a">
        3
      </Box>
      <Box width="10rem" height="10rem" backgroundColor="#ffaaff">
        4
      </Box>
      <Box width="10rem" height="10rem" backgroundColor="#0000ff">
        5
      </Box>
      <Box width="10rem" height="10rem" backgroundColor="#dadada">
        6
      </Box>
    </Grid>
  );
}
```
`codesandbox`  
https://codesandbox.io/p/sandbox/shintarou-grid-v85pny

### support props

```ts
export interface ColorProps {
  color?: string
  backgroundColor?: string
  opacity?: string | number
}

export interface TypographyProps {
  fontSize?: string | number
  fontWeight?: string | number
  fontStyle?: string
  lineHeight?: string | number
  textAlign?: string
  textTransform?: string
  textDecoration?: string
}

export interface SpacingProps {
  margin?: string | number
  marginX?: string | number
  marginY?: string | number
  marginTop?: string | number
  marginRight?: string | number
  marginBottom?: string | number
  marginLeft?: string | number
  padding?: string | number
  paddingX?: string | number
  paddingY?: string | number
  paddingTop?: string | number
  paddingRight?: string | number
  paddingBottom?: string | number
  paddingLeft?: string | number
}

export interface BorderProps {
  border?: string
  borderTop?: string
  borderRight?: string
  borderBottom?: string
  borderLeft?: string
  borderRadius?: string | number
  borderWidth?: string | number
  borderColor?: string
  boxShadow?: string
}

export interface FlexboxProps {
  flex?: string | number
  alignItems?: string
  alignSelf?: string
  justifyContent?: string
  flexDirection?: string
  flexWrap?: string
  flexFlow?: string
  alignContent?: string
  whiteSpace?: string
}

export interface GridProps {
  columnGap?: string | number
  rowGap?: string | number
  gridGap?: string | number
  gridTemplateAreas?: string
  gridTemplateRows?: string
  gridTemplateColumns?: string
  gridArea?: string | number
  gridRow?: string | number
  gridColumn?: string | number
}

export interface LayoutProps {
  display?: string
  size?: string | number
  width?: string | number
  minWidth?: string | number
  maxWidth?: string | number
  height?: string | number
  minHeight?: string | number
  maxHeight?: string | number
  overflow?: CSSProperties['overflow']
  overflowX?: CSSProperties['overflowX']
  overflowY?: CSSProperties['overflowY']
  wordSpacing?: string | number
  cursor?: CSSProperties['cursor']
  overflowWrap?: string
}

export interface PositionProps {
  position?: string
  zIndex?: string | number
  top?: string | number
  right?: string | number
  bottom?: string | number
  left?: string | number
  transform?: string
  transformOrigin?: CSSProperties['transformOrigin']
}
```
