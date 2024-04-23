// ServiceCards Array.
const serviceCards = [
    {
        id: 1,
        image: './assets/img3.jpg',
        title: 'outdoor Renovation',
        desc: 'Transform your living space with a stunning outdoor renovation that revitalizes every corner of your home'
    },
    {
        id: 2,
        image: './assets/img4.jpg',
        title: 'Concrete framing',
        desc: 'Enhance the structural integrity of your home with precise concrete framing, ensuring lasting durability and stability for years to come.'
    },
    {
        id: 3,
        image: './assets/img5.jpg',
        title: 'Indoor Renovation',
        desc: 'Enhance the structural integrity of your home with precise concrete framing, ensuring lasting durability and stability for years to come.'
    },
];



function service(){
    // ====== creating a variable for the productCards
    const productCards = document.querySelector('#q-service-cards');
    
    // loops through the serviceCards Array and dynamically displaying them 
    // on the webpage. 
    serviceCards.forEach(card => {
        const cardEl = document.createElement('div');
        cardEl.classList.add('q-service_cards');
        cardEl.innerHTML = `
        <div class="q-card">
            <div class="q-card__image">
                <img src="${card.image}"
            </div>
            <div class="q-card__title">
                <small><b>${card.title}</b></small>
            </div>
            <div class="q-card__desc">
                <p>${card.desc}</p>
            </div>
            
            <div class="get-quote">
                <a href="./quotecenter.html">Get Quote</div>
            </div>
        </div>`;
        // Appneding the productCards to the cardEl. 
        productCards.appendChild(cardEl);
    });
}

service();

// implementing the faqs toggle function. 
document.addEventListener("DOMContentLoaded", function() {
    var faqQuestions = document.querySelectorAll(".question-text");
  
    faqQuestions.forEach(function(question) {
      // Add click event listener to toggle button
      const toggleButton = question.querySelector(".f-toggle-btn");
      toggleButton.addEventListener("click", function(e) {
        e.preventDefault();
  
        const answer = question.querySelector(".answer");
        answer.classList.toggle("hidden");
      });
    });
});

function sendQuote() {
    const formGroups = document.querySelectorAll('.form-group');
    let hasError = false;

    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea, select');
        const errorMessage = group.querySelector('.error-message');

        if (input.tagName.toLowerCase() === 'select') {
            if (input.selectedIndex === 0) {
                if (!errorMessage) {
                    const newErrorMessage = document.createElement('div');
                    newErrorMessage.classList.add('error-message');
                    newErrorMessage.textContent = 'Please select an option.';
                    group.appendChild(newErrorMessage);
                    group.classList.add('error');
                }
                hasError = true;
            } else {
                if (errorMessage) {
                    group.removeChild(errorMessage);
                    group.classList.remove('error');
                }
            }
        } else {
            if (!input.value.trim()) {
                if (!errorMessage) {
                    const newErrorMessage = document.createElement('div');
                    newErrorMessage.classList.add('error-message');
                    newErrorMessage.textContent = 'Please fill in the required fields.';
                    group.appendChild(newErrorMessage);
                    group.classList.add('error');
                }
                hasError = true;
            } else {
                if (errorMessage) {
                    group.removeChild(errorMessage);
                    group.classList.remove('error');
                }
            }
        }
    });

    // If any form group has an error, prevent form submission
    if (hasError) {
        return false;
    }

    // If no errors, submit the form
    form.submit(); // Uncomment this line to submit the form

    return true; // For testing purposes
}