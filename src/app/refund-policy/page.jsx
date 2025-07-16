'use client';

import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import Image from 'next/image';

export default function RefundPolicy() {
    return (
        <main className="w-full bg-white text-gray-700">
            <Header />
            <div className="w-full relative h-[200px] overflow-hidden mt-16">
                <Image
                    src="/refund-policy.webp"
                    alt="Terms and Conditions"
                    fill
                    priority
                    className="object-cover object-center filter brightness-[0.4] blur-sm"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">
                        Refund <span className="text-blue-400">Policy</span>
                    </h1>
                </div>
            </div>
            <section className="max-w-7xl mx-auto py-12 px-8 space-y-4">
                <div>
                    <h2 className="text-xl font-semibold mb-4">Introduction</h2>
                    <p>
                        At <strong>Super Canteen</strong>, customer satisfaction is our top priority. This Refund Policy outlines the conditions under which refunds are applicable for purchases made through our platform.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-4">Eligibility for Refunds</h2>
                    <p>
                        Refunds are only applicable to orders that meet certain conditions such as wrong delivery, defective products, or products damaged during transit. Perishable goods, like fresh food items, may not be eligible for refunds unless there is a proven issue with quality at the time of delivery.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-4">Refund Process</h2>
                    <p>
                        To request a refund, customers must contact our support team within 24 hours of delivery. The request must be supported by clear evidence such as photographs and a detailed description of the issue. Once the request is verified, refunds will be processed to the original payment method within 7-10 business days.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-4">Non-Refundable Items</h2>
                    <p>
                        Certain products like ready-to-eat meals, customized items, or products on promotional discounts may not be eligible for refunds. Please check product descriptions for refund eligibility before placing your order.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-4">Cancellations</h2>
                    <p>
                        Orders can only be cancelled before they are dispatched. Once the order is out for delivery, cancellations are not permitted. In case of pre-paid orders, cancellation refunds will be initiated within 5-7 business days.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                    <p>
                        For any refund-related inquiries, please reach out to our support team:<br />
                        📧 Email: <a href="mailto:support@supercanteen.com" className="text-blue-500">support@supercanteen.com</a><br />
                        📞 Phone: +91 98765 43210
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
