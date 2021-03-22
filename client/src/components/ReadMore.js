import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';


const ReadMore = ({text, maxLength}) => {
  const [hidden, setHidden] = useState(true)

  if (text.length <= maxLength) {
    return<span>{text}</span>
  }

  return(
    <Card header="ReadMore Component">
      <span>
        {hidden ? `${text.substr(0, maxLength).trim()} ...` : text}
        <a onClick={()=>setHidden(!hidden)}>{hidden ? " (read more)" : " (read less)"}</a>
      </span>
    </Card>
  )
}

// ReactDOM.render(
//   <ReadMore
//     text={`Focused, hard work is the real key
//       to success. Keep your eyes on the goal, 
//       and just keep taking the next step 
//       towards completing it.`}
//     maxLength={35}
//   />,
//   document.querySelector('#root')
// );

export default ReadMore;