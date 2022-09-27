import axios from 'axios'


export const loginUser=(email,password)=>async (dispatch )=>{
    try {

        dispatch({
            type:"loginRequest"
        })

        const {data}=await axios.post("/login",{email,password},{
            headers:{
                "Content-Type":"application/json"
            }
        })
        dispatch({
            type:"loginSuccess",
            payload:data.user
        })
        
    } catch (error) {
        console.log(error)
        dispatch({
            type:"loginFailure",
            payload:error
        })
    }
}