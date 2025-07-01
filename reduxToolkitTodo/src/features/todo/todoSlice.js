import {createSlice,nanoid} from '@reduxjs/toolkit';

const initialState = {
    todo:[{id :1,text:"Hello world"}]
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state, action) => { //state variable humesha access dega current initial state ka, actions mein se values access krte hain method ke through
          const addTodo    = {
            id :1,text:"Hello world"
          } 
        },
        removeTodo: () => {},
    }
})