// src/supabaseClient.ts
import { createClient } from "@supabase/supabase-js";

// Lấy thông tin từ biến môi trường (file .env)
const supabaseUrl = "qjuicdmbqfdcubjimdqp.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqdWljZG1icWZkY3ViamltZHFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY2ODkyNTcsImV4cCI6MjA4MjI2NTI1N30.1t1Ike0BUkn8clg0DM6c31Dd7WpGBEfHmhHCn8l9_Gw";

// Kiểm tra xem đã cấu hình chưa để tránh lỗi màn hình trắng
if (!supabaseUrl || !supabaseKey) {
  console.error("⚠️ Lỗi: Chưa cấu hình Supabase URL hoặc Key trong file .env");
}

// Khởi tạo client
export const supabase = createClient(supabaseUrl, supabaseKey);
