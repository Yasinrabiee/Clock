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

setInterval(changeTime(), 1000);

if(localStorage.getItem('mode') == `dark`)
	$(`body`).addClass(`dark`)
else
	$(`body`).addClass(`light`)

$(`.mode-switch`).click(function () {
	$(`body`).toggleClass(`dark`);
	if ($(`body`).hasClass(`dark`))
	{
		$(this).html(`Light Mode`);
		localStorage.setItem(`mode`,`dark`)
	}
	else
	{
		$(this).html(`Dark Mode`);
		localStorage.setItem(`mode`,`light`);
	}	
});
