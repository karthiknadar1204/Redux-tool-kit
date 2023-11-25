import {createSlice} from '@reduxjs/toolkit'

const UserSlice=createSlice({
    name:'user',
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload)
        },

        removeUser(state,action){
            // console.log('hii'+action.payload);
            state.pop(action.payload);

        },

        deleteUsers(state,action){

        }

    }
})

console.log(UserSlice.actions)

export const { addUser, removeUser, deleteUsers } = UserSlice.actions;
export default UserSlice.reducer;