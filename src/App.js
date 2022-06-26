import logo from "./logo.svg";
import "./App.css";
import HeaderGlassApp from "./Components/HeaderGlassApp/HeaderGlassApp";
import Body from "./Components/Body/Body";

function App() {
  return (
    <div className="App">
      <div
        style={{
          height: "100%",
          backgroundPosition: "center",
          backgroundImage: "url('./glassesImage/background.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <HeaderGlassApp />
        <Body />
      </div>
    </div>
  );
}

export default App;
