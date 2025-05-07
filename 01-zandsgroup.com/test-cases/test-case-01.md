# 🧪 Test Log – Z&S Group Website

**Test Case ID**: TC-001  
**Tester:** Dalonda Ikhimokpa  
**Date:** September 5, 2024  
**Site:** https://zandsgroup.com  
**Environment:** Chrome 124, MacOS Ventura  
**Test Type:** Functional, UI

---

## ✅ Test Cases

| # | Test Description                     | Expected Result                      | Actual Result                        | Status | Notes / Bug ID         |
|---|--------------------------------------|--------------------------------------|--------------------------------------|--------|------------------------|
| 1 | Homepage loads correctly             | Logo, nav, hero section visible      | All loaded as expected               | ✅ Pass |                        |
| 2 | Contact form validation              | Shows error on empty required fields | No validation on phone field         | ❌ Fail | Bug-001                |
| 3 | About Us page responsive on mobile   | Layout adjusts, readable text        | Layout broken on small screens       | ❌ Fail | Bug-002 (screenshot)   |
| 4 | Footer links open correct pages      | Opens Terms, Privacy, Contact pages  | All links worked                     | ✅ Pass |                        |
| 5 | Page speed on homepage               | Load < 3s, score > 80 (Lighthouse)   | 2.8s load time, score 85             | ✅ Pass |                        |

---

## 📸 Screenshots

Includes any important screenshots in `/screenshots/` folder  link:

- Bug-002: ![Mobile layout issue](./screenshots/mobile-broken.png)

---

## 🔗 Related Files

- [Test Case Document] (./test-cases/homepage-test.md)
- [Bug Report - Bug-001](../bug-reports/bug-log.001.md)
