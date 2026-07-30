        let slideIndex = 0;
        showSlides();

        function showSlides() {
            let slides = document.getElementsByClassName("slide");

            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1; }

            slides[slideIndex - 1].style.display = "block";
            setTimeout(showSlides, 2000);
        }


    // SET TARGET DATE (change if needed)
    const endDate = new Date("December 19, 2025 00:00:00").getTime();

    function countdown() {
        const now = new Date().getTime();
        const diff = endDate - now;

        if (diff <= 0) {
            document.querySelector("#hour1 span").innerText = "0";
            document.querySelector("#hour2 span").innerText = "0";
            document.querySelector("#minute1 span").innerText = "0";
            document.querySelector("#minute2 span").innerText = "0";
            document.querySelector("#seconds1 span").innerText = "0";
            document.querySelector("#seconds2 span").innerText = "0";
            return;
        }

        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        const h = hours.toString().padStart(2, "0");
        const m = minutes.toString().padStart(2, "0");
        const s = seconds.toString().padStart(2, "0");

        document.querySelector("#hour1 span").innerText = h[0];
        document.querySelector("#hour2 span").innerText = h[1];

        document.querySelector("#minute1 span").innerText = m[0];
        document.querySelector("#minute2 span").innerText = m[1];

        document.querySelector("#seconds1 span").innerText = s[0];
        document.querySelector("#seconds2 span").innerText = s[1];
    }

    setInterval(countdown, 1000);
    countdown();
