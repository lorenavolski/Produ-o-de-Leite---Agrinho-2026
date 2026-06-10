document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       ACCORDION
    ========================== */

    const accordionHeaders =
        document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {

        header.addEventListener("click", () => {

            const content =
                header.nextElementSibling;

            const isOpen =
                content.style.maxHeight;

            document
                .querySelectorAll(".accordion-content")
                .forEach(item => {
                    item.style.maxHeight = null;
                });

            if (!isOpen) {
                content.style.maxHeight =
                    content.scrollHeight + "px";
            }

        });

    });

    /* ==========================
       COMENTÁRIOS
    ========================== */

    const commentBtn =
        document.getElementById("commentBtn");

    const commentText =
        document.getElementById("commentText");

    const commentList =
        document.getElementById("commentList");

    commentBtn.addEventListener("click", () => {

        const text =
            commentText.value.trim();

        if (text === "") {

            alert(
                "Digite um comentário antes de publicar."
            );

            return;
        }

        const comment =
            document.createElement("div");

        comment.classList.add("comment");

        const date =
            new Date().toLocaleDateString("pt-BR");

        comment.innerHTML = `
            <strong>Visitante</strong>
            <small> • ${date}</small>
            <p>${text}</p>
        `;

        commentList.prepend(comment);

        commentText.value = "";

    });

    /* ==========================
       CONTROLE DE FONTE
    ========================== */

    let fontSize = 1;

    const mainContent =
        document.getElementById("main-content");

    const increaseFont =
        document.getElementById("increaseFont");

    const decreaseFont =
        document.getElementById("decreaseFont");

    increaseFont.addEventListener("click", () => {

        if (fontSize < 1.8) {

            fontSize += 0.1;

            mainContent.style.fontSize =
                `${fontSize}rem`;

        }

    });

    decreaseFont.addEventListener("click", () => {

        if (fontSize > 0.8) {

            fontSize -= 0.1;

            mainContent.style.fontSize =
                `${fontSize}rem`;

        }

    });

    /* ==========================
       MODO ESCURO
    ========================== */

    const toggleContrast =
        document.getElementById("toggleContrast");

    toggleContrast.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

    });

    /* ==========================
       LEITURA POR VOZ
    ========================== */

    let speech;

    const startReading =
        document.getElementById("startReading");

    const stopReading =
        document.getElementById("stopReading");

    startReading.addEventListener("click", () => {

        window.speechSynthesis.cancel();

        const elements =
            document.querySelectorAll(
                "#main-content p, #main-content h2"
            );

        let textToRead = "";

        elements.forEach(element => {

            textToRead +=
                element.textContent + " ";

        });

        speech =
            new SpeechSynthesisUtterance(textToRead);

        speech.lang = "pt-BR";

        speech.rate = 1;

        speech.pitch = 1;

        speech.volume = 1;

        window.speechSynthesis.speak(speech);

    });

    stopReading.addEventListener("click", () => {

        window.speechSynthesis.cancel();

    });

    /* ==========================
       FORMULÁRIO
    ========================== */

    const contactForm =
        document.getElementById("contactForm");

    contactForm.addEventListener("submit", (e) => {

        e.preventDefault();

        alert(
            "Obrigado pelo interesse! Sua inscrição foi registrada."
        );

        contactForm.reset();

    });

    /* ==========================
       ANIMAÇÕES DE ENTRADA
    ========================== */

    const observer =
        new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        }, {
            threshold: 0.15
        });

    document.querySelectorAll(".card, .imagem")
        .forEach(el => {

            el.classList.add("hidden");

            observer.observe(el);

        });

    /* ==========================
       BOTÃO VOLTAR AO TOPO
    ========================== */

    const backToTop =
        document.createElement("button");

    backToTop.innerHTML = "↑";

    backToTop.id = "backToTop";

    document.body.appendChild(backToTop);

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            backToTop.classList.add("visible");

        } else {

            backToTop.classList.remove("visible");

        }

    });

});