import Swal from 'sweetalert2'

const AddCoffee = () => {

  const handleAddCoffee = e => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const supplier = form.supplier.value
    const category = form.category.value
    const photo = form.photo.value
    const quantity = form.quantity.value
    const taste = form.taste.value
    const details = form.details.value
    const addCoffee = {name, supplier, category, photo, quantity, taste, details }
    
    console.log(addCoffee)

    fetch('https://coffee-store-server-ejf4y7zie-zillur-rahmans-projects.vercel.app/coffee', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(addCoffee)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.modifiedCount > 0) {
        Swal.fire({
          title: 'Success!',
          text: 'User Added Successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })
  }
  return (
    <div className=" max-w-[1300px] h-[878px] mx-auto bg-[#F4F3F0] ">
      <h2 className=" font-bold text-3xl text-center p-5">Add a Coffee</h2>
      <p className=" text-center pb-5">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at <br /> its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed <br /> to using Content here.</p>
      <form onSubmit={handleAddCoffee}>
        <div className=" flex items-center justify-center gap-4 p-5">
        <div>
        <div className="form-control ">
            <label className="label">
              <span className="label-text"> Name</span>
            </label>
            <label className="input-group">
             
              <input
                type="text"
                name="name"
                placeholder="Enter Coffee Name"
                className=" input input-bordered w-[536px] h-[48px]"
              />
            </label>
          </div>
        <div className="form-control ">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label className="input-group">
             
              <input
                type="text"
                name="supplier"
                placeholder="Enter Coffee Supplier"
                className=" input input-bordered w-[536px] h-[48px]"
              />
            </label>
          </div>
      <div>
      <div className="form-control ">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
             
              <input
                type="text"
                name="category"
                placeholder="Enter Coffee Category"
                className=" input input-bordered w-[536px] h-[48px]"
              />
            </label>
          </div>
      
     
      </div>
      
        
        </div>
        <div>
        <div className="form-control ">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <label className="input-group">
             
              <input
                type="text"
                name="quantity"
                placeholder="Available quantity"
                className=" input input-bordered w-[536px] h-[48px]"
              />
            </label>
          </div>
        <div className="form-control ">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
             
              <input
                type="text"
                name="taste"
                placeholder="Enter COffee Taste"
                className=" input input-bordered w-[536px] h-[48px]"
              />
            </label>
          </div>
        <div className="form-control ">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
             
              <input
                type="text"
                name="details"
                placeholder="Enter Coffee Details"
                className=" input input-bordered w-[536px] h-[48px]"
              />
            </label>
          </div>
     
        </div>
        
        </div>
        <div className=" flex items-center justify-center   pb-4">
        <div className="form-control ">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <label className="input-group">
             
              <input
                type="text"
                name="photo"
                placeholder="Enter Photo URL"
                className=" input input-bordered w-[1096px] h-[56px] mx-auto flex items-center justify-center"
              />
            </label>
          </div>
        </div>
       <div className=" max-w-[1300px] "> <input type="submit" value="Add A Coffee" className=" w-[1096px] h-[56px] bg-[#D2B48C] mx-auto flex items-center justify-center" /></div>
      </form>
    </div>
  );
};

export default AddCoffee;
