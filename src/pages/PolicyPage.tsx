
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { motion } from 'motion/react';
import { 
  ArrowLeft, ChevronRight, HelpCircle, Mail, Phone, 
  Truck, RotateCcw, ShieldCheck, CreditCard, Scale, Lock, Gift, UserCheck, MessageSquare,
  Clock, Globe, Info
} from 'lucide-react';

const POLICY_CONTENT: Record<string, { title: string; content: string; icon: any }> = {
  'shipping-delivery': {
    title: 'Shipping & Delivery Policy',
    icon: Truck,
    content: `
# Shipping & Delivery

At **ADORNS**, we are committed to delivering your luxury pieces with the utmost care and speed. We partner with the world's leading logistics providers to ensure your jewelry arrives safely.

### 1. Processing Time
- All orders are processed within **24-48 hours** of receipt.
- Orders placed on weekends or public holidays will be processed on the next business day.
- Custom-made or personalized jewelry may require an additional **7-14 business days** for crafting.

### 2. Domestic Shipping (India)
- **Standard Shipping:** FREE on all orders over ₹2,000. For orders below this, a nominal fee of ₹150 applies.
- **Delivery Timeline:** 3-5 business days for metro cities; 5-7 business days for other regions.
- **Express Shipping:** Available for ₹300. Guaranteed delivery within 1-2 business days for select pin codes.

### 3. International Shipping
- We ship to over **50 countries** including the USA, UK, UAE, Australia, and Canada.
- **Shipping Fees:** Calculated at checkout based on weight and destination.
- **Customs & Duties:** Please note that international orders may be subject to local customs duties and taxes. These are the responsibility of the customer.
- **Timeline:** 7-12 business days depending on customs clearance.

### 4. Order Tracking
- Once your order is dispatched, you will receive an email and WhatsApp notification with your **Tracking ID**.
- You can monitor your shipment directly on our [Track Order](/track-order) page.

### 5. Packaging & Insurance
- Every **ADORNS** order is shipped in a tamper-proof, vacuum-sealed luxury box.
- All shipments are fully insured until they reach your doorstep. If you receive a damaged package, please refuse the delivery and contact our concierge immediately.

---
### 6. Frequently Asked Questions
**Can I change my shipping address?**
Yes, address changes are possible within 12 hours of placing the order, provided it hasn't been shipped.

**What happens if I'm not home?**
Our courier partners will attempt delivery 3 times before returning the package to our warehouse.
    `
  },
  'return-exchange': {
    title: 'Return & Exchange Policy',
    icon: RotateCcw,
    content: `
# Return & Exchange

We want you to love your **ADORNS** jewelry. If for any reason you are not completely satisfied, we offer a hassle-free return and exchange process.

### 1. 7-Day Inspection Period
- You have **7 days** from the date of delivery to initiate a return or exchange request.
- The item must be in its original, unworn condition with all tags and security seals intact.

### 2. Eligibility Criteria
- **Eligible:** All standard collection pieces.
- **Ineligible:** Personalized jewelry, custom engravings, final sale items, and earrings (due to hygiene reasons).
- Items showing signs of wear, resizing, or damage by the customer will not be accepted.

### 3. Return Process
1. **Initiate:** Log in to our [Returns Portal] or email concierge@adorns.com with your Order ID.
2. **Approval:** Our team will review and approve the request within 24 hours.
3. **Pick-up:** We will arrange a free reverse pickup from your registered address.
4. **Inspection:** Once received at our facility, the item undergoes a quality check.
5. **Refund:** Upon successful inspection, the refund is initiated within 48 hours to your original payment method.

### 4. Exchanges
- We offer **one-time free exchanges** for size or style.
- If the new item is of higher value, the difference must be paid before dispatch. If lower, the difference will be refunded as store credit.

### 5. Damaged Items
- If you receive a damaged or incorrect item, please notify us within **24 hours** of delivery with unboxing photos/videos. We will replace it at no extra cost.

---
### Important Note
Please do not send returns back without prior approval. Unauthorized returns will be sent back to the customer at their expense.
    `
  },
  'warranty': {
    title: 'Lifetime Warranty Policy',
    icon: ShieldCheck,
    content: `
# Lifetime Warranty

At **ADORNS**, we stand behind the quality of our craftsmanship. Every piece of jewelry you purchase from us comes with a **Lifetime Warranty** to ensure your sparkle never fades.

### 1. What is Covered?
- **Manufacturing Defects:** Any structural issues arising from the production process.
- **Stone Settings:** Tightening of loose stones to prevent loss.
- **Plating Services:** One-time complimentary replating (for Demifine pieces) every 2 years.
- **Clasp Repair:** Functional repair of necklace or bracelet clasps.

### 2. What is Not Covered?
- Loss or theft of the jewelry or individual stones.
- Damage caused by accidents, neglect, or improper storage.
- Natural wear and tear of the plating over time (beyond the complimentary service).
- Jewelry repaired or modified by an external jeweler.

### 3. Claim Process
1. Reach out to our concierge team with your **Certificate of Authenticity**.
2. Ship the item to our service center (shipping costs covered by the customer).
3. Our master craftsmen will restore your piece to its original glory.

### 4. Jewelry Care
To maximize the life of your jewelry:
- Avoid contact with perfumes, lotions, and sanitizers.
- Remove jewelry before swimming or showering.
- Store in the original **ADORNS** airtight box.
    `
  },
  'buyback': {
    title: 'Lifetime BuyBack Policy',
    icon: UserCheck,
    content: `
# Lifetime BuyBack

Jewelry is an investment, and we honor that. **ADORNS** offers one of the most transparent BuyBack and Exchange policies in the industry for our Gold and Diamond collections.

### 1. Exchange Value (Upgrade)
- Get **90% of the current market value** of the gold and diamonds when you exchange your piece for a new purchase.
- This allows you to upgrade your style while preserving your investment.

### 2. Cash BuyBack
- Get **80% of the current market value** if you wish to sell the piece back to us for cash.
- The amount will be transferred to your bank account within 7 business days.

### 3. Terms & Conditions
- The item must be accompanied by the original **ADORNS Certificate** and Invoice.
- The weight of gold and stones will be verified at our central lab.
- Any missing stones or damage will be deducted from the valuation.
- This policy applies only to solid gold and natural diamond collections.

---
### Why we offer this?
We believe in the enduring value of our pieces. Our BuyBack policy is a testament to the purity and quality of the materials we use.
    `
  },
  'terms': {
    title: 'Terms of Service',
    icon: Scale,
    content: `
# Terms of Service

Last Updated: June 15, 2024

### 1. Acceptance of Terms
By accessing and using the **ADORNS** website, you agree to be bound by these Terms of Service and all applicable laws and regulations.

### 2. User Accounts
- You are responsible for maintaining the confidentiality of your account credentials.
- Any activity under your account is your sole responsibility.

### 3. Intellectual Property
- All content, including images, text, and designs, are the property of **ADORNS** and protected by copyright laws.
- Unauthorized use of our brand assets is strictly prohibited.

### 4. Pricing & Availability
- While we strive for accuracy, errors in pricing or availability may occur.
- We reserve the right to cancel any orders placed with incorrect pricing.

### 5. Limitation of Liability
**ADORNS** shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or website.
    `
  },
  'privacy': {
    title: 'Privacy Policy',
    icon: Lock,
    content: `
# Privacy Policy

Your trust is our most valuable asset. This policy outlines how **ADORNS** collects, uses, and protects your personal information.

### 1. Information Collection
We collect information you provide directly to us, such as when you create an account, make a purchase, or contact support. This includes:
- Name, Email, Phone Number, and Shipping Address.
- Payment information (processed securely via encrypted gateways).

### 2. How we use your data
- To process and fulfill your orders.
- To communicate updates regarding your shipment.
- To send personalized offers (only if you've opted in).
- To improve our website experience through analytics.

### 3. Data Security
We implement industry-standard security measures, including **SSL encryption** and secure servers, to ensure your data is safe from unauthorized access.

### 4. Third-Party Sharing
We do **not** sell your data. We only share necessary information with trusted partners like shipping couriers and payment processors to complete your transactions.
    `
  },
  'rewards': {
    title: 'ADORNS Rewards Policy',
    icon: Gift,
    content: `
# ADORNS Rewards

Welcome to the **Circle of Brilliance**. Our rewards program is designed to give back to our most loyal patrons.

### 1. Earning Points
- **Sign Up:** Get 500 points instantly.
- **Purchase:** Earn 1 point for every ₹1 spent.
- **Referral:** Get 2,000 points when a friend makes their first purchase.
- **Review:** Earn 500 points for every verified product review with a photo.

### 2. Redemption
- 1,000 Points = ₹100 Discount.
- Points can be redeemed at checkout on any order above ₹3,000.
- Points are valid for **12 months** from the date of earning.

### 3. Membership Tiers
- **Silver:** 0 - 50,000 points. Standard rewards.
- **Gold:** 50,001 - 150,000 points. 1.5x earning rate + Early access.
- **Platinum:** 150,001+ points. 2x earning rate + Free express shipping + Concierge service.
    `
  },
  'payment': {
    title: 'Payment Policy',
    icon: CreditCard,
    content: `
# Payment Policy

We provide a secure and seamless payment experience for our global customers.

### 1. Accepted Payment Methods
- **Cards:** Visa, Mastercard, American Express, RuPay.
- **Digital Wallets:** UPI (Google Pay, PhonePe), Paytm.
- **Net Banking:** Supported for all major Indian banks.
- **EMI:** Interest-free EMI options available for select bank cards.

### 2. Security
All payments are processed through **PCI-DSS Level 1** compliant gateways. We use **256-bit SSL encryption** to protect your sensitive information.

### 3. Transaction Errors
In case of a failed transaction where the amount is deducted, the refund is typically processed automatically by your bank within 5-7 business days.

### 4. Cash on Delivery (COD)
- Available for domestic orders up to ₹20,000.
- A convenience fee of ₹100 applies to all COD orders.
    `
  }
};

const PolicyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const policy = slug ? POLICY_CONTENT[slug] : null;

  if (!policy) {
    return (
      <div className="policy-page">
        <div className="container">
          <h1>Policy Not Found</h1>
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    );
  }
  const Icon = policy.icon;

  return (
    <div className="policy-page-v2">
      <section className="policy-hero">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="u-mono uppercase tracking-widest text-sm mb-4 block text-gold">Legal & Policy</span>
            <h1 className="font-display">Our Policies</h1>
            <p className="max-w-2xl mx-auto">Everything you need to know about shopping with ADORNS, from shipping to our lifetime warranty.</p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="policy-container">
        {/* Left Side: Sticky Navigation */}
        <aside className="policy-sidebar-v2">
          <div className="sidebar-inner">
            <div className="sidebar-header">
                <h3>Legal & Information</h3>
            </div>
            <nav className="sidebar-nav">
                {Object.entries(POLICY_CONTENT).map(([key, value]) => (
                <Link 
                    key={key} 
                    to={`/policy/${key}`} 
                    className={`sidebar-link-v2 ${slug === key ? 'active' : ''}`}
                >
                    <div className="link-content">
                        <value.icon size={18} className="link-icon" />
                        <span>{value.title}</span>
                    </div>
                    <ChevronRight size={14} className="chevron" />
                </Link>
                ))}
            </nav>

            <div className="help-card-v2">
                <div className="help-icon-box"><HelpCircle size={24} /></div>
                <h4>Contact Concierge</h4>
                <p>Our experts are available for styling and order support.</p>
                <div className="help-actions">
                    <a href="mailto:concierge@adorns.com" className="action-btn"><Mail size={16} /></a>
                    <a href="tel:+919000012345" className="action-btn"><Phone size={16} /></a>
                    <a href="/contact" className="action-btn"><MessageSquare size={16} /></a>
                </div>
            </div>
          </div>
        </aside>

        {/* Right Side: Main Content */}
        <main className="policy-main-v2">
            <motion.div 
                key={slug}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="markdown-body"
            >
                <ReactMarkdown>{policy.content}</ReactMarkdown>
                
                <div className="policy-footer-note">
                    <Info size={16} />
                    <p>This policy is subject to change without notice. Please refer to the latest version on this page.</p>
                </div>
            </motion.div>
        </main>
      </div>
    </div>
    </div>
  );
};

export default PolicyPage;
