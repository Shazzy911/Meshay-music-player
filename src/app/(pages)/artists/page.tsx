import React from 'react'

const page = () => {
  return (
    <div>
        <h1>This is the Artist page...</h1>
    </div>
  )
}


export default page

export function generateMetadata () { 
  return{
    title: "Meshay Streaming - Artist",
    description: "This is the galaxy blog, it contains information about the developer and owner of  website",
  }
}