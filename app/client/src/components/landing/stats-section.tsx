import { Card, CardContent } from "@/components/ui/card"

export const StatsSection() {
  const stats = [
    {
      value: "$2.5B+",
      label: "Total Value Locked",
      description: "Assets secured in our protocol",
    },
    {
      value: "150K+",
      label: "Active Users",
      description: "Trusted by DeFi enthusiasts",
    },
    {
      value: "12+",
      label: "Supported Chains",
      description: "Multi-chain compatibility",
    },
    {
      value: "99.9%",
      label: "Uptime",
      description: "Reliable and secure",
    },
  ]

  return (
    <section className="py-24 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
            Trusted by the <span className="text-primary">Community</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Join thousands of users who trust our protocol with their assets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-8 pb-6">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
