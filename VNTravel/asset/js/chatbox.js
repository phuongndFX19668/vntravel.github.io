// Lấy tham chiếu đến các phần tử HTML
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");
const messages = document.getElementById("messages");

// Đăng ký sự kiện submit cho form
chatForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Lấy nội dung tin nhắn từ input
  const message = chatInput.value;

  // Tạo một thẻ div mới để hiển thị tin nhắn
  const messageElement = document.createElement("div");
  messageElement.innerText = message;

  // Thêm tin nhắn vào danh sách tin nhắn
  messages.appendChild(messageElement);

  // Xóa nội dung trong input
  chatInput.value = "";
});
