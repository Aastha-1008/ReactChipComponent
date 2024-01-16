import React from "react";
import images from "../data/images";
import close from "../images/close.png";
import '../styling/Main.css';

const SelectedUserDisplay = ({selectedVal,handleClose}) => {
    return(
        <div className="selectedUser">
                {
                    selectedVal.length > 0 && (
                        <div class="allSelectedUser">
                            {selectedVal.map((user) => (
                                    <p key={user.id}>
                                        <img
                                            src={images[user.avatarUrl]}
                                            style= {{'width':'1.2rem','height':'1.2rem','margin':'0rem 1rem 0rem 0rem'}} 
                                            alt="avatar"
                                        />
                                        {user.name}
                                        <img 
                                            src={close} 
                                            style= {{'width':'.8rem','height':'.8rem','margin':'0rem 0rem 0rem 1rem'}} 
                                            alt="remove"
                                            onClick={()=>handleClose(user)}
                                        />
                                    </p>
                            ))}
                        </div>
                    )
                }
            </div>
    );
}

export default SelectedUserDisplay;