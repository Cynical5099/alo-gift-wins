import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
          Ready to Fuel Your Lifestyle?
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Join thousands who've already earned their premium activewear. Your $500 Alo Yoga gift card is just a few steps away.
        </p>
        
        <Button 
          variant="cta" 
          size="xl"
          className="text-xl py-4 px-12"
          onClick={() => window.open('https://offerlnks.com/aff_c?offer_id=378&aff_id=21664&source=tiktok3', '_blank')}
        >
          Start My Reward
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;