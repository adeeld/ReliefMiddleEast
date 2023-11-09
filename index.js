// toggle dark mode
let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
}

themeButton.addEventListener("click", toggleDarkMode);
//

// Add your query for the sign now button here
let signNowButton = document.getElementById('sign-now-button');

// Initialize the count of signatures
let count = 3;

const addSignature = () => {
    // Retrieve input values
    let name = document.getElementById('name').value;
    let hometown = document.getElementById('hometown').value;

    // Create a new paragraph element for the signature
    let newSignature = document.createElement('p');
    newSignature.textContent = `🖊️ ${name} from ${hometown} supports this.`;

    // Find the container where the signatures are displayed
    let signaturesContainer = document.querySelector('.signatures');
    signaturesContainer.appendChild(newSignature);

    // Update the counter
    updateCounter();
}

// Function to update the counter
const updateCounter = () => {
    // Increase the count
    count = count + 1;

    // Find or create the counter element
    let counter = document.getElementById('counter');
    if (!counter) {
        // If counter doesn't exist, create it
        counter = document.createElement('p');
        counter.id = 'counter';
        // Append the new counter to the signatures container
        signaturesContainer.appendChild(counter);
    }

    // Update the counter text
    counter.textContent = `🖊️ ${count} people have signed this petition and support this cause.`;
}

const validateForm = () => {

  let containsErrors = false;

  var petitionInputs = document.getElementById("sign-petition").elements;
  // TODO: Loop through all inputs
  for (let i = 0; i < petitionInputs.length; i++) {
    // TODO: Validate the value of each input
    if (petitionInputs[i].value.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    }
    else {
      petitionInputs[i].classList.remove('error');
    }
  }
  // TODO: Call addSignature() and clear fields if no errors
  if (!containsErrors) {
    addSignature();
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
      containsErrors = false;
    }
  }

  const email = document.getElementById('email');
  if (!email.value.includes('.com')) {
    email.classList.add('error');
    containsErrors = true;
  } else {
    email.classList.remove('error');
  }
}

signNowButton.addEventListener('click', validateForm);


