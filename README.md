# Ninja UI Design System

## Usage

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

## Development

```bash
git clone <THIS_REPOSITORY>
cd ninja-ui
npm install
npm start
```

## Build

```bash
npm run build
```

## Build Docs

```bash
npm run build:docs
```

## NPM Publish


## How to run in docker

```bash
docker build .
```

will output image id, for example: 4633a0f907f6
choose your favourite port, for example: 8081

```bash
docker run -p 8081:80 4633a0f907f6
```

### browse `localhost:8081`

---