# Widget Integration (Embedded Solution)

## Overview
The Widget Integration allows Arcube’s ancillary services to be embedded directly into the airline’s or TMC’s booking flow, providing passengers with personalized ancillary offers during the booking process.  
The widget is dynamically injected into the booking page and presents a seamless experience for passengers as they browse and select relevant ancillaries.

---

## How It Works
1. The airline or TMC's front-end (such as the booking page) dynamically loads the Arcube widget once the passenger reaches a specified point in the booking flow (typically after the passenger details step).
2. The front-end system sends a **POST** request to Arcube’s backend, providing contextual data about the passenger’s trip, such as flight segments, passenger type, and loyalty information.
3. Arcube's backend processes this data and responds with a **secure, signed widget URL** that is embedded into the booking page.
4. The passenger sees the widget, which displays a list of personalized ancillary services tailored to their needs.
5. Once the passenger makes a selection, Arcube tracks the purchase and sends a confirmation to the airline or TMC.

---

## Customization of Look and Feel
Arcube offers the flexibility to fully customize the look and feel of the widget to match the partner’s branding.  
This includes:
- Colors  
- Fonts  
- Logo  
- Overall visual identity  

This ensures that ancillary services appear as a natural part of the partner’s existing booking flow, maintaining a consistent brand experience for the passenger.

---

## Benefits
- **Seamless User Experience** – Integrated directly into the booking flow, offering a smooth, uninterrupted experience for the passenger.  
- **Custom Branding** – Tailored to reflect the airline or TMC’s branding, ensuring it feels like a native part of their platform.  
- **Real-Time Personalization** – Arcube’s AI engine dynamically generates personalized ancillary offers based on the passenger’s details, enhancing conversion rates.

---

## Payment Flow
In the widget integration:
- The **airline or TMC** handles payment processing for ancillaries.  
- Once the passenger completes their purchase, the airline or TMC pays Arcube for the ancillaries sold.

---

## Security Considerations
- **JWT tokens or HMAC signatures** are used to validate the integrity of requests.  
- **HTTPS encryption** ensures secure transmission of data.  
- Only **anonymized data** is passed to Arcube, ensuring passenger privacy.

