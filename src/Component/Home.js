import { Link } from 'react-router-dom';
import '../Assets/Home.css';
const Home=()=>{
    return(
        <>
        <div className='home'>
        <div className='navbar'>
            <p style={{fontSize:40,paddingTop:20,paddingLeft:30 ,color:'white'}}><b>WelVol</b></p>
            <p className='pro' style={{fontSize:30,paddingLeft:'20px'}}>Form</p>
            <p className='sale' style={{fontSize:30,paddingLeft:'20px'}}>About</p>
            <Link to='/login'><p className='sale' style={{fontSize:30,paddingLeft:'20px'}}>Login</p></Link>
        </div><br></br><br></br>
        <div className='main'>
            <div className='grid1'><br></br>
            <p style={{fontSize:60,color:'black',paddingTop:70}}>WelVol</p>
            <p style={{fontSize:30}}>short for "Welcome Volunteers," is a transformative platform and community dedicated to the power of volunteerism. With a user-friendly interface and seamless volunteer management features, WelVol connects organizations with passionate individuals. The platform goes beyond task assignments, fostering a supportive community where volunteers can connect, share experiences, and inspire each other.</p>
            </div>
            <div className='grid2'>
            </div>
        </div>
            <Link to='/login'><p className='sale' style={{fontSize:30}}>Login To Continue...</p></Link>
        </div>
        </>
    )
}
export default Home;