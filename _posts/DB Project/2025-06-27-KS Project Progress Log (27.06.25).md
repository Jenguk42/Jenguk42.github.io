---
title: "KS Project Log 27/06/25"

categories:
- Database Project

toc: true
toc_sticky: true
---

## ✅ Completed Tasks

| Step | Task | Result |
|------|------------|-------|
| 1 | Implemented `get-member/<member_id>` API | Successfully returns member information with QR image path |
| 2 | Implemented `/verify-member/<qr_token>` API | Token-based member verification completed |
| 3 | Refactored QR code URL structure | Used `BASE_URL` env variable for local/production |
| 4 | Prepared for Heroku deployment | Added `Procfile`, `requirements.txt`, `gunicorn` |
| 5 | Deployed to Heroku | Working on `https://korean-membership-app-747dba733427.herokuapp.com` |
| 6 | Created AWS RDS MySQL instance | Enabled public access + security group rules |
| 7 | Connected with Workbench | Created `korean-membership-db` manually |
| 8 | Created `members` table | Confirmed schema structure |
| 9 | Set Heroku config vars | `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME` completed |
| 10 | Tested member registration API | Verified with Postman |
| 11 | Tested digital membership page | `/member-card/<qr_token>` works correctly |
| 12 | Tested actual QR scan | Mobile camera scan → correct page opened |

---

## ✨ Today's Highlights

- Started from `localhost` → ended up with Heroku deployment!
- Built a fully working MVP with cloud-connected QR codes  

---

## 🔜 Potential Next Features

| Feature | Description |
|------|------|
| Admin dashboard | View/search/delete members |
| QR security | Add token expiry or one-time use |
| Apple/Google Wallet | Generate `.pkpass` |
| S3 image storage | Move QR images to the cloud |
| Event registration page | Touch-based on-site registration |