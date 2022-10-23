
***

### Example: Fetching Data in React
**App.js**

```js
import { useState } from "react";
import Axios from "axios";

import "./styles.css";

export default function App() {
  const [generateExcuse, setGenerateExcuse] = useState("");

  const fetchData = (excuse) => {
    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}`).then((res) =>
      setGenerateExcuse(res.data[0].excuse)
    );
  };
  return (
    <div className="App">
      <h1>Generate an excuse</h1>
      <button onClick={() => fetchData("party")}>Party</button>
      <button onClick={() => fetchData("family")}>Family</button>
      <button onClick={() => fetchData("office")}>Office</button>

      <h3>{generateExcuse}</h3>
    </div>
  );
}
```

**Check Result:** https://4e2x6d.csb.app/


***
