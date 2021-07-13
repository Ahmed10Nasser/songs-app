export const SET_NAME="set_name";
export const SET_EMAIL="set_email";
export const SET_PHONE="set_phone";

export function set_name(name){
    return{
        type: SET_NAME,
        payload:{
            name: name
        }
    }
}

export function set_email(email){
    return{
        type: SET_EMAIL,
        payload:{
            email: email
        }
    }
}

export function set_phone(phone){
    return{
        type: SET_PHONE,
        payload:{
            phone: phone
        }
    }
}