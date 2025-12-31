import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName: '',
    age: 0,
    email: '',
    address: '',
    country: '',
    phone: '',
    profilePic: ''
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