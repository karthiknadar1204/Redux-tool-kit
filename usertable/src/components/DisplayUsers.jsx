import { useSelector } from "react-redux"
import { removeUser } from "../store/slices/UserSlice";
import {useDispatch} from 'react-redux';

const DisplayUsers = () => {
    const dispatch=useDispatch();
    const data=useSelector((state)=>{
        return state.users;
    })
    console.log(data)

    const deleteUser=(id)=>{
        dispatch(removeUser(id))
    }

  return (
    <div>
        {
            data.map((user,id)=>{
                return <li key={id} >
                    {user}
                    <button onClick={()=>deleteUser(id)} >
                        delete single
                    </button>
                </li>
            })
        }
    </div>
  )
}

export default DisplayUsers