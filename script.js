function changeTime() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  if (hour > 12) hour -= 12;

  let hourDegree = hour * 30 + minute / 2;
  $(`.hour`).css(`transform`, ` rotate(${hourDegree}deg)`);

  let minuteDegree = minute * 6;
  $(`.minute`).css(`transform`, ` rotate(${minuteDegree}deg)`);

  let secondDegree = second * 6;
  $(`.second`).css(`transform`, ` rotate(${secondDegree}deg)`);
}

changeTime();

setInterval(function () {
  changeTime();
}, 1000);

$(`.mode-switch`).click(function () {
  $(`body`).toggleClass(`dark`);
  if ($(`body`).hasClass(`dark`)) $(this).html(`Light Mode`);
  else $(this).html(`Dark Mode`);
});
