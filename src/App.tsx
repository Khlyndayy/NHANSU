import React, { useState, useEffect } from "react";
import {
  Briefcase,
  Clock,
  FileText,
  CheckCircle,
  Users,
  DollarSign,
  LogOut,
  LayoutDashboard,
  Shield,
  Search,
  UserCheck,
  RefreshCw,
  ClipboardList,
  FileSignature,
  Settings,
  PieChart,
  Printer,
  CreditCard,
  Calendar,
} from "lucide-react";
import "./styles.css";

// --- 1. MOCK DATA (DỮ LIỆU GIẢ LẬP) ---
const MOCK_USERS = [
  {
    id: 1,
    username: "nhanvien",
    password: "123",
    name: "Nguyễn Văn A",
    role: "NhanVien",
    roleName: "Nhân Viên",
  },
  {
    id: 2,
    username: "truongbp",
    password: "123",
    name: "Trần Bếp Trưởng",
    role: "TruongBoPhan",
    roleName: "Trưởng BP",
  },
  {
    id: 3,
    username: "tuyendung",
    password: "123",
    name: "Lê Tuyển Dụng",
    role: "BoPhanTuyenDung",
    roleName: "Tuyển Dụng",
  },
  {
    id: 4,
    username: "phongvan",
    password: "123",
    name: "Phạm Phỏng Vấn",
    role: "BoPhanPhongVan",
    roleName: "Phỏng Vấn",
  },
  {
    id: 5,
    username: "qlns",
    password: "123",
    name: "Hoàng HR",
    role: "QuanLyNhanSu",
    roleName: "QL Nhân Sự",
  },
  {
    id: 6,
    username: "ketoan",
    password: "123",
    name: "Vũ Kế Toán",
    role: "KeToan",
    roleName: "Kế Toán",
  },
  {
    id: 7,
    username: "admin",
    password: "123",
    name: "System Admin",
    role: "Admin",
    roleName: "Quản Trị",
  },
];

// --- 2. CÁC COMPONENT GIAO DIỆN THEO ACTOR ---

// >> COMPONENT CHUNG
const DashboardHome = ({ user }: { user: any }) => (
  <div>
    <div className="stats-grid">
      <div className="stat-box bg-blue">
        <h4>Công việc</h4>
        <h1>5</h1>
      </div>
      <div className="stat-box bg-green">
        <h4>Nhân sự</h4>
        <h1>42</h1>
      </div>
      <div className="stat-box bg-purple">
        <h4>Thông báo</h4>
        <h1>3</h1>
      </div>
    </div>
    <div className="card">
      <h3>
        <Briefcase size={18} /> Bảng tin nội bộ
      </h3>
      <p>
        Xin chào <strong>{user.name}</strong>. Chúc bạn một ngày làm việc hiệu
        quả!
      </p>
    </div>
  </div>
);

// === ACTOR 1: NHÂN VIÊN (5 Chức năng) ===
const ChamCong = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="card">
      <h3>
        <Clock size={18} /> Chấm Công Điện Tử
      </h3>
      <div style={{ textAlign: "center", padding: "30px" }}>
        <h1
          style={{ fontSize: "48px", color: "#2c3e50", marginBottom: "20px" }}
        >
          {time}
        </h1>
        <button
          className="btn-action btn-success"
          style={{ padding: "10px 30px", fontSize: "16px" }}
        >
          CHECK-IN
        </button>
        <button
          className="btn-action btn-danger"
          style={{ padding: "10px 30px", fontSize: "16px", marginLeft: "10px" }}
        >
          CHECK-OUT
        </button>
      </div>
    </div>
  );
};
const XinPhep = () => (
  <div className="card">
    <h3>
      <FileText size={18} /> Đơn Xin Nghỉ Phép
    </h3>
    <div className="form-group">
      <label>Loại nghỉ</label>
      <select>
        <option>Phép năm</option>
        <option>Nghỉ ốm</option>
      </select>
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
      <label>Lý do</label>
      <textarea rows={3}></textarea>
    </div>
    <button className="btn-action btn-primary">Gửi Đơn</button>
  </div>
);
const DoiCa = () => (
  <div className="card">
    <h3>
      <RefreshCw size={18} /> Đăng Ký Đổi Ca
    </h3>
    <div className="form-row">
      <div className="form-field">
        <label>Ngày đổi</label>
        <input type="date" />
      </div>
      <div className="form-field">
        <label>Ca hiện tại</label>
        <input type="text" value="Ca Sáng" disabled />
      </div>
    </div>
    <div className="form-row">
      <div className="form-field">
        <label>Đổi sang</label>
        <select>
          <option>Ca Chiều</option>
          <option>Ca Đêm</option>
        </select>
      </div>
      <div className="form-field">
        <label>Người đổi cùng</label>
        <select>
          <option>Nguyễn Văn B</option>
        </select>
      </div>
    </div>
    <button className="btn-action btn-primary">Gửi Yêu Cầu</button>
  </div>
);
const XemCaLam = () => (
  <div className="card">
    <h3>
      <Calendar size={18} /> Lịch Làm Việc Của Tôi
    </h3>
    <table className="data-table">
      <thead>
        <tr>
          <th>Thứ</th>
          <th>Ngày</th>
          <th>Ca làm việc</th>
          <th>Khu vực</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Thứ 2</td>
          <td>25/12</td>
          <td>Ca Sáng (08:00 - 17:00)</td>
          <td>Khu Bếp Á</td>
        </tr>
        <tr>
          <td>Thứ 3</td>
          <td>26/12</td>
          <td>Ca Sáng (08:00 - 17:00)</td>
          <td>Khu Bếp Á</td>
        </tr>
        <tr>
          <td>Thứ 4</td>
          <td>27/12</td>
          <td>Ca Chiều (13:00 - 22:00)</td>
          <td>Khu Bếp Á</td>
        </tr>
      </tbody>
    </table>
  </div>
);
const PhieuLuongCaNhan = ({ user }: { user: any }) => (
  <div className="card">
    <h3>
      <DollarSign size={18} /> Phiếu Lương Cá Nhân
    </h3>
    <div
      style={{
        padding: "20px",
        background: "#f9f9f9",
        border: "1px solid #ddd",
        borderRadius: "4px",
      }}
    >
      <div className="form-row">
        <span>Lương cơ bản:</span>
        <strong>8,000,000 đ</strong>
      </div>
      <div className="form-row">
        <span>Phụ cấp:</span>
        <strong>+ 1,500,000 đ</strong>
      </div>
      <div className="form-row" style={{ color: "red" }}>
        <span>Khấu trừ:</span>
        <strong>- 500,000 đ</strong>
      </div>
      <hr style={{ margin: "10px 0" }} />
      <div className="form-row" style={{ fontSize: "18px", color: "green" }}>
        <span>THỰC LĨNH:</span>
        <strong>9,000,000 đ</strong>
      </div>
    </div>
    <button className="btn-action btn-primary" style={{ marginTop: "15px" }}>
      <Printer size={14} /> Tải PDF
    </button>
  </div>
);

// === ACTOR 2: TRƯỞNG BỘ PHẬN ===
const DuyetDon = () => (
  <div className="card">
    <h3>
      <CheckCircle size={18} /> Duyệt Đơn Nghỉ Phép
    </h3>
    <table className="data-table">
      <thead>
        <tr>
          <th>Nhân viên</th>
          <th>Lý do</th>
          <th>Thời gian</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Nguyễn Văn A</td>
          <td>Việc riêng</td>
          <td>25/12 - 26/12</td>
          <td>
            <button className="btn-action btn-success">Duyệt</button>{" "}
            <button className="btn-action btn-danger">Huỷ</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
const DuyetDoiCa = () => (
  <div className="card">
    <h3>
      <RefreshCw size={18} /> Duyệt Đổi Ca
    </h3>
    <table className="data-table">
      <thead>
        <tr>
          <th>Nhân viên</th>
          <th>Đổi sang</th>
          <th>Người đổi cùng</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Trần Thị B</td>
          <td>Ca Chiều</td>
          <td>Nguyễn Văn A</td>
          <td>
            <button className="btn-action btn-success">Duyệt</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
const DuyetTuyenDung = () => (
  <div className="card">
    <h3>
      <ClipboardList size={18} /> Duyệt Yêu Cầu Tuyển Dụng
    </h3>
    <table className="data-table">
      <thead>
        <tr>
          <th>Bộ phận</th>
          <th>Vị trí</th>
          <th>Số lượng</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Bếp</td>
          <td>Phụ bếp</td>
          <td>2</td>
          <td>
            <button className="btn-action btn-success">Duyệt</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

// === ACTOR 3: TUYỂN DỤNG (4 Chức năng tách biệt) ===
const DangTinTuyenDung = () => (
  <div className="card">
    <h3>
      <ClipboardList size={18} /> Đăng Tin Tuyển Dụng
    </h3>
    <div className="form-row">
      <div className="form-field">
        <label>Tiêu đề</label>
        <input type="text" placeholder="VD: Tuyển gấp Bếp trưởng" />
      </div>
      <div className="form-field">
        <label>Vị trí</label>
        <input type="text" />
      </div>
    </div>
    <div className="form-group">
      <label>Mô tả</label>
      <textarea rows={3}></textarea>
    </div>
    <button className="btn-action btn-primary">Đăng Tin</button>
  </div>
);
const SangLocHoSo = () => (
  <div className="card">
    <h3>
      <Search size={18} /> Sàng Lọc Hồ Sơ (CV)
    </h3>
    <table className="data-table">
      <thead>
        <tr>
          <th>Ứng viên</th>
          <th>Vị trí</th>
          <th>Kinh nghiệm</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Lê Văn X</td>
          <td>Bếp chính</td>
          <td>5 năm</td>
          <td>
            <button className="btn-action btn-success">Duyệt</button>{" "}
            <button className="btn-action btn-danger">Loại</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
const LenLichPV = () => (
  <div className="card">
    <h3>
      <Calendar size={18} /> Lên Lịch Phỏng Vấn
    </h3>
    <table className="data-table">
      <thead>
        <tr>
          <th>Ứng viên</th>
          <th>Ngày giờ PV</th>
          <th>Người PV</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <strong>Lê Văn X</strong>
          </td>
          <td>
            <input
              type="datetime-local"
              style={{ padding: "5px", border: "1px solid #ddd" }}
            />
          </td>
          <td>
            <select style={{ padding: "5px" }}>
              <option>Trần Bếp Trưởng</option>
            </select>
          </td>
          <td>
            <button className="btn-action btn-primary">Lưu</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
const ChuyenHoSoSangPV = () => (
  <div className="card">
    <h3>
      <UserCheck size={18} /> Chuyển Hồ Sơ Sang Phỏng Vấn
    </h3>
    <table className="data-table">
      <thead>
        <tr>
          <th>Ứng viên</th>
          <th>Lịch đã chốt</th>
          <th>Trạng thái</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Lê Văn X</td>
          <td>26/12 09:00</td>
          <td>
            <span className="badge badge-pending">Chưa chuyển</span>
          </td>
          <td>
            <button className="btn-action btn-success">Chuyển Ngay</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

// === ACTOR 4: PHỎNG VẤN ===
const LichPhongVan = () => (
  <div className="card">
    <h3>
      <Clock size={18} /> Lịch Phỏng Vấn
    </h3>
    <table className="data-table">
      <thead>
        <tr>
          <th>Thời gian</th>
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
  </div>
);
const ChamDiem = () => (
  <div className="card">
    <h3>
      <UserCheck size={18} /> Đánh Giá & Chấm Điểm
    </h3>
    <div className="form-group">
      <label>Ứng viên</label>
      <select>
        <option>Lê Văn X</option>
      </select>
    </div>
    <div className="form-row">
      <div className="form-field">
        <label>Điểm CM</label>
        <input type="number" />
      </div>
      <div className="form-field">
        <label>Kết quả</label>
        <select>
          <option>Đạt</option>
          <option>Loại</option>
        </select>
      </div>
    </div>
    <button className="btn-action btn-success">Lưu Kết Quả</button>
  </div>
);

// === ACTOR 5: QUẢN LÝ NHÂN SỰ (HR) ===
const QuanLyHoSoNV = () => (
  <div className="card">
    <h3>
      <Users size={18} /> Quản Lý Hồ Sơ Nhân Viên
    </h3>
    <table className="data-table">
      <thead>
        <tr>
          <th>Mã NV</th>
          <th>Họ tên</th>
          <th>Phòng ban</th>
          <th>Trạng thái</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>NV01</td>
          <td>Nguyễn Văn A</td>
          <td>Bếp</td>
          <td>
            <span className="badge badge-active">Active</span>
          </td>
          <td>
            <button className="btn-action btn-primary">Sửa</button>
          </td>
        </tr>
        <tr>
          <td>NV02</td>
          <td>Trần Thị B</td>
          <td>Lễ tân</td>
          <td>
            <span className="badge badge-pending">Nghỉ phép</span>
          </td>
          <td>
            <button className="btn-action btn-primary">Sửa</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
const QuanLyHopDong = () => (
  <div className="card">
    <h3>
      <FileSignature size={18} /> Quản Lý Hợp Đồng
    </h3>
    <table className="data-table">
      <thead>
        <tr>
          <th>Nhân viên</th>
          <th>Loại HĐ</th>
          <th>Hết hạn</th>
          <th>Trạng thái</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Nguyễn Văn A</td>
          <td>Chính thức</td>
          <td>31/12/2026</td>
          <td>
            <span className="badge badge-active">Hiệu lực</span>
          </td>
        </tr>
        <tr>
          <td>Trần Thị B</td>
          <td>Thử việc</td>
          <td>01/01/2025</td>
          <td>
            <span className="badge badge-pending">Sắp hết</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
const TinhLuongHR = () => (
  <div className="card">
    <h3>
      <DollarSign size={18} /> Tính Lương & Chốt Công
    </h3>
    <div className="form-row">
      <div className="form-field">
        <label>Tháng</label>
        <select>
          <option>Tháng 12</option>
        </select>
      </div>
      <div className="form-field">
        <label>Năm</label>
        <input type="number" defaultValue={2025} />
      </div>
    </div>
    <button className="btn-action btn-primary" style={{ marginBottom: "15px" }}>
      Tính Toán
    </button>
    <table className="data-table">
      <thead>
        <tr>
          <th>Nhân viên</th>
          <th>Ngày công</th>
          <th>Lương CB</th>
          <th>Tổng lương</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Nguyễn Văn A</td>
          <td>26</td>
          <td>8,000,000</td>
          <td>
            <strong>9,000,000</strong>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
const BaoCaoNhanSu = () => (
  <div className="card">
    <h3>
      <Printer size={18} /> Báo Cáo Nhân Sự
    </h3>
    <div style={{ marginTop: "10px" }}>
      <button className="btn-action btn-primary">
        Báo cáo biến động nhân sự
      </button>
      <button className="btn-action btn-primary">
        Danh sách nhân viên sắp hết HĐ
      </button>
    </div>
  </div>
);

// === ACTOR 6: KẾ TOÁN ===
const BangLuongKeToan = () => (
  <div className="card">
    <h3>
      <CreditCard size={18} /> Thanh Toán Lương
    </h3>
    <table className="data-table">
      <thead>
        <tr>
          <th>Nhân viên</th>
          <th>Thực lĩnh</th>
          <th>Trạng thái</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Nguyễn Văn A</td>
          <td>9,000,000</td>
          <td>
            <span className="badge badge-pending">Chờ trả</span>
          </td>
          <td>
            <button className="btn-action btn-success">Pay</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
const BaoCaoChiPhi = () => (
  <div className="card">
    <h3>
      <PieChart size={18} /> Báo Cáo Chi Phí
    </h3>
    <div className="stats-grid">
      <div className="stat-box bg-purple">
        <h4>Quỹ lương tháng</h4>
        <h2>500 Triệu</h2>
      </div>
    </div>
  </div>
);

// === ACTOR 7: ADMIN ===
const QuanLyUser = () => (
  <div className="card">
    <h3>
      <Shield size={18} /> Quản Lý User
    </h3>
    <table className="data-table">
      <thead>
        <tr>
          <th>Username</th>
          <th>Role</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {MOCK_USERS.map((u) => (
          <tr key={u.id}>
            <td>{u.username}</td>
            <td>{u.roleName}</td>
            <td>Active</td>
            <td>
              <button className="btn-action btn-danger">Lock</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
const CauHinh = () => (
  <div className="card">
    <h3>
      <Settings size={18} /> Cấu Hình Hệ Thống
    </h3>
    <div className="form-group">
      <label>Phút đi trễ cho phép</label>
      <input type="number" defaultValue={15} />
    </div>
    <button className="btn-action btn-success">Lưu</button>
  </div>
);

// --- MAIN APP ---
export default function App() {
  const [user, setUser] = useState<any>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [view, setView] = useState("dashboard");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const found = MOCK_USERS.find(
      (u) => u.username === username && u.password === password
    );
    if (found) {
      setUser(found);
      setView("dashboard");
      setError("");
    } else {
      setError("Sai thông tin! (Pass: 123)");
    }
  };

  const getMenu = () => {
    if (!user) return [];
    const base = [
      {
        id: "dashboard",
        label: "Trang Chủ",
        icon: <LayoutDashboard size={16} />,
      },
    ];
    switch (user.role) {
      case "NhanVien":
        return [
          ...base,
          { id: "chamcong", label: "Chấm Công", icon: <Clock size={16} /> },
          { id: "xinphep", label: "Xin Nghỉ", icon: <FileText size={16} /> },
          { id: "doica", label: "Đổi Ca", icon: <RefreshCw size={16} /> },
          { id: "xemca", label: "Xem Ca Làm", icon: <Calendar size={16} /> },
          {
            id: "luong_cn",
            label: "Phiếu Lương",
            icon: <DollarSign size={16} />,
          },
        ];
      case "TruongBoPhan":
        return [
          ...base,
          {
            id: "duyet_nghi",
            label: "Duyệt Nghỉ",
            icon: <CheckCircle size={16} />,
          },
          {
            id: "duyet_ca",
            label: "Duyệt Đổi Ca",
            icon: <RefreshCw size={16} />,
          },
          {
            id: "duyet_td",
            label: "Duyệt Tuyển Dụng",
            icon: <ClipboardList size={16} />,
          },
        ];
      case "BoPhanTuyenDung":
        return [
          ...base,
          {
            id: "dangtin",
            label: "Đăng Tin",
            icon: <ClipboardList size={16} />,
          },
          { id: "sangloc", label: "Sàng Lọc HS", icon: <Search size={16} /> },
          { id: "lenlich", label: "Lên Lịch PV", icon: <Calendar size={16} /> },
          {
            id: "chuyen_hs",
            label: "Chuyển Hồ Sơ",
            icon: <UserCheck size={16} />,
          },
        ];
      case "BoPhanPhongVan":
        return [
          ...base,
          { id: "lich_pv", label: "Lịch PV", icon: <Clock size={16} /> },
          { id: "chamdiem", label: "Chấm Điểm", icon: <UserCheck size={16} /> },
        ];
      case "QuanLyNhanSu":
        return [
          ...base,
          { id: "hr_hoso", label: "Hồ Sơ NV", icon: <Users size={16} /> },
          {
            id: "hr_hopdong",
            label: "Hợp Đồng",
            icon: <FileSignature size={16} />,
          },
          {
            id: "hr_tinhluong",
            label: "Tính Lương",
            icon: <DollarSign size={16} />,
          },
          { id: "hr_baocao", label: "Báo Cáo", icon: <Printer size={16} /> },
        ];
      case "KeToan":
        return [
          ...base,
          {
            id: "kt_luong",
            label: "Thanh Toán",
            icon: <CreditCard size={16} />,
          },
          {
            id: "kt_chiphi",
            label: "BC Chi Phí",
            icon: <PieChart size={16} />,
          },
        ];
      case "Admin":
        return [
          ...base,
          { id: "ad_user", label: "QL User", icon: <Shield size={16} /> },
          { id: "ad_config", label: "Cấu Hình", icon: <Settings size={16} /> },
        ];
      default:
        return base;
    }
  };

  const renderContent = () => {
    switch (view) {
      // NV
      case "chamcong":
        return <ChamCong />;
      case "xinphep":
        return <XinPhep />;
      case "doica":
        return <DoiCa />;
      case "xemca":
        return <XemCaLam />;
      case "luong_cn":
        return <PhieuLuongCaNhan user={user} />;
      // TruongBP
      case "duyet_nghi":
        return <DuyetDon />;
      case "duyet_ca":
        return <DuyetDoiCa />;
      case "duyet_td":
        return <DuyetTuyenDung />;
      // TuyenDung
      case "dangtin":
        return <DangTinTuyenDung />;
      case "sangloc":
        return <SangLocHoSo />;
      case "lenlich":
        return <LenLichPV />;
      case "chuyen_hs":
        return <ChuyenHoSoSangPV />;
      // PhongVan
      case "lich_pv":
        return <LichPhongVan />;
      case "chamdiem":
        return <ChamDiem />;
      // HR
      case "hr_hoso":
        return <QuanLyHoSoNV />;
      case "hr_hopdong":
        return <QuanLyHopDong />;
      case "hr_tinhluong":
        return <TinhLuongHR />;
      case "hr_baocao":
        return <BaoCaoNhanSu />;
      // KeToan
      case "kt_luong":
        return <BangLuongKeToan />;
      case "kt_chiphi":
        return <BaoCaoChiPhi />;
      // Admin
      case "ad_user":
        return <QuanLyUser />;
      case "ad_config":
        return <CauHinh />;

      default:
        return <DashboardHome user={user} />;
    }
  };

  if (!user)
    return (
      <div className="login-container">
        <div className="login-box">
          <h2>HR System Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button type="submit" className="btn-login">
              Đăng Nhập
            </button>
          </form>
          <div
            style={{
              marginTop: "20px",
              background: "#f9f9f9",
              padding: "10px",
              fontSize: "11px",
            }}
          >
            <strong>Demo Accounts (Pass: 123):</strong>
            <br />
            nhanvien, truongbp, tuyendung, phongvan, qlns, ketoan, admin
          </div>
        </div>
      </div>
    );

  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <Briefcase size={20} /> HR Manager
        </div>
        <div className="sidebar-menu">
          {getMenu().map((item) => (
            <button
              key={item.id}
              className={`menu-item ${view === item.id ? "active" : ""}`}
              onClick={() => setView(item.id)}
            >
              {item.icon} {item.label}
            </button>
          ))}
        </div>
        <div className="sidebar-footer">
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                width: "30px",
                height: "30px",
                background: "#3498db",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {user.username.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <div style={{ fontSize: "13px", fontWeight: "bold" }}>
                {user.name}
              </div>
              <div style={{ fontSize: "11px", opacity: 0.8 }}>
                {user.roleName}
              </div>
            </div>
          </div>
          <button
            onClick={() => setUser(null)}
            style={{
              width: "100%",
              background: "#e74c3c",
              border: "none",
              padding: "8px",
              color: "white",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Đăng Xuất
          </button>
        </div>
      </aside>
      <main className="main-content">
        <header className="top-header">
          <h3>{getMenu().find((i) => i.id === view)?.label}</h3>
          <div>{new Date().toLocaleDateString("vi-VN")}</div>
        </header>
        <div className="content-body">{renderContent()}</div>
      </main>
    </div>
  );
}
