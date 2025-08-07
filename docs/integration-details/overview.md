# Integration Details – Overview

In this section, we provide the specific technical details required for integrating Arcube’s ancillary services platform using any of the four available methods:  
**Widget Integration**, **Email Integration**, **White‑Label Website Integration**, and **API Integration**.

These details are intended to guide developers and technical teams through the integration process and ensure the correct setup for each method.

---

## Actors

The following actors are involved in various integration methods of the system, either as **human participants** or as **systems**:

### **Arcube**
The owner and provider of the product described in this documentation.

### **Tenant**
Refers to the airline or Travel Management Company (TMC) that has a contract with Arcube to sell ancillaries through the platform.

### **Vendor**
The provider responsible for fulfilling an ancillary product. A Vendor is a partner of Arcube, with whom Arcube has a contractual agreement to offer ancillaries.

### **Customer**
The end user who purchases ancillary products from the Tenant.

### **IBE (Internet Booking Engine)**
The system through which the Customer interacts to browse and purchase ancillaries.

### **Back‑End**
The Tenant’s back‑end system that exchanges requests with Arcube to process ancillary transactions.

### **White Label**
A platform owned by Arcube and customized to reflect the Tenant’s branding. It serves as a point of sale where customers can purchase third‑party ancillary products.

### **MailServer**
The email server used to send marketing emails, either on behalf of Arcube or the Tenant.

### **Token**
A **bearer token** needed for the Tenant to authenticate and communicate securely with Arcube’s systems.

