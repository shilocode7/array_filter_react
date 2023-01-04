import React from 'react'

function App() {
  const nulist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <div>
      practice
      {nulist.length % 2 ===0 ? 'even' : 'odd'}

      {nulist.map((n, i) =><div key={i}>{n % 2 == 0 && n}</div>)}
      
      {nulist.map((n, i) =><div key={i}>
        {n % 3 == 0 ?
        <p style={{color:"red"}} > {n}</p>:
        <p>{n}</p>}
    </div>)
      }
    </div>
  )
}

export default App
