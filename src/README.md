# The `@itsmikita/randonamer` package

Generate Random People Names and Phrases.

## Install

Use your favorite package manager to install it. Mine is `bun`:

```sh
bun add github:itsmikita/randonamer
```

## Usage

```js
import {
  generateRandomBinaryPersonName,
  generateRandomFemalePersonName,
  generateRandomMalePersonName,
  generateRandomPhrase
} from "./index.js";

const binary = generateRandomBinaryPersonName(3, " ");
const female = generateRandomFemalePersonName(2, "_");
const male = generateRandomMalePersonName(1, "");
const phrase = generateRandomPhrase("_");
```

## Resources

- Shuffle objects <https://stackoverflow.com/a/46545530>
- The Schwartzian Transform <https://en.wikipedia.org/wiki/Schwartzian_transform>
