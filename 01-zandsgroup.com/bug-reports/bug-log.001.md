# 🐞 Bug Log – Homepage Cache
**Bug ID**: BUG-001  
**Date**: 2024-10-14

**Reported By**: Dalonda Ikhimokpa  
**Feature**: Homepage  
**Description**: Homepage changes not showing unless hard-refresh performed

---

### 🔍 Steps to Reproduce:

1. Make content edits in backend  
2. Reload page normally  
3. Changes not visible  
4. Perform hard refresh (Cmd + Shift + R) – changes show

---

**Expected Result**: Site should reflect latest updates automatically  
**Actual Result**: Edits cached and not visible to users  
**Suspected Cause**: Cloudflare cache not clearing  
**Status**: ✅ Fixed manually (cache purged)

