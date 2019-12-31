import { IonPage } from '@ionic/react';
import React from 'react';
import { View, Inner } from '../../components/ui-elements';
import SideMenu from '../../components/SideMenu';
import Header from '../../components/Header';


const Home: React.FC = () => {
  return(
    <IonPage>
      <Header />
      <View>
        Homepage
      </View>
      <SideMenu />
    </IonPage>
  )
};

export default Home;

