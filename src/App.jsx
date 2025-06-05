import './App.css'

function App() {
 
  return (
  
      // Check index.html styles for Ext Constraints (Width and Height)
      <div className="app border-4 border-orange-200 h-full flex flex-col justify-evenly text-center">

            <p className='text-4xl p-8'>Site Data</p>
            <h1 className='text-4xl p-8'>Extention Template</h1>
            <h1 className='text-4xl p-8'>React + Tailwindcss</h1>

            <div className="buttons grid grid-rows-2 grid-cols-2 gap-4 text-center px-12">
            <p className='border p-2 text col-span-1 rounded-lg font-semibold text-white bg-gray-800'>Dont Click Me</p>
            <p className='border p-2 text col-span-1 rounded-lg font-semibold text-white bg-gray-800'>Click Me</p>
            </div>
          


      </div>
  )
}

export default App
