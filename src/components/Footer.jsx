// src/components/Footer.jsx
const Footer = () => {
    return (
        <footer className="bg-gray-100 border-t border-gray-200 py-10 px-6 sm:px-12 lg:px-24">
            <div className="flex flex-col md:flex-row justify-between gap-6">

                {/* Left - App Info */}
                <div>
                    <h3 className="text-xl font-bold text-blue-600">Student Marketplace</h3>
                    <p className="text-sm text-gray-600 mt-2 max-w-sm">
                        A safe and easy way for students to buy and sell goods on campus. Built by students, for students.
                    </p>
                </div>

                {/* Center - Navigation */}
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                    <div className="space-y-2">
                        <p className="font-semibold text-gray-800">Explore</p>
                        <a href="/shop" className="hover:underline">Shop</a>
                        <a href="/list-item" className="hover:underline">Sell</a>
                        <a href="/categories" className="hover:underline">Categories</a>
                        <a href="/faq" className="hover:underline">FAQ</a>
                    </div>

                    <div className="space-y-2">
                        <p className="font-semibold text-gray-800">Support</p>
                        <a href="/about" className="hover:underline">About</a>
                        <a href="/contact" className="hover:underline">Contact</a>
                        <a href="/terms" className="hover:underline">Terms</a>
                        <a href="/privacy" className="hover:underline">Privacy</a>
                    </div>
                </div>

                {/* Right - Socials */}
                <div className="text-sm text-gray-700">
                    <p className="font-semibold text-gray-800 mb-2">Connect</p>
                    <div className="flex gap-4">
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-blue-500">📸 Instagram</a>
                        <a href="mailto:support@yourapp.com" className="hover:text-blue-500">✉️ Email</a>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="mt-8 text-center text-xs text-gray-500">
                © {new Date().getFullYear()} Student Marketplace. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
