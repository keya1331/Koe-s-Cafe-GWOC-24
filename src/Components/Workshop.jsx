// src/components/CoffeeWorkshop.js
import React, { useState } from 'react';

const Workshop = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
  });

  const [isSubmitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear validation errors when the user types
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data before submission
    const requiredFields = ['name', 'email', 'phone', 'date', 'time'];
    let hasErrors = false;

    requiredFields.forEach((field) => {
      if (!formData[field].trim()) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [field]: `${field.charAt(0).toUpperCase() + field.slice(1)} is required`,
        }));
        hasErrors = true;
      }
    });

    if (hasErrors) {
      return;
    }

    // Form data is valid - you can now handle the submission logic (e.g., API call)
    console.log('Form submitted:', formData);

    // Clear form data after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
    });

    // Display confirmation message
    setSubmitted(true);
  };

  return (
    <section className="bg-warm-cozy py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center text-white">Upcoming Coffee Workshop</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="mb-4">
            <img src="/workshop-image.jpg" alt="Workshop" className="w-full h-auto rounded-md" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Join us for an immersive coffee experience!</h3>
            <p className="text-gray-200 mb-4">
              Explore the world of coffee with our upcoming workshop. Learn about coffee identification,
              grading, roasting, blending, and cupping techniques from our expert baristas.
            </p>
            <p className="text-gray-200 mb-4">
              Whether you're a coffee enthusiast or a beginner, this workshop is designed to deepen your
              understanding and appreciation for the art of coffee.
            </p>
            <p className="text-gray-200 mb-4">
              Don't miss out on this exciting opportunity to enhance your coffee knowledge and taste
              some of the finest brews crafted by our skilled team.
            </p>
            {isSubmitted ? (
              <p className="text-green-500 font-semibold mb-4">Thank you for reserving your spot! We'll see you at the workshop.</p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="date" className="text-white block mb-2">Preferred Date</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded-md focus:outline-none ${errors.date && 'border-red-500'}`}
                    />
                    {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                  </div>
                  <div>
                    <label htmlFor="time" className="text-white block mb-2">Preferred Time</label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded-md focus:outline-none ${errors.time && 'border-red-500'}`}
                    />
                    {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="name" className="text-white block mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded-md focus:outline-none ${errors.name && 'border-red-500'}`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="text-white block mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded-md focus:outline-none ${errors.email && 'border-red-500'}`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="text-white block mb-2">Your Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded-md focus:outline-none ${errors.phone && 'border-red-500'}`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                  Reserve Your Spot
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Workshop;
