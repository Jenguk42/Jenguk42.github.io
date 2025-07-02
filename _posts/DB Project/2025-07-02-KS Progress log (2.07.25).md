---
title: "KS Project Log 2/07/25"

categories:
- Database Project

toc: true
toc_sticky: true
---

## ✅ QR Code S3 Integration

- Initially implemented to store QR codes in the local `static/qrcodes` folder
- Managed member card images with Flask + qrcode + static path
- Attempted Firebase Storage but ran into:
  - Complicated permission configuration in Python
  - Additional API key management burden with Firestore
  - Continuous permission errors during Flask integration tests
  → Decided to switch to **AWS S3** instead

## Preparation for AWS S3

- Created the bucket `ks-qr-storage`
  - Bucket owner enforced (ACLs disabled)
  - Block all public access → disabled
  - Bucket policy allows public-read for the `qrcodes` folder only
- Added environment variables in `.env`:
  ```
  AWS_ACCESS_KEY_ID=
  AWS_SECRET_ACCESS_KEY=
  AWS_BUCKET_NAME=ks-qr-storage
  AWS_REGION=us-east-1
  BASE_URL=https://korean-membership-app-747dba733427.herokuapp.com
  ```
- Installed `boto3` and `pillow` packages

---

## Code Changes

- `utils.py`
  - Removed static file saving
  - Generate QR → in-memory → upload to S3
  - Removed `public-read` ACL, relied on bucket policy
  - Directly store public URL in the database

- `member_model.py`
  - When deleting a member, also delete the QR object from S3
  - Removed previous `os.remove()`

- `member_card.html`
  - Changed to `<img src="{{ member.qr_path }}">`
  - Fixed issue with leading slash breaking absolute paths

---

## Challenges

- `qrcode.make()` returned PyPNGImage → `.save(format=)` failed
  - Solved after installing pillow
- `ACL public-read` → “ACL not supported” error
  - Bucket owner enforced mode prohibits ACL → fixed by removing ExtraArgs
- Used member_id instead of qr_token for member-card URL → 404 error
  - Fixed route to expect qr_token instead

---

## Final Result

- Successfully uploaded QR codes to S3
- Allowed public access via bucket policy
- Rendered directly on the member card page
- QR code scan → token-based member-card → member info displayed

---

## Improvement Ideas

- Use presigned URLs with expiry times
- Periodic QR token regeneration
- Display live QR preview in the admin page

---

👍 **As of 2025-07-02, Flask + S3-based digital membership card system fully implemented!**