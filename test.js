const langdetect = require('langdetect');  // Importer langdetect

const message = "fix: adding new feature"; // Exemple de message de commit
const detected = langdetect.detect(message); // Utiliser langdetect pour la détection de langue
console.log(langdetect.detect(message)[0].lang); // Afficher la langue détectée
