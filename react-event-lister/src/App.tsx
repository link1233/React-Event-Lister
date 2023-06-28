import React from 'react';
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisiblilty] = React.useState(false);

  return (

    <div>
      { alertVisible && <Alert onClose={() => setAlertVisiblilty(false)}>This is an alert</Alert>}
      <Button color='primary' onClick={() => setAlertVisiblilty(true)}>This is a Button</Button>
    </div>
  );
}

export default App;
