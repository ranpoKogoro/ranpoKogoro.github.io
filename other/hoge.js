window.onload = () => {
   let today = new Date();
    console.log(today);

    console.log("年=" + today.getFullYear());
    console.log("月=" + (today.getMonth()+1));
    console.log("日=" + today.getDate());
    console.log("時=" + today.getHours());
    console.log("分=" + today.getMinutes());
    console.log("秒=" + today.getSeconds());
}
