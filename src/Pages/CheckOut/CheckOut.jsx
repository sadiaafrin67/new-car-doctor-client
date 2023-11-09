import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";



const CheckOut = () => {

    const service = useLoaderData();
    const {title, _id, price, img} = service;
    const {user} = useContext(AuthContext);

    const handleBookService = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        // const dueAmount = form.dueAmount.value;
        const booking = {
          customerName: name,
          email,
          img,
          date,
          service: title,
          service_id: _id,
          price: price
        }
        console.log(booking);


        fetch('https://new-car-doctor-server-psi.vercel.app/bookings', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(booking)
        })

        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('Booked successfully');
                // form.reset();
            }
        })


    }

    return (
        <div>
            <h2 className="text-3xl  font-bold text-center">Book service: {title}</h2>
           
      <form onSubmit={handleBookService} className="card-body">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
       <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" defaultValue={user?.displayName} placeholder="Your Name" name="name" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" defaultValue={user?.email} name="email" placeholder="Your Email" className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due Amount</span>
          </label>
          <input type="text" defaultValue={'$'+ price} className="input input-bordered" required />
          
        </div>
        
       </div>

        <div className="form-control mt-6">
          
          <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
        </div>
      </form>
    </div>

    );
};

export default CheckOut;