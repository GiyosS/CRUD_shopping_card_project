import { createSlice} from '@reduxjs/toolkit';


const initialState = {
    myUser: null

}
const slice_User = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setMyUSer: (state, action)=>{
            state.myUser = action.payload
        }
    }
})

export const {
    setMyUSer,
} = slice_User.actions
export default slice_User.reducer

