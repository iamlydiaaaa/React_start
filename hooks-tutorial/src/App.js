import { useState } from 'react';
import Counter from './Counter';
import Info from './Info';
import Average from './Average';

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <div>
        <button onClick={() => {setVisible(!visible);}}>
          {visible ? '숨기기' : '보이기'}
        </button>
        <hr />
        {visible && <Counter />}
      </div>
      <hr />
      <div>
        <Info />
      </div>
      <hr />
      <div>
        <Average />
      </div>
      <hr />
    </div>
  );
};

export default App;
