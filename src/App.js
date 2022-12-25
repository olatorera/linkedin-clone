import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";

function App() {
  return (
    <div className="app">
      <header className="App-header">
        {/* Header */}
        <Header />
        <div className="app__body">
          {/* App Body*/}

          <Sidebar />
          <Feed />
          {/* Widgets */}
        </div>
      </header>
    </div>
  );
}

export default App;
