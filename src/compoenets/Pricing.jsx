// Timeline Section
function TimelineSection() {
  const steps = [
    { icon: '📝', title: 'Sign Up', desc: 'Create your free account in seconds.' },
    { icon: '🎨', title: 'Choose Template', desc: 'Browse and select your favorite design.' },
    { icon: '✍️', title: 'Customize', desc: 'Personalize with your details and photos.' },
    { icon: '💳', title: 'Upgrade', desc: 'Unlock premium features anytime.' },
    { icon: '📥', title: 'Download & Share', desc: 'Get your invitation instantly and share!' },
  ];
  return (
    <section className="py-12 px-4 bg-[#FFF8F0]">
      <h2 className="text-2xl font-bold text-[#D4AF37] mb-8 text-center">How It Works</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center group transition-transform duration-300 hover:scale-105">
            <div className="text-4xl mb-2 group-hover:animate-bounce">{step.icon}</div>
            <div className="font-bold text-[#6E1E1E] mb-1">{step.title}</div>
            <div className="text-sm text-[#6E1E1E] text-center max-w-[120px]">{step.desc}</div>
            {idx < steps.length - 1 && <div className="hidden md:block w-8 h-1 bg-[#D4AF37] mx-2 my-4 rounded-full"></div>}
          </div>
        ))}
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    { name: 'Amit & Priya', text: 'The designs were beautiful and easy to use, and elegant.', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { name: 'Rahul & Sneha', text: 'Superb support and so many options. Highly recommended!', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { name: 'Vikas & Ritu', text: 'The customization was a breeze. We got exactly what we wanted!', img: 'https://randomuser.me/api/portraits/men/65.jpg' },
  ];
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setCurrent((current + 1) % testimonials.length), 4000);
    return () => clearTimeout(timer);
  }, [current]);
  return (
    <section className="py-12 px-4 bg-white/80">
      <h2 className="text-2xl font-bold text-[#D4AF37] mb-8 text-center">What Our Users Say</h2>
      <div className="max-w-xl mx-auto flex flex-col items-center">
        <div className="relative w-full">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center transition-all duration-500">
            <img src={testimonials[current].img} alt={testimonials[current].name} className="w-16 h-16 rounded-full mb-2 border-2 border-[#D4AF37]" />
            <div className="text-[#6E1E1E] italic mb-2">"{testimonials[current].text}"</div>
            <div className="font-bold text-[#D4AF37]">{testimonials[current].name}</div>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, idx) => (
              <button key={idx} onClick={() => setCurrent(idx)} className={`w-3 h-3 rounded-full ${current === idx ? 'bg-[#D4AF37]' : 'bg-gray-300'}`}></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Call-to-Action Banner
function CTABanner() {
  return (
    <section className="py-10 px-4 bg-gradient-to-r from-[#D4AF37]/90 to-[#6E1E1E]/90 text-white text-center rounded-2xl shadow-xl my-12 mx-2 animate-pulse">
      <h2 className="text-3xl font-extrabold mb-2">Ready to Make Your Event Unforgettable?</h2>
      <p className="mb-4">Join thousands of happy couples and create your perfect invitation today!</p>
      <a href="/signup" className="inline-block bg-white text-[#6E1E1E] font-bold px-8 py-3 rounded-full shadow hover:bg-[#D4AF37] hover:text-white transition">Get Started Free</a>
    </section>
  );
}

import React, { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";

// Dynamic stats section with animated counters
function DynamicStatsSection() {
  const [start, setStart] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onScroll = () => {
      if (!start && ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
          setStart(true);
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [start]);

  return (
    <section className="py-16 px-4 text-center" ref={ref}>
      <h2 className="text-2xl md:text-3xl font-bold text-[#6E1E1E] mb-6">Our Impact</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        <div className="bg-white/90 rounded-xl shadow p-8 flex flex-col items-center w-full md:w-1/3">
          <span className="text-4xl font-extrabold text-[#D4AF37] mb-2">
            <CountUp start={start ? 0 : null} end={2500} duration={1.5} separator="," />+
          </span>
          <span className="text-[#6E1E1E]">Happy Couples</span>
        </div>
        <div className="bg-white/90 rounded-xl shadow p-8 flex flex-col items-center w-full md:w-1/3">
          <span className="text-4xl font-extrabold text-[#D4AF37] mb-2">
            <CountUp start={start ? 0 : null} end={50} duration={1.2} />+
          </span>
          <span className="text-[#6E1E1E]">Templates</span>
        </div>
        <div className="bg-white/90 rounded-xl shadow p-8 flex flex-col items-center w-full md:w-1/3">
          <span className="text-4xl font-extrabold text-[#D4AF37] mb-2">
            <CountUp start={start ? 0 : null} end={4.9} duration={1.2} decimals={1} />/5
          </span>
          <span className="text-[#6E1E1E]">Average Rating</span>
        </div>
      </div>
    </section>
  );
}

const pricingPlans = [
  {
    name: "Starter",
    price: 0,
    features: [
      "Basic Templates",
      "Community Support",
      "Watermarked Downloads",
      "Access to Free Events"
    ],
    highlight: false,
  },
  {
    name: "Personal",
    price: 299,
    features: [
      "All Starter Features",
      "No Watermark",
      "Premium Templates",
      "Priority Email Support"
    ],
    highlight: true,
  },
  {
    name: "Pro",
    price: 599,
    features: [
      "All Personal Features",
      "Unlimited Downloads",
      "Custom Design Requests",
      "Direct WhatsApp Support"
    ],
    highlight: false,
  },
];

const faqs = [
  {
    q: "Can I upgrade my plan later?",
    a: "Yes, you can upgrade anytime and only pay the difference."
  },
  {
    q: "Are payments secure?",
    a: "Absolutely! We use industry-standard encryption and Razorpay."
  },
  {
    q: "Do you offer refunds?",
    a: "Refunds are available within 7 days for unused premium features."
  },
];

const Pricing = () => {
  const [faqOpen, setFaqOpen] = useState(null);

  return (
    <div className="bg-gradient-to-br from-[#FFF8F0] to-[#FDF6EC] min-h-screen w-full relative">
      {/* 1. Hero Section */}
      <section className="py-16 px-4 text-center relative">
  <img src="/images/banner.png" alt="Wedding Banner" className="absolute left-0 top-0 w-32 md:w-48 opacity-30 -z-10 max-w-full object-contain" />
  <img src="/images/banner(1)(1).png" alt="Decor Banner" className="absolute right-0 top-0 w-32 md:w-48 opacity-30 -z-10 max-w-full object-contain" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#D4AF37] mb-4 drop-shadow">Flexible Pricing for Every Need</h1>
        <p className="text-lg md:text-xl text-[#6E1E1E] max-w-2xl mx-auto">Choose a plan that fits your event and budget. Upgrade anytime as your needs grow!</p>
        <img src="/images/leaf.png" alt="Leaf Decor" className="mx-auto mt-6 w-16 md:w-24 opacity-60" />
      </section>

      {/* 1b. Timeline Section */}
      <div className="relative">
  <img src="/images/Untitled_design-removebg-preview.png" alt="Timeline Decor" className="absolute left-0 bottom-0 w-24 md:w-32 opacity-20 -z-10 max-w-full object-contain" />
        <TimelineSection />
      </div>

      {/* 2. Pricing Cards Section */}
      <section className="py-8 px-4 flex flex-col md:flex-row gap-8 max-w-5xl mx-auto justify-center relative">
  <img src="/images/service.png" alt="Service Decor" className="absolute right-0 top-0 w-24 md:w-32 opacity-20 -z-10 max-w-full object-contain" />
        {pricingPlans.map((plan, idx) => (
          <div
            key={plan.name}
            className={`flex-1 bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center border-2 ${plan.highlight ? 'border-[#D4AF37] scale-105' : 'border-transparent'} transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2`}
          >
            <img src="/images/fav-removebg-preview.png" alt="Plan Icon" className="w-12 h-12 mb-2" />
            <h2 className="text-2xl font-bold text-[#6E1E1E] mb-2">{plan.name}</h2>
            <div className="text-4xl font-extrabold text-[#D4AF37] mb-4">{plan.price === 0 ? 'Free' : `₹${plan.price}`}</div>
            <ul className="mb-6 space-y-2 text-[#6E1E1E]">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-green-500">✔</span> {f}
                </li>
              ))}
            </ul>
            <button className={`px-6 py-2 rounded-full font-bold shadow ${plan.highlight ? 'bg-[#D4AF37] text-[#6E1E1E]' : 'bg-[#6E1E1E] text-white'} hover:scale-105 transition-transform`}>Choose</button>
          </div>
        ))}
      </section>

      {/* 3. Features Highlight Section */}
      <section className="py-12 px-4 bg-white/80 relative">
  <img src="/images/temp.png" alt="Feature Decor" className="absolute left-0 top-0 w-20 md:w-28 opacity-20 -z-10 max-w-full object-contain" />
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-xl shadow bg-[#FFF8F0] flex flex-col items-center">
            <img src="/images/leaf.png" alt="Creative Templates" className="w-10 h-10 mb-2 opacity-80" />
            <span className="text-3xl">🎨</span>
            <h3 className="font-bold text-lg mt-2 mb-1 text-[#D4AF37]">Creative Templates</h3>
            <p>Access a growing library of beautiful, customizable designs.</p>
          </div>
          <div className="p-6 rounded-xl shadow bg-[#FFF8F0] flex flex-col items-center">
            <img src="/images/service.png" alt="Instant Download" className="w-10 h-10 mb-2 opacity-80" />
            <span className="text-3xl">⚡</span>
            <h3 className="font-bold text-lg mt-2 mb-1 text-[#D4AF37]">Instant Download</h3>
            <p>Get your invitations and banners instantly after payment.</p>
          </div>
          <div className="p-6 rounded-xl shadow bg-[#FFF8F0] flex flex-col items-center">
            <img src="/images/profile.jpg" alt="Expert Support" className="w-10 h-10 mb-2 rounded-full opacity-80" />
            <span className="text-3xl">🤝</span>
            <h3 className="font-bold text-lg mt-2 mb-1 text-[#D4AF37]">Expert Support</h3>
            <p>Our team is always ready to help you at every step.</p>
          </div>
        </div>
      </section>

      {/* 4. Comparison Table Section */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-[#6E1E1E] mb-6 text-center">Compare Plans</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-[#D4AF37] rounded-xl overflow-hidden">
            <thead className="bg-[#D4AF37] text-white">
              <tr>
                <th className="py-3 px-4">Feature</th>
                {pricingPlans.map((plan) => (
                  <th key={plan.name} className="py-3 px-4">{plan.name}</th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="py-2 px-4">Premium Templates</td>
                <td className="py-2 px-4 text-center">-</td>
                <td className="py-2 px-4 text-center">✔</td>
                <td className="py-2 px-4 text-center">✔</td>
              </tr>
              <tr className="bg-[#FFF8F0]">
                <td className="py-2 px-4">Custom Design Requests</td>
                <td className="py-2 px-4 text-center">-</td>
                <td className="py-2 px-4 text-center">-</td>
                <td className="py-2 px-4 text-center">✔</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Direct WhatsApp Support</td>
                <td className="py-2 px-4 text-center">-</td>
                <td className="py-2 px-4 text-center">-</td>
                <td className="py-2 px-4 text-center">✔</td>
              </tr>
              <tr className="bg-[#FFF8F0]">
                <td className="py-2 px-4">Unlimited Downloads</td>
                <td className="py-2 px-4 text-center">-</td>
                <td className="py-2 px-4 text-center">-</td>
                <td className="py-2 px-4 text-center">✔</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Watermarked Downloads</td>
                <td className="py-2 px-4 text-center">✔</td>
                <td className="py-2 px-4 text-center">-</td>
                <td className="py-2 px-4 text-center">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>


      {/* 5. FAQ Section */}
      <section className="py-12 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-[#D4AF37] mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white/90 rounded-xl shadow p-4">
              <button
                className="w-full text-left font-semibold text-[#6E1E1E] flex justify-between items-center"
                onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
              >
                {faq.q}
                <span>{faqOpen === idx ? '-' : '+'}</span>
              </button>
              {faqOpen === idx && (
                <div className="mt-2 text-[#6E1E1E]">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

  {/* 6. Testimonials Section */}
  <div className="relative">
  <img src="/images/banner(1)(1).png" alt="Testimonial Decor" className="absolute left-0 top-0 w-24 md:w-32 opacity-20 -z-10 max-w-full object-contain" />
    <TestimonialsSection />
  </div>

  {/* 7. Call-to-Action Banner */}
  <div className="relative">
  <img src="/images/leaf.png" alt="CTA Decor" className="absolute right-0 top-0 w-16 md:w-24 opacity-30 -z-10 max-w-full object-contain" />
    <CTABanner />
  </div>

  {/* 8. Dynamic Stats Section */}
  <div className="relative">
  <img src="/images/temp.png" alt="Stats Decor" className="absolute left-0 bottom-0 w-20 md:w-28 opacity-20 -z-10 max-w-full object-contain" />
    <DynamicStatsSection />
  </div>

    </div>
  );
};

export default Pricing;
