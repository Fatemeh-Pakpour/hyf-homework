const status = true;
function afterSetTime(resolveAfter) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status) {
        return resolve(displyMessage());
      } else {
        return reject(Error("There is a problem"));
      }
    }, resolveAfter);
  });
}

function displyMessage() {
  document.querySelector("#message").textContent = "I am called asynchronously";
}

document.querySelector("#btn_click").addEventListener("click", () => {
  afterSetTime(3000).catch(err => console.log(err));
});
