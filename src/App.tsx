import React from 'react';
import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonMenu } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home/Home';
import Account from './pages/Account/Account';
import AddExpense from './pages/AddExpense/AddExpense';
import MonthlyExpenses from './pages/MonthlyExpenses/MonthlyExpenses';
import Login from './pages/Login/Login';
import SideMenu from './components/SideMenu';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
    <IonMenu contentId="main" type="push" side="start">
      <SideMenu />
    </IonMenu>
      <IonRouterOutlet id="main">
        <Route path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/monthly" component={MonthlyExpenses} />
        <Route exact path="/add" component={AddExpense} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
