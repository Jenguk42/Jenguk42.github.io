---
title: "KS Project Log 29/06/25"

categories:
- Database Project

toc: true
toc_sticky: true
---

## ✅ Admin Page & Login Feature Redesign
- Separated admin and member login routes:
  - `/admin-login` for admin accounts
  - `/member-login` for members
- Enhanced authentication with `member_id` + password
- Used `is_admin` session variable to protect admin-only routes
- Saved `qr_token` in the session for members so their QR page can be displayed directly

## ✅ members Table Changes
- Added password hashing and admin role columns:
  ```sql
  ALTER TABLE members ADD COLUMN password_hash VARCHAR(255);
  ALTER TABLE members ADD COLUMN is_admin BOOLEAN DEFAULT FALSE;
  ```
- Set up a dummy administrator:
  ```sql
  UPDATE members SET is_admin = 1 WHERE member_id = 'KA2025-351DA1';
  ```

## ✅ Code Changes
- Created a `utils.py` for:
  - generating `member_id`
  - generating `qr_token`
  - creating random passwords
  - generating QR codes
- Updated `register` and `admin_add_member` to use these utils
- Added `/delete-member/<member_id>` route with admin-only protection
- Added `/admin-add-member` route for admins to register members with random passwords

## ✅ Admin Dashboard Restructure
- Converted the dashboard to a **menu page**:
  - link to member list
  - link to member addition page
- Created:
  - `/admin-members` for listing members with delete buttons
  - `/admin-add-member-page` for adding new members
- Split HTML templates:
  - `admin_dashboard.html` for the menu
  - `admin_members.html` for listing/deleting
  - `admin_add_member.html` for adding new members with password confirmation

## ✅ Session Behavior Improvements
- Used session pop to show member creation password **only once** after adding
- Ensured leaving and returning to the page clears previous password messages

## ✅ Home Page Setup
- Added a `/` route as a homepage
  - redirects to admin dashboard if an admin is logged in
  - redirects to member QR page if a member is logged in
  - otherwise shows a welcome screen with login links

## ✅ Testing and Debugging
- Tested using Postman and browser forms
- Confirmed admin/member login works correctly
- Confirmed the QR code, session-based redirects, and admin-only deletion all function as expected

## ✅ Additional Notes
- Suggested future expansion: member detail view, member search/filter, password reset feature
- Planned next steps for improving styling with Bootstrap and more advanced error handling
