---
title: "Korean Society Digital Membership Card Project Overview"

categories:
- Database Project

toc: true
toc_sticky: true
---

## ✨ Project Overview

This project aims to replace the Korean Society's current spreadsheet-based membership management system with a digital solution.  
Members will receive a QR-code-based digital membership card that can be added to Apple Wallet and Google Wallet.  
The system will be officially launched at the Flea Market on August 24, 2025, with live issuance on-site.

---

## ✅ Tech Stack

- Python + Flask
- MySQL
- QR code generation: `qrcode`
- Hosting (planned): Render or Heroku
- Apple Wallet (`.pkpass`) & Google Wallet (JSON template)

---

## 🗂️ Project Structure (Planned)

```
korean-pass/
├── app.py
├── db_config.py
├── static/qrcodes/
├── requirements.txt
├── README.md
└── progress_log.md
```

---

## 🔨 Progress Log

### 📅 2025-06-26 – Project Initiation

- GitHub repository created
- Proposal document written and shared
- MySQL selected as database
- Decided to use Flask (first time using it!)

---

## 📌 Master To-Do List

- [ ] Create MySQL member table
- [ ] Set up Flask project and run basic server
- [ ] Implement `/register` API
- [ ] Generate and save QR code images
- [ ] Save member info into MySQL database
- [ ] Implement `/get-member/<id>` API
- [ ] Test Apple Wallet and Google Wallet integration
- [ ] Test end-to-end flow before 24/08 event

---

## 🗓️ Weekly Checklist

### Week 1 (27/06–30/06)
- [ ] Organise existing member data
- [ ] Design member ID format
- [ ] Plan database schema and endpoints

### Week 2–3 (01/07–14/07)
- [ ] Implement Flask server structure
- [ ] Create MySQL DB and connect to Flask
- [ ] Build `/register` and `/get-member` API
- [ ] Generate QR code per member

### Week 4 (15/07–21/07)
- [ ] Start Apple Wallet (.pkpass) implementation
- [ ] Prepare Google Wallet card JSON structure
- [ ] Begin basic UI if needed (HTML or mobile preview)

### Week 5 (22/07–28/07)
- [ ] Create info materials for event day
- [ ] Prepare for on-site registration flow
- [ ] Conduct basic live test with test data

### Week 6 (29/07–04/08)
- [ ] Finalise Wallet functionality
- [ ] Add fallback QR card for non-Wallet users
- [ ] Internal dry-run (simulate real registration)

### Week 7–8 (05/08–18/08)
- [ ] Polish UI (optional)
- [ ] Update member data if needed
- [ ] Prepare volunteers (if any)

### Event Week (19/08–24/08)
- [ ] Final checklist
- [ ] On-site testing
- [ ] Launch!

---

## 💬 Notes

> This is a solo side project, to be developed gradually alongside other commitments.  
> The focus is on delivering a working MVP, not perfection from the start!