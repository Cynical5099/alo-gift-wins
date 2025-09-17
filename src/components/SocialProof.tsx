import { Star } from "lucide-react";

const SocialProof = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "Shopping made so easy! I completed a few deals and got my gift card exactly when promised. Love my new Alo sets!"
    },
    {
      name: "Jessica L.",
      rating: 5,
      text: "Fast delivery on the reward! The process was straightforward and I'm already enjoying my premium activewear."
    },
    {
      name: "Maya R.",
      rating: 5,
      text: "Trusted rewards that actually work. I was skeptical at first but got my $500 gift card within days. Highly recommend!"
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex justify-center mb-4">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Trusted by Thousands
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our community says about their reward experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-muted/20 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
              <StarRating rating={testimonial.rating} />
              
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="font-semibold text-foreground">
                {testimonial.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;