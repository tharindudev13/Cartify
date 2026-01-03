import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    FName:'Tharindu',
    LName: '',
    age: 0,
    email: '',
    address: '',
    country: '',
    phone: '',
    profilePic: '',
    isLoggedin: false
}

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            const { fname,lname, age, email, address, country, phone } = action.payload;
            state.FName = fname;
            state.LName = lname;
            state.age = age;
            state.email = email;
            state.address = address;
            state.country = country;
            state.phone = phone;
            state.isLoggedin = true
            // state.profilePic = profilePic;
        }
    }
})

export default UserSlice.reducer
export const {login} = UserSlice.actions