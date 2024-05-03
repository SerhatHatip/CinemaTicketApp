const container=document.querySelector(".container");
const count=document.getElementById('count');
const amount=document.getElementById('amount')
const select=document.getElementById("movie")
const selected=document.querySelectorAll(".seat")
const seats=document.querySelectorAll(".seat:not(.reserved)")


getToLocalStroge();

container.addEventListener('click',function (e) {
    const selectItem=e.target;
    if (selectItem.classList.contains("seat") && !selectItem.classList.contains("reserved")) {
        selectItem.classList.toggle("selected");
        calculateTotal();
    }
})


select.addEventListener("change",function(e){
    calculateTotal();

})

function calculateTotal(){
    selectedSeats=container.querySelectorAll('.seat.selected');
    selectedSeatCount=container.querySelectorAll('.seat.selected').length;
        
    const selectedSeatsArr=[]
    const seatsArr=[]


    selectedSeats.forEach(function (seat) {
        selectedSeatsArr.push(seat);
    });
    
    seats.forEach(function (seat) {
        seatsArr.push(seat)
    })
    
    let newSelectedarr=selectedSeatsArr.map(function (seat) {
        return seatsArr.indexOf(seat)
    })

  
   



    let price =select.value
        count.innerText=selectedSeatCount
        amount.innerText=selectedSeatCount*price;
 saveToLocalStroge(newSelectedarr)


}

function  saveToLocalStroge(indeks) {
    localStorage.setItem('selectSeats',JSON.stringify(indeks));
    localStorage.setItem('movieindex',select.selectedIndex)
}

function getToLocalStroge() {
    let getSeats=JSON.parse(localStorage.getItem('selectSeats'));
    let getMovieIndex=localStorage.getItem('movieindex');

console.log(getSeats);

    if (getSeats!=null && getSeats.length>0) {
        seats.forEach(function (seat,index) {
           if (getSeats.indexOf(index)>-1) {
            seat.classList.add('selected')
           }
        })
    }

    if (getMovieIndex!=null) {
        
        select.selectedIndex=getMovieIndex;
    }


}