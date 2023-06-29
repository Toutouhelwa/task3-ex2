let personnesEnregistrees= [];
let personnesVaccinees = [];
function ajouterPerson() {
    let nomPrenom = document.getElementById("nomPrenom").value;
    console.log(nomPrenom);
    if (nomPrenom === "") {
        alert("The input is empty");
        return;
    }
    personnesEnregistrees.push(nomPrenom);
    afficherPersonnesEnregistrees() 
}
function vaccinerPersonne(nomPrenom) {
    let index = personnesEnregistrees.indexOf(nomPrenom);
    if (index !== -1) {
        personnesEnregistrees.splice(index,1)
    }
    personnesVaccinees.push(nomPrenom)
    afficherPersonnesEnregistrees()
    afficherPersonnesVaccinees()
}
function supprimerPersonne(nomPrenom) {
    let index = personnesVaccinees.indexOf(nomPrenom);
    if(index !== -1) {
        personnesVaccinees.splice(index,1);
    }
    personnesEnregistrees.push(nomPrenom);
    afficherPersonnesEnregistrees()
    afficherPersonnesVaccinees()
}
function afficherPersonnesEnregistrees() {
    let listeEnregistrees = document.getElementById('listeEnregistrees');
    listeEnregistrees.innerHTML = '';
  
    personnesEnregistrees.forEach(function (personne) {
      let item = document.createElement('li');
      item.innerHTML = personne;
      let boutonVaccinee = document.createElement('button');
      boutonVaccinee.innerHTML = 'Vaccinée';
      boutonVaccinee.addEventListener('click', function () {
        vaccinerPersonne(personne);
      });
      item.appendChild(boutonVaccinee);
      listeEnregistrees.appendChild(item);
    });
}
function afficherPersonnesVaccinees() {
    let listeVaccinees = document.getElementById('listeVaccinees');
    listeVaccinees.innerHTML = '';
    personnesVaccinees.forEach(function (personne) {
      let item = document.createElement('li');
      item.innerHTML = personne;
      let boutonSupprimer = document.createElement('button');
      boutonSupprimer.innerHTML = 'Supprimer';
      boutonSupprimer.style.color = 'red';
      boutonSupprimer.addEventListener('click', function () {
        supprimerPersonne(personne);
      });
      item.appendChild(boutonSupprimer);
      listeVaccinees.appendChild(item);
    });
  }
  