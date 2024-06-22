import Home from '../pages/public/Home';
import Device from '../pages/public/Device';
import Verify from '../pages/public/Verify';


export default [
    { path: "/", element: <Home /> },
    { path: "/device", element: <Device /> },
    { path: "/verify", element: <Verify /> }
]