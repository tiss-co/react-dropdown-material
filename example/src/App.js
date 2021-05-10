import React from 'react';
import './index.css';

import { DropDown } from 'react-dropdown-material';
import 'react-dropdown-material/dist/index.css';

const App = () => {
  return (
    <div className='App'>
      <span className='Title'>
        React DropDown Material
     </span>
      <DropDown
        className='DropDown'
        placeholder='Select OS'
        title='OS List'
        items={['Windows', 'Mac OS', 'Linux']}
        onItemSelect={(index, item) => console.log(`"${item}" selected`)}
        selectFirstItem={false}
        whiteBackground={false}
        darkMode={false}
      />
    </div>
  );
};

export default App;
