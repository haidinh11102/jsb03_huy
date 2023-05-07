
//đảm bảo rằng tất cả các phần tử HTML trên trang đã được tạo trước khi các chức năng của đoạn mã được thực hiện.
$(document).ready(function(){

    // wow initiation
    new WOW().init();

//Đây là đoạn mã sử dụng thư viện WOW.js để tạo hiệu ứng khi cuộn trang. Đoạn mã này sẽ khởi tạo đối tượng WOW và gọi hàm init() để bắt đầu tạo hiệu ứng.

    // navigation bar toggle
    $('#navbar-toggler').click(function(){
        $('.navbar-collapse').slideToggle(400);
    });

//sử dụng thư viện magnificPopup để tạo một popup video khi click vào một phần tử có lớp là "popup-youtube".
    // sample video popup
    $(document).ready(function() {
        $('.popup-youtube').magnificPopup({
            disableOn: 700,//kích thước màn hình tối đa
            type: 'iframe',//loại popup
            mainClass: 'mfp-fade',//hiệu ứng
            removalDelay: 160,//thời gian xóa popup
            preloader: false,//không có preloader
    
            fixedContentPos: false//không cố định nội dung
        });
    });


    // team carousel 
    $('.team .owl-carousel').owlCarousel({
        loop: true,//tao vong lap
        margin: 10,//khoang cach giua cac phan tu
        autoplay: true,//tự động chạy
        dots: false,//không có dấu chấm
        nav: false,//không có nút điều hướng
        responsiveClass: true,//tự động thay đổi kích thước
        responsive:{
            0:{
                items: 1
            }, 
            600:{
                items: 2
            },
            1000:{
                items: 3
            }
        }
    });

    // faq accordion
//   khi click vào phần tử có lớp là "faq-head" thì thêm hoặc xóa lớp "show-faq-content" cho phần tử tiếp theo
    $('.faq-head').each(function(){
        $(this).click(function(){//khi click vào phần tử có lớp là "faq-head"
            $(this).next().toggleClass('show-faq-content');//thêm hoặc xóa lớp "show-faq-content" cho phần tử tiếp theo
            let icon = $(this).children('span').children("i").attr('class');//lấy lớp của phần tử con

            if(icon == "fas fa-plus"){//nếu lớp là "fas fa-plus"
                $(this).children('span').html('<i class = "fas fa-minus"></i>');//thay đổi lớp
            } else {
                $(this).children('span').html('<i class = "fas fa-plus"></i>');//thay đổi lớp
            }
        });
    });

    // testimonial carousel 
    $('.testimonial .owl-carousel').owlCarousel({
        loop: true,//tao vong lap
        autoplay: true,//tự động chạy
        dots: false,//  không có dấu chấm
        nav: false,//không có nút điều hướng
        items: 1//số phần tử hiển thị
    });

});