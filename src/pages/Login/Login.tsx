import { IonText, IonPage, IonIcon, IonItemGroup, IonItem, IonInput, IonLabel, IonButton } from '@ionic/react';
import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import { View } from '../../components/ui-elements';
import { mail, key, eye, eyeOff } from 'ionicons/icons';
import './login.css';

import firebase from '../../firebase';

class Login extends Component<RouteComponentProps, {}> {


  state = {
    email: '',
    password: '',
    passwordVisible: false,
    error: ''
  }
  
  handleInputChange = (event: any) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handlePasswordVisibility = () => {
    const { passwordVisible } = this.state;

    this.setState({
      passwordVisible: !passwordVisible
    });
  }

  handleLogin = () => {
    const { email, password } = this.state;
    firebase
         .auth()
         .signInWithEmailAndPassword(email, password)
         .then((user) => {
           this.props.history.push('/home');
         })
         .catch((error) => {
           this.setState({ error: error.message });
         });

  }

  handleSignUp = () => {
    const { email, password } = this.state;

    firebase
     .auth()
     .createUserWithEmailAndPassword(email, password)
     .then((user) => {
       console.log(user)
       this.setState({
        email: '',
        password: '',
        error: ''
      })
     })
     .catch((error) => {
       this.setState({ error: error.message });
     });
  }

render() {
  const { email, password, error, passwordVisible } = this.state;  
  
  return (
    <IonPage>
      <View>
        <div className="wrapper">
          <IonText color="primary">
          <h1 className="logo text-center">BudgetPlanner</h1>
        </IonText>

        <IonItemGroup color="dark">
            <IonLabel color="light" className="label">
                Email
            </IonLabel> 

            <IonItem color="dark">
              <IonIcon icon={mail} color="primary"></IonIcon>
              <IonInput 
                name="email" 
                placeholder="enter a valid email address"
                type="email"
                inputMode="email" 
                color="light" 
                value={email} 
                onIonChange={(event) => this.handleInputChange(event)}></IonInput> 
            </IonItem>

        </IonItemGroup>

        <IonItemGroup color="dark">
          <IonLabel color="light" className="label">Password</IonLabel>
          <IonItem color="dark">
            <IonIcon icon={key} color="primary"></IonIcon>
            <IonInput 
              name="password" 
              placeholder="enter password"
              inputMode="none" 
              type={ passwordVisible ? 'text' : 'password' }
              color="light" 
              value={password} 
              onIonChange={ (event) => this.handleInputChange(event)}></IonInput>
              <IonIcon 
                icon={passwordVisible ? eye : eyeOff} 
                color="primary" 
                onClick={() => this.handlePasswordVisibility() }></IonIcon>
          </IonItem>           
        </IonItemGroup>


        <IonItemGroup>
          <IonButton expand="block" type="button" onClick={() => this.handleLogin()}>Login</IonButton>
          <IonButton expand="block" type="button" fill="clear" onClick={() => this.handleSignUp() }>Sign up</IonButton>

          <IonText color="danger" className="error">{ error }</IonText>
        </IonItemGroup>

        </div>

          </View>
    </IonPage>
  );
  }
}

export default Login;
