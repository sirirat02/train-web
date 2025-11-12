document.querySelectorAll('.openDetail').forEach(card => {
      card.addEventListener('click', function() {
        document.getElementById('detailTitleHeader').textContent = this.dataset.title;
        document.getElementById('detailImg').src = this.dataset.img;
        document.getElementById('detailDesc').textContent = this.dataset.desc;

        const videoFrame = document.getElementById('video-frame');
        const videoSection = document.getElementById('videoSection');

        if (this.dataset.video) {
          videoFrame.src = this.dataset.video;
          videoSection.classList.remove('d-none');
        } else {
          videoFrame.src = '';
          videoSection.classList.add('d-none');
        }
      });
    });

    const detailModal = document.getElementById('detailModal');
    detailModal.addEventListener('hidden.bs.modal', () => {
      document.getElementById('video-frame').src = '';
    });

      document.getElementById("detailImg").addEventListener("click", function() {
    const popup = document.getElementById("imgPopup");
    const popupImg = document.getElementById("popupImg");

    popupImg.src = this.src;
    popup.classList.remove("d-none");
  });

  // ปิด popup เมื่อคลิกปุ่ม X หรือพื้นหลัง
  document.querySelector(".popup-close").addEventListener("click", () => {
    document.getElementById("imgPopup").classList.add("d-none");
  });

  document.getElementById("imgPopup").addEventListener("click", (e) => {
    if (e.target.id === "imgPopup") {
      e.currentTarget.classList.add("d-none");
    }
  });

  document.querySelectorAll('.openDetail').forEach(card => {
  card.addEventListener('click', function () {
    const videoUrl = this.dataset.video;
    let embedUrl = videoUrl;

    // ถ้าเป็นลิงก์แบบ watch?v= ให้แปลงเป็น embed
    if (videoUrl.includes('watch?v=')) {
      const videoId = videoUrl.split('watch?v=')[1].split('&')[0];
      embedUrl = `https://www.youtube.com/embed/${videoId}`;
    }

    document.getElementById('detailVideo').src = embedUrl;
    document.getElementById('detailImage').src = this.dataset.img;
    document.getElementById('detailTitle').textContent = this.dataset.title;
    document.getElementById('detailDesc').textContent = this.dataset.desc;
  });
});


