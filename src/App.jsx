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
// importato  postpage
import Post from "./pages/Postpage";
// importo la pagine dell notfound
import NotFound from "./pages/NotFound";
// importate le posts
import Posts from "./pages/Posts";
// importato il fomr della creazione del card
import AddDolcePage from "./pages/AddDolcepage";
// importo il Alert context
import { GlobalProvider } from "./Context/GlobalContext";
function App() {
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            {/* al posto di component posso usare element e metto tutto il tag  =>element={<Main />}*/}
            <Route Component={defaultLayout}>
              <Route path="/" Component={Homepage} />
              <Route path="/chisiamo" Component={ChiSiamo} />
              <Route path="/posts">
                <Route index Component={Posts} />
                <Route path=":id" Component={Post} />
                <Route path="create" Component={AddDolcePage} />
              </Route>
              <Route path="*" Component={NotFound} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  );
}

export default App;
