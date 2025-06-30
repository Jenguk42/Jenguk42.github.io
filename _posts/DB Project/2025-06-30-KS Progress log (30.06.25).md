---
title: "KS Project Log 30/06/25"

categories:
- Database Project

toc: true
toc_sticky: true
---

## ✅ QR Code Cloud Migration

- Replaced local `static/qrcodes` storage with Firebase Storage
  - Modified `generate_qr_code` in `utils.py` to upload directly to Firebase
  - Generates the QR code in memory, uploads it to Firebase, then returns a public URL
  - Stores this public URL in the `qr_url` column of the `members` table
- Updated the database:
  ```sql
  ALTER TABLE members CHANGE qr_path qr_url VARCHAR(200);
  ```
- Removed local QR image saving and ensured all code references now point to Firebase URLs

## ✅ Heroku Deployment Configuration

- Added the Firebase service account key as a base64-encoded environment variable:
  - `FIREBASE_KEY_BASE64`
  - `FIREBASE_STORAGE_BUCKET`
- Removed any references to the local JSON secrets file to avoid missing file errors on Heroku
- Updated the code to decode the base64 key dynamically at runtime
- Verified with:
  ```bash
  heroku config
  ```
  to confirm the environment variables are correctly set

## ✅ Admin and Member Registration Adjustments

- Adjusted `/register` and `/admin-add-member-page`:
  - Both endpoints now store the `qr_url` returned from Firebase
  - Removed dependency on local file paths
- Confirmed that Postman test registrations succeed with the new Firebase URLs

## ✅ Database Consistency

- Verified that existing data is compatible after changing the column from `qr_path` to `qr_url`
- Tested member cards to ensure they correctly display the Firebase-hosted QR code

## ✅ Testing and Verification

- Used Postman to verify registration endpoints
- Confirmed QR codes upload to Firebase and the links are valid
- Tested admin dashboard QR listing and deletion
- Confirmed Heroku deployment boots without missing secret file errors

## ✅ Additional Notes

- Future improvements: consider adding image caching or CDN delivery for QR codes
- Evaluate access controls for the Firebase Storage rules for stricter member-only access
- Plan to refactor member detail view and improve styling consistency in the next sprint
