import { IonContent, IonText, IonHeader, IonToolbar, IonButton } from '@ionic/react';
import React from 'react';
import { MenuInner } from '../components/ui-elements';
import './styles.css';

const SideMenu: React.FC = () => {
    return(
        <div className="side-menu">
            <MenuInner>
                <IonHeader>
                    <IonToolbar color="primary" className="text-center">
                        <IonText>Start Menu</IonText>
                    </IonToolbar>
                </IonHeader>
                <IonContent color="dark">
                    <IonButton fill="clear" expand="full" routerLink="/home">Home</IonButton>
                    <IonButton fill="clear" expand="full" routerLink="/monthly">Monthly Expenses</IonButton>
                    <IonButton fill="clear" expand="full" routerLink="/account">Account</IonButton>
                    <IonButton fill="clear" expand="full" routerLink="/add">Add Expense</IonButton>
                </IonContent>
            </MenuInner>
        </div>
    )    
}

export default SideMenu