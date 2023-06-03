import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Navbar } from '../components/navigation';
import { Footer } from '../components/navigation';


const Layout = (props) => {
    return (
        <div>
            <Navbar/>
            <ToastContainer autoClose={5000} />
            {props.children}
            <Footer/>
        </div>
    )
}
export default Layout;