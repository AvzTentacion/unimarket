// src/components/HowItWorks.jsx

const steps = [
    {
        title: "1. Browse & Buy",
        desc: "Find what you need, add to cart, and pay securely online.",
        icon: "🛒",
    },
    {
        title: "2. Meet in Person",
        desc: "Arrange a meetup with the seller on campus.",
        icon: "🤝",
    },
    {
        title: "3. Confirm with Code",
        desc: "Buyer shares the 6-digit code, seller enters it, and funds are released.",
        icon: "🔐",
    },
];

const HowItWorks = () => {
    return (
        <section className="py-12 px-6 sm:px-12 lg:px-24 bg-white">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                ✅ How It Works
            </h2>

            <div className="grid sm:grid-cols-3 gap-8 text-center">
                {steps.map((step, idx) => (
                    <div
                        key={idx}
                        className="bg-blue-50 p-6 rounded-sm shadow-sm hover:shadow-md transition"
                    >
                        <div className="text-4xl mb-3">{step.icon}</div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-1">
                            {step.title}
                        </h3>
                        <p className="text-sm text-gray-600">{step.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;
