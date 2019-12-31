import { IonContent, IonText } from '@ionic/react';
import React from 'react';
import Account from '../pages/Account/Account';
import AddExpense from '../pages/AddExpense/AddExpense';

const SideMenu: React.FC = () => {
    return(
        <IonContent>
            <IonText>App Menu</IonText>
            <IonText>Account</IonText>
            <IonText>Settings</IonText>
        </IonContent>
    )    
}

export default SideMenu