# Email Integration (Post-Booking Solution)

## How It Works

The Email Integration method allows Arcube to send personalized email recommendations to passengers **after they’ve completed their booking**.  
Emails are timed based on the passenger journey and powered by Arcube’s AI engine to deliver the **right ancillary offers at the right time**.

Clicking on an email takes the passenger to the **white-label website (Point of Sale)** where purchases can be made.

---

## Step 1: Data Transfer to Arcube

The tenant's backend must send anonymized **PNR (Passenger Name Record)** data and **passenger details** securely via a POST request to Arcube.

This is done using the [Passenger Data API](./essential-api-calls.md#61-ingest-passenger-data).

Once received, Arcube becomes responsible for:

- Generating relevant offers
- Sending emails to the passenger on behalf of the tenant

---

## Step 2: Email Content Generation

Arcube uses its AI engine to determine:

- ✅ **When** to send ancillary offers (based on journey timing)
- ✅ **Which** ancillaries are most relevant and likely to convert

This approach increases the probability of passengers purchasing additional services.

---

## 📨 Note on Email Sending

In order for Arcube to send emails:

- The **lead passenger's email address** must be included in the passenger data.
- Alternatively, Arcube can integrate with third-party email services (e.g. Mandrill) to **inject content** into your transactional email flow — this requires a bilateral agreement.

---

## ✉️ Sending Emails on Behalf of the Airline

Arcube can send emails **as if they're coming from the airline** (white-labeled sending).  
This requires **email authentication configuration** to protect deliverability and domain reputation.

### SPF (Sender Policy Framework)

The tenant must update their **DNS SPF record** to authorize Arcube’s sending IPs or Mandrill’s domain.

> Action: Arcube will provide the correct sending IPs or domain. The tenant must update DNS settings accordingly.

---

### DKIM (DomainKeys Identified Mail)

Enables **cryptographic signatures** to confirm the authenticity of outgoing email.

> Action: Arcube provides a **DKIM public key**, which the tenant adds to their domain’s DNS settings.

---

### IP Whitelisting (Optional)

If the tenant has internal mail filtering systems, Arcube’s IPs may need to be **explicitly whitelisted**.

> Action: Tenant and Arcube collaborate to whitelist IPs in the email server or filtering system.

---

### Email Authentication Testing

After SPF/DKIM/IP whitelisting is complete, test deliveries are needed to ensure:

- Proper authentication
- No spam flagging
- High inbox placement

> Action: Arcube and the tenant perform joint testing of email deliverability.

---

## Customization of Look and Feel

Both the **email content** and the **white-label website** are fully customizable:

- Logo
- Colors
- Fonts
- Brand tone and visuals

This ensures a **consistent branded experience** from email through to checkout.

---

## Security Considerations

- **HTTPS Encryption**  
  All data transfer between tenant systems and Arcube is encrypted using HTTPS.

- **Anonymized Data**  
  Arcube only requires anonymized passenger data to generate recommendations, protecting customer privacy.

- **PCI DSS Compliance**  
  Arcube manages payment processing and adheres to the PCI DSS standards for secure financial transactions.

- **Mandrill API Keys**  
  When Mandrill is used, secure API keys are exchanged between Arcube and the tenant to maintain email data integrity.

