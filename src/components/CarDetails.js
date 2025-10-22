import React from 'react'

function CarDetails({ car, setCar, nextStep, prevStep }) {

  function handleSubmit(e) {
    e.preventDefault()
    if (car.model.trim() && car.price.trim()) nextStep()
  }

  return (
    <form onSubmit={handleSubmit} className='w-[40vw] border-2 border-white h-[70vh] flex justify-center items-center flex-col'>
      <h2 className='text-xl mb-7'>Car Details</h2>

      <label htmlFor="model" className='text-2xl'>Model: </label>
      <input
        id="model"
        className='bg-gray-400 text-black border-2 border-black'
        value={car.model}
        onChange={(e) => setCar({ ...car, model: e.target.value })}
      />

      <label htmlFor="car_price" className='text-2xl mt-4'>Price: </label>
      <input
        id="car_price"
        type="number"
        className='bg-gray-400 text-black border-2 border-black'
        value={car.price}
        onChange={(e) => setCar({ ...car, price: e.target.value })}
      />

      <div className='flex gap-3 mt-6'>
        <button type='button' onClick={prevStep} className='bg-green-500 px-5 py-2 rounded hover:bg-green-700'>Previous</button>
        <button type='submit' className='bg-green-500 px-5 py-2 rounded hover:bg-green-700'>Next</button>
      </div>
    </form>
  )
}

export default CarDetails
