// 平滑滚动导航
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// 动态设置 Read More 按钮链接
document.querySelectorAll('.read-more').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    const repoUrl = this.getAttribute('data-repo');
    if (repoUrl) {
      window.open(repoUrl, '_blank');
    }
  });
});

// 表单验证
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.querySelector('input[name="name"]').value.trim();
  const email = document.querySelector('input[name="email"]').value.trim();
  const message = document.querySelector('textarea[name="message"]').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  // 简单邮箱格式检查
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  alert('Form submitted successfully! (This is a demo, data is not sent.)');
  this.reset(); // 清空表单
});

// 动态更新页脚年份
const footer = document.querySelector('footer p');
if (footer) {
  const currentYear = new Date().getFullYear();
  footer.textContent = `© ${currentYear} Mia Zhang. All rights reserved.`;
}