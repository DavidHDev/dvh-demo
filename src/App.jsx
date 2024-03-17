import { useState } from "react";

function App() {
  const [isResponsive, setIsResponsive] = useState(false);

  return (
    <main className={isResponsive ? 'cool-hero' : 'cool-hero unresponsive'}>
      <h1>
        This is {isResponsive ? 'truly' : 'not'} responsive.
      </h1>
      <i>Height: {isResponsive ? '100dvh' : '100vh'}</i>
      <p onClick={() => setIsResponsive(!isResponsive)}>Make It {isResponsive ? 'Unresponsive' : 'Responsive'}</p>
      <nav>
        <button>This button should be visible!</button>
      </nav>
    </main>
  )
}

export default App;
