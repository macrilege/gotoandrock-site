import React, { useState } from "react";
import "./Magic8Ball.css";
import { motion } from "framer-motion";
function Magic8Ball({ answerData }) {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("Ask a Question and Click");

  const items = Array.from(answerData);
  function changeAnswer() {
    // console.log(items[Math.floor(Math.random() * items.length)]);
    //setAnswer(items[Math.floor(Math.random() * items.length)]);
    setInput("");
    setAnswer(items[Math.floor(Math.random() * items.length)]);
  }

  function handleChange(event) {
    setInput(event.target.value);
  }

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={e => changeAnswer(e)}>Ask the ball</button>
      <h3>Magic 8 Ball:</h3>
      <div className="ball">
        <div className="ball__tag" onClick={e => changeAnswer(e)}>
          <motion.span
            transition={{
              duration: 0.5,
              ease: "easeInOut"
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, rotate: 8 }}
            whileHover={{ scale: 1.0, rotate: 15 }}
            whileTap={{ scale: 0.4 }}
            className="ball__answer"
          >
            {answer}
          </motion.span>
        </div>
        {/* <div className="ball__tag" onClick={e => changeAnswer(e)}>
          <span className="ball__answer">{answer}</span>
        </div> */}
      </div>
    </div>
  );
}

export default Magic8Ball;
