import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'almost home', id: 1 },
    { title: 'memory gospel', id: 2 },
    { title: 'this wild darkness', id: 3 },
  ])
  const [age, setAge]= useState(20)
  const addSong = (songTitle) => {
    setSongs([...songs, { title: songTitle, id: uuidv4()}])
  }
  useEffect(() => {
    console.log("useEffect hook ran", songs)
  }, [songs])
  useEffect(() => {
    console.log("useEffect hook ran", age)
  }, [age])
  return ( 
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return (
            <li key={song.id}>
              {song.title}
            </li> 
          )
        })}
      </ul>
      {/* <button onClick={addSong}>Add a song</button> */}
      <NewSongForm setSongs={addSong} />
      <button onClick={()=>{setAge(prev=> prev+1)}}>Add 1 to age: {age}</button>
    </div>
   );
}
 
export default SongList;