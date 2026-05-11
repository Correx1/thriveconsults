import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Terms and Conditions | Thrive Consult',
  description: 'Please read these terms carefully before using our services or making a purchase.',
};

export default function TermsAndConditions() {
  return (
    <main className="pt-32 pb-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-16">
          <h1 className="text-3xl md:text-5xl font-bold text-deep-navy mb-4">Terms and Conditions</h1>
          <p className="text-lg text-gray-600 mb-8 pb-8 border-b border-gray-100">
            Please read these terms carefully before using our services or making a purchase.<br/>
            <span className="text-sm font-medium mt-2 inline-block">Last Updated: {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}</span>
          </p>

          <div className="space-y-12 text-gray-600">
            
            <section>
              <h2 className="text-2xl font-bold text-deep-navy mb-4">1. About These Terms</h2>
              <p className="leading-relaxed mb-4">
                These terms and conditions govern your use of thriveconsults.com and all services provided by Thrive Empire Ltd., trading as Thrive Consults (&quot;Thrive Consults,&quot; &quot;we,&quot; &quot;us,&quot; &quot;our&quot;). By using our website or purchasing any of our services, you agree to these terms.
              </p>
              <p className="leading-relaxed">
                If you do not agree with any part of these terms, you should not use our website or purchase our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-deep-navy mb-4">2. Services We Provide</h2>
              <p className="leading-relaxed mb-4">
                Thrive Consults provides business growth consulting, advisory, coaching, training, and digital strategy services to businesses and business owners in Nigeria and internationally. Our services include but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-deep-navy">Business consulting engagements</strong> (sold via direct agreement)</li>
                <li><strong className="text-deep-navy">Coaching programmes</strong> (sold via our website shop)</li>
                <li><strong className="text-deep-navy">Online courses and digital products</strong> (sold via our website shop)</li>
                <li><strong className="text-deep-navy">Events, workshops, and masterclasses</strong> (sold via our events platform)</li>
                <li><strong className="text-deep-navy">The B.E.E.P. Business Health Diagnostic</strong> (free tool, no purchase required)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-deep-navy mb-4">3. Consulting Engagements</h2>
              <p className="leading-relaxed">
                Full consulting engagements are governed by a separate service agreement signed between Thrive Consults and the client. In the event of any conflict between these general terms and a signed service agreement, the signed service agreement takes precedence.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-deep-navy mb-4">4. Purchases — Shop and Coaching</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-deep-navy mb-2">Payment</h3>
                  <p className="leading-relaxed">All purchases on our website are processed securely through Paystack. By completing a purchase, you authorise the charge to your selected payment method. All prices are displayed in Nigerian Naira (NGN) unless otherwise stated.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-deep-navy mb-2">Digital products</h3>
                  <p className="leading-relaxed">Upon successful payment, digital products (courses, templates, toolkits) are delivered electronically. Access is granted immediately or within 24 hours of payment confirmation.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-deep-navy mb-2">Coaching programmes</h3>
                  <p className="leading-relaxed">Enrolment in a coaching programme constitutes acceptance of a programme-specific agreement in addition to these general terms. Your first session will be scheduled after payment is confirmed and an intake form is completed.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-deep-navy mb-2">Event registrations</h3>
                  <p className="leading-relaxed">Registration for events and workshops is confirmed upon receipt of payment. See Section 6 for event cancellation terms.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-deep-navy mb-4">5. Refund Policy</h2>
              <p className="leading-relaxed mb-4">Please refer to our full Refund Policy for complete terms. The key points are:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Digital products are non-refundable once accessed</li>
                <li>Coaching programmes are subject to the cooling-off period described in the Refund Policy</li>
                <li>Event registrations may be transferred but are generally non-refundable within 7 days of the event</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-deep-navy mb-4">6. Events and Workshops</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-deep-navy mb-2">Registration</h3>
                  <p className="leading-relaxed">Your place at an event is confirmed only upon receipt of full payment. We reserve the right to decline registrations at our discretion.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-deep-navy mb-2">Event changes</h3>
                  <p className="leading-relaxed">We reserve the right to change the date, venue, or format of any event. In the event of a postponement, your registration transfers to the new date. If you cannot attend the new date, you may request a credit toward a future event.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-deep-navy mb-2">Event cancellation by Thrive</h3>
                  <p className="leading-relaxed">If we cancel an event entirely, registered participants will receive a full refund of their ticket purchase within 14 business days.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-deep-navy mb-2">No-show policy</h3>
                  <p className="leading-relaxed">No refund or credit is issued for registered participants who do not attend without prior notice.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-deep-navy mb-4">7. Intellectual Property</h2>
              <p className="leading-relaxed mb-4">
                All content on thriveconsults.com — including but not limited to text, frameworks, methodology names (THRIVE Framework, B.E.E.P. Framework, Growth Operating System), images, videos, course materials, templates, and tools — is the intellectual property of Thrive Empire Ltd.
              </p>
              <p className="leading-relaxed mb-4">
                You may not reproduce, distribute, modify, or use our content for commercial purposes without our prior written consent. Personal, non-commercial use of publicly available content is permitted provided that attribution is given.
              </p>
              <p className="leading-relaxed">
                Purchasing a course or digital product grants you a personal, non-transferable licence to use the materials for your own business. It does not grant you the right to resell, redistribute, or teach the content to others.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-deep-navy mb-4">8. Confidentiality</h2>
              <p className="leading-relaxed">
                We treat all information shared with us during consulting engagements, coaching sessions, and business diagnostics as confidential. We do not share client business information with third parties without your consent, except where required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-deep-navy mb-4">9. Disclaimer of Warranties</h2>
              <p className="leading-relaxed mb-4">
                Our services are provided in good faith based on our professional experience and the information you provide us. However, we cannot guarantee specific business outcomes. Business results depend on many factors including your implementation, your market, your team, and conditions outside our control.
              </p>
              <p className="leading-relaxed font-medium">
                We are not liable for any loss or damage arising from your use of our advice, tools, or content, or from your reliance on information provided on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-deep-navy mb-4">10. Limitation of Liability</h2>
              <p className="leading-relaxed mb-4">
                To the maximum extent permitted by Nigerian law, our total liability to you for any claim arising from our services shall not exceed the amount you paid for the specific service from which the claim arises.
              </p>
              <p className="leading-relaxed">
                We are not liable for indirect, consequential, or incidental damages, lost profits, or loss of business arising from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-deep-navy mb-4">11. Governing Law</h2>
              <p className="leading-relaxed">
                These terms are governed by the laws of the Federal Republic of Nigeria. Any disputes arising from these terms or our services shall be subject to the jurisdiction of the Nigerian courts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-deep-navy mb-4">12. Changes to These Terms</h2>
              <p className="leading-relaxed">
                We may update these terms from time to time. The date at the top of this page shows when they were last updated. Continued use of our services after changes are posted constitutes acceptance of the updated terms.
              </p>
            </section>

            <section className="pt-8 border-t border-gray-100">
              <h2 className="text-2xl font-bold text-deep-navy mb-4">13. Contact</h2>
              <div className="space-y-2">
                <p><strong className="text-deep-navy">Thrive Empire Ltd. trading as Thrive Consults</strong></p>
                <p>Email: <a href="mailto:hello@thriveconsults.com" className="text-teal-dark hover:underline">hello@thriveconsults.com</a></p>
                <p>Phone: <a href="tel:+2347032681154" className="text-teal-dark hover:underline">+234 703 268 1154</a></p>
                <p>Website: <Link href="/" className="text-teal-dark hover:underline">www.thriveconsults.com</Link></p>
              </div>
            </section>

            <div className="pt-12 text-center">
               <Link href="/contact" className="inline-block bg-deep-navy text-white font-bold py-4 px-8 rounded-full hover:bg-opacity-90 transition-all shadow-md">
                 Questions about these terms? Contact us.
               </Link>
               <div className="mt-8 text-sm space-x-4 flex justify-center flex-wrap gap-y-2">
                 <Link href="/privacy-policy" className="text-gray-500 hover:text-teal-dark">Privacy Policy</Link>
                 <span className="text-gray-300 hidden sm:inline">|</span>
                 <Link href="/terms-and-conditions" className="text-gray-500 hover:text-teal-dark">Terms and Conditions</Link>
               </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
