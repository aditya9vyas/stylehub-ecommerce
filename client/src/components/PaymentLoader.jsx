function PaymentLoader() {
  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-900 rounded-3xl p-10 text-center w-96">

        <div className="w-20 h-20 border-8 border-gray-300 border-t-yellow-500 rounded-full animate-spin mx-auto"></div>

        <h2 className="text-3xl font-bold mt-8 dark:text-yellow-400">
          Processing Payment...
        </h2>

        <p className="text-gray-500 mt-3">
          Please don't close this window.
        </p>

      </div>
    </div>
  );
}

export default PaymentLoader;