import React,{useState,useEffect,useRef} from "react";
import "../styling/Main.css";
import users from "../data/users";
import UserListDisplay from "./UserListDisplay";
import img1 from '../images/img1.svg';
import img2 from '../images/img2.svg';

const Main = () => {
    const [inputVal, setInputVal] = useState('');
    const [selectedVal,setSelectedVal] = useState([]);
    const [userList,setUserList] = useState(users);
    const [listVisibility,setListVisibility] = useState(false);
    const inputRef = useRef(null);

    const backValue = (inputValue) =>{
        if((!inputValue || inputValue.length <=0) && selectedVal.length>0){
            var length = selectedVal.length;
            var user = selectedVal[length - 1];
            setInputVal(user.name);
            setUserList([...userList,user]);
            setSelectedVal(selectedVal.filter((u)=>u.id !== user.id));
            console.log(user);
        }

    }

    const handleBackspace = (event) => {
        if(event.keyCode === 8 && inputVal === ''){
            backValue();
        }
    }

    const handleInputChange = (val) => {
        setInputVal(val.target.value);
        setListVisibility(true);
    };

    const handleInputClick = () => {
        setListVisibility(true);
    }

    const handleClickedItem = (user) => {
        setSelectedVal([...selectedVal,user]);
        setInputVal('');
        setListVisibility(false);
        setUserList(userList.filter((d)=>d.id !== user.id));
    };

    const handleClose = (user) => {
        setSelectedVal(selectedVal.filter((u)=>u.id !== user.id));
        setUserList([...userList,user]);
    };

    const handleClickOutside = (event) => {
        if (inputRef.current && !inputRef.current.contains(event.target)) {
          setListVisibility(false);
        }
    };
    
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return(
        <div className="mainComponent">
            <div className="heading">
                <h2>Select Users : </h2>
            </div>

            <UserListDisplay 
                listVisibility={listVisibility} 
                userList={userList} 
                handleClickedItem={handleClickedItem} 
                handleInputClick={handleInputClick}
                handleInputChange={handleInputChange}
                inputVal={inputVal}
                inputRef={inputRef}
                selectedVal={selectedVal} 
                handleClose={handleClose}
                handleBackspace={handleBackspace}
            />

            <div className="img1">
                <img src={img1} alt="" style={{'width':'15rem','height':'15rem'}}/>  
            </div>
            <div className="img2">
                <img src={img2} alt="" style={{'width':'15rem','height':'15rem'}}/>
            </div>
        </div>
    );
};

export default Main;