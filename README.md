# Ninja UI Design System 
[See the storybook](https://ninja-ui.now.sh/)

![Storybook](https://raw.githubusercontent.com/francescjimenez/ninja-ui/master/public/storybook.png)

## Development

```bash
git clone git@github.com:francescjimenez/ninja-ui.git
cd ninja-ui
npm install
npm start
```

## Build

```bash
npm run build
```

## NPM Publish


## How to run in docker

```bash
docker build .
```

Will output image id, for example: 4633a0f907f6
Choose your favourite port, for example: 8081

```bash
docker run -p 8081:80 4633a0f907f6
```

### browse `localhost:8081`

---


## Usage (It isn't published yet)

```bash
npm install --save ninja-ui
```

```javascript
import { ThemeProvider, ThemeBase, Button } from "ninja-ui";

export default () => (
  <ThemeProvider theme={ThemeBase}>
    <Button variant="green" onClick={() => {}}>
      Hello Button
    </Button>
  </ThemeProvider>
);
```
