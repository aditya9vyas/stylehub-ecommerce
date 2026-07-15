import { FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function AddressForm() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 mb-8">

      <h2 className="text-2xl font-bold mb-6 text-black dark:text-yellow-400">
        📍 Delivery Address
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <div>
          <label className="font-semibold">Full Name</label>
          <div className="flex items-center mt-2 border rounded-xl px-4">
            <FaUser className="text-gray-400" />
            <input
              className="w-full p-3 outline-none bg-transparent dark:text-white"
              placeholder="Enter your full name"
            />
          </div>
        </div>

        <div>
          <label className="font-semibold">Mobile Number</label>
          <div className="flex items-center mt-2 border rounded-xl px-4">
            <FaPhone className="text-gray-400" />
            <input
              className="w-full p-3 outline-none bg-transparent dark:text-white"
              placeholder="9876543210"
            />
          </div>
        </div>

        <div className="md:col-span-2">
          <label className="font-semibold">Email</label>
          <div className="flex items-center mt-2 border rounded-xl px-4">
            <FaEnvelope className="text-gray-400" />
            <input
              className="w-full p-3 outline-none bg-transparent dark:text-white"
              placeholder="example@email.com"
            />
          </div>
        </div>

        <div className="md:col-span-2">
          <label className="font-semibold">Address</label>
          <div className="flex items-start mt-2 border rounded-xl px-4">
            <FaMapMarkerAlt className="text-gray-400 mt-4" />
            <textarea
              rows="3"
              className="w-full p-3 outline-none resize-none bg-transparent dark:text-white"
              placeholder="House No, Street, Area"
            />
          </div>
        </div>

        <div>
          <label className="font-semibold">City</label>
          <input
            className="w-full mt-2 border rounded-xl p-3 bg-transparent dark:text-white"
            placeholder="Indore"
          />
        </div>

        <div>
          <label className="font-semibold">State</label>
          <input
            className="w-full mt-2 border rounded-xl p-3 bg-transparent dark:text-white"
            placeholder="Madhya Pradesh"
          />
        </div>

        <div>
          <label className="font-semibold">Pincode</label>
          <input
            className="w-full mt-2 border rounded-xl p-3 bg-transparent dark:text-white"
            placeholder="452001"
          />
        </div>

      </div>
    </div>
  );
}

export default AddressForm;