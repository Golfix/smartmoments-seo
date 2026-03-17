export default function Loading() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero skeleton */}
      <div className="relative h-[70vh] bg-champagne animate-pulse">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-6 max-w-2xl mx-auto px-4">
            <div className="h-3 w-32 bg-gold/20 rounded mx-auto" />
            <div className="h-12 w-80 bg-taupe/10 rounded mx-auto" />
            <div className="h-4 w-64 bg-taupe/5 rounded mx-auto" />
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="space-y-24">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-16 items-center`}
            >
              {/* Image placeholder */}
              <div className="w-full lg:w-1/2">
                <div className="aspect-[4/3] bg-champagne animate-pulse rounded" />
              </div>
              {/* Text placeholder */}
              <div className="w-full lg:w-1/2 space-y-4">
                <div className="h-2 w-20 bg-gold/20 rounded animate-pulse" />
                <div className="h-8 w-3/4 bg-taupe/10 rounded animate-pulse" />
                <div className="space-y-2 pt-2">
                  <div className="h-3 w-full bg-rose rounded animate-pulse" />
                  <div className="h-3 w-5/6 bg-rose rounded animate-pulse" />
                  <div className="h-3 w-4/6 bg-rose rounded animate-pulse" />
                </div>
                <div className="space-y-3 pt-4">
                  {[1, 2, 3, 4].map((j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-gold/15 animate-pulse shrink-0" />
                      <div className="h-3 w-2/3 bg-champagne rounded animate-pulse" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
