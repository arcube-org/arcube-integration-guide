[**1. Introduction 3**](#introduction)

> [Overview of Arcube 3](#overview-of-arcube)
>
> [Value Proposition 3](#value-proposition)
>
> [Target Audience 3](#target-audience)

[**2. Product Overview 4**](#product-overview)

> [Arcube's Ancillary Services Platform 4](#key-features-and-benefits)
>
> [Key Features and Benefits 4](#key-features-and-benefits)
>
> [How Arcube Enhances the Customer Journey
> 5](#how-arcube-enhances-the-customer-journey)

[**3. Airline Dashboard and Arcube Platform
5**](#tenant-dashboard-and-arcube-platform)

> [Personalisation 6](#personalisation)
>
> [Passenger Recommendation Engine 6](#passenger-recommendation-engine)
>
> [Supplier Selection Algorithm 6](#supplier-selection-algorithm)
>
> [Other Features on Arcube's Airline Dashboard
> 7](#other-features-on-arcubes-tenant-dashboard)
>
> [Sales Tracking 7](#sales-tracking)
>
> [Customising Pricing 7](#customising-pricing)
>
> [Supplier reconciliation 8](#_jp0b6rrkrg0p)
>
> [Templates 9](#section)
>
> [Touchpoints 9](#accepted-payment-methods)
>
> [Payment Processing 10](#accepted-payment-methods)
>
> [Accepted Payment Methods 11](#accepted-payment-methods)
>
> [Currency Support 11](#order-cancellation-and-refunds)
>
> [Order Cancellation and Refunds 11](#order-cancellation-and-refunds)

[**4. Integration Methods 12**](#integration-methods)

> [Widget Integration (Embedded Solution)
> 12](#npm-package-or-widget-integration-embedded-solution)
>
> [Overview 12](#overview)
>
> [How It Works 12](#how-it-works)
>
> [Customization of Look and Feel 13](#customization-of-look-and-feel)
>
> [Benefits 13](#benefits)
>
> [Payment Flow 13](#payment-flow)
>
> [Security Considerations 13](#security-considerations)
>
> [Email Integration (Post-Booking Solution)
> 13](#email-integration-post-booking-solution)
>
> [Overview 13](#overview-1)
>
> [How It Works 14](#how-it-works-1)
>
> [Customization of Look and Feel 14](#customization-of-look-and-feel-1)
>
> [Benefits 14](#benefits-1)
>
> [Payment Flow 15](#payment-flow-1)
>
> [Security Considerations 15](#security-considerations-1)
>
> [White-Label Website Integration (Point of Sale)
> 15](#pos-white-label-website-point-of-sale)
>
> [Overview 15](#overview-2)
>
> [How It Works 15](#how-it-works-3)
>
> [Customization of Look and Feel 16](#customization-of-look-and-feel-3)
>
> [Benefits 16](#benefits-3)
>
> [Payment Flow 16](#payment-flow-3)
>
> [Security Considerations 16](#security-considerations-3)
>
> [API Integration (Direct Integration)
> 16](#api-integration-direct-integration)
>
> [How It Works 17](#how-it-works-2)
>
> [Customization of Look and Feel 17](#customization-of-look-and-feel-2)
>
> [Benefits 17](#benefits-2)
>
> [Payment Flow 17](#payment-flow-2)
>
> [Security Considerations 18](#security-considerations-2)
>
> [Choosing the Right Integration Method
> 18](#choosing-the-right-integration-method)

[5. API Versioning and Change Management
18](#api-versioning-and-change-management)

> [Versioning Approach 18](#versioning-approach)
>
> [Backward Compatibility 19](#backward-compatibility)
>
> [Deprecation Policy 19](#deprecation-policy)
>
> [Communication of Changes 19](#communication-of-changes)
>
> [Testing and Sandbox 19](#testing-and-sandbox)

[**6. Integration Details (Technical Integration Guide)
20**](#_pgphe0cahj7f)

> [Actors: 20](#_e5goph5asd06)
>
> [6.1 Essential API Calls 21](#_a9l1x48hwkus)
>
> [6.1.1 Ingestion of Passenger Data 21](#_qcjz6wdrqk9s)
>
> [6.1.2 Serve Recommendations 26](#_pbwnn5f8fk52)
>
> [6.1.3 Confirm Order 37](#_kp9v977b1wlt)
>
> [6.2 Widget Integration (Embedded Solution) 38](#_3sa7il1ralwi)
>
> [6.3 Email Integration (Post-Booking Solution) 44](#_pwpqlar1u64r)
>
> [Note: Email Sending 44](#_sxzyr899k9q2)
>
> [Note: Email Configuration for Sending Emails on Behalf of the Airline
> 44](#_r534ke9ox584)
>
> [6.4 White-Label Website (Point of Sale) 46](#_1lc0ysccutue)
>
> [6.5 API Integration (Direct Integration) 47](#_220z3zro74k5)

[**7. Scalability and Security 48**](#scalability-and-security)

> [7.1 Scalability 48](#scalability)
>
> [7.2 Security 50](#security)
>
> [7.3 Data Location 52](#data-location)

[**Conclusion 52**](#conclusion)

# Introduction

## Overview of Arcube

Arcube is a cutting-edge third-party ancillary services platform
designed to help travel-related businesses, including airlines, Travel
Agents and Travel Management Companies (TMCs), and other travel service
providers, unlock new revenue streams and enhance the passenger
experience. By integrating personalized ancillary products such as
baggage protection, car rentals, carbon offset, eSIMs, and more, Arcube
offers a seamless way to provide value-added services at various stages
of the passenger journey.

## Value Proposition

Arcube enables airlines, travel platforms, and TMCs to boost ancillary
revenue by automatically recommending tailored offers (e.g. eSIM,
airport transfers, lounge access) to their travelers during and after
booking. The system uses AI to dynamically personalize these offers
based on real-time trip contextsuch as destination, travel dates,
duration, local events, and weather,so you don't need to build or
maintain your own recommendation logic. Integration is lightweight, and
Arcube handles offer optimization and merchandising on your behalf.

At Arcube, we have spent 3+ years aggregating dozens of ancillaries from
hundreds of suppliers with extensive coverage across the world so that
travel providers don't have to.

For airlines, Arcube expands service offerings beyond the flight itself,
covering crucial passenger journey stages such as booking confirmation
email, pre-departure, post flight & return flight. This allows airlines
to enhance their passengers' travel experience while generating
additional revenue.

For TMCs, our platform enables them to offer a wider array of services
to their corporate clients, further differentiating their service
portfolio and improving satisfaction. Whether you are an airline, TMC,
or other travel provider, Arcube's platform helps you become a true
one-stop shop for your customers' travel needs, making their entire
journey more enjoyable and convenient.

## Target Audience

Arcube's solution is perfect for:

Airlines looking to broaden their service offerings and increase
ancillary revenue through personalized, AI-driven recommendations.

Travel Management Companies (TMCs) seeking to enhance corporate travel
services with tailored ancillary products that improve the travel
experience for business travelers.

Travel Agencies and other travel service providers aiming to stand out
in a competitive market by offering a wider selection of personalized
services for customers.

By leveraging AI to recommend the most relevant ancillary services based
on a variety of real-time factors, Arcube helps businesses in the travel
industry boost revenue, improve customer engagement, and enhance overall
service offerings.

# Product Overview

## Key Features and Benefits

Arcube provides a REST API and widget to offer ancillaries like baggage
protection car rentals, eSIMs, etc., with AI-driven personalization.

**AI-Powered Personalization:** Arcube uses artificial intelligence to
analyze passenger data and recommend the best ancillary products
tailored to each individual traveler. By considering variables such as
the length of stay, destination, and local events happening during the
trip, the AI ensures that the offered ancillaries are both relevant and
valuable to the passenger.

**Seamless Integration**: Arcube has integrated dozens of ancillary
products and supplier APIs and product catalogue and have condensed that
into a single integration for travel providers. Arcube has been designed
to offer **minimal integration requirements**, ensuring that airlines,
TMCs, and other travel service providers can easily integrate the
solution with **low financial investment** and a **quick time to
market**. Whether using the widget/API integration embedded within the
booking flow or the post-booking email system that links to the
white-label website, Arcube simplifies the process, delivering a smooth,
efficient, and secure transaction experience.

**Multi-Channel Ancillary Delivery:** Arcube offers flexible, modular
integration options that support both pre-booking and post-booking use
cases. Tenants can use one, two, or all three channels in parallel,
depending on their customer journey design, their technological
capabilities and finally, time to market requirements.

-   The widget integration allows ancillary services to be presented
    > seamlessly during the booking process, enhancing the customer
    > experience.

-   The email integration enables airlines and TMCs to send personalized
    > offers to travelers post-booking, encouraging them to purchase
    > additional services in advance of their journey.

-   Passengers are redirected to the white-label website which serves as
    > the Point of Sale when passengers click on the aforementioned
    > post-booking emails, where passengers can complete the purchase of
    > the ancillary products.

**Revenue Generation:** Arcube's platform provides an additional revenue
stream for travel service providers. Whether airlines, TMCs, or travel
agencies, Arcube allows businesses to tap into the growing demand for
ancillary products without needing to source, develop and maintain these
services in-house. This results in new opportunities for profit,
customer engagement, and loyalty building.

**Custom Branding and White-Label Solutions:** The white-label website
and email templates are customizable to match the branding and visual
identity of the airline or travel service provider. This ensures that
all ancillary interactions feel like a natural part of the provider's
customer experience and not an external add-on.

**Compliance and Security:** Arcube handles all the legal and compliance
aspects of selling ancillaries, including PCI DSS compliance for payment
processing. Sensitive payment data is managed by trusted Payment Service
Providers (PSPs), ensuring that both travel businesses and their
passengers are protected.

**Comprehensive Analytics:** Arcube provides detailed insights into
ancillary sales, allowing travel service providers to track performance
and optimize their strategies. Analytics include metrics such as the
types of ancillaries sold, customer preferences, and overall revenue
contribution.

## How Arcube Enhances the Customer Journey

Arcube doesn't just increase ancillary sales, it improves the travel
experience for passengers by offering services they genuinely need or
want. The personalized nature of the offers makes the experience feel
more tailored and thoughtful, helping to build stronger customer
loyalty. By presenting relevant ancillaries at the right moment, whether
during booking, via email, or through the white-label website, Arcube
ensures that each touchpoint adds value to the customer's journey, from
the moment they book their flight to when they're on their way to their
destination.

# Tenant Dashboard and Arcube Platform

Tenant personnel will have access to a Arcube Tenant dashboard where all
ancillary products and suppliers are aggregated and easily managed by
the airline's commercial team. Through this platform, tenant personnel
can configure which ancillaries are offered, adjust pricing and markups,
and monitor transaction-level data and detailed sales insights. The
dashboard also allows the tenant to control how ancillary offers are
displayed across each touchpoint, including the booking flow,
pre-departure, post-flight, and more.

## Personalisation

Arcube uses proprietary recommendation algorithms to deliver the most
relevant offers at the right time, helping tenants maximise sales and
conversion rates. Arcube's algorithms handle what to recommend; no
additional dev work needed for recommendation logic beyond passing
Arcube the passenger data

## Passenger Recommendation Engine

Arcube's passenger recommendation engine works in real time and:

-   Considers factors such as destination, fare class, number of
    > passengers, travel dates and trip type (one-way or return).

-   Curates a personalised offer during the booking flow and at other
    > passenger touchpoints.

-   For example, when recommending eSIMs, the AI automatically checks
    > where the passenger is travelling and the duration of stay (if it
    > is a return flight) to estimate the right data package and
    > displays it in under two hundred milliseconds.

-   Arcube's team will work closely with each tenant during setup to
    > configure how these offers are shown to passengers for each
    > ancillary.

##  Supplier Selection Algorithm

Arcube uses a multi-supplier model for each ancillary to maximise
coverage, secure local partnerships, lower costs, and increase profit
margins for each of the tenants.

For example, if a passenger needs lounge access at a specific airport,
the AI will:

-   Scan all suppliers in the network to find those that support that
    > lounge.

-   Check each supplier's customer support reputation and service
    > history.

-   Compare live inventory and pricing from supplier APIs to find the
    > best price for the same lounge.

-   Select the supplier that balances affordable cost for the passenger
    > with the highest profit margin for the tenant.

Arcube is continually adding new suppliers to improve service quality,
expand coverage,

increase affordability, and secure the best margins for the airline

## Other Features on Arcube's Tenant Dashboard

### Sales Tracking

-   Airlines can view and track transaction-level data, including order
    > status, detailed booking information, flight itinerary, purchased
    > ancillaries, and the net profit per transaction. This is available
    > via the Arcube web dashboard (not via API)

-   Tenant personnel also have access to a dedicated analytics section
    > with aggregated sales data, visual graphs, and dashboards. This
    > includes insights such as sales performance over a selected time
    > period, top-selling ancillaries, performance by touchpoint, and
    > overall sales and profit by ancillary type, among other key
    > metrics.

![](media/image2.png){width="6.267716535433071in"
height="2.236111111111111in"}

Figure : Sales Tracking Feature on Arcube\'s Airline Dashboard

## Customising Pricing

-   For each ancillary, tenant personnel can transparently see the fixed
    > cost price per ancillary and the average price for ancillaries
    > with variable pricing, such as eSIMs (which vary by country and
    > data package selected).

-   Tenants can then set its desired price to passenger markup as a
    > percentage.

-   The platform offers complete flexibility, allowing tenant admins to
    > configure pricing for each ancillary individually. Any changes
    > made to the markup are applied in real time with no delay.

  ---------------------------------------------------------------------------------------------------------
  ![](media/image9.png){width="2.9791666666666665in"   ![](media/image1.png){width="2.9965277777777777in"
  height="3.138888888888889in"}                        height="1.8784722222222223in"}
  ---------------------------------------------------- ----------------------------------------------------

  ---------------------------------------------------------------------------------------------------------

Figure : Ancillary Details and Pricing Configuration within Arcube\'s
Airline Dashboard

## Templates

-   Tenants can use Arcube's intuitive email, SMS, and WhatsApp editors
    > to create custom templates for multiple touchpoints, including
    > pre-departure, post-flight, and other key moments. All
    > communications are fully customised to match Tenant's branding,
    > ensuring a consistent brand experience and building passenger
    > trust.

```{=html}
<!-- -->
```
-   Tenants can also leverage pre-set templates and proven copy crafted
    > to maximise open rates, click-through rates, and conversion rates.

# ![](media/image8.png){width="6.267716535433071in" height="3.888888888888889in"}

Figure : Email Configuration Feature within Arcube\'s Airline Dashboard

## Touchpoints

-   Tenants can configure multiple touchpoints for ancillary upsells,
    > including in the booking flow, booking confirmation, pre-departure
    > reminders, post-landing offers, return flights, and the Manage My
    > Booking section.

```{=html}
<!-- -->
```
-   For each touchpoint, tenants can customise a tailored bundle to
    > display only the most relevant ancillaries for that stage of the
    > passenger journey.

-   For example, it may not be useful to upsell lounge access or travel
    > insurance after the passenger has arrived in their destination,
    > but local eSIMs, carbon offsetting, or car rentals may be highly
    > relevant.

-   This approach avoids overwhelming passengers with too many options,
    > shows them only what is relevant, and helps maximise ancillary
    > sales.

![](media/image5.png){width="6.267716535433071in" height="1.625in"}

![](media/image6.png){width="6.267716535433071in"
height="4.263888888888889in"}

Figure : Bundles Feature within Arcube\'s Airline Dashboard

## Payment Processing

**Arcube supports flexible payment processing options, tailored to the
integration method and the touchpoints where ancillaries are offered.**

### 1. Tenant-Processed Payments 

This is the default and preferred payment model for ancillaries sold
through:

-   Booking flow

-   Call centre

-   Travel agent portal

#### Process:

1.  The tenant (Merchant of Record) collects the full payment directly
    > from passengers.

2.  On a bi-weekly/monthly basis, the tenant remits Arcube's share +
    > ancillary costs.

3.  Arcube then disburses payments promptly to the relevant ancillary
    > suppliers.

**Note:**If Tenant's payment processor supports split payments, Arcube
can enable

settlement at source, where each party receives their share directly at
the

time of transaction.

### 2. Arcube-Processed Payments

For ancillary sales through alternative touchpoints such as the
whitelabelled website accessed through post-booking, post-flight email
communications, Arcube offers assistance to process payments, if needed.
Arcube processes the payment securely through third-party providers,
including local and global payment methods.Arcube collects the full
payment and disburses the appropriate amounts to

suppliers and tenant commission.

### 3. Arcube-Hosted Site and Tenant Payments

Allows Arcube to handle the passenger ancillary purchase website, whilst
the tenant

collects payments using usual channels. Methods of integrating the
tenants payment

processors:

-   Direct Integration - Arcube integrates with the tenants existing
    > payment

gateway, allowing customers to complete the transaction on the Arcube-
hosted page while the tenant processes the payment in the background.

-   Redirect Flow - Customers are redirected from the Arcube-hosted page
    > to tenants domain to complete the payment securely using Tenant's
    > infrastructure. This model allows Tenant to maintain full control
    > over the payment flow while still leveraging Arcube's ancillary
    > product and supplier integrations.

## Reconciliation

Regardless of the payment processing option selected above, the Arcube
analytics

dashboard is available for all options and ensures full transparency and

reconciliation for all transactions.

Every party, tenant to supplier, has real-time visibility into what has
been sold, what is due to

each party, tracking of those payments. With detailed breakdowns of each
order and

intuitive filters, Arcube makes financial tracking, auditing, and
settlement effortless and

accurate.

![](media/image3.png){width="6.267716535433071in"
height="2.236111111111111in"}

# ![](media/image7.png){width="6.267716535433071in" height="1.75in"}

Figure : Example Invoicing and Payments Feature within Arcube\'s Airline
Dashboard

## Accepted Payment Methods

Arcube supports a wide range of global and regional payment options to
ensure flexibility,

accessibility, and high acquisition, low chargeback and low decline
rates:

![](media/image4.png){width="4.703125546806649in"
height="5.210937226596675in"}

Figure: Payment Processing Options Available on the Arcube Platform (if
Arcube is Merchant of Record)

## Currency Support

The base currency for Arcube's platform and ancillary suppliers is
United States Dollars (USD).

However, passengers have full flexibility to view and pay in their local
currency, either

automatically based on localisation data provided by the tenant or
manually upon request.

Payment processing and settlement can be conducted in any supported
local currency.

## Order Cancellation and Refunds

All cancellations and refunds are subject to the terms and conditions of
the individual supplier, Arcube, and, where applicable, the Tenant.

By default, all ancillaries provided through the Arcube platform are
non-refundable.

Cancellation policies vary depending on the type of ancillary and the
specific supplier's policy.

If a customer wishes to cancel an order, they must do so directly with
the supplier using the

contact details provided in the order confirmation emails sent post
purchase.

Cancellations cannot be processed once a service has been activated or
consumed. If an order is cancelled before activation or use, a refund
will only be issued if explicitly specified or agreed upon by the
relevant supplier.

## 

# Integration Methods

Arcube offers three distinct integration methods and an additional point
of sales for airlines, Travel Management Companies (TMCs), and other
travel providers to seamlessly deliver personalized ancillary services
to passengers: Widget Integration, Email Integration, API integration
and White-Label Website Integration as point of sale. These methods are
designed to be flexible, allowing businesses to choose the option that
best fits their customer engagement strategy, or even use all three
methods concurrently for maximum impact. Additionally, Arcube customizes
the look and feel of both the widget and white-label website to match
the tenant's branding and visual identity. This section is intended to
give an overview to mostly non technical people, so that they get an
overview of what each of the integration methods requirements are.

### NPM Package or Widget Integration (Embedded Solution)

#### Overview

In this section we outline how the widget works, please note that if the
tenant technology allow it, we can also provide an NPM package which
gives to the tenant more control and transparency instead of the Widget.

The widget Integration allows Arcube's ancillary services to be embedded
directly into the airline's or TMC's booking flow, providing passengers
with personalized ancillary offers during the booking process. The
widget is dynamically injected into the booking page and presents a
seamless experience for passengers as they browse and select relevant
ancillaries. The typical insertion point is after collecting passenger
information and before payment selection in the booking flow.

#### How It Works

The airline or TMC\'s front-end (such as the booking page) dynamically
loads the Arcube widget once the passenger reaches a specified point in
the booking flow (typically after the passenger details step).

A prerequisite to this is that the tenants backend need to have sent the
pnr - session details to Arcube's backend, providing contextual data
about the passenger's trip, such as flight segments, passenger type, and
loyalty information.

Arcube\'s backend processes this data and responds with 202 HTTP code.

The widget is loaded at the desired location from the tenant front end.

The passenger sees the widget, which displays a list of personalized
ancillary services tailored to their needs.

Events are emitted from the Widget to the parent every time something is
added to the cart.\
\
After the customer has paid, the tenant sends a request for the required
ancillaries that have been paid in order for Arcube to make the required
bookings.

#### Customization of Look and Feel

Arcube offers the flexibility to fully customize the look and feel of
the widget to match the tenant's branding. The widget can be altered to
reflect the airline's or TMC's colors, fonts, logo, and overall visual
identity, this can be done either by Arcube directly or the tenant can
send us a css to apply it. This ensures that the ancillary services
appear as a natural part of the tenant's existing booking flow,
maintaining a consistent brand experience for the passenger.

#### Benefits

**Seamless User Experience:** The widget is integrated directly into the
booking flow, offering a smooth, uninterrupted experience for the
passenger.

**Custom Branding:** The widget is tailored to reflect the airline or
TMC's branding, ensuring that it feels like a native part of their
platform.

**Real-Time Personalization:** Arcube's AI engine dynamically generates
personalized ancillary offers based on the passenger's details,
enhancing the likelihood of conversions.

#### Payment Flow

In the widget integration, the airline or TMC handles payment processing
for ancillaries. Arcube provides the pricing but collects no payment
directly from the passenger in this flow. Once the passenger completes
their purchase, the airline or TMC pays Arcube for the ancillaries sold.

#### Security Considerations

Data security is ensured by issuing short-lived, signed JWT
initialization tokens generated dynamically by Arcube's backend. These
tokens are bound to the requesting domain and validated before allowing
access to any authenticated operations. No secrets are exposed in the
frontend, and tenant backend integration is not required. All sensitive
requests are authorized using verified, time-limited session tokens
derived from the initialization flow.

HTTPS encryption ensures secure transmission of data.

Only anonymized data is passed to Arcube, ensuring passenger privacy.

### Email Integration (Post-Booking Solution)

#### Overview

The Email Integration method allows Arcube to send personalized email
recommendations to passengers after they've completed their booking. The
emails provide relevant ancillary offers, guiding passengers to the
white-label website (Point of Sale) where they can make their purchases.

#### How It Works

Airline or a TMC sends anonymized PNR (including email) data to Arcube
after the booking is made. Arcube offers multiple ways of receiving this
data, from API calls to nightly file exports.

Arcube processes this data using its AI engine to generate personalized
ancillary recommendations based on the passenger's itinerary, loyalty
status, and other factors.

Arcube then is able to either send automatic emails to the passenger
with related offers or contact the tenant with the email content so that
the email is delivered from the tenant's mail server.

The email content, when clicked, will redirect the passenger to our
white-label website (Point of Sale), where the passenger can complete
the purchase.

If the passenger selects any ancillaries, Arcube handles the payment
processing, fulfillment, and post-purchase communications.

#### Customization of Look and Feel

Similarly to the widget, Arcube will customize the look and feel of the
white-label website to ensure it matches the tenant's brand guidelines.
The white-label website is designed to seamlessly reflect the tenant's
colors, logos, fonts, and overall aesthetic, providing a consistent
brand experience for the passenger during the purchase process.

#### Benefits

Post-Booking Engagement: This method allows the airline or TMC to reach
passengers with relevant ancillary offers after they've made their
booking, encouraging additional purchases closer to the travel date.

**Custom Branding:** The email and the white-label website are fully
customizable, allowing for a branded, cohesive experience across both.

**Revenue Sharing:** Airlines and TMCs earn their pre-set markup on the
ancillary products sold through the email link similar to the widget.
Arcube tracks and reports sales and commissions via the tenant
dashboard.

**Smart Offerings:** Arcube's AI engine dynamically generates and
recommends ancillaries which are most likely to convert based on the
current point of the journey, destination, things happening at the
destination etc, enhancing the likelihood of conversions.

#### Payment Flow

Arcube manages all payment processing and fulfillment, ensuring a secure
and seamless experience for the passenger.

Upon successful payment, Arcube handles fulfillment, such as issuing
travel insurance or eSIMs, and sends a confirmation email to the
passenger.

#### Security Considerations

All communication is securely transmitted over HTTPS.

Anonymized passenger data is used to generate personalized
recommendations, ensuring privacy and compliance with data protection
regulations.

Arcube complies with PCI DSS standards to ensure secure payment
processing.

### API Integration (Direct Integration)

Overview

The API Integration method provides airlines, TMCs, and other travel
service providers with the flexibility to integrate Arcube's ancillary
services directly into their systems via a RESTful API. This allows
businesses to offer personalized ancillaries during any part of the
customer journey, whether it's pre-booking, post-booking, or during the
travel process itself.

#### How It Works

The airline or TMC integrates directly with Arcube's RESTful API to send
relevant passenger and booking data.

The API processes the data in real-time and returns a personalized list
of ancillary products based on the passenger's trip details,
preferences, and AI-powered recommendations.

The airline or TMC can then use this data to present the ancillaries at
any customer touchpoint (e.g., within their own booking system, app, or
other interfaces).

The API allows airlines and TMCs to manage payment processing either via
their own payment gateway or through Arcube's integrated solution.

#### Customization of Look and Feel

Arcube ensures that the API integration maintains the tenant's branding
throughout the entire customer journey. When the ancillaries are
presented on the airline or TMC's interface, the look and feel will be
customized to align with their visual identity and design standards,
offering a seamless and cohesive experience.

#### Benefits

Maximum Flexibility: The API integration offers complete flexibility to
airlines, TMCs, and other providers by enabling ancillary services to be
integrated directly into their own systems.

**Real-Time Personalization:** Leverage Arcube's AI to offer relevant
ancillary services during any stage of the customer journey.

**Seamless User Experience:** The API allows businesses to create a
fully integrated and branded user experience, while still benefiting
from Arcube's powerful ancillary service engine.

#### Payment Flow

The API can be configured to either allow the airline or TMC to manage
payment processing or use Arcube's payment solution, depending on the
needs of the business.

Payment handling can be fully integrated into the airline or TMC's
platform, providing seamless checkout experiences for the passenger.

#### Security Considerations

API Authentication: Secure authentication is enforced through API keys
or JWT tokens to ensure safe data transmission.

Data Encryption: All API calls are encrypted over HTTPS to protect
sensitive information during transit.

Privacy Compliance: Only anonymized passenger data is exchanged to
ensure privacy and compliance with GDPR and other regulations.

### (POS) White-Label Website Point of Sale

#### Overview

The White-Label Website Point of Sale is a fully branded platform where
passengers can purchase ancillary services after being directed via a
link from the widget or email. This method provides a dedicated,
seamless Point of Sale for ancillary products.

#### How It Works

Prerequisite for this POS to be activated is that Arcube, at some point
has received the pnr details either through an API or through nightly
files.

The email directs the passenger to the white-label website, which is
fully branded to match the airline or TMC's visual identity.

The website displays a personalized list of relevant ancillary services,
curated by Arcube\'s AI based on the passenger's trip details,
preferences, and other factors.

The passenger can select and purchase ancillary services (e.g., travel
insurance, extra luggage) directly on the website.

Arcube handles the payment processing on the white-label website,
ensuring a smooth and secure checkout process.

The passenger receives a confirmation email, including booking codes or
QR codes for the purchased services.

#### Customization of Look and Feel

Arcube ensures the white-label website is fully customized to reflect
the tenant's branding. This includes colors, logos, fonts, and overall
design, ensuring the website feels like a natural extension of the
tenant's platform. Passengers will see a consistent brand experience
throughout the entire process, from email to purchase.

#### Benefits

**Branded Sales Experience:** The white-label website provides a fully
branded sales interface, ensuring consistency with the tenant's existing
user experience.

**Personalized Ancillaries:** The AI-powered recommendations ensure the
ancillaries displayed are relevant to each passenger, enhancing the
chances of conversion.

**Revenue Sharing:** Airlines and TMCs earn their pre-set markup on the
ancillary products sold through the email link similar to the widget.

#### Payment Flow

Arcube manages payment processing and fulfillment for ancillaries,
allowing the tenant to focus on customer engagement.

Upon successful payment, Arcube sends confirmation emails and handles
the delivery or confirmation of the purchased services (e.g., insurance
policies, lounge access).

#### Security Considerations

Data security is guaranteed with HTTPS encryption for all transactions.

Payment information is processed in compliance with PCI DSS standards to
ensure the highest level of security.

Anonymized data is used to personalize the experience and safeguard
passenger privacy.

### Choosing the Right Integration Method

Arcube's four integration methods allow businesses to choose the
solution that best fits their needs:

widget Integration: Ideal for embedding ancillary offers directly within
the booking flow, providing a seamless and engaging experience during
the booking process.

Email Integration: Best for post-booking engagements, allowing airlines
and TMCs to offer personalized ancillary products after the initial
booking, thereby increasing revenue before the journey begins.

White-Label Website Integration: Provides a fully branded, dedicated
Point of Sale where passengers can purchase ancillary services after
receiving an offer from the email.

API Integration: Provides the most flexibility, enabling airlines, TMCs,
and other travel service providers to integrate ancillary offerings at
any touchpoint in their own systems, whether during booking, travel, or
post-trip.

By using one or more of these integration methods, travel providers can
maximize their ancillary revenue while delivering a personalized and
seamless experience for their passengers.

# 6. API Versioning and Change Management

Arcube follows a simple, predictable API versioning strategy to ensure
that all integrated tenants can continue operating without disruption
while still benefiting from improvements and new features.

## Versioning Approach

-   **Major Versions** --- Identified in the base URL (e.g.,
    > /api/v1/\...).

-   **Minor Updates** --- Backward-compatible improvements and
    > non-breaking changes will be rolled out within the same major
    > version without changing the version number.

-   **Breaking Changes** --- Any changes that could impact existing
    > integrations (e.g., removing fields, changing request/response
    > formats) will trigger a new **major version**.

Example:

Current version: v1

Future major release: v2 (only if breaking changes are introduced)

## Backward Compatibility

-   We strive to maintain backward compatibility within the same major
    > version.

-   Tenants do not need to update their integration for minor updates
    > unless they wish to use new features.

## Deprecation Policy

-   When a new major version is released, the previous major version
    > will be **supported for a minimum of 6 months** before
    > deprecation.

-   We will provide advance notice to all tenants before deprecating any
    > version.

## Communication of Changes

-   Tenants will be notified of upcoming changes via **email** and
    > through our **developer documentation**.

-   Each release will include a concise **changelog** highlighting new
    > features, improvements, and any actions required by the tenants.

## Testing and Sandbox

-   A **sandbox environment** will be available for tenants to test
    > against new versions before production deployment.

-   Sandbox access will mirror production functionality to ensure smooth
    > transition.

Contact Arcube to obtain sandbox credentials and the sandbox base URL.

# 7. Scalability and Security

Arcube's platform is built to scale and secure ancillary services
through a robust architecture powered by **AWS Lambda**, **AWS API
Gateway**, and **Azure MongoDB Atlas**. These technologies ensure that
the platform can handle high volumes of traffic, maintain operational
reliability, and provide strong security for sensitive data. Below, we
outline how each component contributes to Arcube\'s scalability and
security, along with the best practices implemented to ensure high
performance and data protection.

## 7.1 Scalability

**AWS Lambda\
** Arcube leverages **AWS Lambda** for serverless computing, ensuring
that the platform automatically scales to meet demand without the need
for manual intervention. Lambda's inherent scalability allows Arcube to
handle high traffic volumes efficiently, processing millions of requests
with zero downtime.

-   **Auto-scaling**: Lambda automatically scales up or down based on
    > incoming traffic, ensuring that Arcube's platform remains
    > responsive under varying loads. As traffic spikes, Lambda
    > functions are invoked in parallel, maintaining high performance
    > even during peak times.

-   **Concurrency Control**: Lambda\'s concurrency feature ensures that
    > multiple requests can be processed simultaneously, providing
    > seamless scaling across thousands of concurrent users.

**AWS API Gateway\
** **AWS API Gateway** is the gateway for managing, monitoring, and
scaling Arcube's API services. API Gateway supports automatic scaling,
ensuring that Arcube's APIs can handle any amount of incoming traffic
without performance degradation.

-   **Throttling and Rate Limiting**: API Gateway is configured with
    > rate-limiting and throttling policies to manage incoming traffic
    > and prevent abuse, ensuring a reliable experience for all users.

-   **Caching**: API Gateway implements caching to reduce backend load
    > and improve response times for frequently accessed data, enabling
    > faster processing and a better user experience.

-   **Edge-Optimized APIs**: Arcube takes advantage of **edge-optimized
    > APIs** through API Gateway, ensuring low-latency access to APIs
    > for users across the globe by utilizing **Amazon CloudFront**.

**Azure MongoDB Atlas\
** Arcube uses **Azure MongoDB Atlas** for its data storage needs,
taking advantage of the platform's **auto-scaling capabilities** and
**global distribution** to ensure that data is always available and
quickly accessible.

-   **Global Distribution**: MongoDB Atlas offers **global clusters**
    > that enable data to be distributed across multiple regions. This
    > minimizes latency for users worldwide and ensures high
    > availability of data.

-   **Auto-Scaling**: MongoDB Atlas automatically scales the database
    > based on workload demands, allowing Arcube to manage growing data
    > needs without manual intervention.

-   **Backup and Recovery**: MongoDB Atlas provides **automated
    > backups** and **point-in-time recovery** to ensure that data is
    > safe and can be quickly restored in the event of any issues.

## 7.2 Security

**AWS Lambda Security\
** Security is built into the foundation of **AWS Lambda** with several
built-in features that ensure data protection and minimize
vulnerabilities.

-   **IAM Roles and Policies**: Each Lambda function is granted the
    > **minimum permissions** required to interact with AWS resources,
    > following the principle of **least privilege**. This ensures that
    > each function operates securely and does not have unnecessary
    > access to other resources.

-   **VPC Integration**: Arcube runs Lambda functions within a **Virtual
    > Private Cloud (VPC)**, ensuring secure access to internal
    > resources and preventing external exposure of sensitive data.

-   **Environment Variables Encryption**: Sensitive information such as
    > **API keys** and **credentials** are stored in **Lambda
    > environment variables** and encrypted using **AWS KMS (Key
    > Management Service)**, ensuring that all sensitive data is
    > securely managed.

-   **Logging and Monitoring**: Arcube uses **Amazon CloudWatch** to
    > monitor Lambda function execution and logs, ensuring that any
    > issues or suspicious activity are detected in real time.

**AWS API Gateway Security\
** Arcube has implemented **AWS API Gateway** as the primary entry point
for managing all external API requests, with advanced security features
to safeguard the platform and its data.

-   **Authentication & Authorization**: Arcube uses **AWS Cognito**,
    > **Lambda authorizers**, and **IAM roles** to authenticate and
    > authorize all API requests. This ensures that only authorized
    > clients can access the platform's resources.

-   **WAF (Web Application Firewall)**: Arcube integrates **AWS WAF**
    > with API Gateway to filter out malicious traffic, such as **SQL
    > injections** or **cross-site scripting (XSS)** attacks, before it
    > reaches the application.

-   **Rate Limiting**: API Gateway enforces **rate limiting** and
    > **throttling** to control the number of requests a user can make
    > in a given time period, protecting against DoS (Denial of Service)
    > attacks and ensuring fair usage across all clients.

-   **Access Control**: Arcube defines strict **API Gateway Resource
    > Policies**, specifying which IP addresses and VPCs can access the
    > APIs, further tightening security.

**Azure MongoDB Atlas Security\
** **Azure MongoDB Atlas** provides robust security features to protect
sensitive data and ensure compliance with data protection regulations.

-   **Encryption**: All sensitive data in **MongoDB Atlas** is
    > **encrypted at rest** using **AES-256 encryption** and **in
    > transit** using **TLS**. This guarantees that sensitive
    > information is protected both while stored and during
    > transmission.

-   **Role-Based Access Control (RBAC)**: Arcube uses **RBAC** in
    > MongoDB Atlas to control access to specific data based on user
    > roles, ensuring that only authorized personnel or services can
    > access sensitive data.

-   **Network Isolation**: MongoDB Atlas provides **network isolation**
    > using **IP whitelisting**, ensuring that only trusted IPs can
    > connect to the database, adding an extra layer of security.

-   **Auditing**: Arcube enables **audit logging** to track all access
    > to MongoDB Atlas, ensuring full transparency and allowing for
    > quick detection of any unauthorized access.

**Best Practices for Security**:

1.  **End-to-End Encryption**:

    -   Arcube enforces **encryption** of sensitive data throughout its
        > lifecycle, ensuring both **data in transit** and **data at
        > rest** are encrypted.

2.  **Access Control**:

    -   Arcube adheres to **least privilege access** principles,
        > ensuring that services and users only have the minimum
        > necessary permissions to perform their tasks.

3.  **Secure API Access**:

    -   **AWS API Gateway** and **AWS Lambda** are configured to ensure
        > that only **authenticated and authorized requests** are
        > allowed, preventing unauthorized access to sensitive data or
        > services.

4.  **Constant Monitoring**:

    -   Arcube continuously monitors system performance and security
        > metrics using **CloudWatch** and **AWS GuardDuty**, and is
        > alerted to any potential security breaches or performance
        > degradation.

## 7.3 Data Location

Arcube provides the flexibility to store tenant-specific data at various
geographical locations, ensuring compliance with regional data storage
regulations. Each tenant can configure their data storage location
according to their specific requirements, including ensuring that
passenger data is stored in a particular country or region.

If a tenant organization is subject to specific regulations, such as
data sovereignty laws, which require passenger data to be stored in a
designated country or region, Arcube's built-in **tenant-specific
location storage** feature can be utilized to ensure that these
requirements are met. This ensures that the organization remains
compliant with local data protection laws, such as **GDPR** (General
Data Protection Regulation) in the EU or **CCPA** (California Consumer
Privacy Act) in the United States.

Arcube is committed to supporting tenant-specific data storage
configurations, offering the flexibility needed to adapt to the evolving
regulatory landscape while safeguarding the privacy and security of
passenger data.

### 

### 

# 8. Conclusion

Arcube's platform is designed with **scalability and security** at its
core, utilizing **AWS Lambda**, **AWS API Gateway**, and **Azure MongoDB
Atlas** to ensure high performance and data protection. These
technologies work seamlessly together to handle varying traffic loads,
protect sensitive information, and ensure continuous availability. With
industry best practices implemented across all layers, Arcube provides a
robust and secure platform for delivering personalized ancillary
services at scale.

Having read the above, you should have a good understanding regarding
what and how Arcube is able to integrate with your system in order to
increase your revenue. As a next step, please contact us in order to get
access to our technical integration guide which is more developer
focused and should give your technical department all the details needed
in order to start with the integration.
