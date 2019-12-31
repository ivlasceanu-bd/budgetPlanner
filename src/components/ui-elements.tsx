import React from 'react'
import './styles.css';

export const View: React.FC = (props) => (
    <div className="full-height ion-padding">
        {props.children}
    </div>
)