import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({coffee, coffees, setCoffees}) => {
    const {_id, name, supplier, category, photo, quantity, taste, details } = coffee
    
    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            //   Swal.fire(
            //     'Deleted!',
            //     'Your file has been deleted.',
            //     'success'
            //   )
            
            fetch(`https://coffee-store-server-ejf4y7zie-zillur-rahmans-projects.vercel.app/coffee/${_id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data.deletedCount)
                if (data.deletedCount > 0) {
                       Swal.fire(
                'Deleted!',
                'Your Coffee has been deleted.',
                'success'
              )
              const remaining = coffees.filter(cof => cof._id !== _id)
              setCoffees(remaining)
                }
            })
            }
          })
    }
    
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
             src="https://i.ibb.co/vcMj0P3/Health.png"
            alt="Movie"
          />
        </figure>
        <div className=" flex justify-between border w-full">
        <div>
        <h2 className="card-title"> {name} </h2>
          <p> {supplier} </p>
          <p> {category} </p>
          <p> {taste} </p>
          <p> {details} </p>
        </div>
         
          <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical space-y-3">
  <button className="btn btn-active">view</button>
 <Link to={`updateCoffee/${_id}`}>
 <button className="btn">edit</button>
 </Link>
  <button onClick={() => handleDelete(_id)} className="btn">X</button>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
