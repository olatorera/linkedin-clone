import "./App.css";
import Login from "./Login";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">
      <div className="App-header">
        {/* Header */}
        <Header />

        {!user ? (
          <Login />
        ) : (
          <div className="app__body">
            {/* App Body*/}

            <Sidebar />
            <Feed />
            {/* Widgets */}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
