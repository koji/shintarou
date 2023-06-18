# shintarou/新太郎
shintarou/新太郎 is an npm package to make building web layout easy. This lib has 3 components to create a web ui for reactjs app.

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
`Flex` is `div` with flex box.

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
