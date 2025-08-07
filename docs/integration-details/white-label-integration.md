# White-Label Website Integration (Point of Sale)

## How It Works

The White-Label Website serves as a dedicated **Point of Sale (POS)** for both Arcube and its tenants. It provides a **fully branded platform** where passengers can purchase ancillary services after receiving an offer through the **widget** or **email**.

---

## 1. Data Transfer to Arcube

The airline or TMC sends contextual data — such as passenger details, itinerary, and available ancillary products — to Arcube.

This is done via a **secure POST request**, following the same process as described in the [Widget Integration](./widget-integration.md#1-collect-passenger-contextual-data) section.

> Once the data is ingested, all outbound emails or widget redirects will point to the white-label site where passengers complete their purchases.

---

## 2. White-Label Website Rendering

Arcube returns the necessary data to render the white-label platform.

The website dynamically displays:

- Personalized ancillary offers
- Relevant content based on passenger journey and preferences

---

## 3. Payment Handling

Once the passenger selects ancillary services:

- Arcube handles the **entire payment process**
- A redirect to an external **Payment Service Provider (PSP)** is used
- No sensitive payment information is captured or processed directly within the Arcube domain

---

## 4. Confirmation

After successful purchase:

- Arcube sends a **confirmation email** to the passenger
- The email includes booking references, QR codes, or product details depending on the ancillary type

---

## Customization of Look and Feel

The white-label site is fully customized to reflect the partner’s branding, including:

- ✅ Brand colors
- ✅ Fonts
- ✅ Logos
- ✅ Layout and design system

> The result is a seamless brand experience from first click to final payment.

---

## Security Considerations

- **HTTPS Encryption**  
  All user interactions on the white-label site are encrypted using HTTPS, ensuring data integrity and secure transmission.

- **PCI DSS Compliance**  
  Arcube adheres to strict PCI DSS guidelines when handling payment information via its PSP partners.

- **Data Privacy**  
  Only anonymized passenger data is used to power personalization, ensuring full compliance with GDPR and other data protection regulations.

