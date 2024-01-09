var passLang = "BM";

function langNew() {
    var x = document.getElementById("language");
    if (x.innerText == "BM") {
      x.innerText = "EN";
      passLang = x.innerText;
      localStorage.setItem('new-lang', passLang);
      console.log(localStorage);
      
      // Frame 1
      document.getElementById("header-lang1").innerText = "KETAHUI TAHAP";
      document.getElementById("header-lang2").innerText = "KESIHATAN KULIT ANDA";
      document.getElementById("subheader-lang1").innerText = "CUBA PENGANALISIS";
      document.getElementById("subheader-lang2").innerText = "DARI CETAPHIL";
      document.getElementById("textsnapshot-lang").src = "/assets/INTRO BM.png";
      document.getElementById("start-button").innerText = "MULAKAN";

    // Frame 2
      document.getElementById("how-lang").innerText = "BAGAIMANA IA BERFUNGSI";
      document.getElementById("guide-lang").src = "/assets/Guide BM.png";
      document.getElementById("got-lang").innerText = "BAIK";

    // Frame 3

    //Frame 4

    } else {
    if (x.innerText == "EN") {
      x.innerText = "BM";
      passLang = x.innerText;
      localStorage.setItem('new-lang', passLang);
      console.log(localStorage);
      // Frame 1
      document.getElementById("header-lang1").innerText = "FIND OUT HOW HEALTHY";
      document.getElementById("header-lang2").innerText = "YOUR SKIN REALLY IS";
      document.getElementById("subheader-lang1").innerText = "TRY CETAPHIL'S ADVANCED";
      document.getElementById("subheader-lang2").innerText = "SKIN ANALYSER";
      document.getElementById("textsnapshot-lang").src = "/assets/INTRO CARD.png";
      document.getElementById("start-button").innerText = "GET STARTED";

      // Frame 2
      document.getElementById("how-lang").innerText = "HOW IT WORKS";
      document.getElementById("guide-lang").src = "/assets/Guide.png";
      document.getElementById("got-lang").innerText = "GOT IT";
    }
    }
  }