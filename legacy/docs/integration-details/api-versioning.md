## 6. API Versioning and Change Management

Arcube follows a simple, predictable API versioning strategy to ensure
that all integrated tenants can continue operating without disruption
while still benefiting from improvements and new features.

### Versioning Approach

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

### Backward Compatibility

-   We strive to maintain backward compatibility within the same major
    > version.

-   Tenants do not need to update their integration for minor updates
    > unless they wish to use new features.

### Deprecation Policy

-   When a new major version is released, the previous major version
    > will be **supported for a minimum of 6 months** before
    > deprecation.

-   We will provide advance notice to all tenants before deprecating any
    > version.

### Communication of Changes

-   Tenants will be notified of upcoming changes via **email** and
    > through our **developer documentation**.

-   Each release will include a concise **changelog** highlighting new
    > features, improvements, and any actions required by the tenants.

### Testing and Sandbox

-   A **sandbox environment** will be available for tenants to test
    > against new versions before production deployment.

-   Sandbox access will mirror production functionality to ensure smooth
    > transition.

Contact Arcube to obtain sandbox credentials and the sandbox base URL.
