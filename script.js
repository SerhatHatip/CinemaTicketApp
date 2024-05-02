const container=document.querySelector(".container");
const count=document.getElementById('count');
const amount=document.getElementById('amount')
const select=document.getElementById("movie")
container.addEventListener('click',function (e) {
    const selectItem=e.target
    if (selectItem.classList.contains("seat") && !selectItem.classList.contains("reserved")) {
        selectItem.classList.toggle("selected");
        calculateTotal();

        
    }


})


select.addEventListener("change",function(e){
    calculateTotal();

})

function calculateTotal(){
    selectedSeatCount=container.querySelectorAll('.seat.selected').length;
        let price =select.value
        count.innerText=selectedSeatCount
        amount.innerText=selectedSeatCount*price;
}