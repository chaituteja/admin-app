import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import New from "./pages/new/New";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
