if(navigator.onLine){

    //div element for dynamic value change
    var div = document.createElement("div");
    div.style.cssText = "font-size: 20px; color: #FDC93B; ";
    div.innerHTML = "Fetching...";
    div.classList.add("newCases");
    document.querySelector(".case").appendChild(div);

    //global function for fetching data
    var globalStats = function() {
        fetch("https://api.covid19api.com/summary")
        .then((response) => response.json())
        .then((data) => {
            document.querySelector(".newCases").innerHTML = data.Global.NewConfirmed;
            document.querySelector(".totalCases").innerHTML = data.Global.TotalConfirmed;
            document.querySelector(".totalDeaths").innerHTML = data.Global.TotalDeaths;
            document.querySelector(".totalRecovered").innerHTML = data.Global.TotalRecovered;
            document.querySelector(".case").innerHTML = "New Cases";
            document.querySelector(".case").appendChild(div);
        });
    }
    globalStats();

    //function for fetching data of Nepal
    var nepStats = function() {
        fetch("https://api.covid19api.com/total/country/nepal")
        .then((response) => response.json())
        .then((data) => {
            data = data.reverse();
            document.querySelector(".newCases").innerHTML = data[0].Active;
            document.querySelector(".totalCases").innerHTML = data[0].Confirmed;
            document.querySelector(".totalDeaths").innerHTML = data[0].Deaths;
            document.querySelector(".totalRecovered").innerHTML = data[0].Recovered;
            document.querySelector(".case").innerHTML = "Active Cases";
            document.querySelector(".case").appendChild(div);
        });
    }
    
    //main event fire
    function mainAction(){
        var x = document.querySelector(".pl-options").value;
        if(x == document.querySelector(".pl-options .np").value){
            nepStats();
        }else{
            globalStats();
        }
    }
    //added event listener
    document.querySelector(".pl-options").addEventListener("change", mainAction);

}
else{
    document.querySelector(".container").innerHTML = "Oops! No Internet Connection.";
    document.querySelector(".container").style.width = "300px";
}