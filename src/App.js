import Calculator from "./components/Calculator/Calculator";
import { OPERATORS } from "./components/application-settings/app-settings";

function App() {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Calculator operators={OPERATORS} />
    </div>
  );
}

export default App;
