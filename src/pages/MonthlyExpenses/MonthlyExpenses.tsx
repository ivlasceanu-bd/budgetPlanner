import { IonPage, IonList, IonContent, IonItemSliding, IonItemOptions, IonItemOption, IonLabel, IonItem } from '@ionic/react';
import React from 'react';
import Header from '../../components/Header';

const MonthlyExpenses: React.FC = () => {
    return(
        <IonPage>
            <Header />
            <IonContent color="dark">
                <IonList>
                    <IonItemSliding color="dark">
                        <IonItem color="dark">
                            <IonLabel>New Item</IonLabel>
                        </IonItem>

                        <IonItemOptions side="end">
                            <IonItemOption color="secondary" onClick={ () => console.log('clicked edit') }>Edit</IonItemOption>
                            <IonItemOption color="danger" onClick={ () => console.log('clicked delete') }>Delete</IonItemOption>
                        </IonItemOptions>
                    </IonItemSliding>
                </IonList>
            </IonContent>
        </IonPage>
    )    
}

export default MonthlyExpenses