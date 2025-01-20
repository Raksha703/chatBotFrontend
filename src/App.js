import { Route, Routes, useParams} from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element=<HomePage /> />
      <Route path="/chatPage" element=<ChatPage /> />
    </Routes>
  );
}

export default App;