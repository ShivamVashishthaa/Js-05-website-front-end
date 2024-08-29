import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Layout from './Layout'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='user/:userid' element={<User />} />
      </Route>
    )
  )

  return (
    // <BrowserRouter>
    //   <Header />
    //   <Routes>
    //      <Route path='/' element={<Home />} />    //this is also working
    //      <Route path='/about' element={<About />} />
    //      <Route path='/contact' element={<Contact />} />
    //   </Routes>
    //   <Footer />
    // </BrowserRouter>
    // ------------------------------------------------------------
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
