// impoto il file.css
import "./index.css";
// react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import default layout
import defaultLayout from "./pages/defaultLayout";
// importato Homepage
import Homepage from "./pages/Homepage";
// importato chi siamo
import ChiSiamo from "./pages/ChiSiamo";

// iportate le posts
import Posts from "./pages/Posts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* al posto di component posso usare element e metto tutto il tag  =>element={<Main />}*/}
          <Route Component={defaultLayout}>
            <Route index Component={Homepage} />
            <Route path="/chisiamo" Component={ChiSiamo} />
            <Route path="/posts" Component={Posts} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
