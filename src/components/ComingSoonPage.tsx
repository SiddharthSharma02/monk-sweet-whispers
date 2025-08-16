import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RemindMeModal } from "./RemindMeModal";
import { Leaf, Sparkles, Heart } from "lucide-react";
import monkFruitBorder from "@/assets/monk-fruit-border.jpg";

export const ComingSoonPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-monk-green-light/30 to-background relative overflow-hidden flex flex-col">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('/lovable-uploads/af2580a5-3d4a-4f09-8134-66a5c73292b9.png')] bg-no-repeat bg-top bg-contain opacity-10"></div>
      
      {/* Floating particles animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-4 md:left-10 w-2 h-2 bg-monk-green/20 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-32 right-4 md:right-20 w-3 h-3 bg-premium-gold/30 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-40 left-4 md:left-20 w-2 h-2 bg-monk-green/20 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 right-4 md:right-10 w-3 h-3 bg-premium-gold/30 rounded-full animate-bounce delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-4 pt-8 pb-4">
        {/* Logo */}
        <div className="mb-8 md:mb-12 transform hover:scale-105 transition-transform duration-300">
          <img 
            src="/lovable-uploads/af2580a5-3d4a-4f09-8134-66a5c73292b9.png" 
            alt="Everything Fine Logo" 
            className="h-16 md:h-20 w-auto mx-auto drop-shadow-lg"
          />
        </div>

        {/* Coming Soon Section */}
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 text-center">
          {/* Decorative monk fruit border */}
          <div className="flex justify-center mb-4 md:mb-6">
            <img 
              src={monkFruitBorder} 
              alt="Monk Fruit Border" 
              className="h-12 md:h-14 w-auto opacity-60"
            />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-monk-green leading-tight">
            Coming
            <span className="block text-premium-gold">Soon</span>
          </h1>
          
          <div className="flex justify-center space-x-3 md:space-x-4 items-center text-monk-green/70">
            <Leaf className="h-4 w-4 md:h-5 w-5" />
            <div className="h-px bg-monk-green/30 w-12 md:w-16"></div>
            <Sparkles className="h-4 w-4 md:h-5 w-5" />
            <div className="h-px bg-monk-green/30 w-12 md:w-16"></div>
            <Leaf className="h-4 w-4 md:h-5 w-5" />
          </div>
          
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-monk-green font-semibold">
              Premium Monk Fruit Sweetener
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
              Experience the pure, natural sweetness of premium monk fruit. 
              Zero calories, zero compromise on taste. Everything fine, naturally.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4 md:pt-6">
            <Button 
              onClick={() => setModalOpen(true)}
              variant="premium"
              size="lg"
              className="text-base md:text-lg px-8 md:px-12 py-4 md:py-6 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Leaf className="mr-2 h-4 w-4 md:h-5 w-5" />
              Remind Me When It's Ready
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-8 md:pt-12 max-w-3xl mx-auto">
            <div className="text-center space-y-2">
              <div className="bg-monk-green-light p-3 md:p-4 rounded-full w-12 h-12 md:w-14 h-14 mx-auto flex items-center justify-center">
                <Leaf className="h-6 w-6 md:h-7 w-7 text-monk-green" />
              </div>
              <h3 className="font-semibold text-monk-green text-sm md:text-base">100% Natural</h3>
              <p className="text-xs md:text-sm text-muted-foreground">Pure monk fruit extract</p>
            </div>
            <div className="text-center space-y-2">
              <div className="bg-premium-gold-light p-3 md:p-4 rounded-full w-12 h-12 md:w-14 h-14 mx-auto flex items-center justify-center">
                <Sparkles className="h-6 w-6 md:h-7 w-7 text-premium-gold" />
              </div>
              <h3 className="font-semibold text-monk-green text-sm md:text-base">Zero Calories</h3>
              <p className="text-xs md:text-sm text-muted-foreground">Guilt-free sweetness</p>
            </div>
            <div className="text-center space-y-2">
              <div className="bg-monk-green-light p-3 md:p-4 rounded-full w-12 h-12 md:w-14 h-14 mx-auto flex items-center justify-center">
                <Heart className="h-6 w-6 md:h-7 w-7 text-monk-green" />
              </div>
              <h3 className="font-semibold text-monk-green text-sm md:text-base">Premium Quality</h3>
              <p className="text-xs md:text-sm text-muted-foreground">Carefully sourced</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-monk-green/5 border-t border-monk-green/20 py-6 md:py-8 mt-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Leaf className="h-5 w-5 text-monk-green" />
              <span className="text-monk-green font-semibold">Everything Fine</span>
            </div>
            
            <div className="text-sm text-muted-foreground">
              © 2024 Everything Fine. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-premium-gold fill-current" />
              <span>for natural wellness</span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-monk-green/10">
            <p className="text-xs text-muted-foreground">
              Premium monk fruit sweetener • Natural • Zero Calories • Sustainably Sourced
            </p>
          </div>
        </div>
      </footer>

      <RemindMeModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
};