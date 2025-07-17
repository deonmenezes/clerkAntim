import { Metadata } from 'next';
import PageHeader from '@/components/ui/page-header';

export const metadata: Metadata = {
  title: 'Privacy Policy | Smooth Technical Trading',
  description: 'Privacy Policy for Smooth Technical Trading and Service LLC'
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader title="Privacy Policy" description="Last updated: June 1, 2025" />
      
      <div className="prose prose-lg max-w-none mt-8">
        <h2>Introduction</h2>
        <p>
          At Smooth Technical Trading and Service LLC, we respect your privacy and are committed to protecting
          your personal data. This privacy policy will inform you about how we look after your personal data when
          you visit our website and tell you about your privacy rights and how the law protects you.
        </p>

        <h2>The Data We Collect About You</h2>
        <p>
          Personal data, or personal information, means any information about an individual from which that person
          can be identified. We may collect, use, store and transfer different kinds of personal data about you
          including your name, contact details, and technical data.
        </p>

        <h2>How We Use Your Personal Data</h2>
        <p>
          We will only use your personal data when the law allows us to. Most commonly, we will use your personal
          data in the following circumstances:
        </p>
        <ul>
          <li>To process and deliver your order</li>
          <li>To manage our relationship with you</li>
          <li>To send you marketing communications if you have opted in</li>
          <li>To improve our website, products/services, marketing, and customer relationships</li>
        </ul>

        <h2>Cookie Policy</h2>
        <p>
          We use cookies and similar tracking technologies to track the activity on our website and hold certain information.
          You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
        </p>

        <h2>Data Security</h2>
        <p>
          We have put in place appropriate security measures to prevent your personal data from being accidentally lost,
          used, or accessed in an unauthorized way.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this privacy policy or our privacy practices, please contact us at:
          <br />
          Email: sales@smoothtts.com
          <br />
          Address: Sector-M9 - Shop #7 - Bldg. #49 As Salami 6 St - Musaffah - Musaffah Industrial - Abu Dhabi
        </p>
      </div>
    </div>
  );
}
