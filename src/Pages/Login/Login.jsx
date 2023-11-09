import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
// import { AuthContext } from '../../Providers/AuthProvider';
// import { useContext } from 'react';
import axios from 'axios';
import useAuth from '../../Hooks/useAuth';

const Login = () => {

  // const {signIn} = useContext(AuthContext)
  const {signIn} = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  // console.log(location)

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        signIn(email, password)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            const user = {email};
           
            // form.reset();
            // window.location.reload();

            // get access token
            axios.post('https://new-car-doctor-server-psi.vercel.app/jwt', user, {withCredentials: true})
            .then(res => {
              console.log(res.data)
              if(res.data.success){
                 navigate(location.state || '/');
              }
            })
        })
        .catch(error => console.error(error));
       
    }

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="w-1/2 mr-12">
      
      <img src={img} />
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
      <h1 className="text-3xl text-center font-bold">Login</h1>
        <div className="form-control">
        
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
         
          <input className="btn btn-primary " type="submit" value="Login" />
        </div>
        <p className='font-medium text-center mt-2'>New to Car Doctors? <Link to='/signup' className="text-orange-600 font-bold">Sign Up</Link></p>
      </form>
      
    </div>
  </div>
</div>
    );
};

export default Login;