import { Route, Routes } from "react-router";
import Home from "./pages/home/home";
import AlbumDetails from "./pages/albumDetails/albumDetails";
import Layout from "./layout";
import Notfound from "./pages/notFound/notfound";
import ErrorPage from "./pages/error";
import { GlobalStyles } from "./globalstyles";
function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="*" element={<Notfound />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="album/:id" element={<AlbumDetails />} />
          <Route path="error" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
