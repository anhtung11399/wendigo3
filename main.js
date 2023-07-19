let countDownTime = new Date('Aug 14, 2023 00:00:00').getTime();

function durgaPujo() {
    let nowTime = new Date().getTime();
    let diff = countDownTime - nowTime;

    let sec = 1000;
    let min = sec * 60;
    let hr = min * 60;
    let day = hr * 24;

    let d = Math.floor(diff / day);
    // console.log(d);
    let h = Math.floor((diff % day) / hr);
    // console.log(h);
    let m = Math.floor((diff % hr) / min);
    // console.log(m);
    let s = Math.floor((diff % min) / sec);
    // console.log(s);

    document.getElementById('Days').innerText = addZero(d);
    document.getElementById('Hours').innerText = addZero(h);
    document.getElementById('Minutes').innerText = addZero(m);
    document.getElementById('Seconds').innerText = addZero(s);
}

setInterval(function () {
    durgaPujo();
}, 1000);

function addZero(num) {
    if (num < 10)
        return `0${num}`;
    else
        return num;
}





// Lắng nghe sự kiện cuộn trang
window.addEventListener('scroll', function() {
    // Lấy chiều cao của cửa sổ trình duyệt
    var windowHeight = window.innerHeight;

    // Tính tỷ lệ tùy chỉnh (1/3) của chiều cao của cửa sổ trình duyệt
    var scrollThreshold = windowHeight / 2;

    // Lấy vị trí cuộn trang hiện tại
    var scrollPosition = window.scrollY;

    // Lấy vị trí của các div cần hiển thị nội dung
    var xuatPhatElement = document.getElementById('xuatphat');
    var noioElement = document.getElementById('noio');
    var lichTrinhElement = document.getElementById('lichtrinh');
    var veElement = document.getElementById('ve');

    // Tính vị trí cuộn trang cần đạt đến để hiển thị các div
    var xuatPhatPosition = xuatPhatElement.offsetTop - scrollThreshold;
    var noioPosition = noioElement.offsetTop - scrollThreshold;
    var lichTrinhPosition = lichTrinhElement.offsetTop - scrollThreshold;
    var vePosition = veElement.offsetTop - scrollThreshold;

    // Kiểm tra và thêm hoặc xóa lớp CSS 'active' cho từng div tương ứng
    if (scrollPosition >= xuatPhatPosition) {
        xuatPhatElement.classList.add('active');
    } else {
        xuatPhatElement.classList.remove('active');
    }
    if (scrollPosition >= noioPosition) {
        noioElement.classList.add('active');
    } else {
        noioElement.classList.remove('active');
    }
    if (scrollPosition >= lichTrinhPosition) {
        lichTrinhElement.classList.add('active');
    } else {
        lichTrinhElement.classList.remove('active');
    }
    if (scrollPosition >= vePosition) {
        veElement.classList.add('active');
    } else {
        veElement.classList.remove('active');
    }
});





    //   // Lắng nghe sự kiện cuộn trang
    //   window.addEventListener('scroll', function() {
    //     // Lấy vị trí cuộn trang hiện tại
    //     var scrollPosition = window.scrollY;

    //     // Lấy vị trí của các div cần hiển thị nội dung
    //     var xuatPhatPosition = document.getElementById('xuatphat').offsetTop;
    //     var noioPosition = document.getElementById('noio').offsetTop;
    //     var lichTrinhPosition = document.getElementById('lichtrinh').offsetTop;
    //     var vePosition = document.getElementById('ve').offsetTop;

    //     // Kiểm tra và thêm hoặc xóa lớp CSS 'active' cho từng div tương ứng
    //     if (scrollPosition >= xuatPhatPosition) {
    //         document.getElementById('xuatphat').classList.remove('active');
       
    //     } else {
    //         document.getElementById('xuatphat').classList.add('active');
    //     }
    //     if (scrollPosition >= noioPosition) {
    //         document.getElementById('noio').classList.remove('active');
           
    //     } else {
    //         document.getElementById('noio').classList.add('active');
    //     }
    //     if (scrollPosition >= lichTrinhPosition) {
    //         document.getElementById('lichtrinh').classList.remove('active');
           
    //     } else {
    //         document.getElementById('lichtrinh').classList.add('active');
    //     }
    //     if (scrollPosition >= vePosition) {
    //         document.getElementById('ve').classList.remove('active');
           
    //     } else {
    //         document.getElementById('ve').classList.add('active');
    //     }
    // });

