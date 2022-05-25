$(document).ready(function(){
    const seats = $('.seat')
    let cost = $('#movie').value
    
    function updateCount(){
        let count = $('.roww .seat.selected')
        let seatsCount = count.length
        $('.count').html(seatsCount)
        $('.cost').html(seatsCount*cost)
    }
    

    $('#movie').on('change',(e)=>{
        cost = +e.target.value
        updateCount()
    })
    
    
    $('.seat').on('click',(e)=>{
        if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
            if(cost === undefined){
                alert('Please select a movie')
                return;
            }
            e.target.classList.toggle('selected')
            updateCount();
        }
    })
})