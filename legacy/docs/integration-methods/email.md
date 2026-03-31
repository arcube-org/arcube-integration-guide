# Email Integration (Post‑Booking Solution)

## Overview
The Email Integration method allows Arcube to send personalized email recommendations to passengers **after** they’ve completed their booking.  
These emails present relevant ancillary offers and guide passengers to the **White‑Label Website (Point of Sale)** where they can make purchases.

---

## How It Works
1. The airline or TMC sends **anonymized Passenger Name Record (PNR) data** to Arcube after the booking is completed.
2. Arcube processes this data using its **AI engine** to generate personalized ancillary recommendations based on:
   - Passenger itinerary  
   - Loyalty status  
   - Other contextual factors
3. Arcube returns the **email content** (with tailored ancillary offers) to the airline or TMC.
4. The airline or TMC sends the personalized email to the lead passenger with a link to the **White‑Label Website**.
5. If the passenger selects any ancillaries:
   - Arcube handles **payment processing**  
   - Arcube manages **fulfillment** (e.g., issuing travel insurance, eSIMs)  
   - Arcube sends **post‑purchase communications** to the passenger

---

## Customization of Look and Feel
- Similar to the Widget Integration, Arcube customizes the **White‑Label Website** to match the partner’s branding.
- This includes:
  - Colors  
  - Logos  
  - Fonts  
  - Overall design and style guide compliance
- Ensures a **consistent brand experience** for passengers during the entire purchase process.

---

## Benefits
- **Post‑Booking Engagement** – Reach passengers after booking with relevant ancillary offers, driving additional revenue before travel.
- **Custom Branding** – Fully branded emails and White‑Label Website for a cohesive experience.
- **Revenue Sharing** – Airlines and TMCs earn their pre‑set markup on products sold via the email link (same as Widget Integration).
- **Smart Offerings** – Arcube’s AI selects ancillaries most likely to convert based on:
  - Travel stage  
  - Destination  
  - Events at the destination  
  - Passenger profile

---

## Payment Flow
- **Arcube manages all payment processing** for ancillaries sold through this channel.
- Arcube ensures a secure checkout process and fulfills the purchased products.
- Upon successful payment:
  - Arcube issues ancillary confirmations (e.g., insurance policy, eSIM code).
  - Arcube sends confirmation emails to the passenger.

---

## Security Considerations
- **HTTPS encryption** for all data transmission.
- **Anonymized passenger data** for privacy and compliance with regulations (e.g., GDPR).
- **PCI DSS compliance** for secure payment handling.

