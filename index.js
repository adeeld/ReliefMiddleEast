// toggle dark mode
let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
}

themeButton.addEventListener("click", toggleDarkMode);
//

//animation
let animation = {
  revealDistance : 150,
  initialOpacity : 0,
  transitionDelay : 0,
  transitionDuration : '2s',
  transitionProperty : 'all',
  transitionTimingFunction : 'ease'
}

//reveals
let revealableContainers = document.querySelectorAll('.revealable');

let reveal = () => {
  for (let i =0; i < revealableContainers.length; i++) {
    let windoHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windoHeight - animation.revealDistance) {
      revealableContainers[i].classList.add('active');
  } else {
        revealableContainers[i].classList.remove('active');
  }
}
}

//reveal event listener
window.addEventListener('scroll', reveal);

// Add your query for the sign now button here
let signNowButton = document.getElementById('sign-now-button');

// Initialize the count of signatures
let count = 3;

const addSignature = (person) => {
  
    // Retrieve input values
    let name = document.getElementById('name').value;
    let hometown = document.getElementById('hometown').value;

    // Create a new paragraph element for the signature
  let newSignature = document.createElement('p');
  newSignature.textContent = `🖊️ ${person.name} from ${person.hometown} supports this.`;

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
  let person = {
      name: document.getElementById('name').value,
      hometown: document.getElementById('hometown').value,
      email: document.getElementById('email').value
  };
  
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
    addSignature(person);
    toggleModal(person);
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

let scaleFactor = 1;
let modalImage = document.getElementById('thanks-modal').querySelector('img');

const toggleModal = (person) => {
    let modal = document.getElementById('thanks-modal');
    let modalContent = document.getElementById('thanks-modal-content');

    modal.style.display = 'flex';
    modalContent.textContent = `Thank you ${person.name}!`;

    let intervalId = setInterval(scaleImage, 500);

    setTimeout(() => {
        modal.style.display = 'none';
        clearInterval(intervalId);
    }, 4000);
}

const scaleImage = () => {
    scaleFactor = scaleFactor === 1 ? 0.8 : 1;
    modalImage.style.transform = `scale(${scaleFactor})`;
}

signNowButton.addEventListener('click', validateForm);


