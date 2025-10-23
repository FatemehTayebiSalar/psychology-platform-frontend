import React, { Component } from 'react';
import styles from './Styles/UserProfile.module.css';
import dashboardIcon from '../../images/userProfile/dashboardIcon.png'
import UserInfo from './UserInfo';

class UserProfile extends Component {
    constructor(props){
        super(props) 
        this.state = {showUserInfo : false , showAppointments : false , showTickets : false}
    }

    userInfoHandler = () =>{
        this.setState({showUserInfo : true , showAppointments : false , showTickets : false});
    };

    appointmentsHandler = () =>{
        this.setState({showUserInfo : false , showAppointments : true , showTickets : false});
    };

    ticketsHandler = () =>{
        this.setState({showUserInfo : false , showAppointments : false , showTickets : true});
    };

    render() {
        return (
            <div className={styles.container}>
                
                <div className={styles.bodyContainer}>
                    <div className={styles.body}>
                        <div className = {styles.options}>
                            <span className={styles.header}>
                                <img src={dashboardIcon} alt="dashboardIcon"/>
                                <h3 >حساب کاربری</h3>
                            </span>
                            
                            <span className={styles.info} onClick = {this.userInfoHandler}>اطلاعات کاربری</span>
                            <span className={styles.appointments} onClick = {this.appointmentsHandler}>وقت های مشاوره</span>
                            <span className={styles.tickets} onClick = {this.ticketsHandler}>رویداد ها</span>
                        </div>
                        {this.state.showUserInfo && (
                        <div className={styles.contentContainer}>
                            
                            <div className={styles.contentHeader}>
                                <span>مشاهده و ویرایش اطلاعات</span>
                            </div>
                            <div className={styles.content}>
                                <UserInfo className={styles.userInfo}/>
                            </div>

                        </div>) }
                        {this.state.showAppointments && (
                        <div className={styles.contentContainer}>
                            
                            <div className={styles.contentHeader}>
                                <span>عنوان کانتنت</span>
                            </div>
                            <div className={styles.content}>
                                <span>قسمت های مربوطه</span>
                            </div>

                        </div>) }
                        {this.state.showTickets && (<div className={styles.contentContainer}>
                            
                            <div className={styles.contentHeader}>
                                <span>عنوان کانتنت</span>
                            </div>
                            <div className={styles.content}>
                                <span>قسمت های مربوطه</span>
                            </div>

                        </div>) }
                        
                    </div>
                    
                </div>
                
            </div>
        );
    }
}

export default UserProfile;