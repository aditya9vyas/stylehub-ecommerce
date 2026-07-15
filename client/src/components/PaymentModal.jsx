import { FaTimes, FaQrcode, FaCreditCard, FaUniversity } from "react-icons/fa";

function PaymentModal({ isOpen, onClose, onSelect }) {
  if (!isOpen) return null;

  const methods = [
    {
      id: "upi",
      title: "UPI",
      subtitle: "Google Pay • PhonePe • Paytm",
      icon: <FaQrcode className="text-blue-600 text-2xl" />,
    },
    {
      id: "card",
      title: "Credit / Debit Card",
      subtitle: "Visa • Mastercard • RuPay",
      icon: <FaCreditCard className="text-green-600 text-2xl" />,
    },
    {
      id: "bank",
      title: "Net Banking",
      subtitle: "All major banks",
      icon: <FaUniversity className="text-purple-600 text-2xl" />,
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center">
      <div className="bg-white dark:bg-gray-900 rounded-3xl w-[420px] shadow-2xl">

        <div className="flex justify-between items-center border-b p-5">
          <h2 className="text-2xl font-bold dark:text-yellow-400">
            StyleHub Payments
          </h2>

          <button onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <div className="p-6 space-y-4">

          {methods.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onSelect(item.id);
                onClose();
              }}
              className="w-full flex justify-between items-center border rounded-2xl p-4 hover:border-yellow-500 hover:bg-yellow-50 dark:hover:bg-gray-800 transition"
            >
              <div className="flex gap-4 items-center">
                {item.icon}

                <div className="text-left">
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-500">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              →
            </button>
          ))}

        </div>

      </div>
    </div>
  );
}

export default PaymentModal;