const preguntasXML = [
    {
      pregunta: "Què signifiquen les sigles XML?",
      opciones: ["eXtensible Markup Language", "Example Markup Language", "Xtreme Mail Language"],
      correcta: 0,
    },
    {
      pregunta: "Quina és la funció principal d'un DTD en XML?",
      opciones: ["Validar l'estructura del document", "Transformar XML a HTML", "Definir espais de noms (namespaces)"],
      correcta: 0,
    },
    {
      pregunta: "XSD és un estàndard que serveix per…",
      opciones: ["Formatejar XML com fulls de càlcul", "Descriure l'estructura i els tipus de dades d'un XML", "Xifrar elements confidencials d'un XML"],
      correcta: 1,
    },
    {
      pregunta: "Quina tecnologia s'utilitza per transformar XML a altres formats (HTML, TXT…)?",
      opciones: ["XPath", "SOAP", "XSLT"],
      correcta: 2,
    },
    {
      pregunta: "XPath s'empra per…",
      opciones: ["Seleccionar nodes o fragments dins d'un document XML", "Signar digitalment un XML", "Serialitzar XML a binari"],
      correcta: 0,
    },
  ];

  function getRandomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
  }

  function mostrarPreguntaAleatoria() {
    console.log("S'ha clicat el botó 'Nova pregunta'")};

    const index = getRandomIndex(preguntasXML);
    const preguntaActual = preguntasXML[index];

    if{
        feedbackElem.textContent = "Correcte!";
        feedbackElem.classList.add("correcte");
      } else {
        feedbackElem.textContent = "Incorrecte";
        feedbackElem.classList.add("incorrecte");
      }
    });

    mostrarPreguntaAleatoria();

    novaPreguntaBtn.addEventListener("click", mostrarPreguntaAleatoria);