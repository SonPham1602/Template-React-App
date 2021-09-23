import React, { useContext, useEffect } from 'react';
import uniqid from 'uniqid'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
///////////CSSS////////////
import './App.css';
import './bootstrap.css'
// import './dataTables.css'
// import './ThemeApp.scss'
// import './AppComponent.scss'
//////////CONTEXT///////
//import { ModeType, ThemeContext } from "./context/ThemeContext"
//////ROUTER/////
import RouteList from "./routes/Routes"

function App() {

  //const { theme } = useContext(ThemeContext)

  const handleCheckUserInfo = () => {
    let userInfoLocalStorage = localStorage.getItem("userInfo")
    if (userInfoLocalStorage == null) {
      localStorage.removeItem("token")
    }
    else {
      let userInfo = JSON.parse(localStorage.getItem("userInfo"))
    }
  }



  useEffect(() => {

    window.addEventListener("beforeunload", (ev) => {
      ev.preventDefault();
    });

    handleCheckUserInfo()

    window.onkeydown = function (e) {
      if (e.keyCode == 32 && e.target == document.body) {
        e.preventDefault();
      }
      if (e.keyCode == 8 && e.target == document.body) {
        e.preventDefault();
      }
    };

  }, [])


  // useEffect(() => {
  //   if (document.body.classList.contains(ModeType.DARK) === true) {
  //     document.body.classList.toggle(ModeType.DARK, false)
  //   }
  //   else {
  //     document.body.classList.toggle(ModeType.LIGHT, false)
  //   }
  //   document.body.classList.add(`${theme}`);
  // }, [theme])

  return (
    <Router>
      <div className={`App `} >
        <Switch>
          {RouteList.map(item => (
            <Route key={uniqid()} exact path={item.path} component={item.component} />
          ))}

        </Switch>
      </div>
    </Router>
  );
}

export default App;
