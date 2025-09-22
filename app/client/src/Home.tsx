import react from "react";



    export const HomePage() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isSignupOpen, setIsSignupOpen] = useState(false)

  const handleLoginOpen = () => setIsLoginOpen(true)
  const handleSignupOpen = () => setIsSignupOpen(true)
  const handleLoginClose = () => setIsLoginOpen(false)
  const handleSignupClose = () => setIsSignupOpen(false)

  const handleSwitchToSignup = () => setIsSignupOpen(true)
  const handleSwitchToLogin = () => setIsLoginOpen(true)
return{(
    <>
    </Navbar>

        <HeroSection />
                    <FeaturesSection />

                <HowItWorks />


        <StatsSection />

     <AuthDialogs
        isLoginOpen={isLoginOpen}
        isSignupOpen={isSignupOpen}
        onLoginClose={handleLoginClose}
        onSignupClose={handleSignupClose}
        onSwitchToSignup={handleSwitchToSignup}
        onSwitchToLogin={handleSwitchToLogin}
      />

    </>
)}
}

