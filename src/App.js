import React from 'react';
import Row from './Row';
import Banner from './Banner'
import requests from './request'
import Nav from './Nav'
import './App.css';

function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner/>
      <Row title="Netflix Originals" fetchUrl = {requests.fetchNetflixOriginals} isLargeRow = {1} />
      <Row title="Trending Now" fetchUrl = {requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl = {requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl = {requests.fetchComedyMovies} />
      <Row title="Horrow Movies" fetchUrl = {requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl = {requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl = {requests.fetchDocumentariesMovies} />
    </div>
  );
}

export default App;
