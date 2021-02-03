import React from 'react';
import './Footer.css';

const year: number = new Date().getFullYear();

export const Footer: React.FC<any> = (props: any) => {
    return (
        <div className='Footer'>
            <p>Copyright ©{year}. All Rights Reserved. Created by Whatever</p>
        </div>
    );
}