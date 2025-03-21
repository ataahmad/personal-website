import { React } from 'react';
import 'App.css';
import Media from 'components/Media';
import InfoSide from 'components/InfoSide';

function App() {

  return (
    <div className="App">
        <div className="row">
        <div className="column left">
          <InfoSide />
        </div>
        <div className="column right">
          <Media />
        </div>
      </div>
    </div>
  );
}

export default App;
