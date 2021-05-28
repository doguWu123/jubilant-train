import "./styles.css";

function Signup() {
  alert("Signed In!");
}

export default function App() {
  return (
    <div className="App">
      <h1 style={{ color: "white" }}>Sign Up</h1>
      <p>
        <input type="text" placeholder="username..." />
      </p>
      <p>
        <input type="text" placeholder="email..." />
      </p>
      <p>
        <input type="text" placeholder="password..." />
      </p>
      <button style={{ color: "white" }} onclick={Signup}>
        Sign Up!
      </button>
    </div>
  );
}
