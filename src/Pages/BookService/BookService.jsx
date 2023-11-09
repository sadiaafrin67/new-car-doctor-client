import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";
// import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";



const BookService = () => {

    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const axiosSecure = useAxiosSecure();

    
    // const url = `https://new-car-doctor-server-psi.vercel.app/bookings?email=${user?.email}`
    const url = `/bookings?email=${user?.email}`


    useEffect( () => {

      axiosSecure.get(url)
      .then(res => {
          console.log(res.data)
          setBookings(res.data)
      })



      // axios.get(url, {withCredentials: true})
      //   .then(res => {
      //       // console.log(res.data)
      //       setBookings(res.data)
      //   })



        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         setBookings(data)
        //     })
    } , [url, axiosSecure])


    const handleDelete = id => {
        const procced = confirm('Are you sure you want to delete?')
        if (procced){
           fetch(`https://new-car-doctor-server-psi.vercel.app/bookings/${id}`, {
               method: 'DELETE'
           })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    alert('deleted successfully')
                    const remaining = bookings.filter(booking => booking._id !== id)
                    setBookings(remaining)
                }
            })
        }
    }

    const handleConfirm = id => {
        fetch(`https://new-car-doctor-server-psi.vercel.app/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
            
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0){
                    alert('update successfully')
                    const remaining = bookings.filter(booking => booking._id !== id)
                    const upadted = bookings.find(booking => booking._id === id)
                    upadted.status = 'confirm'
                    const newBooking = [upadted, ...remaining]
                    setBookings(newBooking)

                   
                }
            })
    }

    return (
        <div>
            <h2 className="text-5xl">Your Bookings: {bookings.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Img</th>
        <th>Service Name</th>
        <th>Date</th>
        <th>Price</th>
        <th>Status</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        bookings.map(booking => <BookingRow key={booking._id} handleConfirm={handleConfirm} handleDelete={handleDelete} booking={booking}></BookingRow>)
      }
      
     
     
    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default BookService;