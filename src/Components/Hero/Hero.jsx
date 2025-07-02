import React, {useEffect, useState} from "react";
import "./Hero.css";
import{v4 as uuidv4} from 'uuid';






    const Hero = () => {

      const [editid, seteditid] = useState(null);
      const [edittext, setedittext] = useState("");
      const [show, setshow] = useState(false);
      const [note, setnote] = useState([]);
      const [text, settext] = useState("");
      const addnote=()=>{
        if(!text.trim()) return;


        const newnote={
          id:uuidv4(),
          text:text,
        }



        setnote([...note,newnote]);
        
        settext("");
      }
          
       const startedit =(id,text)=>{
          seteditid(id);
          setedittext(text);
       }



     const  saveedit=()=>{
      const updated=note.map((n)=>
        n.id===editid?{...n, text:edittext}:n
    );

    setnote(updated);
    seteditid(null);
    setedittext("");
     }





      useEffect(() => {
        const saved =localStorage.getItem("notes");
        if(saved){
          setnote(JSON.parse(saved));
        }
      },[]);
   useEffect(() => {
  // Avoid saving empty array on initial load
  if (note.length > 0) {
    localStorage.setItem("notes", JSON.stringify(note));
  }
}, [note]);

const deletenote=(id)=>{
  const updatenote=note.filter((n)=>n.id!==id);
  setnote(updatenote)
}



  return (
    
    <section className="hero">
      <div className="hero-content">
       {( ! show  &&
       
       <>
       <h2>Organize your thoughts effortlessly 🧠</h2>
        <p>
          Create, edit, and save notes — all in one clean interface. Your ideas, always within reach.
        </p>
        <button className="hero-btn" onClick={()=>setshow(true)}>Start Writing</button>
    </>        
        )}
        {( show&& <div className="add-note-container">
      <h2>Add a New Note</h2>
      <textarea
      value={text}
      onChange={(e)=>settext(e.target.value)}
        className="note-input"
        placeholder="Write your note here..."
        rows="5"
      ></textarea>
      <button className="add-note-btn" onClick={addnote}>Add Note</button>
    </div>)}

 <div className="notes-wrapper">
  <ul className="note-list">
    {note.map((note) => (
      <li key={note.id} className="note-item">

        
  {editid===note.id?(
<>
     <input type="text"
     value={edittext}
     onChange={(e)=>setedittext(e.target.value)}
     className="edit-value"
     />
     <button onClick={saveedit}>💾</button>
</>):(

<>

{note.text}
    <button className="edit-btn" onClick={() => startedit(note.id, note.text)}>📝</button> 
</>
)}







        
         <button className="delete-btn" onClick={() => deletenote(note.id)}>
      🗑️
    </button>

      </li>
    ))}
  </ul>


</div>
      </div>
    </section>

  );
};

export default Hero;
