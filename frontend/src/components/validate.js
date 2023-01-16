export const validate = (data,type) =>{ 

    const errors = {};

    
    if(!data.mobile){
        errors.mobile = "وارد کردن شماره موبایل الزامی می باشد"
    }else{
        delete errors.mobile
    }

    if(!data.code){
        errors.code = "وارد کردن رمز یکبار مصرف الزامی می باشد"
    }else{
        delete errors.code
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
        if(!data.email.trim()){
            errors.email = "وارد کردن شماره تلفن الزامی می باشد"
        }else{
            delete errors.email
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