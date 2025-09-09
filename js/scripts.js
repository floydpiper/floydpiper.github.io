const videoModal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo') || document.getElementById('modalVideoDrone');
const modalIframe = document.getElementById('modalIframe') || document.getElementById('modalIframeDrone');

// When modal opens
videoModal.addEventListener('show.bs.modal', function (event) {
  const button = event.relatedTarget;
  const src = button.getAttribute('data-src');
  const type = button.getAttribute('data-type');

  if (type === 'vimeo') {
    // Hide video
    modalVideo.classList.add('d-none');
    if (modalVideo.pause) modalVideo.pause();
    modalVideo.src = '';

    // Show iframe
    modalIframe.classList.remove('d-none');
    modalIframe.src = src;
  } else {
    // Hide iframe
    modalIframe.classList.add('d-none');
    modalIframe.src = '';

    // Show video
    modalVideo.classList.remove('d-none');
    modalVideo.src = src;
    if (modalVideo.play) modalVideo.play();
  }
});

// When modal closes
videoModal.addEventListener('hidden.bs.modal', function () {
  if (modalVideo.pause) modalVideo.pause();
  modalVideo.src = '';
  modalIframe.src = '';
});
