import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NewsDetail from "../pages/NewsDetail";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<NewsDetail />} />
    </Routes>
  );
};

export default App;
