export const validate = (data,type) =>{ 

    const errors = {};

    
    if(!data.email){
        errors.email = "وارد کردن ایمیل الزامی می باشد"
    }else if (!/\S+@\S+\.\S+/.test(data.email)){
        errors.email = "آدرس ایمیل اشتباه وارد شده است"
    }else{
        delete errors.email
    }

    if(!data.password){
        errors.password = "وارد کردن رمز عبور الزامی می باشد"
    }else if(data.password.length < 6){
        errors.password = "رمز عبور باید 6 کاراکتر یا بیش از آن باشد"
    }else{
        delete errors.password
    }


    if(type === "signup"){

        if(!data.fName.trim()){
            errors.fName = "وارد کردن نام الزامی می باشد"
        }else{
            delete errors.fName
        }
        if(!data.lName.trim()){
            errors.lName = "وارد کردن نام خانوادگی الزامی می باشد"
        }else{
            delete errors.lName
        }
        if(!data.phoneNumber.trim()){
            errors.phoneNumber = "وارد کردن شماره تلفن الزامی می باشد"
        }else{
            delete errors.phoneNumber
        }

        if (!data.confirmPassword){
            errors.confirmPassword = "رمز عبور را مجددا وارد کنید"
        }else if( data.confirmPassword !== data.password){
            errors.confirmPassword = "عبارت وارد شده با رمز عبور همخوانی ندارد"
        }else{
            delete errors.confirmPassword
        }
    
        if(data.isAccepted){
            delete errors.isAccepted
        }else{
            errors.isAccepted = "پذیرش قوانین الزامی می باشد."
        }
    
    
    }

    return errors;

}