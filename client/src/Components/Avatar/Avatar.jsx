import React from "react";
import avt from "../../logo-color.png";
import "./Avatar.css";
const Avatar = () => {
    
    const Avt = 
        {
            image: avt,
            name : "User",
        }
    
    return (
        <div>
            <div className="avatar-container">
                <div className="avt-image">
                    <div className="avatar-name">
                        <img src={Avt.image} alt="Avatar" />
                        <p>{Avt.name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Avatar