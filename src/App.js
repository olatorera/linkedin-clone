import "./App.css";
import Login from "./Login";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Leftbar from "./Leftbar";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser, userLogin } from "./features/userSlice";
import { useEffect } from "react";
import { auth } from "./Firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user is logged in
        const userDetails = userAuth.user.multiFactor.user;

        dispatch(
          userLogin({
            email: userDetails.email,
            uid: userDetails.uid,
            displayName: userDetails.name,
            photoURL: userDetails.picture,
          })
        );
      } else {
        // user is logged out
        dispatch(logout());
      }
    });
  });

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
            <Leftbar />
            {/* Widgets */}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
