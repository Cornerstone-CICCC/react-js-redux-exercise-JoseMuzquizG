import { useDispatch, useSelector } from "react-redux"
import { incrementAge, setFirstname, setLastname } from "./UserSlice"
import { useState } from "react"

type UserState = {
    user: {
        firstname: string
        lastname: string
        age: number
    }
}

const User = () => {

    const age = useSelector((state: UserState) => state.user.age)
    const firstname = useSelector((state: UserState) => state.user.firstname)
    const lastname = useSelector((state: UserState) => state.user.lastname)
    const dispatch = useDispatch()
    const [fnInput, setFnInput] = useState<string>(firstname)
    const [lnInput, setLnInput] = useState<string>(lastname)

  return (
    <div>
        <h1>User Details:</h1>
        <h3>First name: {firstname}</h3>
        <h3>Last name: {lastname}</h3>
        <h3>Age: {age}</h3>
        <hr />
        <button onClick={() => dispatch(incrementAge())}>Increment Age</button>
        <input type="text" value={fnInput} onChange={e => setFnInput(e.target.value)} />
        <button onClick={() => dispatch(setFirstname(fnInput))}>change first name</button>
        <input type="text" value={lnInput} onChange={e => setLnInput(e.target.value)} />
        <button onClick={() => dispatch(setLastname(lnInput))}>change last name</button>
    </div>
  )
}

export default User