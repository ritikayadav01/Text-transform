import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import Alert from "./component/Alert";
// import About from "./component/About";
// import { createRoot } from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    // it is an object
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212121";
      document.body.style.color = "white";
      showAlert("Dark mode is Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#212121";
      // success is a type of alert
      showAlert("light mode is Enabled", "success");
    }
  };
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <TextForm heading="Enter the Text Below " />,
  //   },
  //   {
  //     path: "/about",
  //     element: <About />,
  //   },
  // ]);
  return (
    <>
      {/* switch always wrapped in a router  */}

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        {/* <RouterProvider router={router} /> */}
        <TextForm heading="Enter the Text Below "/>  */
        {/* /* <About/> */}
      </div>
    </>
  );
}

export default App;
