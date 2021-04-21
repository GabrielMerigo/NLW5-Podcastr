// SPA
// SSR
// SSG

import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    fetch('http://localhost:3333/episodes')
      .then((response) => response.json())
      .then( response =>console.log(response))
  }, [])

  return (
    <h1>index</h1>
  )
}
