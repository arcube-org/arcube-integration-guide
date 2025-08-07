# Widget Integration (Embedded Solution)

## How It Works

Depending on whether the airline's IBE (Internet Booking Engine) uses an NPM-compatible framework or not, Arcube provides two integration methods:

- **NPM Package**
- **JavaScript Script Injection**

The steps below describe how to integrate the Arcube Widget into the tenant's IBE.

---

## 1. Collect Passenger Contextual Data

The front-end collects contextual data such as:

- Trip details
- Passenger type
- Loyalty status

This data is passed to the **tenant’s back-end**, which must call the [Ingest Passenger Data](./essential-api-calls.md#61-ingest-passenger-data) API.

---

## 2. Widget Activation

The widget should be present and mounted in the relevant booking step (e.g., Extras page) inside the IBE.

---

## 3. Widget Rendering

At render time, the widget requires `tenantId` and `sessionId`. These must be passed to the widget using one of the following methods:

### Option A – NPM Package

```jsx
<ArcubeWidget tenantId={tenantId} sessionId={sessionId} />
```
### Option B – Script Package
```jsx
<script>
  window.arcubeConfig = {
    tenantId: "YOUR_TENANT_ID",
    sessionId: "CLIENT_SESSION_ID"
  };
</script>
<script src="https://arcube-cdn.com/arcube-widget.js" async></script>
<div id="arcube-widget"></div>
```
## 4. Ancillary Selection Event
When a user selects an ancillary product in the widget, the widget emits an event to the parent window. The front-end listens and handles this event.
```json 
{
  "sessionId": "fkdsjf-f123-4567",
  "event": "addToCart",
  "selectedAncillaries": [
    {
      "vendor": "brb",
      "id": "e9b1d12f-8f1d-4f32-9c3e-8d928c1b3ff4",
      "price": {
        "amount": 35.00,
        "currency": "USD"
      }
    }
  ]
}
```
## 5. Proceed to Payment (Optional)
When the user proceeds to payment, the IBE may:

- Close the widget, or

- Emit a message to the widget using ```postMessage()``` to retrieve a summary.

####IBE Emit: Proceed to Payment
```json 
{
  "event": "proceedToPayment",
  "data": {
    "sessionId": "user-12345"
  }
}
```
### Widget Responds with Summary
```json 
{
  "sessionId": "user-12345",
  "totalPrice": {
    "amount": 85.00,
    "currency": "USD"
  },
  "selectedAncillaries": [
    {
      "vendor": "brb",
      "id": "e9b1d12f-8f1d-4f32-9c3e-8d928c1b3ff4",
      "price": {
        "amount": 35.00,
        "currency": "USD"
      }
    },
    {
      "vendor": "mozio",
      "id": "e9b1d12f-8f1d-4f32-9c3e-8d564c1b3ff4",
      "price": {
        "amount": 50.00,
        "currency": "USD"
      }
    }
  ]
}
```
## 6. Tenant Confirms Payment to Arcube
Once the payment is captured, the tenant must notify Arcube to finalize booking with the vendors.

####Request Payload
```json 
{
  "sessionId": "user-12345",
  "transactionId": "trx1",
  "totalAmountPaid": 85.00,
  "ancillaryIds": [
    "ancillary-id-001",
    "ancillary-id-002"
  ],
  "paymentStatus": "success"
}
```
####Arcube Response Payload
```json 
{
  "status": "PARTIAL-SUCCESS",
  "sessionId": "user-12345",
  "transactionId": "trx1",
  "message": "Booking failed for some ancillaries.",
  "failedAncillaries": [
    {
      "id": "e9b1d12f-8f1d-4f32-9c3e-8d928c1b3cc6",
      "reasonCode": "NOT_AVAILABLE"
    }
  ],
  "succesfullAncillaries": [
    {
      "id": "e9b1d12f-8f1d-4f32-9c3e-8d928c1b3bb5",
      "reasonCode": "SUCCESS"
    },
    {
      "id": "e9b1d12f-8f1d-4f32-9c3e-8d928c1b3dd7",
      "reasonCode": "SUCCESS"
    }
  ],
  "totalRefundAmount": {
    "amount": 35.00,
    "currency": "USD"
  },
  "errorDetails": [
    "Extra baggage is not available for booking at the moment."
  ]
}
```
###Customization of Look and Feel
Arcube offers full visual customization of the widget to match the partner’s branding. This includes:

- Colors
- Fonts
- Logos
- Overall layout

This ensures the widget feels like a native part of the partner’s IBE.

###Security Considerations
- Backend-to-Backend Communication: All sensitive data exchanges happen server-to-server.

- JWT Tokens or HMAC Signatures: Used to validate authenticity and prevent tampering.

- HTTPS Encryption: All API and widget communication is encrypted over HTTPS.

- No Sensitive Data in Front-End: Only signed widget URLs are passed to the browser — no PII or raw session data.



