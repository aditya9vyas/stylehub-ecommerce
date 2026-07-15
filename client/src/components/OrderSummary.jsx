import { useMemo } from "react";

function OrderSummary() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const subtotal = useMemo(() => {
    return cart.reduce(
      (sum, item) =>
        sum + Number(item.price) * Number(item.quantity || 1),
      0
    );
  }, [cart]);

  const discount = Math.round(subtotal * 0.1);
  const gst = Math.round((subtotal - discount) * 0.18);
  const delivery = subtotal > 999 ? 0 : 99;

  const total = subtotal - discount + gst + delivery;

  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-6 h-fit sticky top-24">

      <h2 className="text-2xl font-bold mb-6 dark:text-yellow-400">
        🧾 Order Summary
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between">
          <span>Items</span>
          <span>{cart.length}</span>
        </div>

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        <div className="flex justify-between text-green-600">
          <span>Discount (10%)</span>
          <span>-₹{discount}</span>
        </div>

        <div className="flex justify-between">
          <span>GST (18%)</span>
          <span>₹{gst}</span>
        </div>

        <div className="flex justify-between">
          <span>Delivery</span>

          {delivery === 0 ? (
            <span className="text-green-600 font-bold">
              FREE
            </span>
          ) : (
            <span>₹99</span>
          )}
        </div>

        <hr />

        <div className="flex justify-between text-2xl font-bold">
          <span>Total</span>
          <span className="text-yellow-500">
            ₹{total}
          </span>
        </div>

      </div>

      <div className="mt-8">

        <label className="font-semibold">
          Coupon Code
        </label>

        <div className="flex mt-3">

          <input
            placeholder="SAVE20"
            className="flex-1 border rounded-l-xl p-3 dark:bg-gray-800"
          />

          <button
            className="bg-black text-yellow-400 px-5 rounded-r-xl hover:bg-yellow-500 hover:text-black transition"
          >
            Apply
          </button>

        </div>

      </div>

      <div className="mt-8 space-y-2 text-sm text-gray-500 dark:text-gray-300">

        <p>✅ 100% Secure Payments</p>

        <p>🚚 Delivery within 2-4 Days</p>

        <p>🔄 Easy 7-Day Returns</p>

      </div>

    </div>
  );
}

export default OrderSummary;