document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("dark-mode-toggle");

  if (!toggleButton) {
    console.error("❌ 다크 모드 버튼을 찾을 수 없습니다!");
    return;
  }

  // 저장된 테마 불러오기
  const currentTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-bs-theme", currentTheme);

  toggleButton.addEventListener("click", function () {
    let theme = document.documentElement.getAttribute("data-bs-theme");

    if (theme === "dark") {
      document.documentElement.setAttribute("data-bs-theme", "light");
      localStorage.setItem("theme", "light");
      console.log("라이트 테마로 변경");
    } else {
      document.documentElement.setAttribute("data-bs-theme", "dark");
      localStorage.setItem("theme", "dark");
      console.log("다크 테마로 변경");
    }
  });
});
