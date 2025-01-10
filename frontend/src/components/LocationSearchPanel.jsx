import React from 'react'

const LocationSearchPanel = (props) => {
  // sample array for location
  const locations = [
    '24B, Near Park Street, Kolkata',
    '12A, Near Dharmatala, Kolkata',
    '5C, Near Howrah Bridge, Kolkata',
    '6B, Near Salt Lake, Kolkata',
    '8D, Near New Town, Kolkata',
  ]

  return (
    <div>
      {
        locations.map(function(elem, idx){
          return (
            <div key={idx} onClick={()=> {
              props.setVehiclePanel(true)
              props.setPanelOpen(false)

            }} className='flex gap-4 border-2 p-3 border-gray-100 active:border-black rounded-xl items-center my-2'>
              <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className='ri-map-pin-2-line text-xl text-gray-500'></i></h2>
              <h4 className='font-medium'>{elem}</h4>
            </div>
          )
        })
      }
    </div>
  )
}

export default LocationSearchPanel
