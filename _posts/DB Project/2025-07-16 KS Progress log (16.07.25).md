---
title: "KS Project Log 2025-07-16"
categories:
- Database Project

toc: true
toc_sticky: true
---

## ✅ Enhancements to Existing Member Payment Registration

### Duplicate Prevention
- Improved `add_payment()` function to check for existing identical records (by member ID, payee name, payment date, and amount) before inserting.
- Modified return values to `True` (success) or `False` (duplicate), enabling clear feedback.
- Added UI-level validation using `flash()` messages for success and duplicate warnings.
- Used `{{% with get_flashed_messages(with_categories=true) %}}` in template to style flash messages with `success` and `error` colours.

### Flash Message Styling
- Created reusable CSS classes (`flash-success`, `flash-error`, `flash-default`) in `static/css/style.css`.
- All flash messages now show:
  - ✅ Green box for success (e.g. payment successfully added)
  - ❌ Red box for error (e.g. duplicate payment)
- Removed legacy `{{% if error %}}` handling to ensure only flash-based feedback is used.

### Member Card Validity Check
- `/member-card/<qr_token>` route now checks `expiry_date`:
  - If expired, shows `expired_card.html` instead of rendering member info.
  - `expired_card.html` shows member name and expiry date with a clear expiration message.
- If QR token is invalid, a 404 error is returned.
- Prevents lifetime vs. expired member confusion.

### Admin Member List Enhancement
- On the admin member list table, added a "View Card" button next to the "Edit" button.
- Button opens the member card (`/member-card/<qr_token>`) in a new tab.
- Only rendered if `qr_token` exists in the DB record to prevent broken links.

---

## 🔧 Bug Fixes & Behavioural Improvements

- Fixed bug where `add_payment()` returned `None` instead of `False` on duplicates — caused persistent false "success" messages.
- Refactored form logic to avoid double submission by disabling the submit button on form submission.
- Ensured redirect-after-POST pattern is consistently applied.

---

## 🔜 Next Steps

- [ ] Add edit and delete options to `/admin-payments` for managing payment history.
- [ ] Add member name to payment table via join if not already included.
- [ ] Consider implementing confirmation modals or alert banners for destructive actions (delete).
