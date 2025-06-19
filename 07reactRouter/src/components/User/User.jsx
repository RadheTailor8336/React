import React from 'react' // Import React
import { useParams } from 'react-router-dom'    // Import useParams hook to access route parameters

function User() {

    const { userid } = useParams() // Extract 'userid' parameter from the URL
    return (
        <div className='bg-gray-600'>User: {userid}</div> // Display the userid from the route
    )
}

export default User // Export
