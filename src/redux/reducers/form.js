import produce from "immer";
import { SET_EMAIL, SET_NAME, SET_PHONE } from "../actions/form";

const defaultForm={
    name:"",
    email:"",
    phone:""
}


export default function form(form= defaultForm, action){
    switch(action.type){
        case SET_NAME:
            return produce(form, newForm=>{
                newForm.name=action.payload.name;
            });
        case SET_EMAIL:
            return produce(form, newForm=>{
                newForm.email=action.payload.email;
            });
        case SET_PHONE:
            return produce(form, newForm=>{
                newForm.phone=action.payload.phone;
            })
        default:
            return form;
    }
}