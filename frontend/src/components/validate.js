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

        if(!data.firstName.trim()){
            errors.firstName = "وارد کردن نام الزامی می باشد"
        }else{
            delete errors.firstName
        }
        if(!data.lastName.trim()){
            errors.lastName = "وارد کردن نام خانوادگی الزامی می باشد"
        }else{
            delete errors.lastName
        }
        if(!data.email.trim()){
            errors.email = "وارد کردن ایمیل الزامی می باشد"
        }else{
            delete errors.email
        }
    
    
    }

    return errors;

}