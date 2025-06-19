import React, { useEffect ,useState} from 'react' // Import React and hooks
import { useLoaderData } from 'react-router-dom' //importing useLoaderData hook to fetch data from loader

function Github() {
   const data = useLoaderData() //using useLoaderData to fetch data from loader
//     const [data, setData] = useState([])   //state
//   useEffect(() =>{ //useEffect hook to fetch data when component mounts
//     fetch('https://api.github.com/users/RadheTailor8336') //fetching data from github api
//     .then(response => response.json()) //converting response to json
//     .then(data=>{
//         console.log(data); 
//         setData(data) //setting state with followers count
        
//     })

//   },[])
       
    return (
        <div className='text-center m-4 bg-gray-600 text-white 
        p-4 text-3xl'>Github Followers:{data.followers} 
        
        <img src={data.avatar_url} alt="Git Picture" width={300} /> 
        
        </div>
        
    )
}

export default Github // Export Github component

export const githubInfoLoader = async() =>{
    const response = await  fetch('https://api.github.com/users/RadheTailor8336') // Fetch user data from GitHub API
    return response.json() //returning json data
}
