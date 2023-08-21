import React, { useContext,useState } from "react";
import noteContext from "./context/notes/noteContext";


const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote  } = context;
  const [note, setnote] = useState({title:"", description:"",tag:""})

  const handleClick = (e) => {
  e.preventDefault();
    addNote(note.title,note.description,note.tag);
    props.showAlert("Added Successfully","success")
  };
  const handleChange = (event) => {
    setnote({...note,[event.target.name]:event.target.value})
  };
  return (
    <div>
      <div className="container my-3">
        <h2>Add Notes</h2>
      </div>

      <div className="container my-2">
        <form>
          <div className="form-group my-2">
            <label htmlFor="title"><b>Title</b></label>
            <input
              type="text"
              className="form-control my-2"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={handleChange}
              minLength={5}
              required
            />
          </div>
          <div className="form-group my-2">
            <label htmlFor="description"><b>Description</b></label>
            <input
              type="text"
              className="form-control my-2"
              id="description"
              name="description"
              onChange={handleChange}
              minLength={5}
              required
            />
          </div>
          <div className="form-group my-2">
            <label htmlFor="tag"><b>Tag</b></label>
            <input
              type="text"
              className="form-control my-2"
              id="tag"
              name="tag"
              onChange={handleChange}
            />
          </div>

          <button disabled={note.title.length<5 || note.description.length<15}
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
