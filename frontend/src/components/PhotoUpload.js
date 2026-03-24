import React, {useState} from "react";

function PhotoUpload(){

  const [image,setImage] = useState(null)

  const handleUpload = (e)=>{
    setImage(URL.createObjectURL(e.target.files[0]))
  }

  return(

    <div style={{padding:"20px"}}>

      <h2>Upload Your Photo</h2>

      <input type="file" onChange={handleUpload}/>

      {image && (
        <div>

          <h3>Preview</h3>

          <img src={image} width="300"/>

        </div>
      )}

    </div>

  )

}

export default PhotoUpload;