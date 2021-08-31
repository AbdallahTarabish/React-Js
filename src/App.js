import Todo from "./Component/Todo";
import { Route } from "react-router-dom";
import Header from "./Component/header";
function Test() {
  return (
    <switch>
      <Header />
      <div>
        <h1>Abdalla's TO DO'S</h1>
        <Route path="/laravel">
          <Todo text="Laravel" />
        </Route>
        <Route path="/api">
          <Todo text="API" />
        </Route>

        <Route path="/php">
          <Todo text="PHP" />
        </Route>
      </div>
    </switch>
  );
}

export default Test;
