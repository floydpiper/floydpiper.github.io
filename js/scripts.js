const videoModal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');

if (videoModal) {
  videoModal.addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget;
    const videoSrc = button.getAttribute('data-src');
    modalVideo.src = videoSrc;
    modalVideo.play();
  });

  videoModal.addEventListener('hidden.bs.modal', function () {
    modalVideo.pause();
    modalVideo.src = "";
  });

  // Allow closing modal by clicking outside video
  document.querySelector('#videoModal .modal-body').addEventListener('click', (e) => {
    if (e.target.tagName !== 'VIDEO') {
      const modal = bootstrap.Modal.getInstance(videoModal);
      modal.hide();
    }
  });
}
