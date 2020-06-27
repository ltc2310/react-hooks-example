# React Hooks Example

An example React Hooks includes: useState, useEffect.\
How to create your custom Hooks

## Installation
Install package:
```bash
npm install
```
Start:
```bash
npm start
```
## Two component App and AppUsingHooks
App: class component without using Hooks\
Set Local Storage:
```bash
HOOKS_MODE = false
```
AppUsingHooks: function component using Hooks\
Set Local Storage:
```bash
HOOKS_MODE = true
```
## Usage
Import Hooks from React:
```python
import React, { useState, useEffect } from 'react';
```

Use:
```python
  const [firstName, setfirstName] = useState("");
```

```python
  useEffect(() => {
    document.title = firstName + ' ' + lastName;
  });
```

## Guideline
[Codedeom](https://codedeom.com/2020/06/27/react-hooks-la-gi-cach-su-dung-react-hooks-nhu-the-nao/)