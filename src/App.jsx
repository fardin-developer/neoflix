import { useState } from 'react'
import Row from './Row'
import './App.css'
import request from './request'
import Banner from './Banner'
import Nav from './Nav' 
function App() {

  return (
    <div className="App">
      <Nav/>
      {/* <h1 style={{textAlign:"center",color:"white"}}>NeoFlix</h1> */}
      <Banner/>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trendin Now ORIGINALS" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Rommance Movies" fetchUrl={request.fetchRommanceMovies} />
      <Row title="Documentories" fetchUrl={request.fetchDocumentories} />
    </div>
  )
}

export default App
