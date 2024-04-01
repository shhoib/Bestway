/* eslint-disable react/prop-types */
import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import {useDispatch} from 'react-redux'
import { addNewList,deleteCard,deleteOldList } from "../../Redux/CardSlice";
import {useDrop} from 'react-dnd'
import { socket } from "../../socket";
import Tasks from "./Tasks";


const Card = ({card,setInputData,inputData}) => {

    const [showAddCardInput, setShowAddCardInput] = useState(false);
    const dispatch = useDispatch();

    const [{isOver}, dropRef] = useDrop({
        accept: 'pet',
        drop: (task)=> {
          socket.emit('change:task:toServer',{task:task.task, card, exCardId :task.cardId})
        } ,
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    })


    const hanldeCloseInput = useCallback(()=>{
        setShowAddCardInput(!showAddCardInput)
      },[showAddCardInput]);

      const handleUpdateCard = useCallback(()=>{
        if(inputData == ''){
           return window.alert('please add anything')
        }
        dispatch(addNewList({id:card.id,inputData}))
        setInputData('')
      },[card.id, dispatch, inputData, setInputData])

      const handleChangeTask = useCallback((data)=>{
        if(data.card.id == data.exCardId){
          return;
        }
        dispatch(addNewList({id:data.card.id, inputData:data.task.task}))
        dispatch(deleteOldList({taskID:data.task.taskID}))
      },[dispatch])

      useEffect(()=>{
        // console.log(' useeffect rendering');
        socket.on('change:task',handleChangeTask);

        return()=>{
            socket.off('change:task',handleChangeTask);
        }
      },[handleChangeTask])

      const handleDeleteCard = useCallback(()=>{
        dispatch((deleteCard({cardID:card.id})))
      },[card, dispatch])
      // console.log(card);
  return (
    <div className="bg-neutral-900 rounded-xl px-4 py-3 mt-2 lg:w-[400px] lg:ml-2 ">
            <h2 className="font-bold flex items-center justify-between">{card.heading.length > 20 ? `${card.heading.substring(0, 20)}..` : card.heading}
 <MdOutlineDelete onClick={handleDeleteCard} className="cursor-pointer"/></h2>

            <div ref={dropRef} className={`${isOver ? 'bg-lime-950 ease-in duration-300 p-2':null} min-h-[35px] rounded`}>
             {card.tasks.map((task,i)=>(
              <Tasks task={task} cardId={card.id} isOver={isOver} key={i}/>
              ))
            } 
           </div>
            
            {
              showAddCardInput &&
            <div>
              <input type="text" value={inputData} placeholder="Enter a title for this card" className="w-full rounded-lg p-1 mt-5 bg-neutral-500" onChange={(e)=>setInputData(e.target.value)}/>
              <div className="flex items-center gap-2">
              <button onClick={handleUpdateCard} className="bg-sky-600 py-1 px-2 rounded mt-1 font-semibold text-sm">Add a Card</button>
              <div onClick={hanldeCloseInput} className="bg-neutral-700 p-1 rounded cursor-pointer"><IoMdClose/></div>
              </div>
            </div>
            }


            {
              !showAddCardInput &&
            <div className="flex items-center gap-2 mt-4">
            <div onClick={hanldeCloseInput} className=" bg-neutral-700 rounded-full cursor-pointer"><FiPlus/></div>
            <h6 className="text-sm">Add a Card</h6>
            </div>
            }
          </div>
  )
}

export default Card