import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight px-2">,
          Get a $500 Alo Yoga Gift Card
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
          Fuel your lifestyle with premium activewear – just complete a few simple steps.
        </p>
        
        <Button 
          variant="cta" 
          size="xl"
          className="text-lg sm:text-xl py-3 sm:py-4 px-8 sm:px-12 w-full sm:w-auto min-h-[3rem] sm:min-h-[3.5rem]"
          onClick={() => window.open('https://offerlnks.com/aff_c?offer_id=378&aff_id=21664&source=tiktok3', '_blank')}
        >
          Start My Reward
        </Button>
      </div>
    </section>
  );
};

export default Hero;