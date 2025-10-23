import React, {useState , useEffect} from 'react';
import styles from './Styles/UserInfo.module.css';
import {validate} from '../validate.js';
import {notify} from '../toast';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import editIcon from '../../images/userProfile/editIcon.png'

const UserInfo = () => {

    const [data, setData] = useState({});
    const [editedData , setEditedData] = useState({
        firstName:"",
        lastName:"",
        email:""
    });

    const [viewEditForm , setViewEditForm] = useState(false)
    const [errors, setErrors] = useState({});
    const [touched,setTouched] = useState({});

    const accessToken = localStorage.getItem('accessToken');
    useEffect(() => {
        axios.get("http://localhost:5000/user/profile" , {
            headers: {
              authorization: `Bearer ${accessToken}`
            }
          })
        .then(response => {
            setData(response.data.data.profile);     
        }).catch(errors => {
            console.log(errors.response.data.errors.message)

        })
    } , []);

    const viewEditFormHandler = () => {
        setViewEditForm(true)
    }

    useEffect(()=>{
        setErrors(validate(editedData,"signup"))
        
    },[editedData,touched])

    const changeHandler = event =>{
        if(event.target.name=="isAccepted"){
            setEditedData({...editedData,[event.target.name]:event.target.checked})
        }else{
            setEditedData({...editedData,[event.target.name]:event.target.value})
        }
        

    }

    const focusHandler = event =>{
        setTouched({...touched,[event.target.name]:true})
    }

    const submitHandler = event =>{
        event.preventDefault();
        notify()
        if(!Object.keys(errors).length){
            axios.post("http://localhost:5000/user/profile/update" , {'firstName' : editedData.firstName , lastName : editedData.lastName , "email" : editedData.email})
        .then(response => {
            notify("ویرایش با موفقیت انجام شد" , "success");
            
        }).catch(errors => {
            console.log(errors.response.data.errors.message)
        })

        }else{
            notify("اطلاعات وارد شده صحیح نمی باشند","error")
            setTouched({
                    firstName:true,
                    lastName:true,
                    email:true,
                })
        }
    }

   
        return (
            <div className={styles.container}>
                <form onSubmit={submitHandler} className={styles.formContainer}>

                    <div className={styles.formField}>
                        <label>شماره تلفن </label>
                        <span className={styles.phoneField}>{data.mobile}</span>
                        
                        
                    </div>

                    <div className={styles.formField}>
                        <label>نام </label>
                        {!viewEditForm ? (
                            <span className={styles.valueField}>{data.firstName}</span>
                        ) : (
                            <span>
                                <input
                                className={(errors.firstName && touched.firstName) ? styles.uncompleted : styles.formInput} 
                                type="text" 
                                name="firstName" 
                                value={editedData.firstName} 
                                onChange={changeHandler} 
                                onFocus={focusHandler}/>
                                {errors.firstName && touched.firstName && <span className={styles.errors}>{errors.firstName}</span>} 
                            </span>
                        )}
                        <img src={editIcon} onClick={() => viewEditFormHandler}/>
                    </div>
                    <div className={styles.formField}>
                        <label>نام خانوادگی </label>
                        {!viewEditForm ? (
                        <span className={styles.valueField}>{data.lastName}</span>
                        ) : (
                            <span>
                                <input
                                className={(errors.lastName && touched.lastName) ? styles.uncompleted : styles.formInput} 
                                type="text" 
                                name="lastName" 
                                value={editedData.lastName} 
                                onChange={changeHandler} 
                                onFocus={focusHandler}/>
                                {errors.lastName && touched.lastName && <span className={styles.errors}>{errors.lastName}</span>}
                            </span>
                        )}
                        <img src={editIcon} onClick={viewEditFormHandler}/>
                    </div>
                    
                    <div className={styles.formField}>
                        <label>ایمیل</label>
                        {!viewEditForm ? (
                            <textarea>{data.email}</textarea>
                        ) : (
                            <span>
                                <input 
                                className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput} 
                                type="text" 
                                name="email" 
                                value={editedData.email} 
                                onChange={changeHandler} 
                                onFocus={focusHandler} />
                                {errors.email && touched.email && <span className={styles.errors}>{errors.email}</span>}
                            </span>
                        )}
                        <img src={editIcon} onClick={viewEditFormHandler}/>
                    </div>

                    <div className={styles.formButtons}>
                        <button type="submit" >ویرایش</button>
                    </div>
                </form>
                <ToastContainer />
                
                
            </div>
        );
}

export default UserInfo;