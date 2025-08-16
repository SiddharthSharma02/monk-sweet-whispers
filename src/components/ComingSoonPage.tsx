import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RemindMeModal } from "./RemindMeModal";
import { Leaf, Sparkles } from "lucide-react";
import monkFruitIllustration from "@/assets/monk-fruit-illustration.jpg";
import monkFruitBorder from "@/assets/monk-fruit-border.jpg";

export const ComingSoonPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-monk-green-light/30 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('/lovable-uploads/af2580a5-3d4a-4f09-8134-66a5c73292b9.png')] bg-no-repeat bg-top bg-contain opacity-10"></div>
      
      {/* Floating particles animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-monk-green/20 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-premium-gold/30 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-monk-green/20 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-premium-gold/30 rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Logo */}
        <div className="mb-16 transform hover:scale-105 transition-transform duration-300">
          <img 
            src="/lovable-uploads/af2580a5-3d4a-4f09-8134-66a5c73292b9.png" 
            alt="Everything Fine Logo" 
            className="h-24 w-auto mx-auto drop-shadow-lg"
          />
        </div>

        {/* Coming Soon Section */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Decorative monk fruit border */}
          <div className="flex justify-center mb-8">
            <img 
              src={monkFruitBorder} 
              alt="Monk Fruit Border" 
              className="h-16 w-auto opacity-60"
            />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-monk-green leading-tight">
            Coming
            <span className="block text-premium-gold">Soon</span>
          </h1>
          
          <div className="flex justify-center space-x-4 items-center text-monk-green/70">
            <Leaf className="h-6 w-6" />
            <div className="h-px bg-monk-green/30 w-16"></div>
            <Sparkles className="h-6 w-6" />
            <div className="h-px bg-monk-green/30 w-16"></div>
            <Leaf className="h-6 w-6" />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl text-monk-green font-semibold">
              Premium Monk Fruit Sweetener
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Experience the pure, natural sweetness of premium monk fruit. 
              Zero calories, zero compromise on taste. Everything fine, naturally.
            </p>
          </div>

          {/* Monk fruit illustration */}
          <div className="flex justify-center my-12">
            <div className="relative">
              <img 
                src={monkFruitIllustration} 
                alt="Premium Monk Fruit" 
                className="h-32 w-32 object-contain drop-shadow-xl transform hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-premium-gold/10 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Button 
              onClick={() => setModalOpen(true)}
              variant="premium"
              size="lg"
              className="text-lg px-12 py-6 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Leaf className="mr-2 h-5 w-5" />
              Remind Me When It's Ready
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
            <div className="text-center space-y-2">
              <div className="bg-monk-green-light p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <Leaf className="h-8 w-8 text-monk-green" />
              </div>
              <h3 className="font-semibold text-monk-green">100% Natural</h3>
              <p className="text-sm text-muted-foreground">Pure monk fruit extract</p>
            </div>
            <div className="text-center space-y-2">
              <div className="bg-premium-gold-light p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-premium-gold" />
              </div>
              <h3 className="font-semibold text-monk-green">Zero Calories</h3>
              <p className="text-sm text-muted-foreground">Guilt-free sweetness</p>
            </div>
            <div className="text-center space-y-2">
              <div className="bg-monk-green-light p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <Leaf className="h-8 w-8 text-monk-green" />
              </div>
              <h3 className="font-semibold text-monk-green">Premium Quality</h3>
              <p className="text-sm text-muted-foreground">Carefully sourced</p>
            </div>
          </div>
        </div>
      </div>

      <RemindMeModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
};