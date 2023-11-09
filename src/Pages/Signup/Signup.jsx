import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Signup = () => {

  const { createUser } = useContext(AuthContext)

    const handleSignin = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            // form.reset();
            // window.location.reload();
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
            <form onSubmit={handleSignin} className="card-body">
            <h1 className="text-3xl text-center font-bold">Signin</h1>
              <div className="form-control">
              
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
              
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
              </div>
              <div className="form-control"> 
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" name="password" placeholder="Your Password" className="input input-bordered" required />
               
              </div>
              <div className="form-control mt-6">
               
                <input className="btn btn-primary " type="submit" value="Signin" />
              </div>
              <p className='font-medium text-center mt-2'>Already have an account? <Link to='/login' className="text-orange-600 font-bold">Login</Link></p>
            </form>
            
          </div>
        </div>
      </div>
    );
};

export default Signup;