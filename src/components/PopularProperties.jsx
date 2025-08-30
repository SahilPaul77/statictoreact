import React, { useState } from "react";

const properties = [
  {
    id: 1,
    type: "Residential",
    title: "Villa Prop",
    description: "Spacious villa with modern design and lush garden.",
    price: "$12.3K",
    date: "23/July/2025",
    location: "Directions",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80",
  },
  {
    id: 2,
    type: "Industries",
    title: "Plot Sale",
    description: "Industrial plot located in a prime business hub.",
    price: "$600K",
    date: "24/July/2025",
    location: "Directions",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=600&q=80",
  },
  {
    id: 3,
    type: "Industries",
    title: "Plot Sale Copy",
    description: "Duplicate listing for testing modal functionality.",
    price: "$600K",
    date: "24/July/2025",
    location: "Directions",
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=600&q=80",
  },
  {
    id: 4,
    type: "Residential",
    title: "Luxury Apartment",
    description: "High-rise apartment with city view and modern amenities.",
    price: "$900K",
    date: "25/July/2025",
    location: "Directions",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
];

const PopularProperties = () => {
  const [selectedProperty, setSelectedProperty] = useState();

  return (
    <>
    <section className="px-6 py-10 bg-red-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-black">
            Popular Properties
          </h2>
          <a href="#" className="text-red-500 hover:underline">
            View All ({properties.length})
          </a>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              {/* Image */}
              <div
                className="relative cursor-pointer"
                onClick={() => setSelectedProperty(property)}
              >
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                  {property.type}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-4">
                <h3 className="font-bold text-lg">{property.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {property.description.substring(0, 60)}...
                </p>

                {/* Footer */}
                <div className="flex justify-between items-center text-sm font-medium">
                  <span>{property.price}</span>
                  <span>{property.date}</span>
                </div>
                <p className="text-right text-red-500 text-sm mt-2 cursor-pointer">
                  {property.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-xl shadow-lg max-w-lg w-full p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProperty(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
            >
              ✖
            </button>

            {/* Modal Content */}
            <img
              src={selectedProperty.image}
              alt={selectedProperty.title}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{selectedProperty.title}</h2>
            <p className="text-gray-600 mb-4">{selectedProperty.description}</p>
            <div className="flex justify-between text-sm font-medium">
              <span className="text-black">{selectedProperty.price}</span>
              <span className="text-gray-500">{selectedProperty.date}</span>
            </div>
            <p className="text-red-500 text-sm mt-2 cursor-pointer">
              {selectedProperty.location}
            </p>
          </div>
        </div>
      )}
    </section>
        <section className="px-6 py-10 bg-red-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-black">
            Popular Properties
          </h2>
          <a href="#" className="text-red-500 hover:underline">
            View All ({properties.length})
          </a>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              {/* Image */}
              <div
                className="relative cursor-pointer"
                onClick={() => setSelectedProperty(property)}
              >
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                  {property.type}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-4">
                <h3 className="font-bold text-lg">{property.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {property.description.substring(0, 60)}...
                </p>

                {/* Footer */}
                <div className="flex justify-between items-center text-sm font-medium">
                  <span>{property.price}</span>
                  <span>{property.date}</span>
                </div>
                <p className="text-right text-red-500 text-sm mt-2 cursor-pointer">
                  {property.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-xl shadow-lg max-w-lg w-full p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProperty(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
            >
              ✖
            </button>

            {/* Modal Content */}
            <img
              src={selectedProperty.image}
              alt={selectedProperty.title}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{selectedProperty.title}</h2>
            <p className="text-gray-600 mb-4">{selectedProperty.description}</p>
            <div className="flex justify-between text-sm font-medium">
              <span className="text-black">{selectedProperty.price}</span>
              <span className="text-gray-500">{selectedProperty.date}</span>
            </div>
            <p className="text-red-500 text-sm mt-2 cursor-pointer">
              {selectedProperty.location}
            </p>
          </div>
        </div>
      )}
    </section>

    </>
      );
};

export default PopularProperties;
