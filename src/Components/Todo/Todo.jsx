import React, { useState } from "react";
import "./Todo.css";
import { FaPlus } from "react-icons/fa";
import { MdDelete,MdEditNote  } from "react-icons/md";
const Todo = () => {
  const [input, setinput] = useState("");
  const [addButtton, setAddButtton] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleinput = (e) => {
    setinput(e.target.value);
  };
  const handleInputButton = () => {
    if(editIndex!=null){
      const updatedNote=[...addButtton]
      updatedNote[editIndex]=input
      setAddButtton(updatedNote)
      setEditIndex(null)
    }else{
      setAddButtton([...addButtton, input]);
      setinput('')
    }

  };
  const handleDelete=(index)=>{
setAddButtton(addButtton.filter((data,dataindex)=>dataindex!=index))
  }
  const handleEdit=(index)=>{
    setinput(addButtton[index])
    setEditIndex(index)
  }
  return (
    <>
      <main>
        <section className="main-section">
          {/* tttle */}
          <div className="title">
            <h2>TODO LIST</h2>
            <h3>Have a good day🌝 ☕ </h3>
          </div>
          {/*input section  */}
          <div className="input-section">
            <input value={input} type="text" placeholder="REMAINDER" onChange={handleinput} />
            <i onClick={handleInputButton}>
              <FaPlus />
            </i>
          </div>
          {/* article section */}
          <section>
            <div className="todo">
              {
                addButtton.map((data,index)=>((
                  <div className="todo-input">
                  <article>{data}</article>
  
                  <i onClick={()=>handleDelete(index)}>
                    <MdDelete />
                  </i>
                  <i onClick={()=>handleEdit(index)}><MdEditNote /></i>
                </div>
                )))
              }
           
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default Todo;
