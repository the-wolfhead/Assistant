import {useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web'

const alanKey = '8924dbaea0fe28da4865d82f4be399c12e956eca572e1d8b807a3e2338fdd0dc/stage';
function App() {

  useEffect(() => {
    alanBtn({
      key:alanKey,
      onCommand: ({command}) => {
        if (command === 'testCommand') {
          alert('this code was excuted');
        }
      }
    })
  }, [])
  return (
    <div className="App">
     <h1>ALAN AI</h1>
    </div>
  );
}

export default App;
