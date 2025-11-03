'use client'

import { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: "How does music IP registration work on Sunflowaa?",
    answer: "When you upload your music to Sunflowaa, we automatically register it as intellectual property using blockchain technology. This creates an immutable record of your ownership and ensures your creative rights are protected."
  },
  {
    id: 2,
    question: "Can I remix music from other artists on the platform?",
    answer: "Yes! Sunflowaa enables collaborative remixing with proper attribution and revenue sharing. When you remix a track, the original artist automatically receives a percentage of any earnings generated from your remix."
  },
  {
    id: 3,
    question: "How do I earn money from my music?",
    answer: "You can monetize your music through streaming royalties, remix licensing fees, NFT sales, and direct fan support. Our platform automatically handles payment distribution and ensures fair compensation for all contributors."
  },
  {
    id: 4,
    question: "Is Sunflowaa free to use?",
    answer: "Yes, Sunflowaa is free to join and start uploading your music. We operate on a revenue-sharing model, taking a small percentage only when you earn money from your creations."
  },
  {
    id: 5,
    question: "What file formats are supported?",
    answer: "We support all major audio formats including MP3, WAV, FLAC, and AIFF. For the best quality and blockchain registration, we recommend uploading in lossless formats like WAV or FLAC."
  },
  {
    id: 6,
    question: "How does the ecosystem integration work?",
    answer: "Sunflowaa integrates with Story Protocol and IP Token to provide seamless intellectual property management and tokenization. This allows for transparent ownership tracking and automated royalty distribution across the ecosystem."
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-20 bg-linear-to-br from-blue-50 via-blue-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about creating, remixing, and monetizing music on Sunflowaa
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-black pr-4">
                  {faq.question}
                </h3>
                <div className={`text-gray-600 transition-transform duration-300 ${
                  openItems.includes(faq.id) ? 'rotate-180' : ''
                }`}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openItems.includes(faq.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <a 
            href="#" 
            className="inline-flex items-center text-black font-medium hover:text-gray-700 transition-colors duration-300"
          >
            Contact our support team
            <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.5 10H15.5M15.5 10L10.5 5M15.5 10L10.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}