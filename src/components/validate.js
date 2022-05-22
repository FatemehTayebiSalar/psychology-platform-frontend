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

        if(!data.name.trim()){
            errors.name = "وارد کردن نام کاربری الزامی می باشد"
        }else{
            delete errors.name
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
            errors.isAccepted = "قوانین ما را می پذیرید"
        }
    
    
    }

    return errors;

}