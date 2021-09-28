$(".next-1").click(function(e) {
    $(".myth-2").removeClass('none');
    $(".next-1").addClass('none');
    $(".myth-1 .flex").addClass('mr-b');
})
$(".next-2").click(function(e) {
    $(".myth-3").removeClass('none');
    $(".next-2").addClass('none');
    $(".myth-2 .flex").addClass('mr-b');
})
$(".next-3").click(function(e) {
    $(".myth-4").removeClass('none');
    $(".next-3").addClass('none');
    $(".myth-3 .flex").addClass('mr-b');
})
$(".next-4").click(function(e) {
    $(".myth-5").removeClass('none');
    $(".next-4").addClass('none');
    $(".myth-4 .flex").addClass('mr-b');
})
$(".next-5").click(function(e) {
    $(".myth-6").removeClass('none');
    $(".next-5").addClass('none');
    $(".myth-5 .flex").addClass('mr-b');
})
$(".next-6").click(function(e) {
    $(".myth-7").removeClass('none');
    $(".next-6").addClass('none');
    $(".myth-6 .flex").addClass('mr-b');
})





// $(".next-1").click(function(e) {
//     $(".myth-1").addClass('none');
//     $(".myth-2").removeClass('none');
// })
// $(".next-2").click(function(e) {
//     $(".myth-2").addClass('none');
//     $(".myth-3").removeClass('none');
// })
// $(".next-3").click(function(e) {
//     $(".myth-3").addClass('none');
//     $(".myth-4").removeClass('none');
// })
// $(".next-4").click(function(e) {
//     $(".myth-4").addClass('none');
//     $(".myth-5").removeClass('none');
// })
// $(".next-5").click(function(e) {
//     $(".myth-5").addClass('none');
//     $(".myth-6").removeClass('none');
// })
// $(".next-6").click(function(e) {
//     $(".myth-6").addClass('none');
//     $(".myth-7").removeClass('none');
// })
//
// $(".prev-2").click(function(e) {
//     $(".myth-2").addClass('none');
//     $(".myth-1").removeClass('none');
// })
// $(".prev-3").click(function(e) {
//     $(".myth-3").addClass('none');
//     $(".myth-2").removeClass('none');
// })
// $(".prev-4").click(function(e) {
//     $(".myth-4").addClass('none');
//     $(".myth-3").removeClass('none');
// })
// $(".prev-5").click(function(e) {
//     $(".myth-5").addClass('none');
//     $(".myth-4").removeClass('none');
// })
// $(".prev-6").click(function(e) {
//     $(".myth-6").addClass('none');
//     $(".myth-5").removeClass('none');
// })
// $(".prev-7").click(function(e) {
//     $(".myth-7").addClass('none');
//     $(".myth-6").removeClass('none');
// })

// $(".office").click(function(e) {
//     e.preventDefault();
//     $(".office").addClass('active');
//     $(".partners").removeClass('active');
//     $(".map-item-2").addClass('none');
//     $(".map-item-1").addClass('block');
//     $(".map-item-1").removeClass('none');
// })
// $(".partners").click(function(e) {
//     e.preventDefault();
//     $(".partners").addClass('active');
//     $(".office").removeClass('active');
//     $(".map-item-1").addClass('none');
//     $(".map-item-1").removeClass('block');
//     $(".map-item-2").removeClass('none');
// })

$("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
});