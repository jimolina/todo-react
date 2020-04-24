import React from 'react'
import './sass/todo.scss'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <div className="container-fluid p-0">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App