export const registerFont = (url: string) => {
  const style = document.createElement("style");
  style.innerHTML = `
    @import url('${url}');
    `;
  document.head.appendChild(style);
};
