import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Strategy from './components/Strategy';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Error from './components/Error';


function App() {
  return (
    <div>
      <Home></Home>
      <Services></Services>
      <Strategy></Strategy>
      <Testimonials></Testimonials>
      <Blog></Blog>
      <Contact></Contact>
      <Error></Error>
    </div>
  );
}

export default App;
