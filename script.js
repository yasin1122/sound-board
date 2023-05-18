// Define an array of sound names
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

// Create buttons and attach event listeners for each sound
sounds.forEach(sound => {
    // Create a button element
    const btn = document.createElement('button');
    btn.classList.add('btn');

    // Set the button's text to the sound name
    btn.innerText = sound;

    // Add click event listener to the button
    btn.addEventListener('click', () => {
        // Stop any currently playing songs
        stopSongs();

        // Play the selected sound
        document.getElementById(sound).play();
    });

    // Append the button to the 'buttons' element in the HTML
    document.getElementById('buttons').appendChild(btn);
});

// Function to stop all currently playing songs
function stopSongs() {
    sounds.forEach(sound => {
        // Get the audio element for each sound
        const song = document.getElementById(sound);

        // Pause the audio and reset the current time to 0
        song.pause();
        song.currentTime = 0;
    });
}


