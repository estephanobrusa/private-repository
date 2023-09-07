import { Route, Routes } from "react-router";
import Home from "./pages/home/home";
import AlbumDetails from "./pages/albumDetails/albumDetails";
import Layout from "./layout";
import "./App.css";
import Notfound from "./pages/notFound/notfound";
function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Notfound />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="album/:id" element={<AlbumDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
