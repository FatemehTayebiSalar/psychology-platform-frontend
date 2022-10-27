import React, {useState , useEffect} from 'react';
import styles from './SignUp.module.css';
import {validate} from './validate';
import {notify} from './toast';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from "react-router-dom";

const SignUp = () => {



    const [data , setData] = useState({
        fName:"",
        lName:"",
        phoneNumber:"",
        email:"",
        password:"",
        confirmPassword:"",
        isAccepted:false
    })

    const [errors, setErrors] = useState({});
    const [touched,setTouched] = useState({});

    useEffect(()=>{
        setErrors(validate(data,"signup"))
        
    },[data,touched])

    const changeHandler = event =>{
        if(event.target.name=="isAccepted"){
            setData({...data,[event.target.name]:event.target.checked})
        }else{
            setData({...data,[event.target.name]:event.target.value})
        }
        

    }

    const focusHandler = event =>{
        setTouched({...touched,[event.target.name]:true})
    }

    const submitHandler = event =>{
        event.preventDefault();
        notify()
        if(!Object.keys(errors).length){
            const requestBody = {
                query:`
                    mutation{
                       createUser(userInput : {email:"${data.email}",password:"${data.password}",fName:"${data.fName}",lName:"${data.lName}",phoneNumber:"${data.phoneNumber}"}) {
                           _id
                           email
                       } 
                    }
                
                
                `
            };
    
            fetch('http://localhost:8000/graphql', {
                method: 'Post',
                body:JSON.stringify(requestBody),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            notify("ثبت نام شما با موفقیت انجام شد","success")


        }else{
            notify("اطلاعات وارد شده صحیح نمی باشند","error")
            setTouched({
                    fName:true,
                    lName:true,
                    phoneNumber:true,
                    email:true,
                    password:true,
                    confirmPassword:true,
                    isAccepted:true
                })
        }
    }

   

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer}>
                <h2 className = {styles.header}>ثبت نام</h2>
                <div className={styles.formField}>
                    <label>نام </label>
                    <input
                        className={(errors.fName && touched.fName) ? styles.uncompleted : styles.formInput} 
                        type="text" 
                        name="fName" 
                        value={data.fName} 
                        onChange={changeHandler} 
                        onFocus={focusHandler}/>
                    {errors.fName && touched.fName && <span>{errors.fName}</span>}
                </div>
                <div className={styles.formField}>
                    <label>نام خانوادگی </label>
                    <input
                        className={(errors.lName && touched.lName) ? styles.uncompleted : styles.formInput} 
                        type="text" 
                        name="lName" 
                        value={data.lName} 
                        onChange={changeHandler} 
                        onFocus={focusHandler}/>
                    {errors.lName && touched.lName && <span>{errors.lName}</span>}
                </div>
                <div className={styles.formField}>
                    <label>شماره تلفن </label>
                    <input
                        className={(errors.phoneNumber && touched.phoneNumber) ? styles.uncompleted : styles.formInput} 
                        type="text" 
                        name="phoneNumber" 
                        value={data.phoneNumber} 
                        onChange={changeHandler} 
                        onFocus={focusHandler}/>
                    {errors.phoneNumber && touched.phoneNumber && <span>{errors.phoneNumber}</span>}
                </div>
                <div className={styles.formField}>
                    <label>ایمیل</label>
                    <input 
                        className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput} 
                        type="text" 
                        name="email" 
                        value={data.email} 
                        onChange={changeHandler} 
                        onFocus={focusHandler} />
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div className={styles.formField}>
                    <label>رمز ورود</label>
                    <input 
                        className={(errors.password && touched.password) ? styles.uncompleted : styles.formInput} 
                        type="password" 
                        name="password" 
                        value={data.password} 
                        onChange={changeHandler} 
                        onFocus={focusHandler} />
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <div className={styles.formField}>
                    <label>تکرار رمز عبور</label>
                    <input
                        className={(errors.confirmPassword && touched.confirmPassword) ? styles.uncompleted : styles.formInput}  
                        type="password" 
                        name="confirmPassword" 
                        value={data.confirmPassword} 
                        onChange={changeHandler} 
                        onFocus={focusHandler} />
                    {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>
                <div className={styles.formField}>
                    <div className={styles.checkboxContainer}>
                        <label>من تمامی قوانین و مقررات را می پذیرم</label>
                        <input 
                            type="checkbox" 
                            name="isAccepted" 
                            value={data.isAccepted} 
                            onChange={changeHandler} 
                            onFocus={focusHandler} />
                    </div>
                    {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
                    
                </div>
                <div className={styles.formButtons}>
                    <Link to="/login">ورود</Link>
                    <button type="submit" >ثبت نام</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUp;