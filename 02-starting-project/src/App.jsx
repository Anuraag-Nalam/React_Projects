//Splitting a big App into smaller components is important and over here, app has some responsibilities which can be split up into multiple components. 
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';

import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts array={CORE_CONCEPTS} />
        <Examples />
      </main>
    </div>
  );
}

export default App;
