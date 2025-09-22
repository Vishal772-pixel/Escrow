import { Card, CardContent } from "@/components/ui/card"
import { Wallet, Search, ArrowRight, CheckCircle } from "lucide-react"

export const HowItWorks() {
  const steps = [
    {
      icon: Wallet,
      title: "Connect Wallet",
      description: "Connect your Web3 wallet to get started with our protocol",
      step: "01",
    },
    {
      icon: Search,
      title: "Choose Strategy",
      description: "Select from lending, borrowing, or swapping based on your goals",
      step: "02",
    },
    {
      icon: ArrowRight,
      title: "Execute Transaction",
      description: "Confirm your transaction and let our smart contracts handle the rest",
      step: "03",
    },
    {
      icon: CheckCircle,
      title: "Earn Rewards",
      description: "Watch your assets grow with competitive yields and rewards",
      step: "04",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Get started with DeFi in just four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-8 pb-6">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>

                {/* Arrow connector for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
