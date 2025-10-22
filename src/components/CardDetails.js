import React from 'react'

function CardDetails({ card, setCard, prevStep }) {
  function handleSubmit(e) {
    e.preventDefault()
    alert("Form submitted successfully ✅")
  }

  return (
    <form onSubmit={handleSubmit} className='w-[40vw] border-2 border-white h-[70vh] flex justify-center items-center flex-col'>
      <h2 className='text-xl mb-7'>Card Details</h2>

      <label htmlFor="card_info" className='text-2xl'>Card CVV: </label>
      <input
        id="card_info"
        className='bg-gray-400 text-black border-2 border-black'
        value={card.info}
        onChange={(e) => setCard({ ...card, info: e.target.value })}
      />

      <label htmlFor="expiry_date" className='text-2xl mt-4'>Expiry Date: </label>
      <input
        id="expiry_date"
        className='bg-gray-400 text-black border-2 border-black'
        value={card.expiry}
        onChange={(e) => setCard({ ...card, expiry: e.target.value })}
      />

      <div className='flex gap-3 mt-6'>
        <button type='button' onClick={prevStep} className='bg-green-500 px-5 py-2 rounded hover:bg-green-700'>Previous</button>
        <button type='submit' className='bg-green-500 px-5 py-2 rounded hover:bg-green-700'>Submit</button>
      </div>
    </form>
  )
}

export default CardDetails