import React from "react";
import "./Todo.css";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const Todo = () => {
  return (
    <>
      <main>
        <section className="main-section">
          <div>
            
          </div>
          <div className="title">
            <h2>TODO LIST</h2>
            <h3>Have a good day🌝 ☕ </h3>
          </div>

          <div className="input-section">
            <input type="text" />
            <i>
              <FaPlus />
            </i>
          </div>
          <section>
          <div className="todo">
            <div className="todo-input">
           <article>

           </article>
              <i><MdDelete /></i>

            </div>

          </div>
        </section>
         
        </section>
        
      </main>
    </>
  );
};

export default Todo;
