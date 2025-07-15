---
title: "KS Project Log 13/07/25"
categories:
- Database Project

toc: true
toc_sticky: true
---

## ✅ Data Cleaning & Import Process (Members + Payments)

### 🔄 CSV Encoding Conversion
- `members.csv` and `payments.csv` were originally saved in UTF-8, but MySQL Workbench tried to interpret them using CP949/ANSI by default, causing decoding errors.
- Converted both files to `utf-8-sig` (UTF-8 with BOM) format to ensure compatibility:
  - `members_final_hashed_pw.csv` → `members_final_hashed_pw_bom.csv`
  - `payments.csv` → `payments_bom.csv`

### ✅ MySQL Table Structure Updates
- Revised and expanded the `members` table structure:
  ```sql
  CREATE TABLE members (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      member_id VARCHAR(20) UNIQUE,
      member_name_kr VARCHAR(100),
      member_name VARCHAR(100),
      member_type VARCHAR(50),
      household_name_kr VARCHAR(100),
      household_name VARCHAR(100),
      phone VARCHAR(20),
      email VARCHAR(255),
      qr_token VARCHAR(100) UNIQUE,
      s3_url VARCHAR(255),
      expiry_date DATE,
      is_admin TINYINT(1) DEFAULT 0,
      password_hash VARCHAR(255),
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );
  ```

- Created the `payments` table:
  ```sql
  CREATE TABLE payments (
      payment_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      member_id VARCHAR(20),
      payee_name VARCHAR(100),
      payment_date DATE,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      FOREIGN KEY (member_id) REFERENCES members(member_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
  );
  ```

### ✅ Trigger Setup
- Added a trigger to automatically update `members.expiry_date` when a new payment is inserted:
  ```sql
  CREATE TRIGGER update_expiry_after_payment
  AFTER INSERT ON payments
  FOR EACH ROW
  BEGIN
    UPDATE members
    SET expiry_date = GREATEST(
                        expiry_date, 
                        DATE_ADD(NEW.payment_date, INTERVAL 1 YEAR)
                     )
    WHERE member_id = NEW.member_id
      AND (member_type IS NULL OR LOWER(member_type) != 'lifetime');
  END;
  ```

### ✅ Data Import
- MySQL Workbench Import Wizard failed due to encoding issues.
- Used command line to import CSV directly via `LOAD DATA LOCAL INFILE`:
  ```sql
  LOAD DATA LOCAL INFILE 'C:/.../members.csv'
  INTO TABLE members
  FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\r\n' IGNORE 1 ROWS;

  LOAD DATA LOCAL INFILE 'C:/.../payments.csv'
  INTO TABLE payments
  FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\r\n' IGNORE 1 ROWS;
  ```

- When foreign key constraint errors occurred, identified missing `member_id` values with:
  ```sql
  SELECT p.member_id
  FROM payments p
  LEFT JOIN members m ON p.member_id = m.member_id
  WHERE m.member_id IS NULL;
  ```

---

## 📌 Summary
- Resolved CSV encoding issues by converting to UTF-8 with BOM
- Implemented trigger for automated expiry date updates
- Successfully inserted data using CLI and `LOAD DATA LOCAL INFILE`
- Completed RDS import and structure update
