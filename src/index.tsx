import "./index.scss";
import { router } from "./routes";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

const root = document.getElementById("root");
if (!root) throw new Error();

const container = createRoot(root);

container.render(<RouterProvider router={router} />);
