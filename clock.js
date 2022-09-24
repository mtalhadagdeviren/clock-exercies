const getDOM = document.querySelector("div#myClock");
function showTime(){
    const getTime = new Date();
    const day = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'][new Date().getDay()]
    const hours = getTime.getHours();
    const min = getTime.getMinutes();
    const sec = getTime.getSeconds();

    getDOM.innerHTML = hours+":"+min+":"+sec+" "+day;
}
