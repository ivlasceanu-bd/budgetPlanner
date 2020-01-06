import { IonHeader, IonToolbar, IonMenuButton, IonTitle } from '@ionic/react';
import React from 'react';
import './styles.css';

const Header: React.FC = () => {
    return(
        <IonHeader>
            <IonToolbar color="secodary">
                <IonTitle color="light">BudgetPlanner</IonTitle>
                <IonMenuButton slot="end" color="light"></IonMenuButton>
            </IonToolbar>
        </IonHeader>
    )    
}

export default Header