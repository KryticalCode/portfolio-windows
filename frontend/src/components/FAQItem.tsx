import { useState } from "react";

type FAQItemProps = {
  question: string;
  answer: string;
  // Maybe: defaultOpen?: boolean; // Optional prop for default open state
};

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen); // Toggle open state to show/hide answer
  };
  return (
    <div>
      <div className="border-b border-gray-300 py-2">
        <button
          className="flex justify-between w-full text-left font-semibold text-lg focus:outline-none"
          onClick={toggleOpen}
        >
          {question}
        </button>
        {isOpen && <p className="mt-2 text-gray-700">{answer}</p>}
      </div>
    </div>
  );
}
