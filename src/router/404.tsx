

export function NotFound(){
  return(
    <div className="w-full h-[calc(100vh-64px)] flex items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-6xl text-gray-600">404</h1>
        <h2 className="text-4xl text-gray-400">Page not found</h2>
      </div>
    </div>
  )
}