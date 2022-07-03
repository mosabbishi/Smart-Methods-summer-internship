const texts = document.querySelector(".texts");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'ar-AR en-US'
recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = text;
  if (e.results[0].isFinal) {
    if (text.includes("مرحبا")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "يا هلا";
      texts.appendChild(p);
    }
    if (
      text.includes("السلام عليكم") || text.includes("السلام عليكم ورحمة الله وبركاته")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "وعليكم السلام ورحمة الله وبركاته";
      texts.appendChild(p);
    }
    if (text.includes("كيف حالك")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "الحمدلله";
      texts.appendChild(p);
    }
    p = document.createElement("p");
  }
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();
