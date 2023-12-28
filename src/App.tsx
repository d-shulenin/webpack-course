import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import "./app.scss";
import Header from "./components/Header";

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
