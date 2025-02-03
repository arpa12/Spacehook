import React, { useState } from 'react';

const ContactForm = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { email, message });
    };

    return (
        <div className="w-full h-screen bg-white grid grid-cols-1 md:grid-cols-2">
            {/* Left Section - Full Left Screen */}
            <div className="h-full bg-black flex items-center justify-center text-center md:text-left p-8 md:p-12">
                <h1 className="text-white text-3xl md:text-4xl font-normal leading-tight">
                    Reach out to get customized solutions, for business inquiries or just to say "Hi"...
                </h1>
            </div>

            {/* Right Section - Full Right Screen */}
            <div className="h-full flex items-center justify-center p-8 md:p-12">
                <div className="max-w-md w-full">
                    <h2 className="text-2xl font-semibold mb-4 md:mb-6">Contact Spacehook</h2>
                    <p className="text-gray-600 mb-6 md:mb-8">Enter your email and queries below</p>

                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email address"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                    required
                                />
                            </div>
                            <div>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Type your message"
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black resize-none"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors"
                            >
                                Send
                            </button>
                        </div>
                    </form>

                    <div className="mt-6 md:mt-8 text-center">
                        <p className="text-gray-500 mb-4">OR Give us a Call</p>
                        <a
                            href="tel:+8801683026990"
                            className="flex items-center justify-center gap-2 p-4 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                            </svg>
                            +880 1683 026990
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
