import React from 'react';
import useAuth from '../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../hooks/useAxiosSecure';

const FoodCard = ({ item }) => {
    const { _id, name, image, price, recipe } = item;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();

    const handleAddToCart = (food) => {
      if (user && user.email) {
        // Send Cart Item to the Database 
        const cartItem = {
          menuId: _id,
          email: user.email,
          name, 
          image, 
          price
        }
        axiosSecure.post("/carts", cartItem).then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: `${name} added to your cart`,
              showConfirmButton: false,
              timer: 1500,
            });
            // refetch cart to update the cart items count
            // refetch();
          }
        });
      }
      else {
         Swal.fire({
           title: "You are not Logged In",
           text: "Please login to add to the cart.",
           icon: "warning",
           showCancelButton: true,
           confirmButtonColor: "#3085d6",
           cancelButtonColor: "#d33",
           confirmButtonText: "Yes, Login!",
         }).then((result) => {
           if (result.isConfirmed) {
             //   send the user to the login page
             navigate("/auth/login", { state: { from: location } });
           }
         });
      }
    }

    return (
      <div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="p-2">
            <img src={image} className="rounded-xl" />
          </figure>
          <p className="absolute right-0 bg-[#111827] text-white py-1 px-3 mr-5 mt-5">
            ${price}
          </p>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
            <p>{recipe}</p>

            <div className="card-actions">
              <button
              onClick={() => handleAddToCart(item)}
              className="btn border-0 border-b-4 uppercase border-[#BB8506] hover:bg-[#111827] hover:border-[#BB8506] hover:text-[#BB8506] font-medium">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;