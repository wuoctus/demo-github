// Đợi cho đến khi toàn bộ nội dung HTML được tải xong
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Lắng nghe sự kiện click trên nút
    themeToggleBtn.addEventListener('click', () => {
        // Thêm hoặc xóa class 'dark-mode' ở thẻ body
        body.classList.toggle('dark-mode');

        // Thay đổi chữ trên nút cho phù hợp với trạng thái hiện tại
        if (body.classList.contains('dark-mode')) {
            themeToggleBtn.textContent = 'Đổi giao diện (Light Mode)';
        } else {
            themeToggleBtn.textContent = 'Đổi giao diện (Dark Mode)';
        }
    });
});