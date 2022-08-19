import React, {useState , useEffect} from 'react';
import styles from './SignUp.module.css';
import {validate} from './validate';
import {notify} from './toast';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom';

const Login= () => {

    const [data , setData] = useState({
        email:"",
        password:"",
        
    })

    const [errors, setErrors] = useState({});
    const [touched,setTouched] = useState({});

    useEffect(()=>{
        setErrors(validate(data,"login"))
        
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
        if(Object.keys(errors).length){
           
            // notify("ورود با موفقیت انجام شد.","success")
            notify("اطلاعات وارد شده صحیح نمی باشند","error")
            setTouched({
                    name:true,
                    email:true,
                    password:true,
                    confirmPassword:true,
                    isAccepted:true
                })
        }
        
        const requestBody = {
            query:`
                mutation{
                   createUser(userInput : {email:"${data.email}",password:"${data.password}"}) {
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
    }

   

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer}>
                <h2 className = {styles.header}>ورود</h2>
                
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
                    <label>رمز عبور</label>
                    <input 
                        className={(errors.password && touched.password) ? styles.uncompleted : styles.formInput} 
                        type="password" 
                        name="password" 
                        value={data.password} 
                        onChange={changeHandler} 
                        onFocus={focusHandler} />
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                
                <div className={styles.formButtons}>
                    <Link to="/signup">ثبت نام</Link>
                    <button type="submit">ورود</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;