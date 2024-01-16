import React from "react";
import images from "../data/images";
import SelectedUserDisplay from "./SelectedUserDisplay";


const UserListDisplay = ({listVisibility,userList,handleClickedItem,handleInputClick,handleInputChange,inputVal,inputRef,selectedVal,handleClose,handleBackspace}) => {

    return(
        <div className="inputBar" ref={inputRef}>

            <div class="selectedAndInputField">
                <div>
                    <SelectedUserDisplay 
                        selectedVal={selectedVal} 
                        handleClose={handleClose}
                    />
                </div>

                <div>
                    <input 
                        type="text" 
                        className="inputField"
                        onChange={handleInputChange}
                        onClick={handleInputClick}
                        onKeyDown={handleBackspace}
                        value={inputVal}
                        placeholder="Select User..."
                    />
                </div>
            </div>

            {listVisibility &&
                <ul>
                    {userList
                        .filter((user)=>user.name.toLowerCase().includes(inputVal.toLowerCase()))
                        .map((user) => (
                            <li key={user.id} onClick={()=>handleClickedItem(user)}>
                                <div className="userDetailList">
                                    <p><img src={images[user.avatarUrl]} alt="avatar" style= {{'width':'1.2rem','height':'1.2rem','margin':'0rem 0rem 0rem 1rem'}} /></p>
                                    <p className="userNameList">{user.name}</p>
                                    <p className="userNameEmail">{user.email}</p>
                                </div>
                            </li>
                        ))
                    }
                
                </ul>
            }
        </div>
    );
}

export default UserListDisplay;