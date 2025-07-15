---
title: "KS Project Log 15/07/25"
categories:
- Database Project

toc: true
toc_sticky: true
---

## ✅ Admin Dashboard Expansion: Payment History View

### Flask Integration
- Added two new routes in `app.py`:
  - `/admin-payments`: Lists all payment records grouped by member.
  - `/admin-member-payments/<member_id>`: Displays payment history for a single member.
- Imported helper functions from `payment_model.py`:
  ```python
  from models.payment_model import get_all_payments_grouped, get_payments_by_member_id
  ```

### New Templates
- `admin_payments.html`: Displays payment list in a simple table layout with links to individual member payments.
- `admin_member_payments.html`: Displays detailed payment history per member.

### Backend Model Enhancements
- `payment_model.py` now includes:
  - `get_all_payments_grouped()`: Joins members and payments, sorted by payment date.
  - `get_payments_by_member_id(member_id)`: Returns all payments for a given member.

---

## Issues Identified

### Payment Amount Displaying as `None`
- All `amount` fields in the payment table are currently showing `None` in the HTML templates.
- This may indicate:
  - `amount` was not properly inserted during manual entry or CSV import.
  - The input value is being misparsed or dropped before reaching `add_payment()`.

### Duplicate Payment Entries on Submission
- Submitting the "Add Payment" form for existing members sometimes results in two identical entries.
- Probable causes:
  - The form POST is being triggered twice (e.g. through browser auto-submit or accidental double click).
  - `add_payment()` may be called more than once.
- Current mitigation:
  - Added `print()` debug statements to trace route behavior.
  - Ensured proper use of `redirect()` after POST to avoid resubmission on refresh.

---

## Next Steps

- [ ] Fix the `None` value issue for `amount` by confirming:
  - HTML form input types and `name` values
  - Server route correctly receives and passes the value to `add_payment()`
- [ ] Add SQL logging or debug output in `add_payment()` to verify values.
- [ ] Add a session-based resubmission lock to prevent double-submits.
- [ ] Re-import payment CSV with verified decimal values if necessary.
