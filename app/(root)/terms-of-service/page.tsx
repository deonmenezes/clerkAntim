import { Metadata } from 'next';
import PageHeader from '@/components/ui/page-header';

export const metadata: Metadata = {
  title: 'Terms of Service | Smooth Technical Trading',
  description: 'Terms of Service for Smooth Technical Trading and Service LLC'
};

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader title="Terms of Service" description="Last updated: June 1, 2025" />
      
      <div className="prose prose-lg max-w-none mt-8">
        <h2>Acceptance of Terms</h2>
        <p>
          By accessing and using the services of Smooth Technical Trading and Service LLC, you agree to be bound by these Terms of Service. 
          If you do not agree to these terms, please do not use our services.
        </p>

        <h2>Products and Services</h2>
        <p>
          Smooth Technical Trading and Service LLC specializes in sourcing, supplying, and distributing high-quality mechanical and electrical products. 
          All product descriptions, specifications, and prices are subject to change without notice.
        </p>

        <h2>Ordering and Payment</h2>
        <p>
          By placing an order with us, you are making an offer to purchase products. All orders are subject to acceptance and availability. 
          Payment terms are as specified at the time of purchase.
        </p>

        <h2>Delivery and Shipping</h2>
        <p>
          Delivery times are estimates only and not guaranteed. We are not responsible for delays that are beyond our control. 
          Risk of loss and title for items purchased pass to you upon delivery of the items to the carrier.
        </p>

        <h2>Returns and Refunds</h2>
        <p>
          Our return policy allows returns within 30 days of delivery for most items, provided they are in their original condition. 
          Some products may be exempt from this policy. Refunds will be processed using the original payment method.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          All content on our website, including text, graphics, logos, images, and software, is the property of Smooth Technical Trading and Service LLC or its content suppliers 
          and is protected by international copyright laws.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          Smooth Technical Trading and Service LLC shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of or inability to use our services.
        </p>

        <h2>Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates, without regard to its conflict of law provisions.
        </p>

        <h2>Contact Information</h2>
        <p>
          If you have any questions about these Terms, please contact us at:          <br />
          Email: sales@smoothtts.com
          <br />
          Address: Sector-M9 - Shop #7 - Bldg. #49 As Salami 6 St - Musaffah - Musaffah Industrial - Abu Dhabi
        </p>
      </div>
    </div>
  );
}
