import { IonContent, IonText } from '@ionic/react';
import React from 'react';
import { Inner } from '../components/ui-elements';
import './styles.css';

const Header: React.FC = () => {
    return(
        <div className="header">
            <Inner>app header</Inner>
        </div>
    )    
}

export default Header