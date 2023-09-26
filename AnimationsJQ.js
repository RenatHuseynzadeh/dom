$('.first1').click(function(){
    $(this).css('background', 'green')
})


$('.first1').first().click(function(){
    $(this).css('background', 'red')
})

$('.first2').click(function(){
    $(this).css('background', 'red')
})


$('.first3').click(function(){
    $(this).css('background', 'green')
})


$('.first3').last().click(function(){
    $(this).css('background', 'red')
})

$('.b1').click(function(){
    let rrr = $("<div><div>")
    rrr.css({
        "width": "50px",
        "height": "50px",
        "background-color": "red",
        "margin-left": "10px"
    
    })
    
    $('.firsttttt').append(rrr)
    
})


$('.b2').click(function(){
    let rrrr = $("<div><div>")
    rrrr.css({
        "width": "50px",
        "height": "50px",
        "background-color": "red",
        "margin-left": "10px"
    
    })
    
    $('.six').prepend(rrrr)
    
})



$('.b3').click(function(){
    let rrrrr = $("<div><div>")
    rrrrr.css({
        "width": "50px",
        "height": "50px",
        "background-color": "red",
        "margin-left": "10px"
    
    })
    
    rrrrr.prependTo($('.seven'))
    
})




$('.b4').click(function(){
    let forAte = $("<div><div>")
    forAte.css({
        "width": "50px",
        "height": "50px",
        "background-color": "red",
        "margin-left": "10px"
    
    })
    
    forAte.appendTo($('.ate'))
    
})





$('.b5').click(function(){
    let fornine = $("<div><div>")
    fornine.css({
        "width": "50px",
        "height": "50px",
        "background-color": "red",
        "margin-left": "20px",
        "margin-top": "10px"
        
    
    })
    
    $('.nine').before(fornine)
    
})


$('.b6').click(function(){
    let forTen = $("<div><div>")
    forTen.css({
        "width": "50px",
        "height": "50px",
        "background-color": "red",
        "margin-left": "20px",
        "margin-top": "10px"
        
    
    })
    
    $('.ten').after(forTen)
    
})


$('.b7').click(function(){
    $('.first10').empty()
    
})


$('.b8').click(function(){
    $('.first11').remove()
    
})

$('.b9').click(function(){
    

    $('.forInp2').height($('.inp2').val())
    
})

$('.b10').click(function(){
    

    $('.forInp3').width($('.inp3').val())
    
})