import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1 style={{ color: "white" }}>Sign Up</h1>
      <p>
        <input
          style={{ color: "white" }}
          type="text"
          placeholder="username..."
        />
      </p>
      <p>
        <input type="text" placeholder="email..." />
      </p>
      <p>
        <input type="text" placeholder="password..." />
      </p>
    </div>
  );
}
