import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import jsPDF from "jspdf";
import "jspdf-autotable";
import {
  User,
  Lock,
  LogOut,
  Clock,
  Calendar,
  DollarSign,
  FileText,
  Briefcase,
  Users,
  CheckCircle,
  Printer,
  Plus,
  FileSignature, // ✅ Đã dùng FileSignature
  Search,
  UserCheck,
  Shield,
  Settings,
  CreditCard,
  RefreshCw,
  List,
  ClipboardList,
} from "lucide-react";

// === IMPORT CSS ===
import "./styles.css";

// --- CONFIG MOCK (Demo Mode) ---
// URL giả lập để bypass validation, dữ liệu lưu trên RAM
const supabaseUrl = "https://qjuicdmbqfdcubjimdqp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqdWljZG1icWZkY3ViamltZHFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY2ODkyNTcsImV4cCI6MjA4MjI2NTI1N30.1t1Ike0BUkn8clg0DM6c31Dd7WpGBEfHmhHCn8l9_Gw";
const supabase = createClient(supabaseUrl, supabaseKey);

// --- TYPES & INTERFACES ---
interface UserProfile {
  id: string;
  username: string;
  full_name: string;
  role: string;
  department: string;
}

// --- MODULES CHI TIẾT THEO YÊU CẦU ---

// 1. DASHBOARD (Chung)
const DashboardModule = ({ user }: { user: UserProfile }) => (
  <div>
    <div className="dashboard-stats">
      <div className="stat-card bg-blue">
        <h4>Việc cần xử lý</h4>
        <div style={{ fontSize: "32px", fontWeight: "bold" }}>5</div>
      </div>
      <div className="stat-card bg-green">
        <h4>Công tháng này</h4>
        <div style={{ fontSize: "32px", fontWeight: "bold" }}>22.5</div>
      </div>
      <div className="stat-card bg-orange">
        <h4>Phép năm còn lại</h4>
        <div style={{ fontSize: "32px", fontWeight: "bold" }}>11</div>
      </div>
    </div>
    <div className="card">
      <h3>
        <Briefcase size={18} /> Bảng tin nội bộ
      </h3>
      <p>
        Chào mừng <strong>{user.full_name}</strong> quay trở lại làm việc.
      </p>
      <p style={{ marginTop: "10px", color: "#666" }}>
        - Thông báo: Hệ thống sẽ bảo trì vào 12:00 PM chủ nhật tuần này.
      </p>
    </div>
  </div>
);

// 2. CHẤM CÔNG (Có đồng hồ & Lịch sử)
const AttendanceModule = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      1000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="card">
      <h3>
        <Clock size={18} /> Chấm Công Điện Tử
      </h3>
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          borderBottom: "1px solid #eee",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            color: "#2c3e50",
            fontFamily: "monospace",
          }}
        >
          {time}
        </div>
        <div style={{ fontSize: "14px", color: "#7f8c8d" }}>
          {new Date().toLocaleDateString("vi-VN", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <button
            className="btn-action btn-success"
            style={{ padding: "10px 30px", fontSize: "16px" }}
          >
            Check-in (Vào ca)
          </button>
          <button
            className="btn-action btn-danger"
            style={{ padding: "10px 30px", fontSize: "16px" }}
          >
            Check-out (Ra ca)
          </button>
        </div>
      </div>
      <h4>Lịch sử chấm công</h4>
      <table className="data-table" style={{ marginTop: "10px" }}>
        <thead>
          <tr>
            <th>Ngày</th>
            <th>Vào ca</th>
            <th>Ra ca</th>
            <th>Tổng giờ</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hôm nay</td>
            <td>07:55:00</td>
            <td>--:--:--</td>
            <td>Running</td>
            <td>
              <span className="badge badge-active">Đúng giờ</span>
            </td>
          </tr>
          <tr>
            <td>Hôm qua</td>
            <td>08:10:00</td>
            <td>17:00:00</td>
            <td>7h50</td>
            <td>
              <span className="badge badge-pending">Đi muộn</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// 3. XIN PHÉP (Form)
const LeaveRequestModule = () => (
  <div className="card">
    <h3>
      <FileText size={18} /> Đơn Xin Nghỉ Phép
    </h3>
    <div className="form-row">
      <div className="form-field">
        <label>Loại nghỉ</label>
        <select>
          <option>Phép năm</option>
          <option>Nghỉ ốm</option>
          <option>Việc riêng</option>
        </select>
      </div>
      <div className="form-field">
        <label>Số ngày nghỉ</label>
        <input type="number" defaultValue={1} />
      </div>
    </div>
    <div className="form-row">
      <div className="form-field">
        <label>Từ ngày</label>
        <input type="date" />
      </div>
      <div className="form-field">
        <label>Đến ngày</label>
        <input type="date" />
      </div>
    </div>
    <div className="form-group">
      <label>Lý do nghỉ</label>
      <textarea rows={3} placeholder="Nhập lý do chi tiết..."></textarea>
    </div>
    <button
      className="btn-action btn-primary"
      onClick={() => alert("Đã gửi đơn!")}
    >
      Gửi Đơn
    </button>
  </div>
);

// 4. ĐỔI CA
const ShiftChangeModule = () => (
  <div className="card">
    <h3>
      <RefreshCw size={18} /> Đăng Ký Đổi Ca
    </h3>
    <div className="form-row">
      <div className="form-field">
        <label>Ngày cần đổi</label>
        <input type="date" />
      </div>
      <div className="form-field">
        <label>Ca hiện tại</label>
        <input
          type="text"
          value="Ca Sáng (8h-17h)"
          disabled
          style={{ background: "#f9f9f9" }}
        />
      </div>
    </div>
    <div className="form-row">
      <div className="form-field">
        <label>Muốn đổi sang</label>
        <select>
          <option>Ca Chiều (13h-22h)</option>
          <option>Ca Đêm</option>
        </select>
      </div>
      <div className="form-field">
        <label>Người đổi cùng</label>
        <select>
          <option>-- Chọn đồng nghiệp --</option>
          <option>Nguyễn Văn B (Bếp)</option>
        </select>
      </div>
    </div>
    <button
      className="btn-action btn-warning"
      onClick={() => alert("Đã gửi yêu cầu đổi ca!")}
    >
      Gửi Yêu Cầu
    </button>
  </div>
);

// 5. DUYỆT (Cho Trưởng BP)
const ApproveModule = ({ type }: { type: "leave" | "shift" }) => (
  <div className="card">
    <h3>
      <CheckCircle size={18} />{" "}
      {type === "leave" ? "Duyệt Đơn Xin Nghỉ" : "Duyệt Yêu Cầu Đổi Ca"}
    </h3>
    <table className="data-table">
      <thead>
        <tr>
          <th>Nhân viên</th>
          <th>{type === "leave" ? "Loại nghỉ" : "Đổi từ"}</th>
          <th>Chi tiết</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        {type === "leave" ? (
          <tr>
            <td>Nguyễn Văn A</td>
            <td>Phép năm</td>
            <td>25/12 - 26/12</td>
            <td>
              <button className="btn-action btn-success">Duyệt</button>{" "}
              <button className="btn-action btn-danger">Huỷ</button>
            </td>
          </tr>
        ) : (
          <tr>
            <td>Trần Thị B</td>
            <td>Ca Sáng</td>
            <td>Sang Ca Chiều ngày 28/12</td>
            <td>
              <button className="btn-action btn-success">Duyệt</button>{" "}
              <button className="btn-action btn-danger">Huỷ</button>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
);

// 6. TUYỂN DỤNG
const RecruitmentModule = ({ subview }: { subview: "plan" | "candidates" }) => (
  <div className="card">
    <h3>
      <Search size={18} />{" "}
      {subview === "plan" ? "Kế Hoạch Tuyển Dụng" : "Hồ Sơ Ứng Viên"}
    </h3>
    {subview === "plan" ? (
      <div>
        <div className="form-row">
          <div className="form-field">
            <label>Vị trí</label>
            <input type="text" placeholder="VD: Đầu bếp Á" />
          </div>
          <div className="form-field">
            <label>Số lượng</label>
            <input type="number" />
          </div>
          <div className="form-field">
            <label>Hạn tuyển</label>
            <input type="date" />
          </div>
        </div>
        <button className="btn-action btn-primary">Đăng Tin Tuyển Dụng</button>
        <table className="data-table" style={{ marginTop: "20px" }}>
          <thead>
            <tr>
              <th>Vị trí</th>
              <th>Số lượng</th>
              <th>Hạn</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Phục vụ bàn</td>
              <td>5</td>
              <td>31/12/2025</td>
              <td>
                <span className="badge badge-active">Đang tuyển</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ) : (
      <table className="data-table">
        <thead>
          <tr>
            <th>Ứng viên</th>
            <th>Vị trí</th>
            <th>Kinh nghiệm</th>
            <th>Trạng thái</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lê Văn X</td>
            <td>Bếp chính</td>
            <td>5 Năm</td>
            <td>
              <span className="badge badge-pending">Chờ PV</span>
            </td>
            <td>
              <button className="btn-action btn-primary">Chuyển PV</button>
            </td>
          </tr>
          <tr>
            <td>Phạm Thị Y</td>
            <td>Thu ngân</td>
            <td>1 Năm</td>
            <td>
              <span className="badge badge-active">Đã nhận CV</span>
            </td>
            <td>
              <button className="btn-action btn-warning">Xem CV</button>
            </td>
          </tr>
        </tbody>
      </table>
    )}
  </div>
);

// 7. PHỎNG VẤN
const InterviewModule = ({ subview }: { subview: "schedule" | "score" }) => (
  <div className="card">
    <h3>
      <UserCheck size={18} />{" "}
      {subview === "schedule" ? "Lịch Phỏng Vấn" : "Đánh Giá Ứng Viên"}
    </h3>
    {subview === "schedule" ? (
      <table className="data-table">
        <thead>
          <tr>
            <th>Ngày giờ</th>
            <th>Ứng viên</th>
            <th>Vị trí</th>
            <th>Người PV</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>26/12 09:00</td>
            <td>Lê Văn X</td>
            <td>Bếp chính</td>
            <td>Trần Bếp Trưởng</td>
          </tr>
        </tbody>
      </table>
    ) : (
      <div>
        <div className="form-group">
          <label>Chọn ứng viên</label>
          <select>
            <option>Lê Văn X (Bếp chính) - 09:00</option>
          </select>
        </div>
        <div className="form-row">
          <div className="form-field">
            <label>Điểm chuyên môn</label>
            <input type="number" />
          </div>
          <div className="form-field">
            <label>Điểm kỹ năng</label>
            <input type="number" />
          </div>
        </div>
        <div className="form-group">
          <label>Nhận xét</label>
          <textarea rows={3}></textarea>
        </div>
        <button className="btn-action btn-success">Lưu Kết Quả</button>
      </div>
    )}
  </div>
);

// 8. NHÂN SỰ & HỢP ĐỒNG (IN PDF)
const HRRecordsModule = ({ subview }: { subview: "list" | "contracts" }) => {
  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("DANH SACH HOP DONG LAO DONG", 10, 10);
    (doc as any).autoTable({
      head: [["Nhan Vien", "Loai HD", "Ngay Het Han", "Trang Thai"]],
      body: [
        ["Nguyen Van A", "Chinh thuc", "31/12/2026", "Hieu luc"],
        ["Tran Thi B", "Thu viec", "31/12/2025", "Sap het han"],
      ],
    });
    doc.save("BaoCao_HopDong.pdf");
  };

  return (
    <div className="card">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>
          <FileSignature size={18} />{" "}
          {subview === "list" ? "Hồ Sơ Nhân Viên" : "Quản Lý Hợp Đồng"}
        </h3>
        {subview === "contracts" && (
          <button className="btn-action btn-primary" onClick={exportPDF}>
            <Printer size={14} /> Xuất PDF
          </button>
        )}
      </div>
      <table className="data-table" style={{ marginTop: "15px" }}>
        <thead>
          {subview === "list" ? (
            <tr>
              <th>Mã NV</th>
              <th>Họ tên</th>
              <th>Phòng ban</th>
              <th>Thao tác</th>
            </tr>
          ) : (
            <tr>
              <th>Nhân viên</th>
              <th>Loại HĐ</th>
              <th>Ngày kết thúc</th>
              <th>Trạng thái</th>
            </tr>
          )}
        </thead>
        <tbody>
          {subview === "list" ? (
            <tr>
              <td>NV001</td>
              <td>Nguyễn Văn A</td>
              <td>Bếp</td>
              <td>
                <button className="btn-action btn-primary">Sửa</button>
              </td>
            </tr>
          ) : (
            <tr>
              <td>Nguyễn Văn A</td>
              <td>Chính thức</td>
              <td>01/01/2026</td>
              <td>
                <span className="badge badge-active">Hiệu lực</span>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

// 9. LƯƠNG & KẾ TOÁN
const PayrollModule = ({ role }: { role: "HR" | "Accountant" }) => (
  <div className="card">
    <h3>
      {role === "HR" ? (
        <>
          <DollarSign size={18} /> Tính Lương
        </>
      ) : (
        <>
          <CreditCard size={18} /> Chi Trả Lương
        </>
      )}
    </h3>
    <table className="data-table">
      <thead>
        <tr>
          <th>Nhân viên</th>
          <th>Lương CB</th>
          <th>Thực lĩnh</th>
          <th>Trạng thái</th>
          {role === "Accountant" && <th>Thao tác</th>}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Nguyễn Văn A</td>
          <td>8,000,000</td>
          <td>
            <b>8,660,000</b>
          </td>
          <td>
            <span className="badge badge-pending">Chờ thanh toán</span>
          </td>
          {role === "Accountant" && (
            <td>
              <button className="btn-action btn-success">Pay</button>
            </td>
          )}
        </tr>
      </tbody>
    </table>
  </div>
);

// 10. ADMIN NÂNG CẤP (QUẢN LÝ USER & CẤU HÌNH)
const AdminModule = () => {
  const [activeTab, setActiveTab] = useState("users");
  const [usersList, setUsersList] = useState([
    { id: 1, username: "nhanvien", role: "NhanVien", status: "Active" },
    { id: 2, username: "truongbp", role: "TruongBoPhan", status: "Active" },
    { id: 3, username: "qlns", role: "QuanLyNhanSu", status: "Active" },
    { id: 4, username: "user_cu", role: "NhanVien", status: "Locked" },
  ]);

  const toggleStatus = (id: number) => {
    const updated = usersList.map((u) =>
      u.id === id
        ? { ...u, status: u.status === "Active" ? "Locked" : "Active" }
        : u
    );
    setUsersList(updated);
  };

  return (
    <div className="card">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <h3>
          <Shield size={20} /> Quản Trị Hệ Thống
        </h3>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            className={`btn-action ${
              activeTab === "users" ? "btn-primary" : "btn-warning"
            }`}
            onClick={() => setActiveTab("users")}
          >
            <Users size={14} /> Users
          </button>
          <button
            className={`btn-action ${
              activeTab === "config" ? "btn-primary" : "btn-warning"
            }`}
            onClick={() => setActiveTab("config")}
          >
            <Settings size={14} /> Config
          </button>
        </div>
      </div>

      {activeTab === "users" ? (
        <table className="data-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Role</th>
              <th>Trạng thái</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {usersList.map((u) => (
              <tr key={u.id}>
                <td>{u.username}</td>
                <td>
                  <span
                    style={{
                      background: "#e3f2fd",
                      color: "#1565c0",
                      padding: "2px 5px",
                      borderRadius: "4px",
                      fontSize: "11px",
                    }}
                  >
                    {u.role}
                  </span>
                </td>
                <td>
                  <span
                    className={`badge ${
                      u.status === "Active" ? "badge-active" : "badge-danger"
                    }`}
                  >
                    {u.status}
                  </span>
                </td>
                <td>
                  <button
                    className={`btn-action ${
                      u.status === "Active" ? "btn-danger" : "btn-success"
                    }`}
                    onClick={() => toggleStatus(u.id)}
                  >
                    {u.status === "Active" ? "Khoá" : "Mở"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>
          <div className="form-row">
            <div className="form-field">
              <label>Phút đi trễ cho phép</label>
              <input type="number" defaultValue={15} />
            </div>
            <div className="form-field">
              <label>Mức phạt (VND)</label>
              <input type="number" defaultValue={50000} />
            </div>
          </div>
          <button
            className="btn-action btn-success"
            onClick={() => alert("Đã lưu cấu hình!")}
          >
            Lưu Thay Đổi
          </button>
        </div>
      )}
    </div>
  );
};

// --- LOGIN SCREEN ---
const LoginScreen = ({ onLogin }: { onLogin: (u: UserProfile) => void }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const users: UserProfile[] = [
      {
        id: "1",
        username: "nhanvien",
        full_name: "Nguyễn Văn A",
        role: "NhanVien",
        department: "Bếp",
      },
      {
        id: "2",
        username: "truongbp",
        full_name: "Trần Bếp Trưởng",
        role: "TruongBoPhan",
        department: "Bếp",
      },
      {
        id: "3",
        username: "tuyendung",
        full_name: "Lê Tuyển Dụng",
        role: "BoPhanTuyenDung",
        department: "Nhân Sự",
      },
      {
        id: "4",
        username: "phongvan",
        full_name: "Phạm Phỏng Vấn",
        role: "BoPhanPhongVan",
        department: "Nhân Sự",
      },
      {
        id: "5",
        username: "qlns",
        full_name: "Hoàng HR Manager",
        role: "QuanLyNhanSu",
        department: "Nhân Sự",
      },
      {
        id: "6",
        username: "ketoan",
        full_name: "Vũ Kế Toán",
        role: "KeToan",
        department: "Tài Chính",
      },
      {
        id: "7",
        username: "admin",
        full_name: "System Admin",
        role: "Admin",
        department: "IT",
      },
    ];
    const user = users.find(
      (u) => u.username === username && password === "123"
    );
    if (user) onLogin(user);
    else setError("Sai thông tin! (Pass: 123)");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>
          <Briefcase size={24} /> HR System
        </h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Tên đăng nhập</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Mật khẩu</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && (
            <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>
          )}
          <button type="submit" className="btn-login">
            Đăng Nhập
          </button>
        </form>
        <div className="demo-note">
          <strong>Tài khoản Demo (Pass: 123):</strong>
          <br />
          nhanvien, truongbp, tuyendung, phongvan, qlns, ketoan, admin
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP COMPONENT ---
export default function App() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [currentView, setCurrentView] = useState("dashboard");

  const getMenu = () => {
    if (!user) return [];
    const base = [
      { id: "dashboard", label: "Trang Chủ", icon: <Briefcase size={16} /> },
    ];

    switch (user.role) {
      case "NhanVien":
        return [
          ...base,
          { id: "chamcong", label: "Chấm Công", icon: <Clock size={16} /> },
          {
            id: "xinphep",
            label: "Xin Nghỉ Phép",
            icon: <FileText size={16} />,
          },
          { id: "doica", label: "Đổi Ca", icon: <RefreshCw size={16} /> },
          { id: "luong", label: "Phiếu Lương", icon: <DollarSign size={16} /> },
        ];
      case "TruongBoPhan":
        return [
          ...base,
          {
            id: "duyetnghi",
            label: "Duyệt Nghỉ",
            icon: <CheckCircle size={16} />,
          },
          {
            id: "duyetdoica",
            label: "Duyệt Đổi Ca",
            icon: <RefreshCw size={16} />,
          },
        ];
      case "BoPhanTuyenDung":
        return [
          ...base,
          {
            id: "kehoachtuyendung",
            label: "Kế Hoạch Tuyển",
            icon: <ClipboardList size={16} />,
          },
          { id: "hoso", label: "Hồ Sơ Ứng Viên", icon: <List size={16} /> },
        ];
      case "BoPhanPhongVan":
        return [
          ...base,
          {
            id: "lichpv",
            label: "Lịch Phỏng Vấn",
            icon: <Calendar size={16} />,
          },
          { id: "danhgia", label: "Đánh Giá", icon: <UserCheck size={16} /> },
        ];
      case "QuanLyNhanSu":
        return [
          ...base,
          {
            id: "hosonhansu",
            label: "Hồ Sơ Nhân Sự",
            icon: <Users size={16} />,
          },
          {
            id: "hopdong",
            label: "Hợp Đồng",
            icon: <FileSignature size={16} />,
          },
          {
            id: "tinhluong",
            label: "Tính Lương",
            icon: <DollarSign size={16} />,
          },
        ];
      case "KeToan":
        return [
          ...base,
          {
            id: "thanhtoan",
            label: "Thanh Toán Lương",
            icon: <CreditCard size={16} />,
          },
        ];
      case "Admin":
        return [
          ...base,
          {
            id: "quantri",
            label: "Quản Trị Hệ Thống",
            icon: <Shield size={16} />,
          },
        ];
      default:
        return base;
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case "chamcong":
        return <AttendanceModule />;
      case "xinphep":
        return <LeaveRequestModule />;
      case "doica":
        return <ShiftChangeModule />;
      case "duyetnghi":
        return <ApproveModule type="leave" />;
      case "duyetdoica":
        return <ApproveModule type="shift" />;
      case "kehoachtuyendung":
        return <RecruitmentModule subview="plan" />;
      case "hoso":
        return <RecruitmentModule subview="candidates" />;
      case "lichpv":
        return <InterviewModule subview="schedule" />;
      case "danhgia":
        return <InterviewModule subview="score" />;
      case "hosonhansu":
        return <HRRecordsModule subview="list" />;
      case "hopdong":
        return <HRRecordsModule subview="contracts" />;
      case "tinhluong":
        return <PayrollModule role="HR" />;
      case "thanhtoan":
        return <PayrollModule role="Accountant" />;
      case "luong":
        return (
          <div className="card">
            <h3>Phiếu Lương</h3>
            <p>Đang cập nhật...</p>
          </div>
        );
      case "quantri":
        return <AdminModule />;
      default:
        return <DashboardModule user={user!} />;
    }
  };

  if (!user) return <LoginScreen onLogin={setUser} />;

  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <Briefcase size={20} /> HR Manager
        </div>
        <nav className="sidebar-menu">
          {getMenu().map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              className={`menu-item ${currentView === item.id ? "active" : ""}`}
            >
              {item.icon} {item.label}
            </button>
          ))}
        </nav>
        <div className="sidebar-footer">
          <div className="user-info">
            <div className="avatar">
              {user.username.slice(0, 2).toUpperCase()}
            </div>
            <div className="user-details">
              <h4>{user.full_name}</h4>
              <span>{user.role}</span>
            </div>
          </div>
          <button className="btn-logout" onClick={() => setUser(null)}>
            <LogOut size={16} /> Thoát
          </button>
        </div>
      </aside>
      <main className="main-content">
        <header className="top-header">
          <h2 className="page-title">
            {getMenu().find((i) => i.id === currentView)?.label}
          </h2>
          <div style={{ fontSize: "14px", color: "#666" }}>
            <Calendar size={14} style={{ display: "inline" }} />{" "}
            {new Date().toLocaleDateString("vi-VN")}
          </div>
        </header>
        <div className="content-scroll">{renderContent()}</div>
      </main>
    </div>
  );
}
