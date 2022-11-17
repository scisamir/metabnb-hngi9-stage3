import './App.css';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx'
import Places from './components/Places.jsx';
import Footer from './components/Footer.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "places",
    element: <Places />
  }
])

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
