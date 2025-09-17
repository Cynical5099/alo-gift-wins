import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How does this work?",
      answer: "Simply click 'Start My Reward', complete 3-5 sponsored deals from our trusted partners, and receive your $500 Alo Yoga gift card via email. It's that simple!"
    },
    {
      question: "When will I receive my reward?",
      answer: "Gift cards are typically delivered within 3-7 business days after completing the required deals. The more deals you complete, the better your overall reward experience."
    },
    {
      question: "Why do more deals mean better rewards?",
      answer: "Completing additional deals enhances your overall reward experience and may unlock bonus benefits. While 3 deals is the minimum, completing 5+ deals maximizes your reward potential."
    },
    {
      question: "Is this legitimate?",
      answer: "Absolutely! We partner with established brands to offer genuine rewards. Thousands of customers have successfully received their Alo Yoga gift cards through our platform."
    },
    {
      question: "What kind of deals will I need to complete?",
      answer: "You'll choose from various sponsored offers like app downloads, product trials, or service sign-ups from our trusted brand partners. All deals are clearly outlined before you start."
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about earning your reward
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-background rounded-lg px-6 border-none shadow-sm"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-foreground/80">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;