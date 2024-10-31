//////////////////////////////JavaScript For index/////////////////////////////////////////////////////
if (window.location.href === "\index.html"){

}
// Show feedback form when the feedback button is clicked
document.getElementById('feedbackButton').addEventListener('click', function() {
    const feedbackFormSection = document.getElementById('feedbackFormSection');
    feedbackFormSection.style.display = feedbackFormSection.style.display === 'none' ? 'block' : 'none';
  });
  
  // Function to handle feedback form submission
  document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    const feedbackText = document.getElementById('feedback').value;
    const feedbackName = document.getElementById('feedbackName').value;
    const feedbackEmail = document.getElementById('feedbackEmail').value;
  
    // You can handle feedback submission logic here (e.g., send to server or store locally)
    
    // Display a response message
    document.getElementById('feedbackResponse').textContent = `Thank you for your feedback, ${feedbackName || 'Guest'}. Feel free to give some more feedback!`;
  
    // Optionally, save feedback to local storage (you can modify this as needed)
    localStorage.setItem('userFeedback', JSON.stringify({ feedbackText, feedbackName, feedbackEmail }));
  
    // Clear the form inputs
    document.getElementById('feedbackForm').reset();
  });
  
        


const likeButton = document.getElementById("like-button");
const dislikeButton = document.getElementById("dislike-button");

// Add event listeners to the buttons
likeButton.addEventListener("click", function(evnt) {

    console.log("like clicked", evnt);
    // Toggle 'active-like' class on like button and remove active class from dislike button
    likeButton.classList.toggle("green-like"); //This here connects to the "like-up" class and turns the button green when clicked
    dislikeButton.classList.remove("red-dislike"); // this removes the red on the dislike if green is active
});

dislikeButton.addEventListener("click", function() {
    // Toggle 'active-dislike' class on dislike button and remove active class from like button
    dislikeButton.classList.toggle("red-dislike");//This here connects to the "dislike-up" class and turns the button red when clicked
    likeButton.classList.remove("green-like"); // this removes the green on the like if red is active
});

// Comment button event listener
document.getElementById("comment-button").addEventListener("click", () => { 
    document.getElementById("comment-text-area").value = ''; // Clears text area
  
});


// Function to unhide the image
function unhideMangacover(playerId) {
    document.getElementById(playerId).style.display = 'block'; // Unhide the image container
}
// Function to hide the image
 function hideMangacover(playerId) {
        document.getElementById(playerId).style.display = 'none'; // Hide the image container
    }


