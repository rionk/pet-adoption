async function petsArea() {
    const res = await fetch("https://learnwebcode.github.io/bootcamp-pet-data/pets.json");
    const petsData = await res.json();

    const template = document.querySelector("#pet-card-template").content;
    const wrapper = document.createDocumentFragment()
    const petsList = document.querySelector(".list-of-pets");

    petsData.forEach((pet) => {
        const clone = template.cloneNode(true);
        clone.querySelector('h3').textContent = pet.name;
        clone.querySelector('.pet-description').textContent = pet.description;
        clone.querySelector('.pet-age').textContent = getAge(pet.birthYear);
        clone.querySelector('.pet-card-photo img').src = pet.photo ? pet.photo : "images/fallback.jpg";
        clone.querySelector('.pet-card-photo img').alt = `${pet.species} named ${pet.name}` ;
        wrapper.appendChild(clone);
    })

    petsList.appendChild(wrapper)
}

function getAge(birthYear){
    const age = new Date().getFullYear() - birthYear
    return age + (age > 1 ? " years old" :
        age === 1 ? " year old" : " Less than year old")
}


petsArea()