import React from "react";  //According to the Scrimba video we need this here as well, but it worked fine without it.

function App() {
  return (
    <div>
      <h1>ToDo List</h1>
      <p><input type="checkbox" name="grocery-shopping" />Grocery Shopping</p>
      <p><input type="checkbox" name="yard-work" />Yard Work</p>
      <p><input type="checkbox" name="wash-cars" />Wash Cars</p>
      <p><input type="checkbox" name="pay-bills" />Pay Bills</p>
      <p><input type="checkbox" name="clean-pool" />Clean Pool</p>
    </div>
  );
}

export default App;