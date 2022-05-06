import { Routes, Route } from "react-router-dom";
import { CreateTopic } from "./pages/CreateTopic";
import { Home } from "./pages/Home";
import { SignUp } from "./pages/SignUp";
import { TopicPage } from "./pages/TopicPage";
import { ContextComponent } from "./contexts/userContext";
import { Login } from "./pages/Login";

function App() {
  return (
    <div className="App">
      <ContextComponent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/topic/:topicId" element={<TopicPage />} />
          <Route path="/create-topic" element={<CreateTopic />} />
        </Routes>
      </ContextComponent>
    </div>
  );
}

export default App;
