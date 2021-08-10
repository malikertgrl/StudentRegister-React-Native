import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from "./components/LoginForm"
import StudentsList from "./components/StudentsList"
import StudentCreate from './components/StudentCreate';


const RouterComponent = () => {
  return (

    <Router >
      <Scene key="kimlik">
        <Scene key="loginScreen" component={LoginForm} title="Giriş Ekranı " />
      </Scene>
      
      <Scene key="main">
        <Scene
          onRight={() => Actions.StudentCreate()}
          rightTitle="Yeni"
          key="StudentsList"
          component={StudentsList}
          title="Öğrenci Liste "
        />

        <Scene
          key="StudentCreate"
          component={StudentCreate}
          title="Öğrenci Kayıt "
        />
      </Scene>


    </Router >
  )

}
export default RouterComponent;