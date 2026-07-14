import React, { useState } from "react";
import { sendProperty } from "../apiServices/propertyapi";


const Property = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    type: "",
    bedrooms: "",
    bathrooms:"",
    area: "",
    city: "",
    address: "",
});

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await sendProperty(formData);

      alert(res.message);

      setFormData({
       title: "",
       description: "",
       price: "",
       type: "",
       bedrooms: "",
       bathrooms:"",
       area: "",
       city: "",
       address: "",
      });
    }
     catch (error) {
      alert(
        error.response?.data?.message || "Something went wrong."
      );
    } 
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg p-8">

        <h2 className="text-3xl font-bold text-center mb-8">
          Send property
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="font-semibold">
              title
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 mt-2"
            />
          </div>

          <div>
            <label className="font-semibold">
              description
            </label>

            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 mt-2"
              
            />
          </div>

          <div>
            <label className="font-semibold">
              price
            </label>

            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 mt-2"
             />
          </div>

          <div>
            <label className="font-semibold">
              type
            </label>

            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 mt-2"
             />
          </div>

          <div>
            <label className="font-semibold">
              bedrooms
            </label>

            <input
              type="number"
              name="bedrooms"
              value={formData.bedrooms}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 mt-2"
             />
          </div>

          <div>
            <label className="font-semibold">
              bathrooms
            </label>

            <input
              type="number"
              name="bathrooms"
              value={formData.bathrooms}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 mt-2"
             />
          </div>

          <div>
            <label className="font-semibold">
              area
            </label>

            <input
              type="number"
              name="area"
              value={formData.area}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 mt-2"
             />
          </div>

          <div>
            <label className="font-semibold">
              city
            </label>

            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 mt-2"
             />
          </div>

          <div>
            <label className="font-semibold">
             address
            </label>

            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 mt-2"
             />
          </div>

          <button
            disabled={loading}
            className="bg-blue-600 text-white w-full py-3 rounded-lg hover:bg-blue-700"
          >
            {loading ? "Submitting..." : "Submit property data"}
          </button>

        </form>

      </div>
    </div>
  );
};

export default Property;