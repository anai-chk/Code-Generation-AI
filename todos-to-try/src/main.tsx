import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

/* existing imports */
import Root from "./routes/root";
import Codeium from "./CodeGenerationAIs/Codeium/CodeiumTodos";
import GithubCopilot from "./CodeGenerationAIs/GithubCopilot/GithubCopilotTodos";
import ReplitGhostwriter from "./CodeGenerationAIs/ReplitGhostwriter/ReplitGhostwriterTodos";
import Tabnine from "./CodeGenerationAIs/Tabnine/TabnineTodos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/GithubCopilot",
    element: <GithubCopilot />,
  },
  {
    path: "/Codeium",
    element: <Codeium />,
  },
  {
    path: "/ReplitGhostwriter",
    element: <ReplitGhostwriter />,
  },
  {
    path: "/Tabnine",
    element: <Tabnine />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
