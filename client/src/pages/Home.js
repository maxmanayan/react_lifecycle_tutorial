import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Clock from '../components/Clock';


// functional component -- just a JS function
const Home = () => {
  const [testData, setTestData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    getData()
  },[])

  const getData = async () => {
    try {
      let res = await axios.get('/api/api_test')
      setTestData(res.data.data_here)
      setLoading(false)
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }

  if(loading) return <p>Loading</p>
  return(
    <div>
      <h1>Home</h1>
      {testData && testData}
    </div>
  )
}

// class component
// class Home extends React.Component {
//   render(){
//     return(
//       <div>
//         <h1>Home</h1>
//       </div>
//     )
//   }
// }

export default Home;