import Header from "./components/header";
import HomePage from "./components/HomePage";
import BlogsPage from "./components/BlogsPage";
import { Routes,Route } from "react-router-dom";
function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Home" element={<HomePage/>}></Route>
        <Route path="/Blogs" element={<BlogsPage/>}></Route>
      </Routes>
    </>
  )
}
export default App;
