# Essential API Calls
Below are the essential API calls which allow interaction with Arcube AI Recommendation Engine. For each of the integration methods further below, we mention what api calls are required.

## Ingestion of Passenger Data
### Description: This is used in order to insert specific client data into Arcube. 
!!! note "Request URL Parameter"
    Replace `${arcube-url}` with your assigned Arcube environment URL (e.g., `https://api.arcube.com`).

!!! note "HTTP Methos: POST"
    URL: `${arcube-url}/v1/journey-api/passenger-data`
    
!!! note "HTTP Response: "
    202 Accepted for Processing

### Notes: Email on the passenger is mandatory if you want Arcube to be able to send emails

### Payload Sample:

```json 
{
 "passengers": [
   {
     "id": "PAX1",
     "type": "ADT",
     "firstName": "John",
     "lastName": "Doe",
     "accompaniedInfant": "PAX2",
     "email": "sample@samplemaildomain.com",
     "isLead": true
   },
   {
     "id": "PAX2",
     "type": "INF",
     "firstName": "Baby",
     "lastName": "Doe",
     "associatedAdultId": "PAX1"
   },
   {
     "id": "PAX3",
     "type": "CHD",
     "firstName": "Anna",
     "lastName": "Doe"
   }
 ],
 "segments": [
   {
     "segmentId": "SEG1",
     "flightNumber": "XY123",
     "departure": "ATH",
     "arrival": "FRA",
     "departureTime": "2025-07-01T08:00:00Z",
     "arrivalTime": "2025-07-01T10:00:00Z",
     "operatingCarrier": "XY",
     "passengerIds": [
       "PAX1",
       "PAX2",
       "PAX3"
     ]
   },
   {
     "segmentId": "SEG2",
     "flightNumber": "XY456",
     "departure": "FRA",
     "arrival": "JFK",
     "departureTime": "2025-07-01T18:00:00Z",
     "arrivalTime": "2025-07-01T22:00:00Z",
     "operatingCarrier": "XY",
     "passengerIds": [
       "PAX1",
       "PAX2",
       "PAX3"
     ]
   },
   {
     "segmentId": "SEG3",
     "flightNumber": "XY789",
     "departure": "JFK",
     "arrival": "FRA",
     "departureTime": "2025-08-10T16:00:00Z",
     "arrivalTime": "2025-08-11T06:00:00Z",
     "operatingCarrier": "XY",
     "passengerIds": [
       "PAX1",
       "PAX2"
     ]
   },
   {
     "segmentId": "SEG4",
     "flightNumber": "XY101",
     "departure": "FRA",
     "arrival": "ATH",
     "departureTime": "2025-08-11T08:00:00Z",
     "arrivalTime": "2025-08-11T10:00:00Z",
     "operatingCarrier": "XY",
     "passengerIds": [
       "PAX1",
       "PAX2"
     ]
   }
 ],
 "tenant": "6864f9f94eab200cd4765cc0",
 "sessionId": "73-ara43"
}
```
####Payload JSON Schema:
```json 
{
 "$schema": "https://json-schema.org/draft/2020-12/schema",
 "type": "object",
 "required": ["passengers", "segments", "tenant", "sessionId", "pnr"],
 "properties": {
   "pnr": {
     "type": "string"
   },
   "sessionId": {
     "type": "string"
   },
   "passengers": {
     "type": "array",
     "items": {
       "type": "object",
       "required": ["id", "type"],
       "properties": {
         "id": { "type": "string" },
         "type": { "type": "string", "enum": ["ADT", "CHD", "INF"] },
         "firstName": { "type": "string" },
         "lastName": { "type": "string" },
         "accompaniedInfant": { "type": "string" },
         "associatedAdultId": { "type": "string" },
         "isLead": { "type": "boolean" },
         "email": { "type": "string", "format": "email" }  // Optional email address for the passenger
       },
       "additionalProperties": false
     }
   },
   "segments": {
     "type": "array",
     "items": {
       "type": "object",
       "required": [
         "segmentId",
         "flightNumber",
         "departure",
         "arrival",
         "departureTime",
         "arrivalTime",
         "operatingCarrier"
       ],
       "properties": {
         "segmentId": { "type": "string" },
         "flightNumber": { "type": "string" },
         "departure": { "type": "string" },
         "arrival": { "type": "string" },
         "departureTime": { "type": "string", "format": "date-time" },
         "arrivalTime": { "type": "string", "format": "date-time" },
         "operatingCarrier": { "type": "string" },
         "passengerIds": {
           "type": "array",
           "items": { "type": "string" }
         }
       },
       "additionalProperties": false
     }
   },
   "tenant": { "type": "string" }
 },
 "anyOf": [
   { "required": ["pnr"] },
   { "required": ["sessionId"] }
 ],
 "additionalProperties": false
}
```

## Serve Recommendations
### Description: This is the way to retrieve recommendation for a specific pnr - session id. 
!!! note "Request URL Parameter"
    Replace `${arcube-url}` with your assigned Arcube environment URL (e.g., `https://api.arcube.com`).

!!! note "HTTP Methos: POST"
    URL: `${arcube-url}/v1/aggregation-api/servePassengerRecommendations`
    
!!! note "HTTP Response: "
    200 OK


####Request Payload Sample:
```json 
{
 
 "tenant": "6864f9f94eab200cd4765cc0",
 "sessionId": "73-ara43",
  "pointOfSale": "booking-flow"
}
```
####Request Payload JSON Schema:
```json 
{
 "$schema": "https://json-schema.org/draft/2020-12/schema",
"type": "object",
"required": ["pointOfSale", "tenant", "sessionId", "pnr"],
"properties": {
  "pnr": {
    "type": "string"
  },
  "sessionId": {
    "type": "string"
  },
  "pointOfSale": { "type": "string" },
  "tenant": { "type": "string" }
},
"anyOf": [
  { "required": ["pnr"] },
  { "required": ["sessionId"] }
],
"additionalProperties": false
}
```
####Response Payload Sample:
```json 
{
   "result": [
       {
           "id": "67ffb54828ea75a8690c161a",
           "miles": 0,
           "price": 6.6,
           "name": "E-SIM Greece - 1 GB - 7 Days",
           "description": "Airalo eSIM for Greece. 1 GB data valid for 7 days.",
           "image": "https://arcube-application.s3.eu-west-1.amazonaws.com/ancillaries/images/esim.webp",
           "price_partner": 5,
           "price_arcube": 5.5,
           "category": "ESIMS",
           "metadata": {
               "provider": "airalo",
               "package_id": "meraki-mobile-7days-1gb",
               "package_details": {
                   "title": "1 GB - 7 Days",
                   "data": "1 GB",
                   "days": 7,
                   "country": "Greece",
                   "country_code": "GR"
               },
               "source": "partner-esim",
               "processed_at": "2025-07-30T14:14:31.418Z",
               "pointsOfInterest": [
                   "ATH"
               ]
           }
       },
       {
           "id": "67ffb54828ea75a8690c161a",
           "miles": 0,
           "price": 11.88,
           "name": "E-SIM Greece - 3 GB - 30 Days",
           "description": "Airalo eSIM for Greece. 3 GB data valid for 30 days.",
           "image": "https://arcube-application.s3.eu-west-1.amazonaws.com/ancillaries/images/esim.webp",
           "price_partner": 9,
           "price_arcube": 9.9,
           "category": "ESIMS",
           "metadata": {
               "provider": "airalo",
               "package_id": "meraki-mobile-30days-3gb",
               "package_details": {
                   "title": "3 GB - 30 Days",
                   "data": "3 GB",
                   "days": 30,
                   "country": "Greece",
                   "country_code": "GR"
               },
               "source": "partner-esim",
               "processed_at": "2025-07-30T14:14:31.418Z",
               "pointsOfInterest": [
                   "ATH"
               ]
           }
       },
       {
           "id": "67ffb54828ea75a8690c161a",
           "miles": 0,
           "price": 17.16,
           "name": "E-SIM Greece - 5 GB - 30 Days",
           "description": "Airalo eSIM for Greece. 5 GB data valid for 30 days.",
           "image": "https://arcube-application.s3.eu-west-1.amazonaws.com/ancillaries/images/esim.webp",
           "price_partner": 13,
           "price_arcube": 14.3,
           "category": "ESIMS",
           "metadata": {
               "provider": "airalo",
               "package_id": "meraki-mobile-30days-5gb",
               "package_details": {
                   "title": "5 GB - 30 Days",
                   "data": "5 GB",
                   "days": 30,
                   "country": "Greece",
                   "country_code": "GR"
               },
               "source": "partner-esim",
               "processed_at": "2025-07-30T14:14:31.418Z",
               "pointsOfInterest": [
                   "ATH"
               ]
           }
       },
       {
           "id": "67ffb54828ea75a8690c161a",
           "miles": 0,
           "price": 33,
           "name": "E-SIM Greece - 10 GB - 30 Days",
           "description": "Airalo eSIM for Greece. 10 GB data valid for 30 days.",
           "image": "https://arcube-application.s3.eu-west-1.amazonaws.com/ancillaries/images/esim.webp",
           "price_partner": 25,
           "price_arcube": 27.5,
           "category": "ESIMS",
           "metadata": {
               "provider": "airalo",
               "package_id": "meraki-mobile-30days-10gb",
               "package_details": {
                   "title": "10 GB - 30 Days",
                   "data": "10 GB",
                   "days": 30,
                   "country": "Greece",
                   "country_code": "GR"
               },
               "source": "partner-esim",
               "processed_at": "2025-07-30T14:14:31.418Z",
               "pointsOfInterest": [
                   "ATH"
               ]
           }
       },
       {
           "id": "67ffb54828ea75a8690c161a",
           "miles": 0,
           "price": 6.6,
           "name": "E-SIM Germany - 1 GB - 7 Days",
           "description": "Airalo eSIM for Germany. 1 GB data valid for 7 days.",
           "image": "https://arcube-application.s3.eu-west-1.amazonaws.com/ancillaries/images/esim.webp",
           "price_partner": 5,
           "price_arcube": 5.5,
           "category": "ESIMS",
           "metadata": {
               "provider": "airalo",
               "package_id": "hallo-mobil-7days-1gb",
               "package_details": {
                   "title": "1 GB - 7 Days",
                   "data": "1 GB",
                   "days": 7,
                   "country": "Germany",
                   "country_code": "DE"
               },
               "source": "partner-esim",
               "processed_at": "2025-07-30T14:14:31.424Z",
               "pointsOfInterest": [
                   "FRA"
               ]
           }
       },
       {
           "id": "67ffb54828ea75a8690c161a",
           "miles": 0,
           "price": 13.2,
           "name": "E-SIM Germany - 3 GB - 30 Days",
           "description": "Airalo eSIM for Germany. 3 GB data valid for 30 days.",
           "image": "https://arcube-application.s3.eu-west-1.amazonaws.com/ancillaries/images/esim.webp",
           "price_partner": 10,
           "price_arcube": 11,
           "category": "ESIMS",
           "metadata": {
               "provider": "airalo",
               "package_id": "hallo-mobil-30days-3gb",
               "package_details": {
                   "title": "3 GB - 30 Days",
                   "data": "3 GB",
                   "days": 30,
                   "country": "Germany",
                   "country_code": "DE"
               },
               "source": "partner-esim",
               "processed_at": "2025-07-30T14:14:31.424Z",
               "pointsOfInterest": [
                   "FRA"
               ]
           }
       },
       {
           "id": "67ffb54828ea75a8690c161a",
           "miles": 0,
           "price": 19.8,
           "name": "E-SIM Germany - 5 GB - 30 Days",
           "description": "Airalo eSIM for Germany. 5 GB data valid for 30 days.",
           "image": "https://arcube-application.s3.eu-west-1.amazonaws.com/ancillaries/images/esim.webp",
           "price_partner": 15,
           "price_arcube": 16.5,
           "category": "ESIMS",
           "metadata": {
               "provider": "airalo",
               "package_id": "hallo-mobil-30days-5gb",
               "package_details": {
                   "title": "5 GB - 30 Days",
                   "data": "5 GB",
                   "days": 30,
                   "country": "Germany",
                   "country_code": "DE"
               },
               "source": "partner-esim",
               "processed_at": "2025-07-30T14:14:31.424Z",
               "pointsOfInterest": [
                   "FRA"
               ]
           }
       },
       {
           "id": "67ffb54828ea75a8690c161a",
           "miles": 0,
           "price": 29.7,
           "name": "E-SIM Germany - 10 GB - 30 Days",
           "description": "Airalo eSIM for Germany. 10 GB data valid for 30 days.",
           "image": "https://arcube-application.s3.eu-west-1.amazonaws.com/ancillaries/images/esim.webp",
           "price_partner": 22.5,
           "price_arcube": 24.75,
           "category": "ESIMS",
           "metadata": {
               "provider": "airalo",
               "package_id": "hallo-mobil-30days-10gb",
               "package_details": {
                   "title": "10 GB - 30 Days",
                   "data": "10 GB",
                   "days": 30,
                   "country": "Germany",
                   "country_code": "DE"
               },
               "source": "partner-esim",
               "processed_at": "2025-07-30T14:14:31.424Z",
               "pointsOfInterest": [
                   "FRA"
               ]
           }
       },
       {
           "id": "6877661d01f64ebee4159754",
           "miles": 0,
           "price": 6.6,
           "name": "Luggage Protection - GOLD SERVICE",
           "description": "Blue Ribbon Bags GOLD SERVICE luggage protection. Coverage up to $1000 per bag.",
           "image": "https://arcube-application.s3.eu-west-1.amazonaws.com/default/Ancillary+Thumbnails+-+New+batch/15%EF%BF%BD+Discount+on+Luxury+Sedan+Hire.png",
           "price_partner": 5,
           "price_arcube": 5.5,
           "category": "AIRPORT_TRANSFER",
           "metadata": {
               "provider": "brb",
               "product_code": "GOLD",
               "product_name": "GOLD SERVICE",
               "bag_coverage": 1000,
               "currency": "USD",
               "source": "partner-brb",
               "processed_at": "2025-07-30T14:14:31.931Z",
               "pointsOfInterest": [
                   "JFK"
               ]
           }
       },
       {
           "id": "67ffb54828ea75a8690c161a",
           "miles": 0,
           "price": 5.94,
           "name": "E-SIM United States - 1 GB - 7 Days",
           "description": "Airalo eSIM for United States. 1 GB data valid for 7 days.",
           "image": "https://arcube-application.s3.eu-west-1.amazonaws.com/ancillaries/images/esim.webp",
           "price_partner": 4.5,
           "price_arcube": 4.95,
           "category": "ESIMS",
           "metadata": {
               "provider": "airalo",
               "package_id": "change-7days-1gb",
               "package_details": {
                   "title": "1 GB - 7 Days",
                   "data": "1 GB",
                   "days": 7,
                   "country": "United States",
                   "country_code": "US"
               },
               "source": "partner-esim",
               "processed_at": "2025-07-30T14:14:31.936Z",
               "pointsOfInterest": [
                   "JFK"
               ]
           }
       },
       {
           "id": "67ffb54828ea75a8690c161a",
           "miles": 0,
           "price": 14.52,
           "name": "E-SIM United States - 3 GB - 30 Days",
           "description": "Airalo eSIM for United States. 3 GB data valid for 30 days.",
           "image": "https://arcube-application.s3.eu-west-1.amazonaws.com/ancillaries/images/esim.webp",
           "price_partner": 11,
           "price_arcube": 12.1,
           "category": "ESIMS",
           "metadata": {
               "provider": "airalo",
               "package_id": "change-30days-3gb",
               "package_details": {
                   "title": "3 GB - 30 Days",
                   "data": "3 GB",
                   "days": 30,
                   "country": "United States",
                   "country_code": "US"
               },
               "source": "partner-esim",
               "processed_at": "2025-07-30T14:14:31.936Z",
               "pointsOfInterest": [
                   "JFK"
               ]
           }
       },
       {
           "id": "67ffb54828ea75a8690c161a",
           "miles": 0,
           "price": 21.12,
           "name": "E-SIM United States - 5 GB - 30 Days",
           "description": "Airalo eSIM for United States. 5 GB data valid for 30 days.",
           "image": "https://arcube-application.s3.eu-west-1.amazonaws.com/ancillaries/images/esim.webp",
           "price_partner": 16,
           "price_arcube": 17.6,
           "category": "ESIMS",
           "metadata": {
               "provider": "airalo",
               "package_id": "change-30days-5gb",
               "package_details": {
                   "title": "5 GB - 30 Days",
                   "data": "5 GB",
                   "days": 30,
                   "country": "United States",
                   "country_code": "US"
               },
               "source": "partner-esim",
               "processed_at": "2025-07-30T14:14:31.936Z",
               "pointsOfInterest": [
                   "JFK"
               ]
           }
       },
       {
           "id": "67ffb54828ea75a8690c161a",
           "miles": 0,
           "price": 34.32,
           "name": "E-SIM United States - 10 GB - 30 Days",
           "description": "Airalo eSIM for United States. 10 GB data valid for 30 days.",
           "image": "https://arcube-application.s3.eu-west-1.amazonaws.com/ancillaries/images/esim.webp",
           "price_partner": 26,
           "price_arcube": 28.6,
           "category": "ESIMS",
           "metadata": {
               "provider": "airalo",
               "package_id": "change-30days-10gb",
               "package_details": {
                   "title": "10 GB - 30 Days",
                   "data": "10 GB",
                   "days": 30,
                   "country": "United States",
                   "country_code": "US"
               },
               "source": "partner-esim",
               "processed_at": "2025-07-30T14:14:31.936Z",
               "pointsOfInterest": [
                   "JFK"
               ]
           }
       },
       {
           "id": "67ffb54828ea75a8690c161a",
           "miles": 0,
           "price": 10.56,
           "name": "E-SIM United States - 2 GB - 15 Days",
           "description": "Airalo eSIM for United States. 2 GB data valid for 15 days.",
           "image": "https://arcube-application.s3.eu-west-1.amazonaws.com/ancillaries/images/esim.webp",
           "price_partner": 8,
           "price_arcube": 8.8,
           "category": "ESIMS",
           "metadata": {
               "provider": "airalo",
               "package_id": "change-15days-2gb",
               "package_details": {
                   "title": "2 GB - 15 Days",
                   "data": "2 GB",
                   "days": 15,
                   "country": "United States",
                   "country_code": "US"
               },
               "source": "partner-esim",
               "processed_at": "2025-07-30T14:14:31.936Z",
               "pointsOfInterest": [
                   "JFK"
               ]
           }
       }
   ]
}
```



## Confirm Order
### Description:This is used in order to confirm an order. As a result of this, orders are placed in the relevant vendors and a transaction - vendor is placed in Arcube system.. 
!!! note "Request URL Parameter"
    Replace `${arcube-url}` with your assigned Arcube environment URL (e.g., `https://api.arcube.com`).

!!! note "HTTP Methos: POST"
    URL: `${arcube-url}/v1/order-api/confirmOrder`
    
!!! note "HTTP Response: "
    200 OK

####Sample Request Payload:
```json 
{
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
   },
   {
     "vendor": "mozio",
     "id": "e9b1d12f-8f1d-4f32-9c3e-8d928c1b3bb5",
     "price": {
       "amount": 140.00,
       "currency": "USD",
     "metadata" : {
         "result_id" : "e9b1d12f-8f1d-4f32-9c3e-8d928c1b3gg5",
         "airline": "AA",
         "flight_number": "123",
         "customer_special_instructions": "My doorbell is broken, please yell"
       }
     }
   }
 ]
}
```
####Note: The different metadata that is required for each product type, will be provided to the tenant separately. 

####Sample Response Payload:
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
]
"totalRefundAmount": {
  "amount": 35.00,
  "currency": "USD"
},
"errorDetails": ["Extra baggage is not available for booking at the moment."]
}

```

