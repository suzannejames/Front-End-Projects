var table = document.getElementById('editableTable');
function updateProgress() {
  var progressTag = document.getElementById("progressTag");
  var progressBar = document.getElementById("progressBar");
  
  // Get the text content from the progress tag
  var progress = progressTag.textContent;
  
  // Convert the progress to a valid percentage
  var percentage = parseInt(progress) || 0;
  percentage = Math.min(100, Math.max(0, percentage));
  
  // Update the width of the progress bar
  progressBar.style.width = percentage + "%";
}
table.addEventListener('input', function(e) {
  var target = e.target;
  if (target && target.nodeName === 'TD') {
    // Handle the changes here
    var value = target.innerText;
    console.log('New value:', value);
  }
});

