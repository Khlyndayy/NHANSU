# 🏢 Hệ Thống Quản Lý Nhân Sự (HR Management System)

> **Mô tả:** Phần mềm quản lý nhân sự toàn diện dành cho đơn vị Thương mại Dịch vụ. Hệ thống mô phỏng quy trình khép kín từ tuyển dụng, chấm công, tính lương đến quản lý hồ sơ và báo cáo.
>
> **Phiên bản:** Demo Mode (Mock Data) - Chạy ngay không cần cài đặt Database.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## 🌐 Demo Trực Tiếp

👉 **[Xem Demo tại đây](https://your-project-link.vercel.app)** *(Thay link Vercel của bạn vào đây)*

---

## 🚀 Tính Năng Chính (Theo Phân Quyền)

Hệ thống được thiết kế theo mô hình phân quyền chặt chẽ với **7 nhóm người dùng**. Mỗi vai trò có giao diện và chức năng riêng biệt:

### 1. 👨‍💼 Nhân Viên (NhanVien)
* **Chấm công điện tử:** Check-in/Check-out theo ca làm việc (có đồng hồ đếm giờ thực).
* **Xin phép:** Gửi đơn xin nghỉ phép, nghỉ ốm.
* **Đổi ca:** Đăng ký đổi ca làm việc với đồng nghiệp.
* **Xem lịch sử:** Theo dõi lịch sử chấm công cá nhân.

### 2. 📋 Trưởng Bộ Phận (TruongBoPhan)
* **Phê duyệt:** Duyệt hoặc từ chối đơn xin nghỉ phép của nhân viên.
* **Quản lý ca:** Duyệt yêu cầu đổi ca để đảm bảo nhân sự.

### 3. 📢 Tuyển Dụng (BoPhanTuyenDung)
* **Lập kế hoạch:** Đăng ký nhu cầu tuyển dụng nhân sự mới.
* **Sàng lọc:** Quản lý danh sách hồ sơ ứng viên (CV).

### 4. 🤝 Phỏng Vấn (BoPhanPhongVan)
* **Lịch phỏng vấn:** Xem danh sách lịch phỏng vấn sắp tới.
* **Đánh giá:** Chấm điểm ứng viên (Chuyên môn, Kỹ năng) và ghi chú kết quả.

### 5. 📂 Quản Lý Nhân Sự (QuanLyNhanSu - HR)
* **Hồ sơ nhân viên:** Quản lý thông tin và Hợp đồng lao động.
* **Báo cáo PDF:** Xuất danh sách hợp đồng và báo cáo nhân sự ra file PDF chuyên nghiệp (Sử dụng `jspdf`).

### 6. 💰 Kế Toán (KeToan)
* **Bảng lương:** Xem bảng tính lương chi tiết (Lương cứng, Phụ cấp, Thực lĩnh).
* **Thanh toán:** Thực hiện thao tác chi trả lương (Payment).

### 7. 🛡️ Admin Hệ Thống (Admin)
* **Quản lý User:** Xem danh sách tài khoản, Khoá/Mở quyền truy cập.
* **Cấu hình:** Thiết lập tham số hệ thống (Mức phạt đi muộn, Thời gian cho phép trễ).

---

## 🛠 Công Nghệ Sử Dụng

* **Frontend:** ReactJS, TypeScript.
* **Build Tool:** Vite (Tốc độ build cực nhanh).
* **Styling:** Custom CSS (Giao diện sạch, hiện đại).
* **PDF Export:** `jspdf`, `jspdf-autotable`.
* **Icons:** `lucide-react`.
* **Data:** Mock Data (Dữ liệu giả lập, lưu trên RAM, reset khi tải lại trang).

---

## 🔐 Tài Khoản Demo (Đăng nhập)

Mật khẩu chung cho tất cả tài khoản: **`123`**

| Vai trò | Username | Chức năng nổi bật để test |
| :--- | :--- | :--- |
| **Nhân viên** | `nhanvien` | Thử bấm nút Check-in, Gửi đơn nghỉ |
| **Trưởng BP** | `truongbp` | Vào duyệt đơn nhân viên vừa gửi |
| **Tuyển dụng** | `tuyendung`| Xem danh sách ứng viên |
| **Phỏng vấn** | `phongvan` | Chấm điểm ứng viên |
| **HR Manager**| `qlns` | **Bấm nút Xuất PDF để xem báo cáo** |
| **Kế toán** | `ketoan` | Bấm nút "Pay" để trả lương |
| **Admin** | `admin` | Thử nút "Khoá" tài khoản user |

---

## 📥 Hướng Dẫn Cài Đặt (Local)

Nếu bạn muốn chạy dự án trên máy cá nhân:

1.  **Clone dự án:**
    ```bash
    git clone [https://github.com/username-cua-ban/hr-management-system.git](https://github.com/username-cua-ban/hr-management-system.git)
    cd hr-management-system
    ```

2.  **Cài đặt thư viện:**
    ```bash
    npm install
    ```

3.  **Chạy ứng dụng:**
    ```bash
    npm run dev
    ```
    Truy cập: `http://localhost:5173`

---

## 📸 Hình Ảnh Giao Diện

*(Hãy chụp 1 vài tấm ảnh màn hình Dashboard và Báo cáo PDF rồi chèn vào đây)*

![Dashboard Screenshot](https://via.placeholder.com/800x400?text=Dashboard+Screenshot)

---

## 🤝 Đóng Góp

Dự án này được xây dựng với mục đích học tập và demo khả năng xây dựng ứng dụng React quy mô vừa. Mọi đóng góp đều được hoan nghênh!

1. Fork dự án.
2. Tạo branch tính năng mới.
3. Commit và Push.
4. Tạo Pull Request.


