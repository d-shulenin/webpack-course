import "./app.scss";
import Header from "./components/Header";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default App;
