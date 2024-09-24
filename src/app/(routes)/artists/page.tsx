import React from 'react'

const Page = () => {
  return (
    <main>
        <h1>This is the Artist Page...</h1>
    </main>
  )
}


export default Page

export function generateMetadata () { 
  return{
    title: "Meshay Streaming - Artist",
    description: "This is the galaxy blog, it contains information about the developer and owner of  website",
  }
}