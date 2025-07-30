const skillsData = [
    { name: 'Html', level: 'Advanced' },
    { name: 'CSS', level: 'Advanced' },
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'React', level: 'Learning' },
    { name: 'Java', level: 'Advanced' },
    { name: 'Python', level: 'Intermediate' },
    { name: 'C', level: 'Intermediate' },
]; //objects inside it


function showPage(pageId) {
    const pages = document.querySelectorAll('.page'); //. mean look for a claa and # mean look for a Id
    pages.forEach(page => page.style.display = 'none');

    document.getElementById(pageId).style.display = 'block';

    if (pageId === 'skills') {
        loadSkills();
    }

}

showPage('home');

function toggleTheme() {
    document.body.classList.toggle('night');
}

function loadSkills() {
    const skillsContainer = document.getElementById('skillsList');
    skillsContainer.innerHTML = '';

    skillsData.forEach(skill => {
        const skillElement = document.createElement('p');//yek khat matn benevis . yaani ye tag p dorost kon.
        skillElement.textContent = `${skill.name} - ${skill.level}`;
        skillsContainer.appendChild(skillElement);
    });
}

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').Value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const contactData = {
        name: name,
        email: email,
        message: message
    };

    const jsonData = JSON.stringify(contactData);

    console.log("sending to server...");
    console.log(jsonData);


    console.log("Message received:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    

    contactForm.reset();
});

//name moshkel dare.
//form be server(?)ya email send beshe.


