# Bug Report – Homepage Cache Issue

**Bug ID**: BUG-001  
**Date**: 2024-09-12  
**Reported By**: Dalonda Ikhimokpa  
**Environment**: Production – zandsgroup.com  
**Related Test Case**: TC-001

## Bug Summary
Updated images not reflecting on homepage despite clearing media library cache.

## Steps to Reproduce
1. Upload new homepage banner via WordPress
2. View homepage in incognito
3. Old banner still appears

## Expected Result
New image should display immediately after cache purge.

## Actual Result
Old image persisted until a hard refresh and manual Cloudflare purge.

## Severity
Medium

## Status
✅ Fixed (by purging Cloudflare and rechecking cache)
