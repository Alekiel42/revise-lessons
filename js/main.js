var allQuestion = [];

// Comment importer cette liste de question ici, à partir d'un autre fichier
allQuestion.push({
        question: "1Créez une nouvelle div, stockée dans la variable newDiv",
        solution: "var newDiv = document.createElement(‘div’);",
        success: 0,
        revision: "aucune"
});

allQuestion.push({
        question: "2deuxieme question",
        solution: "reponse 2",
        success: 0,
        revision: "aucune"
});

allQuestion.push({
        question: "3comment s'appelle le site pour commiter des emoji",
        solution: "gitmoji",
        success: 0,
        revision: "https://gitmoji.dev"
});

allQuestion.push({
        question: "4dernière question",
        solution: "42",
        success: 0,
        revision: "https:www.ici.com"
});

// chiffre random entre 0 et nombre item tableau inclus
var indexQuestion = Math.round(Math.random() * (allQuestion.length-1));
console.log("nombre hasard:",indexQuestion);


// ce nombre selection l'index du tableau question
var questionToAsk = allQuestion[indexQuestion].question;
console.log(questionToAsk);

// innerHTML dans label avec question
var questionArea = document.getElementById('questionArea');
console.log(questionArea);

//ecrire la première question dans la page, random
questionArea.innerHTML = questionToAsk;


// reset comportement btn submit
// si reponse === solution > creer une div dans footer avec juste ou faux
// si juste success a 1
// faire en sorte que la question choisi soit a zero point





/*
interface formulaire 
Question dans le dom
CHAMP AREA
btn avec addeventlistener

*/
// question random parmi les success 0
// si toutes les success 1 : remettre a zero
//answer =prompt question

//  reponse: ecrire si ok ou pas

// press space pour avoir le score en cours

// si faut lien vers revision kourou ou github prof