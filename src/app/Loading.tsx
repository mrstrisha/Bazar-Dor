

const Loading = () => {
    return (
        <div>
                <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 p-6 md:p-10">
      <div className="max-w-6xl mx-auto">

        {/* Hero Skeleton */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 mb-8 animate-pulse">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Left side */}
            <div className="flex-1 w-full">
              {/* Date badge */}
              <div className="h-7 w-44 bg-green-100 rounded-full mb-4"></div>

              {/* Heading */}
              <div className="h-10 w-3/4 bg-gray-200 rounded-lg mb-3"></div>
              <div className="h-10 w-1/2 bg-gray-200 rounded-lg mb-6"></div>

              {/* Description */}
              <div className="h-4 w-full bg-gray-100 rounded mb-2"></div>
              <div className="h-4 w-full bg-gray-100 rounded mb-2"></div>
              <div className="h-4 w-2/3 bg-gray-100 rounded mb-6"></div>

              {/* Button */}
              <div className="h-12 w-40 bg-green-200 rounded-xl"></div>
            </div>

            {/* Right side - Image placeholder */}
            <div className="flex-shrink-0">
              <div className="w-48 md:w-64 lg:w-72 h-48 md:h-64 bg-green-50 rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Cards Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 animate-pulse"
            >
              {/* Card image */}
              <div className="h-40 w-full bg-green-50 rounded-xl mb-4"></div>

              {/* Card title */}
              <div className="h-5 w-3/4 bg-gray-200 rounded mb-3"></div>

              {/* Card description */}
              <div className="h-3 w-full bg-gray-100 rounded mb-2"></div>
              <div className="h-3 w-2/3 bg-gray-100 rounded mb-4"></div>

              {/* Card price */}
              <div className="flex items-center justify-between">
                <div className="h-6 w-20 bg-green-100 rounded-lg"></div>
                <div className="h-8 w-24 bg-green-200 rounded-lg"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
        </div>
    );
};

export default Loading;