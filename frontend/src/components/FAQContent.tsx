import FAQItem from "./FAQItem";

interface FAQContentProps {
  faqItems: {
    question: string;
    answer: string;
  }[];
}

export default function FAQContent({ faqItems }: FAQContentProps) {
  return (
    <div className="w-full h-full overflow-x-hidden space-y-1.5 p-4">
      {faqItems.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}
