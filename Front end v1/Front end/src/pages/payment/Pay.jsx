import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Pay = ({ first_name, last_name, email, amount, tx_ref, title, description, currency, public_key, return_url, callback_url }) => {

  return (
    <div>
      <form method="POST" action="https://api.chapa.co/v1/hosted/pay">
        <input type="hidden" name="public_key" value={public_key} />
        <input type="hidden" name="tx_ref" value={tx_ref} />
        <input type="hidden" name="amount" value={amount} />
        <input type="hidden" name="currency" value={currency} />
        <input type="hidden" name="email" value={email} />
        <input type="hidden" name="first_name" value={first_name} />
        <input type="hidden" name="last_name" value={last_name} />
        <input type="hidden" name="title" value={title} />
        <input type="hidden" name="description" value={description} />
        <input type="hidden" name="callback_url" value={callback_url} />
        <input type="hidden" name="return_url" value={return_url} />
        
        <button
              type="submit"
              className="w-full px-8 h-12 bg-green-700 text-neutral-50 text-base font-normal rounded-md flex items-center justify-center gap-x-2 hover:bg-green-800 duration-500"
            >
              Submit Information <FaArrowRight />
            </button>
      </form>
    </div>
  );
};

export default Pay;
