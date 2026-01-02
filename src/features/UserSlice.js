import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName:'Tharindu',
    age: 0,
    email: '',
    address: '',
    country: '',
    phone: '',
    profilePic: '',
    isLoggedin: true
}

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserDetails: (state, action) => {
            const { userName, age, email, address, country, phone, profilePic } = action.payload;
            state.userName = userName;
            state.age = age;
            state.email = email;
            state.address = address;
            state.country = country;
            state.phone = phone;
            state.profilePic = profilePic;
        }
    }
})

export default UserSlice.reducer
export const {setUserDetails} = UserSlice.actions