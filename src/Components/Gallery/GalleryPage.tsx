import React from 'react';
import './GalleryPage.css';

export const GalleryPage: React.FC<any> = (props: any) => {
    const Temp = () => {
        return <div>Temp</div>
    }
    return (
        <div className = 'GalleryPage'>
            <h1>this is gallery page</h1>
            <Temp/>
        </div>
    );
}