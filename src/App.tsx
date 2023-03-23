import UseStateComponent from "./UseStateComponent";
import UseEffectComponent from "./UseEffectComponent";
import UserContextComponent from "./UseContext";
import UseReducerComponent from "./UseReducerComponent";
import UseRefComponent from "./UseRefComponent";
import CustomHookComponent from "./CustomHookComponent";
function App() {
  return (
    <div>
      <h1>CustomHookComponent</h1>
      <CustomHookComponent />
      <h1>UseRefComponent</h1>
      <UseRefComponent />
      <h1>useReducer</h1>
      <UseReducerComponent />
      <h1>useContext</h1>
      <UserContextComponent />
      <h1>useEffect</h1>
      <UseEffectComponent />
      <h1>useState</h1>
      <UseStateComponent />
    </div>
  );
}

export default App;