---
title: "KS Project Log 28/06/25"

categories:
- Database Project

toc: true
toc_sticky: true
---

## ✅ Admin Page & Login Feature Planning
- Designed an admin page (admin dashboard)
- Switched to authentication using `member_id` + password
- Added `is_admin` column to the `members` table to distinguish administrator accounts
- Removed the separate `admin_users` table using:
  ```sql
  DROP TABLE IF EXISTS admin_users;
  ```

## ✅ members Table Changes
- Added columns:
  ```sql
  ALTER TABLE members ADD COLUMN password_hash VARCHAR(255);
  ALTER TABLE members ADD COLUMN is_admin BOOLEAN DEFAULT FALSE;
  ```
- Set a dummy account as admin:
  ```sql
  UPDATE members SET is_admin = 1 WHERE member_id = 'KA2025-351DA1';
  ```

## ✅ Code Changes
- Removed the unused `get_admin_user` import
- Integrated login based on `member_id` and password
- Updated `add_member` to accept `password_hash` as a parameter
- Automatically generated random passwords using `generate_password_hash` and stored them in the DB
- Stored `member_id` and `is_admin` in session
- Checked `session['is_admin']` to protect admin dashboard routes

## ✅ Folder / Deployment Issues
- `static/qrcodes/` directory was missing on Heroku, causing FileNotFoundError
  - Solution: added `os.makedirs("static/qrcodes", exist_ok=True)` in the code
  - or added a `.keep` file to track the folder in git
- TemplateNotFound for login.html:
  - caused by incorrect filename (case-sensitive)
  - fixed by renaming to lowercase `login.html`
- Added admin_dashboard.html template

## ✅ Testing and Debugging
- Used Postman to test /register and /login
- Followed Heroku logs to trace 400 and 500 errors
  - 400: missing form `name` attribute
  - 500: missing `admin_login` endpoint → corrected to `url_for('login')`
- Finally, verified login → admin_dashboard redirect worked successfully

## ✅ Additional Requests
- Provided a basic admin_dashboard.html sample
- Suggested future expansion: member list, password reset, account deletion features