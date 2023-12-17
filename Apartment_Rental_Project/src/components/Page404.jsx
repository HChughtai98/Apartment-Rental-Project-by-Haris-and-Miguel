import  '../App.css';
import { Link } from 'react-router-dom';
import bronkenVase from '../assets/brokenCat.gif'

function Page404() {
    return(
        <div> 
           <h1>404 Page Not Found</h1>
            <div>
                <div>
                    <p>Uh oh, something's broke.</p>
                    <p>That page doesn't exit.</p>
                </div>
                <img src={bronkenVase} alt="Bronken Vase" />
                <Link to='/'>
                    <button className="text-white px-4 py-2 rounded bg-green-500 hover:bg-green-600 transition duration-300 ease-in-out">Home Page</button>                
                </Link> 
            
            </div>
            
        </div>
        
    )
}
export default Page404