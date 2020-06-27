import React, { useState, useEffect } from 'react';
import './App.css';
import { Input, Row} from 'antd';
function AppUsingHooks () {
  
  const firstName = useInput("Cong");
  const lastName = useInput("Le");

  useDocumentTitle(firstName.value + ' ' + lastName.value)

  const width = useWindowWidth()

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div>
        <Row>width: {width}</Row>
        <Row>
          <h1>Hello {firstName.value + ' ' + lastName.value}</h1>
        </Row>
        <Row>
            <label>first name:</label>
            <Input type="text" { ...firstName } placeholder="input your first name"/>
        </Row>
        <Row>
          <label>last name:</label>
          <Input type="text" { ...lastName } placeholder="input your last name"/>
        </Row>
      </div>
    </div>
  );
}

export default AppUsingHooks;

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)
  function handleChange(e) {
    setValue(e.target.value)
  }
  return {
    value,
    onChange: handleChange
  }
}

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title
  })
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return width;
}
