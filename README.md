# react-dropdown-material

>

[![NPM](https://img.shields.io/npm/v/react-dropdown-material.svg)](https://www.npmjs.com/package/react-dropdown-material) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![react-dropdown-material Banner](https://user-images.githubusercontent.com/76048512/117666796-7c746100-b1b9-11eb-9df3-6accfbbacfeb.png)


## Install

```bash
npm i react-dropdown-material
```
or
```bash
yarn add react-dropdown-material
```

## Usage

### JS:

```jsx
import React from 'react';

import { DropDown } from 'react-dropdown-material';
import 'react-dropdown-material/dist/index.css';

const App = () => {
  return (
    <DropDown
      className='DropDown'
      placeholder='Select OS'
      title='OS List'
      items={['Windows', 'Mac OS', 'Linux']}
      onItemSelect={(index, item) => console.log(`"${item}" selected`)}
      selectFirstItem={false}
      darkMode={false}
    />
  )
}

export default App
```

### CSS:

```scss
.DropDown {
  button {
    //DropDown button
  }

  ul li {
    //DropDown items
  }
}
```

## License

MIT © [boof-tech](https://github.com/boof-tech)
