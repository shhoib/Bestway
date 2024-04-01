/* eslint-disable react/prop-types */
import { useDrag } from 'react-dnd'


const Tasks = ({task,cardId}) => {
    const [, dragRef] = useDrag({
        type: 'pet',
        item: { task,cardId },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })

  return (
    <>
    <h6 ref={dragRef} className="bg-neutral-700 font-semibold text-sm rounded-lg p-3 mt-3 ">{task.task}</h6>
    </>
  )
}

export default Tasks