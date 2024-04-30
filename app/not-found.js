import Link from 'next/link'

export default function NotFound() {
  return (
    <div>


      <div className="flex items-center justify-center min-h-screen bg-white ">
        <div className="flex flex-col">
          <div className="flex flex-col items-center">
            <div className="text-lime-500 font-bold text-7xl">
              404
            </div>

            <div className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
              Cette page n'existe pas.
            </div>

            <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
              La page que vous recherchez est introuvable.
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}