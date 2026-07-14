import React from "react";
import { Link, useParams ,useNavigate} from "react-router-dom";
import { Listitems } from "../Dummydata/properties";
function PropertyDetail(){
     const navigate = useNavigate();
     const { id } = useParams();

     const property = Listitems.find(
    (item) => item.id.toString() === id );
    
    if (!property) {
    return <h2>Property not found</h2>;
        }
       return(

         <div className="bg-slate-950  pt-25">
        <div className="p-10 bg-white  rounded-lg shadow-md flex">
      <img src={property.image} alt={property.title} className="w-full shadow-lg max-w-xl h-80 object-cover rounded-lg"/>

          <div className=" items-center ml-20">
              <h1 className="text-5xl font-serif font-bold mt-5">
              {property.title}
              </h1>
      
              <p className="mt-3 font-mono text-xl">{property.description}</p>
      
              <h2 className="text-2xl font-bold mt-4 text-green-600">
              {property.price}
              </h2>

               <div className="mt-6">
                     <h2 className="text-2xl font-mono font-bold">Amenities</h2>

                  <div className="grid grid-cols-2 gap-4 mt-4">
                    {property.Amenities.map((amenity, index) => {
                      const Icon = amenity.icon;
                
                      return (
                        <div key={index} className="flex items-center gap-2">
                          <Icon size={20} />
                          <span>{amenity.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <button  
                className="bg-slate-950 text-white text-2xl mt-6 p-2 rounded-2xl font-mono"
                onClick={() => navigate(`/Rent/${property.id}`)}>Rent House</button>

                
        </div>
    </div>
    </div>
  );
}
export default PropertyDetail;