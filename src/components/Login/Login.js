import React, {useState , useEffect} from 'react';
import styles from './Login.module.css';
import {validate} from '../validate';
import {notify} from '../toast';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

const Login= () => {

    const navigate = useNavigate();

    const [requireData , setRequireData] = useState({
        mobile:"",
        code:""
    })

    const [viewOtpForm, setViewOtpForm] = useState(false);
    const [minutes, setMinutes] = useState(2);
    const [seconds, setSeconds] = useState(30);

    const [errors, setErrors] = useState({});
    const [touched,setTouched] = useState({});


    useEffect(()=>{
        setErrors(validate(requireData,"login"))
        
    },[requireData,touched])

    useEffect(() => {
        const interval = setInterval(() => {
          if (seconds > 0) {
            setSeconds(seconds - 1);
          }
      
          if (seconds === 0) {
            if (minutes === 0) {
              clearInterval(interval);
            } else {
              setSeconds(59);
              setMinutes(minutes - 1);
            }
          }
        }, 1000);
      
        return () => {
          clearInterval(interval);
        };
      }, [seconds]);

    const changeHandler = event =>{
        if(event.target.name=="isAccepted"){
            setRequireData({...requireData,[event.target.name]:event.target.checked})
        }else{
            setRequireData({...requireData,[event.target.name]:event.target.value})
        }
        

    }

    const focusHandler = event =>{
        setTouched({...touched,[event.target.name]:true})
    }

    const loginSubmit = event =>{
        event.preventDefault();
        notify()

        setMinutes(2);
        setSeconds(30);

        axios.post("http://localhost:5000/user/auth/get-otp" , {'mobile' : requireData.mobile})
        .then(response => {
            notify(response.data.data.message , "success");
            setViewOtpForm(true);
            console.log(response.data.data.code)
                
        }).catch(errors => {
            notify(errors.response.data.errors.message , "error")
            setTouched({
                mobile : true
            })
        })        
    }

    const otpSubmit = event =>{
        event.preventDefault();
        notify()
        axios.post("http://localhost:5000/user/auth/check-otp" , {'mobile' : requireData.mobile , code : requireData.code})
        .then(response => {
            const accessToken = response.data.data.accessToken;
            notify("ورود شما با موفقیت انجام شد" , "success");
            localStorage.setItem('accessToken', accessToken);
            setTimeout(() => {
                navigate('/', { replace: true });
              }, 3000);
            
        }).catch(errors => {
            notify(errors.response.data.errors.message , "error")
            setTouched({
                code : true
            })
        })
         
    
    }

   

    return (
        <div className={styles.container}>
            <h2 className = {styles.header}>ورود</h2>
            {!viewOtpForm ? (
            <form id="loginForm" onSubmit={loginSubmit} className={styles.formContainer}>
                <h4 className={styles.header}>شماره موبایل خود را جهت ارسال کد یکبار مصرف وارد کنید</h4>
                <div className={styles.formField}>
                    <label>شماره موبایل</label>
                    <input 
                        className={(errors.mobile && touched.mobile) ? styles.uncompleted : styles.formInput} 
                        type="text" 
                        name="mobile" 
                        value={requireData.mobile} 
                        onChange={changeHandler} 
                        onFocus={focusHandler} />
                    {errors.mobile && touched.mobile && <span>{errors.mobile}</span>}
                </div>
                <div className={styles.formButtons}>
                    <button type="submit">ورود</button>
                </div>
            </form>) : (
            <form id="otpForm" onSubmit={otpSubmit} className={styles.formContainer}>
                <h4 className={styles.header}>رمز یکبار مصرف ارسال شده را وارد کنید</h4>
                <div className={styles.formField}>
                    <label>کد یکبار مصرف</label>
                    <input 
                        className={(errors.code && touched.code) ? styles.uncompleted : styles.formInput} 
                        type="text" 
                        name="code" 
                        value={requireData.code} 
                        onChange={changeHandler} 
                        onFocus={focusHandler} />
                    {errors.code && touched.code && <span>{errors.code}</span>}
                </div>
                <div className={styles.countdown}>
                    {seconds > 0 || minutes > 0 ? (
                    <p>
                        زمان باقی مانده: {minutes < 10 ? `0${minutes}` : minutes}:
                        {seconds < 10 ? `0${seconds}` : seconds}
                    </p>
                    ) : (
                    <p>کدی دریافت نکردید؟</p>
                    )}

                    <button
                        disabled={seconds > 0 || minutes > 0}
                        style={{
                        color: seconds > 0 || minutes > 0 ? "Black" : "#FF5630", borderRadius : "5px" , border : "none"
                        }}
                        onClick={loginSubmit}
                    >
                        ارسال مجدد کد
                    </button>
                </div>
                <div className={styles.formButtons}>
                    <button type="submit">ورود</button>
                </div>
            </form>
            )}
            
            <ToastContainer />
        </div>
    );
};

export default Login;