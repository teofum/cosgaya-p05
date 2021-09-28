import React, { useState } from 'react';
import './App.css';
import Preview from './components/Preview';
import Rules from './components/Rules';
import Selector from './components/Selector';
import { Character } from './static/characters';

const App = () => {
  const [selection, setSelection] = useState<Character[]>([]);

  return (
    <div className="App">
      <header>
        <h1>
          <em>p05</em><br />
          Selección de<br />
          signos propios
        </h1>
      </header>

      <main>
        <Rules selection={selection} />
        <Preview selection={selection} />
        <Selector selection={selection} onSelectionChange={setSelection} />
      </main>

      <footer>
        <hr />
        <div>Diseño y desarrollo por Teo Fumagalli, para cátedra Cosgaya, FADU, UBA.</div>
        <div>
          Desarrollado con&nbsp;
          <a href="https://reactjs.org" rel="external noreferrer noopener">React</a>.&nbsp;
          Tipografías:&nbsp;
          <a href="https://www.omnibus-type.com/fonts/chivo/" rel="external noreferrer noopener">Chivo</a>,&nbsp;
          <a href="https://github.com/adobe-fonts/source-sans" rel="external noreferrer noopener">Source&nbsp;Sans&nbsp;3</a>.
        </div>
      </footer>
    </div>
  );
};

export default App;
