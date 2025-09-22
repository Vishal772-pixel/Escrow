import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Wallet, ArrowLeftRight, BarChart3, Lock, Coins } from "lucide-react"
export const FeaturesSection() {
  const features = [
    {
      icon: TrendingUp,
      title: "Lending",
      description: "Earn competitive yields by lending your crypto assets to borrowers across multiple chains.",
      benefits: ["Up to 15% APY", "Auto-compounding", "Flexible terms"],
      color: "primary",
    },
    {
      icon: Wallet,
      title: "Borrowing",
      description: "Access instant liquidity by borrowing against your crypto collateral with competitive rates.",
      benefits: ["Low interest rates", "No credit checks", "Instant approval"],
      color: "accent",
    },
    {
      icon: ArrowLeftRight,
      title: "Multi-Chain Swapping",
      description: "Seamlessly swap tokens across different blockchains with minimal slippage and fees.",
      benefits: ["Best rates", "Cross-chain", "MEV protection"],
      color: "primary",
    },
    {
      icon: BarChart3,
      title: "Yield Farming",
      description: "Maximize your returns with our advanced yield farming strategies and liquidity mining.",
      benefits: ["Optimized strategies", "Auto-harvest", "Risk management"],
      color: "accent",
    },
    {
      icon: Lock,
      title: "Staking",
      description: "Stake your tokens to secure networks and earn rewards while maintaining liquidity.",
      benefits: ["Liquid staking", "Compound rewards", "Validator selection"],
      color: "primary",
    },
    {
      icon: Coins,
      title: "Portfolio Management",
      description: "Track and manage your DeFi positions across all protocols from a single dashboard.",
      benefits: ["Real-time tracking", "P&L analysis", "Risk metrics"],
      color: "accent",
    },
  ]

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
            Everything You Need for <span className="text-primary">DeFi</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Our comprehensive suite of DeFi tools gives you everything you need to maximize your crypto potential
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                      feature.color === "primary" ? "bg-primary/10" : "bg-accent/10"
                    }`}
                  >
                    <Icon className={`h-6 w-6 ${feature.color === "primary" ? "text-primary" : "text-accent"}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div
                          className={`w-1.5 h-1.5 rounded-full mr-3 ${
                            feature.color === "primary" ? "bg-primary" : "bg-accent"
                          }`}
                        />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
