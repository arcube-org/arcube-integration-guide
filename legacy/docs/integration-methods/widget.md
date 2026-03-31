# NPM Package or Widget Integration (Embedded Solution)

## Overview
In this section we outline how the widget works, please note that if the tenant technology allow it, we can also provide an NPM package which gives to the tenant more control and transparency instead of the Widget. 

The widget Integration allows Arcube’s ancillary services to be embedded directly into the airline’s or TMC’s booking flow, providing passengers with personalized ancillary offers during the booking process. The widget is dynamically injected into the booking page and presents a seamless experience for passengers as they browse and select relevant ancillaries. The typical insertion point is after collecting passenger information and before payment selection in the booking flow.


## How It Works
1. Your back end sends anonymyzed trip data to Arcube via API.
2. Your front-end dynamically loads the Arcube Widget after a specific booking step.
3. Arcube responds with a signed Widget.
4. Display the Widget to the passenger.
5. Track selections and confirm orders.

## Customization
- Colors
- Fonts
- Logo

## Benefits
- Seamless user experience
- Real-time personalization
- Fully branded

## Payment Flow
You process payments; Arcube invoices for ancillaries.

## Security
- HTTPS encryption
- JWT/HMAC request validation

