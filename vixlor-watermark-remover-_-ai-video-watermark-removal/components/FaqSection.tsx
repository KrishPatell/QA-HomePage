
import React, { useState } from 'react';
import { ChevronDownIcon } from './icons/ChevronDownIcon';

const faqData = [
    {
        question: "How does the AI work to remove watermarks?",
        answer: "Our temporal-aware AI analyzes the video frame by frame, identifying the watermark and understanding the pixels behind it based on surrounding frames. It then intelligently reconstructs the obscured area, ensuring consistency with motion and lighting changes."
    },
    {
        question: "Can Vixlor remove the official Sora watermark?",
        answer: "Absolutely. Vixlor is specifically optimized to handle the unique characteristics of watermarks found on AI-generated videos, including those from Sora. Our Vixlor Video Watermark Remover tool ensures a clean and seamless result."
    },
    {
        question: "What makes Vixlor better than other watermark removers?",
        answer: "Unlike generic tools, Vixlor uses temporal-aware AI. This means it analyzes multiple frames at once to accurately reconstruct the pixels behind the watermark, preventing the motion artifacts, blurriness, or jitter common with other solutions. It's a true Sora Watermark Remover, built for quality."
    },
    {
        question: "Is the Vixlor Watermark Remover free?",
        answer: "We offer a free trial that includes 3 video exports so you can experience the power of our tool. For unlimited exports and advanced features like 4K resolution and batch processing, please check out our Pro and Studio plans."
    },
    {
        question: "Is this legal to use?",
        answer: "Vixlor is a powerful tool designed to help you restore your own content or videos you have the rights to modify. It is your responsibility to ensure you have the appropriate permissions before processing any video. We do not condone copyright infringement."
    },
    {
        question: "Will removing the watermark reduce my video quality?",
        answer: "No, our tool is designed to preserve the original video quality. We process your video without re-encoding unless necessary, and our AI inpainting is meticulously crafted to match the original texture, lighting, and color, ensuring a high-fidelity output."
    },
    {
        question: "What video formats and resolutions are supported?",
        answer: "We support all major video formats, including MP4, MOV, and WebM. Our Pro and Studio plans support resolutions up to 4K UHD for professional-quality results."
    },
    {
        question: "How long does processing take?",
        answer: "Processing time depends on the video length and resolution. Thanks to GPU acceleration, our engine is incredibly fast. A one-minute 1080p video typically processes in under a minute on our Pro plan."
    },
    {
        question: "Do I need to install any software?",
        answer: "No, Vixlor is a fully cloud-based platform. You can access our Vixlor Video Watermark Remover from any modern web browser on your desktop or mobile device. Just upload your video, and our servers do all the heavy lifting."
    }
];

const FaqItem: React.FC<{ item: typeof faqData[0]; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
    return (
        <div className="border-b border-[var(--color-linen)]">
            <button className="w-full flex justify-between items-center text-left py-5 focus-ring rounded-sm" onClick={onClick}>
                <span className="font-medium text-lg text-[var(--color-ink)]">{item.question}</span>
                <ChevronDownIcon className={`w-5 h-5 text-[var(--color-slate)] transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
            </button>
            <div className={`grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : ''}`}>
                <div className="overflow-hidden">
                    <p className="pb-5 text-base text-[var(--color-slate)] pr-8">{item.answer}</p>
                </div>
            </div>
        </div>
    );
};

const FaqSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-16 md:py-24 bg-[var(--color-canvas)]">
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-12 scroll-reveal">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-ink)] tracking-tight">Frequently Asked Questions</h2>
                </div>
                <div className="scroll-reveal">
                    {faqData.map((item, index) => (
                        <FaqItem 
                            key={index} 
                            item={item} 
                            isOpen={openIndex === index} 
                            onClick={() => handleClick(index)} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;