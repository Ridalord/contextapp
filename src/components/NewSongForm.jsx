import { useState } from "react";
import PropTypes from "prop-types";



function NewSongForm({ setSongs }) {
  
  const [title, setTitle] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(title)
    setSongs(title)
    setTitle('')
  }
  return ( 
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Song Name: </label>
      <input type="text" value={title} required onChange={(e)=>{setTitle(e.target.value)}}/>
      <input type="submit" value="Add song" />
    </form>
   );
}

export default NewSongForm;

NewSongForm.propTypes = {
  setSongs: PropTypes.func.isRequired,
};