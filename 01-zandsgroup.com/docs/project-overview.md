# 🧪 Manual QA Test Project – Zandsgroup.com  
**Project Duration**: September 2024 – December 2024  
**Tester**: Dalonda Ikhimokpa  
**Website**: [zandsgroup.com](https://zandsgroup.com)

---

![Zandsgroup Logo](/01-zandsgroup.com/assets/zs_logo.png)


## 1. Introduction

This test plan outlines the testing strategy and activities for zandsgroup.com, a business website managed via WordPress. The objective is to ensure functionality, performance, and usability across devices and browsers.

---

## 2. Objectives & Tasks

| Objective                              | Tasks                                                   |
|----------------------------------------|----------------------------------------------------------|
| Ensure core site functionality         | Form submission, navigation, responsiveness              |
| Improve reliability                    | Track and fix reported bugs                              |
| Maintain performance                   | Conduct speed and caching tests                          |
| Ensure cross-browser compatibility     | Manual testing on Chrome, Safari, Firefox                |
| Ensure mobile usability                | Test responsiveness on various devices                   |

---

## 3. Scope

**In Scope**:
- Pages: Home, About, Services, Contact
- Devices: Mobile, Tablet, Desktop
- Browsers: Chrome, Safari, Firefox
- Functional testing, UI testing, basic regression

**Out of Scope**:
- Backend server-level access (handled by hosting provider)
- Full accessibility audit (planned for future)

---

## 4. Test Strategy

- **Manual Testing** using real devices and dev tools
- **Exploratory Testing** for new page changes
- **Regression Testing** after updates
- **Bug Logging** using GitHub issues & bug-log.md

---

## 5. Test Deliverables

- `test-cases/` (2 cases)
- `test-logs/` (2 sessions)
- `bug-reports/` (2 logs)
- `reports/` (2 summary reports)
- `screenshots/` (when applicable)
- `README.md` and this `test-plan.md`

---

## 6. Entry & Exit Criteria

**Entry Criteria**:
- Live version of site accessible
- Admin dashboard access granted
- Email plugin & analytics enabled

**Exit Criteria**:
- All critical issues resolved
- Test reports documented
- Final regression test complete

---

## 7. Environment

| Element          | Description                      |
|------------------|----------------------------------|
| Platform         | WordPress + Elementor            |
| Hosting          | Namecheap                        |
| CDN & Security   | Cloudflare                       |
| Devices Tested   | MacBook Pro, iPhone, Android     |
| Tools            | DevTools, BrowserStack, GitHub   |

---

## 8. Schedule

| Phase             | Dates                |
|-------------------|----------------------|
| Planning          | Sep 1–5, 2024        |
| Test Execution 1  | Sep 6–30, 2024       |
| Mid Fixes         | Oct 2024             |
| Regression Test   | Nov 2024             |
| Final Report      | Dec 2024             |

---

## 9. Risks

- Plugin updates breaking layout
- Caching masking visual issues
- External hosting downtime

---

## 10. Approval

**Prepared by**: Dalonda Ikhimokpa  
**Date**: September 2024
