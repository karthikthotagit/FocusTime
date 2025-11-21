import React from "react";

function App() {
  const startSession = async () => {
    const res = await fetch("http://localhost:5001/api/start-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ duration: 25 })
    });

    const data = await res.json();
    console.log("Session created:", data);
  };

  return (
    <div className="App">
      <h1>FocusTime App</h1>
      <p>A structured study timer</p>
      <button onClick={startSession}>Start Timer</button>
    </div>
  );
}

export default App;
