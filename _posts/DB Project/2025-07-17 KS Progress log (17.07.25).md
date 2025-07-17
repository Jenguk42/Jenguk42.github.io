---
title: "KS Project Log 2025-07-17"
categories:
- Database Project

toc: true
toc_sticky: true
---

## ✅ Member & Admin Login and Page Structure Refactoring

### Separated Base Templates by Role
- Created three minimal base templates:
  - `public_base.html` for home and public pages
  - `member_base.html` for authenticated members
  - `admin_base.html` for authenticated admins
- All templates now load `style.css` and `flash_auto_hide.js` for consistent UI and flash message handling.

### Home Page Refactor
- `home.html` now extends `public_base.html`.
- Flash messages are shown using reusable CSS classes and auto-hide via JavaScript.
- Layout stripped of unnecessary navigation.

### Flash Message Behaviour
- Flash messages now disappear after 3 seconds using `flash_auto_hide.js`.
- Applied globally across member, admin, and public pages.

---

## 🔐 Login Flow Improvements

### Session Enhancements
- `login_user()` now stores `member_name_kr` in session for greeting and personalisation.
- Both member and admin logins now preserve `qr_token`, `member_id`, and `member_name_kr`.

### Member Login
- Admins can now also log in via `/member-login` to access the member dashboard.
- Redirects to `member_dashboard` regardless of `is_admin` value.

### Admin Login
- Only allows admins via `/admin-login`.
- Redirects to `admin_dashboard` after setting `admin_logged_in` in session.

### Logout Improvements
- Unified `/logout` route clears session and redirects to `/`.
- Flash message “성공적으로 로그아웃되었습니다.” shown on home page.
- Replaced old `/admin-logout` with redirect to `/logout`.

---

## 🧭 Dashboard Access & Navigation Updates

### Admin Template Enhancements
- `admin_base.html` now includes a link to:
  - `회원 대시보드` via `member_dashboard`
  - `회원증 보기` using `session['qr_token']` passed to `url_for('member_card', qr_token=...)`, safely guarded with `{% if session.get('qr_token') %}`.
  - `target="_blank"` applied to open member card in a new tab.

### Member Dashboard
- Displays personalised greeting using `{{ session.get('member_name_kr') }}님, 환영합니다!`
- “회원증 보기” button opens member card in a new tab using `target="_blank"` and `rel="noopener"`.

---

## 🧼 General Clean-Up

- Removed unnecessary `<html>`, `<head>`, and inline `<script>` from `home.html`, `member/login.html`, `admin/login.html` in favour of minimal base templates.
- Ensured all login templates no longer extend `admin_base` or `member_base` to avoid showing links (e.g. 로그아웃, 대시보드) before login.

---

## 🔜 Next Steps

- [ ] Add “결제 내역 보기” and “회원정보 수정” to `member_dashboard`.
- [ ] Add `admin_base.html` → “회원 대시보드” section with extra permissions.
- [ ] Consider access control decorators: `@admin_required`, `@member_required`.

