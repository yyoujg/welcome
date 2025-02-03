import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div>
      <Welcome name={"이정환"} isMember={true} />
    </div>
  );
}

export default App;
