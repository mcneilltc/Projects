import React from 'react'

const UserForm = (props) => {
    return(
<form onSubmit="prop.getUser" >
    <input style ={{margin: "20px auto", display: "block"}} type= "text" name= "username">
    </input>
    <button >Submit</button>
</form>
    )
}
export default UserForm