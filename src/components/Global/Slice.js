import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState ={
    users:[],
    loggedInUser:{},
    isLoggedIn: false
}

export const WeatherApp = createSlice({
    name:"WeatherWise",
    initialState,
    reducers: {
        signUp: (state, action)=>{
            const newUser ={
                fullname: action.payload.fullname,
                email: action.payload.email,
                password: action.payload.password
            }

            state.users.push(newUser)
        },
        login:(state, {payload})=>{
            const findUser = state.users.findIndex((e)=> e.email === payload.email)

            if (findUser !== -1) {
                if (state.users[findUser].password === payload.password) {
                    state.isLoggedIn === true,
                    state.loggedInUser = state.users[findUser]
                } else {
                    toast.error("Incorrect password!")
                }
            } else {
                toast.error("User not found please Check email and try again")
            }
        },
        logout:(state)=>{
            state.isLoggedIn === false
            state.loggedInUser = {}
        }
    }
})

export const {signUp, login, logout} = WeatherApp.actions
export default WeatherApp.reducer

