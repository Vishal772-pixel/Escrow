import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Twitter, Diamond as Discord, Instagram as Telegram } from "lucide-react"

export default Footer() {
  const footerLinks = {
    Protocol: [
      { name: "Lending", href: "#lending" },
      { name: "Borrowing", href: "#borrowing" },
      { name: "Swapping", href: "#swapping" },
      { name: "Staking", href: "#staking" },
    ],
    Resources: [
      { name: "Documentation", href: "#docs" },
      { name: "API Reference", href: "#api" },
      { name: "Tutorials", href: "#tutorials" },
      { name: "Blog", href: "#blog" },
    ],
    Company: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Press Kit", href: "#press" },
      { name: "Contact", href: "#contact" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "Disclaimer", href: "#disclaimer" },
    ],
  }

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "#twitter" },
    { name: "Discord", icon: Discord, href: "#discord" },
    { name: "Telegram", icon: Telegram, href: "#telegram" },
    { name: "GitHub", icon: Github, href: "#github" },
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter Section */}
        <div className="mb-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get the latest updates on new features, partnerships, and DeFi insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="flex-1" />
            <Button>Subscribe</Button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <div className="flex items-center mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-primary mr-8">DeFiProtocol</h2>
            <p className="text-sm text-muted-foreground">© 2024 DeFiProtocol. All rights reserved.</p>
          </div>

          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
