# 🐞 Bug Log – Form Plugin Conflict

**Bug ID**: BUG-002  
**Date**: 2024-11-20 
**Reported By**: Dalonda Ikhimokpa  
**Feature**: Contact Form  
**Description**: Form plugin failed to send emails intermittently

---

### 🔍 Steps to Reproduce:

1. Fill out Contact form  
2. Submit form  
3. Randomly fails to deliver to inbox

---

**Expected Result**: Email sent each time reliably  
**Actual Result**: Email not received in some cases  
**Cause**: SMTP plugin misconfiguration  
**Fix**: Re-authenticated SMTP via Gmail settings  
**Status**: ✅ Resolved