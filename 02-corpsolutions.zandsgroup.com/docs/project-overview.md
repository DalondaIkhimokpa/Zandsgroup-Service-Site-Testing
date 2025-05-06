# 🧪Manual QA Test Project – Corpsolutions.zandsgroup.com  
**Project Duration**: September 2024 – December 2024  
**Tester**: Dalonda Ikhimokpa  
**Website**: [corpsolutions.zandsgroup.com](https://corpsolutions.zandsgroup.com)

---

![CorpSolutions Logo](../02-corpsolutions.zandsgroup.com/assets/corpsol.webp)

## 1. Introduction

This test plan defines the testing procedures for a rental/property management integration site. The goal is to validate API connections, booking systems, and plugin configurations.

---

## 2. Objectives & Task

| Objective                              | Tasks                                                         |
|----------------------------------------|----------------------------------------------------------------|
| Verify 3rd-party integrations          | Test Guesty, Airbnb, VRBO, and Turno connection points         |
| Ensure booking flows work              | Validate property calendars and sync                           |
| Maintain front-end integrity           | Test pages, responsiveness, and UI components                  |
| Manage security & performance          | Test caching, SSL, and CDN integration                         |

---

## 3. Scope

**In Scope**:
- Booking flow (calendar, sync, third-party apps)
- Guesty and Turno integration
- Admin and front-end view

**Out of Scope**:
- Payment processing (handled externally)
- In-depth backend configuration of partner tools

---

## 4. Test Strategy

- Manual testing of flows and endpoints
- API integration validation
- Browser-based UI validation
- Test data review

---

## 5. Test Deliverables

- `test-cases/` (2 functional test cases)
- `test-logs/` (2 QA logs)
- `bug-reports/` (2 tracked bugs)
- `reports/` (2 QA summaries)
- `screenshots/` of errors and successful runs
- `README.md` and this `test-plan.md`

---

## 6. Entry & Exit Criteria

**Entry Criteria**:
- Admin access to site and partner tools
- WordPress dashboard and plugin access
- Guesty, Airbnb, and Turno credentials set

**Exit Criteria**:
- Functional flows confirmed
- All critical bugs resolved
- Test documentation updated

---

## 7. Environment

| Element          | Description                                 |
|------------------|---------------------------------------------|
| Platform         | WordPress + Booking Plugins                 |
| APIs             | Guesty, Airbnb, VRBO, Turno                 |
| Hosting          | Namecheap                                   |
| Security         | Cloudflare SSL + DNS                        |
| Tools            | GitHub, DevTools, Manual Testing            |

---

## 8. Schedule

| Phase             | Dates               |
|-------------------|---------------------|
| Planning          | Sep 1–7, 2024       |
| Execution Phase 1 | Sep 8–30, 2024      |
| Integration Fixes | Oct 2024            |
| Regression        | Nov 2024            |
| Final QA          | Dec 2024            |

---

## 9. Risks

- Integration changes from external APIs
- Calendar sync delays or mismatches
- SSL and caching bugs affecting real-time updates

---

## 10. Approval

**Prepared by**: Dalonda Ikhimokpa  
**Date**: September 2024
