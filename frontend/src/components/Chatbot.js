import React,{useState} from "react"
import axios from "axios"

function Chatbot(){

  const [message,setMessage] = useState("")
  const [reply,setReply] = useState("")

  const sendMessage = async()=>{

    const res = await axios.post("http://localhost:5000/chat",{
      question:message
    })

    setReply(res.data.answer)

  }

  return(

    <div style={{padding:"20px"}}>

      <h2>Customer Support</h2>

      <input
        type="text"
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        placeholder="Ask something..."
      />

      <button onClick={sendMessage}>
        Send
      </button>

      <h3>Bot Reply</h3>

      <p>{reply}</p>

    </div>

  )

}

export default Chatbot