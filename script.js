//////////////////////////////JavaScript For index/////////////////////////////////////////////////////
if (window.location.href === "\index.html"){

}
// Show feedback form when the feedback button is clicked
document.getElementById('feedbackButton').addEventListener('click', function() {
    const feedbackFormSection = document.getElementById('feedbackFormSection');
    feedbackFormSection.style.display = feedbackFormSection.style.display === 'none' ? 'block' : 'none';
  });
