import startIcon from "@/assets/start-icon.jpg";
import completeIcon from "@/assets/complete-icon.jpg";
import receiveIcon from "@/assets/receive-icon.jpg";

const HowItWorks = () => {
  const steps = [
    {
      icon: startIcon,
      title: "Click \"Start\"",
      description: "Begin your reward journey with a simple click"
    },
    {
      icon: completeIcon,
      title: "Complete 3-5 Sponsored Deals",
      description: "The more you complete, the better your reward becomes"
    },
    {
      icon: receiveIcon,
      title: "Receive Your $500 Gift Card",
      description: "Get your Alo Yoga gift card delivered to your email"
    }
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Three simple steps to earn your premium activewear reward
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-background rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={step.icon} 
                    alt={step.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;