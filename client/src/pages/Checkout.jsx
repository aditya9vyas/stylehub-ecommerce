import { useState } from "react";
import Navbar from "../components/Navbar";

import AddressForm from "../components/AddressForm";
import OrderSummary from "../components/OrderSummary";
import PaymentMethods from "../components/PaymentMethods";
import UpiPayment from "../components/UpiPayment";
import CardPayment from "../components/CardPayment";
import CODPayment from "../components/CODPayment";
import PaymentLogos from "../components/PaymentLogos";

function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("upi");

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950">
      <Navbar />

      <div className="max-w-7xl mx-auto p-8">

        <h1 className="text-4xl font-bold mb-8 text-center dark:text-white">
          Secure Checkout
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2">

            <AddressForm />
            <PaymentLogos />

            <PaymentMethods
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
            />

            {paymentMethod === "upi" && <UpiPayment />}

            {paymentMethod === "card" && <CardPayment />}

            {paymentMethod === "cod" && <CODPayment />}

          </div>

          <OrderSummary />

        </div>

      </div>
    </div>
  );
}

export default Checkout;