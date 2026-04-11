export function SocialProofBar() {
    const stats = [
      {
        label: "websites launched",
        value: "2",
        hasNumber: true,
      },
      {
        label: "Based in",
        value: "Campbelltown NSW",
        hasNumber: false,
      },
      {
        label: "Serving",
        value: "Western Sydney",
        hasNumber: false,
      },
    ]
  
    return (
      <section className="bg-white border-y border-slate-100">
        <div className="px-6 md:px-12 py-6 md:py-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-center">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`
                    flex-1 text-center py-5 md:py-0
                    ${index !== stats.length - 1 ? "border-b border-slate-100 md:border-b-0 md:border-r md:border-slate-200" : ""}
                  `}
                >
                  {/* Teal accent dash */}
                  <div className="flex justify-center mb-3">
                    <span className="w-4 h-0.5 bg-teal-600 rounded-full" />
                  </div>
  
                  {/* Label */}
                  <p className="text-sm text-slate-500 mb-1">
                    {stat.hasNumber ? stat.label : stat.label}
                  </p>
  
                  {/* Value */}
                  <p className="text-slate-900 font-semibold">
                    {stat.hasNumber ? (
                      <>
                        <span className="text-2xl md:text-3xl">{stat.value}</span>
                        <span className="text-base ml-1.5">{stat.label}</span>
                      </>
                    ) : (
                      <span className="text-lg md:text-xl">{stat.value}</span>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
  