import React from 'react'

function Dropdow() {
  return (
    <div className='flex flex-row gap-5 justify-between'>
        <div className='relative '>
        <select  className='lg:px-5.5 lg:py-2.5 px-2.5 py-2.5 pr-[2.5rem] rounded-lg border border-gray-400/40  appearance-none lg:pr-[4rem] focus:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-[#00BFFF] ' >
            <option className='px-2.5 ' value="All categories"> All categories</option>
            <option className='px-2.5 ' value="All categories"> Perfumes</option>
            <option className='px-2.5 ' value="All categories"> Groceries</option>
        </select>

        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
    ▼
  </span>
    </div>

    <div className='relative '>
        <select  className='lg:px-5.5 lg:py-2.5 px-2.5 py-2.5 pr-[2rem] rounded-lg border border-gray-400/40  appearance-none lg:pr-[4rem] focus:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-[#00BFFF] ' >
            <option className='px-2.5' value="All categories"> Name A-Z</option>
            <option className='px-2.5' value="All categories"> Default</option>
            <option className='px-2.5' value="All categories"> Groceries</option>
        </select>

        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
    ▼
  </span>
    </div>

    <div className='relative '>
        <select  className='lg:px-5.5 lg:py-2.5 px-2.5 py-2.5 pr-[2rem] rounded-lg border border-gray-400/40  appearance-none lg:pr-[4rem] focus:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-[#00BFFF] ' >
            <option className='px-2.5' value="All categories"> All Prices</option>
            <option className='px-2.5' value="All categories"> Under $25</option>
            <option className='px-2.5' value="All categories"> Groceries</option>
        </select>

        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
    ▼
  </span>
    </div>
    </div>
  )
}

export default Dropdow