function displayCenterdTime(){
    let main = document.getElementById("time")
    main.classList.add("h-screen","flex","justify-center","items-center","flex-col")
    let timeObject = document.createElement("h1")
    timeObject.classList.add("text-5xl","font-bold")
    let dateObject = document.createElement("h1")

    main.appendChild(timeObject)
    main.appendChild(dateObject)
    setInterval(() => {
        const currDate = (new Date());
        timeObject.innerText= currDate.toLocaleTimeString()
        dateObject.innerText=currDate.toLocaleDateString()
    }, 1000);

}


displayCenterdTime()