import  '../App.css';
import github from '../assets/GitHub.png';
import linkedin from '../assets/LinkedIn.png';
import "/src/styles/About.css";


function About() {
    return(
        <div className='content'>
            <div className='title'>
                <h2>Project Designers</h2>
            </div>
            <div className='card'>
                <img className="foto" src="https://ca.slack-edge.com/T064N7CMKTL-U0666PGAVLH-0b892d018699-512" alt="Haris" />            
                <div className='details'>
                    <p>Name: Haris Chughtai</p>
                    <div>
                        <a href="https://github.com/HChughtai98">
                            <img className="link" src={github} alt="GitHub" />
                        </a>
                        <a href="https://www.linkedin.com/in/haris-chughtai-b692ab183/">
                            <img className="link" src={linkedin} alt="GitHub" />
                        </a>                    
                    </div>  
                </div>
                               
            </div>
            <div className='card'>
                <img className="foto" src="https://ca.slack-edge.com/T064N7CMKTL-U064VNNC6NA-505de1b09b10-512" alt="Miguel" />            
                <div className='details'>
                   <p>Name: Miguel Martins</p>
                    <div>
                        <a href="https://github.com/chuinga">
                            <img className="link" src={github} alt="GitHub" />
                        </a>
                        <a href="https://www.linkedin.com/in/miguel-martins-a08a76a5/">
                            <img className="link" src={linkedin} alt="GitHub" />
                        </a>                    
                    </div> 
                </div>
                
            </div>
        </div> 
    )
    
}

export default About;