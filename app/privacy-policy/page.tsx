import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Thrive Consult',
  description: 'How Thrive Consults collects, uses, and protects your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <main className="pt-32 pb-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-16">
          <h1 className="text-3xl md:text-5xl font-bold text-deep-navy mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600 mb-8 pb-8 border-b border-gray-100">
            How Thrive Consults collects, uses, and protects your personal information.<br/>
            <span className="text-sm font-medium mt-2 inline-block">Last Updated: {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}</span>
          </p>

          <div className="space-y-12 text-gray-600">
            {/* Sections */}
            <section>
              <h2 className="text-2xl font-bold text-deep-navy mb-4">Who We Are</h2>
              <p className="leading-relaxed">
                Thrive Consults is a trading name of Thrive Empire Ltd., a business growth consulting and strategy company registered in Nigeria. Our registered address is Lagos, Nigeria. Our primary contact is <a href="mailto:hello@thriveconsults.com" className="text-teal-dark hover:underline">hello@thriveconsults.com</a> and <a href="tel:+2347032681154" className="text-teal-dark hover:underline">+234 703 268 1154</a>.
              </p>
              <p className="leading-relaxed mt-4">
                When this policy refers to &quot;Thrive Consults,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our,&quot; it means Thrive Empire Ltd. and any services we operate including thriveconsults.com, our shop, our events platform, and our coaching programmes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-deep-navy mb-4">What Information We Collect</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-deep-navy mb-2">Information you give us directly</h3>
                  <p className="leading-relaxed">When you fill out a contact form, book a discovery session, purchase a product or coaching programme, register for an event, or send us a WhatsApp message, you may provide us with your name, business name, phone number, email address, WhatsApp number, business type, and details about your business challenges.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-deep-navy mb-2">Information collected automatically</h3>
                  <p className="leading-relaxed">When you visit our website, we may collect your IP address, browser type, pages visited, time spent on pages, and referring website. This is collected through standard web analytics tools.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-deep-navy mb-2">Payment information</h3>
                  <p className="leading-relaxed">All payments on our website are processed by Paystack. We do not store your card details. Paystack&apos;s privacy policy governs how your payment information is handled. You can review it at <a href="https://paystack.com/privacy" target="_blank" rel="noopener noreferrer" className="text-teal-dark hover:underline">paystack.com/privacy</a>.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-deep-navy mb-2">WhatsApp communications</h3>
                  <p className="leading-relaxed">When you contact us via WhatsApp, your messages and phone number are visible to our team. We use this to respond to your inquiries and follow up on services you have expressed interest in.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-deep-navy mb-4">How We Use Your Information</h2>
              <p className="leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Respond to your inquiries and provide the services you have requested</li>
                <li>Process your payments and deliver digital products, coaching, and event registrations</li>
                <li>Send you information about your orders, bookings, and upcoming events you have registered for</li>
                <li>Follow up with you about your business needs where you have expressed interest in our services</li>
                <li>Improve our website, services, and content based on how visitors use the site</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="leading-relaxed font-medium">We do not sell your personal information to third parties. We do not share your personal information with third parties for their marketing purposes.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-deep-navy mb-4">Legal Basis for Processing</h2>
              <p className="leading-relaxed mb-4">We process your personal information on the following grounds:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-deep-navy">Contract performance:</strong> To deliver services you have paid for or agreed to receive</li>
                <li><strong className="text-deep-navy">Legitimate interests:</strong> To follow up on genuine business inquiries and improve our services</li>
                <li><strong className="text-deep-navy">Consent:</strong> Where you have explicitly agreed to receive communications from us</li>
                <li><strong className="text-deep-navy">Legal obligation:</strong> Where we are required to process data by Nigerian law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-deep-navy mb-4">How We Store and Protect Your Information</h2>
              <p className="leading-relaxed mb-4">Your information is stored on secure servers. We use reasonable technical and organisational measures to protect your personal information against unauthorised access, loss, or misuse.</p>
              <p className="leading-relaxed">We retain your information for as long as necessary to provide the services you have requested and to comply with our legal obligations. If you request deletion of your information, we will comply within 30 days, except where we are required to retain it by law.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-deep-navy mb-4">Cookies</h2>
              <p className="leading-relaxed mb-4">Our website uses cookies — small text files stored on your device — to improve your experience. We use:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong className="text-deep-navy">Essential cookies:</strong> Required for the website to function correctly</li>
                <li><strong className="text-deep-navy">Analytics cookies:</strong> To understand how visitors use our site (we may use Google Analytics or a privacy-friendly alternative)</li>
              </ul>
              <p className="leading-relaxed">You can control cookies through your browser settings. Disabling cookies may affect how the website functions. See our Cookie Policy for full details.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-deep-navy mb-4">Third-Party Services</h2>
              <p className="leading-relaxed mb-4">Our website integrates with the following third-party services:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong className="text-deep-navy">Paystack:</strong> Payment processing for shop and event purchases</li>
                <li><strong className="text-deep-navy">WhatsApp (Meta):</strong> Customer communication</li>
                <li><strong className="text-deep-navy">WordPress:</strong> Blog, shop, and events platform</li>
                <li><strong className="text-deep-navy">WooCommerce:</strong> E-commerce functionality</li>
                <li><strong className="text-deep-navy">The Events Calendar:</strong> Event management</li>
              </ul>
              <p className="leading-relaxed">Each of these services has its own privacy policy governing how they handle your data.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-deep-navy mb-4">Your Rights</h2>
              <p className="leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Request access to the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
                <li>Withdraw consent where processing is based on consent</li>
                <li>Lodge a complaint with the relevant data protection authority in Nigeria</li>
              </ul>
              <p className="leading-relaxed p-6 bg-teal-dark/5 rounded-xl border border-teal-dark/10">
                To exercise any of these rights, contact us at <a href="mailto:hello@thriveconsults.com" className="text-teal-dark font-bold hover:underline">hello@thriveconsults.com</a> or <a href="tel:+2347032681154" className="text-teal-dark font-bold hover:underline">+234 703 268 1154</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-deep-navy mb-4">Changes to This Policy</h2>
              <p className="leading-relaxed">We may update this policy from time to time. The date at the top of this page shows when it was last updated. Continued use of our website after changes are posted constitutes acceptance of the updated policy.</p>
            </section>

            <section className="pt-8 border-t border-gray-100">
              <h2 className="text-2xl font-bold text-deep-navy mb-4">Contact Us</h2>
              <div className="space-y-2">
                <p><strong className="text-deep-navy">Thrive Empire Ltd. trading as Thrive Consults</strong></p>
                <p>Email: <a href="mailto:hello@thriveconsults.com" className="text-teal-dark hover:underline">hello@thriveconsults.com</a></p>
                <p>Phone: <a href="tel:+2347032681154" className="text-teal-dark hover:underline">+234 703 268 1154</a></p>
                <p>Website: <Link href="/" className="text-teal-dark hover:underline">www.thriveconsults.com</Link></p>
              </div>
            </section>

            <div className="pt-12 text-center">
               <Link href="/contact" className="inline-block bg-deep-navy text-white font-bold py-4 px-8 rounded-full hover:bg-opacity-90 transition-all shadow-md">
                 Questions about your data? Contact us.
               </Link>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
