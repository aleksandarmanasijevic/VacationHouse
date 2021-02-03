import React from 'react';
import {Link} from "react-router-dom";
import './NavigationBar.css';
import placeholderLogo from '../../../Images/placeholderLogo.png'

export const NavigationBar: React.FC<any> = (props: any) => {
    return (
            <div className= 'NavigationBar'>
                <Link className='LogoLink' to="/"><img src={placeholderLogo}  /></Link>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/GalleryPage">GalleryPage</Link>
                    </li>
                    <li>
                        <Link to="/ContactUs">ContactUs</Link>
                    </li>
                </ul>
            </div>
    );
}