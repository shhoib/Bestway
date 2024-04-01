import {createSlice} from '@reduxjs/toolkit';

const initialState = [
    {
        id : Math.floor(Math.random() * 100) + 1 ,
        heading : 'To Do',
        tasks : [
              {
                taskID: Math.floor(Math.random() * 1000) + 1,
                task:'add anything'
               },
        ]
    },
    {
        id : Math.floor(Math.random() * 100) + 1 ,
        heading : 'Doing',
        tasks : [
               {
                taskID: Math.floor(Math.random() * 1000) + 1,
                task:'anything'
               },
        ]
    },
    {
        id : Math.floor(Math.random() * 100) + 1 ,
        heading : 'Done',
        tasks : [
            {
             taskID: Math.floor(Math.random() * 1000) + 1,
             task:'nothing'
            },
        ]
    },
]


export const cardSlice = createSlice({
    name : 'card',
    initialState,
    reducers:{
        addNewCard :(state,action)=>{
            state.push({
                id : Math.floor(Math.random() * 100) + 1 ,
                heading : `${action.payload}`,
                tasks : []
            })
        },
        addNewList : (state,action)=>{
            const {id,inputData} = action.payload;
                const index = state.findIndex(item => item.id === id);
                if (index !== -1) {
                    const existingTask = state[index].tasks.find(task => task.task === inputData);
                    if (!existingTask) {
                        state[index].tasks.push({
                            taskID: Math.floor(Math.random() * 1000) + 1,
                            task: inputData
                        });
                    }
                }
            // console.log('added');
        },
        deleteOldList : (state,action)=>{
            const {taskID} = action.payload;
            state.forEach(item => {
                item.tasks = item.tasks.filter(task => task.taskID !== taskID);
            });
            // console.log('deleted');
        },
        deleteCard : (state,action)=>{
            const {cardID} = action.payload
            return state.filter(card => card.id !== cardID);
        }
    }
});


export const {addNewCard, addNewList, deleteOldList,deleteCard} = cardSlice.actions;
export default cardSlice.reducer;