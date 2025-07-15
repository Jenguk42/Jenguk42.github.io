---
title: "KS Project Log 13/07/25"
categories:
- Database Project

toc: true
toc_sticky: true
---

## ✅ Data Cleaning & Import Process (Members + Payments)

### 🔄 CSV 인코딩 변환
- `members.csv`와 `payments.csv`가 UTF-8 인코딩으로 저장되어 있었으나, MySQL Workbench는 기본적으로 CP949/ANSI로 해석하려고 하여 오류 발생
- `utf-8-sig` (UTF-8 with BOM) 형식으로 변환하여 문제 해결:
  - `members_final_hashed_pw.csv` → `members_final_hashed_pw_bom.csv`
  - `payments.csv` → `payments_bom.csv`

### ✅ MySQL 테이블 구조 변경
- `members` 테이블 구조 정리 및 확장:
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

- `payments` 테이블 생성:
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

### ✅ 트리거 생성
- 새 결제가 들어올 때 `members.expiry_date` 자동 갱신되도록 트리거 설정:
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

### ✅ 데이터 삽입
- MySQL Workbench의 Import Wizard는 인코딩 문제로 실패
- 대신 명령줄에서 `LOAD DATA LOCAL INFILE`을 사용하여 CSV 직접 import:
  ```sql
  LOAD DATA LOCAL INFILE 'C:/.../members.csv'
  INTO TABLE members
  FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\r\n' IGNORE 1 ROWS;

  LOAD DATA LOCAL INFILE 'C:/.../payments.csv'
  INTO TABLE payments
  FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\r\n' IGNORE 1 ROWS;
  ```

- 외래 키 오류 발생 시, 누락된 `member_id` 확인:
  ```sql
  SELECT p.member_id
  FROM payments p
  LEFT JOIN members m ON p.member_id = m.member_id
  WHERE m.member_id IS NULL;
  ```

---

## 📌 Summary
- CSV 인코딩 문제 해결 및 UTF-8 with BOM 저장
- 트리거로 `expiry_date` 자동 관리 설정
- CLI에서 `LOAD DATA LOCAL INFILE`로 데이터 삽입 성공
- RDS 접속 후 문제 없이 적용 완료
