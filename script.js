// script.js

// 사진 갤러리 추가
const gallerySection = document.getElementById('gallery');
const photos = ['images/photo1.jpg', 'images/photo2.jpg']; // 갤러리에 표시할 사진 배열

photos.forEach(photo => {
    const img = document.createElement('img');
    img.src = photo;
    gallerySection.appendChild(img);
});

// 달력 이미지 추가
const calendarSection = document.getElementById('calendar');
const calendarImg = document.createElement('img');
calendarImg.src = 'calendar.jpg'; // 달력 이미지 파일 경로
calendarSection.appendChild(calendarImg);

// 약도 추가
const mapSection = document.getElementById('map');
const mapImg = document.createElement('img');
mapImg.src = 'map.jpg'; // 약도 이미지 파일 경로
mapSection.appendChild(mapImg);
