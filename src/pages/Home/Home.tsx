import { IonPage, IonText } from '@ionic/react';
import React from 'react';
import { View } from '../../components/ui-elements';
import Header from '../../components/Header';
import './home.css';


const Home: React.FC = () => {
  return(
    <IonPage>
      <Header />
        <View>
          <div className="inner">
              <IonText color="light">
                <h3 className="heading-lg text-center">Total savings</h3>
              </IonText>
              <IonText color="light"><h1 className="heading-xl text-center">8000<span className="small">ron</span></h1></IonText>
          </div>
        </View>

    </IonPage>
  )
};

export default Home;

