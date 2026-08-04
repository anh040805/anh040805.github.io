"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const welcome = document.getElementById("welcome");
  const openGift = document.getElementById("openGift");
  const mainContent = document.getElementById("mainContent");

  const musicButton = document.getElementById("musicButton");
  const musicText = document.getElementById("musicText");
  const musicPlayer = document.getElementById("musicPlayer");

  const openLetter = document.getElementById("openLetter");
  const loveLetter = document.getElementById("loveLetter");

  const finalHeart = document.getElementById("finalHeart");
  const heartInstruction = document.getElementById("heartInstruction");
  const finalMessage = document.getElementById("finalMessage");

  /* Tạo những ngôi sao trên nền */

  function createStars() {
    const starsContainer = document.getElementById("stars");

    if (!starsContainer) return;

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < 100; i++) {
      const star = document.createElement("span");
      const size = Math.random() * 2.8 + 1;
      const duration = Math.random() * 3 + 2;
      const delay = Math.random() * 4;

      star.className = "star";
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.setProperty("--size", `${size}px`);
      star.style.setProperty("--duration", `${duration}s`);
      star.style.setProperty("--delay", `${delay}s`);

      fragment.appendChild(star);
    }

    starsContainer.appendChild(fragment);
  }

  createStars();

  /* Bộ đếm thời gian từ ngày 13/04/2026 */

  const startDate = new Date("2026-04-13T00:00:00+07:00").getTime();

  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");

  function addZero(number) {
    return String(number).padStart(2, "0");
  }

  function updateLoveCounter() {
    const now = Date.now();
    const elapsedTime = Math.max(now - startDate, 0);

    const oneSecond = 1000;
    const oneMinute = oneSecond * 60;
    const oneHour = oneMinute * 60;
    const oneDay = oneHour * 24;

    const days = Math.floor(elapsedTime / oneDay);
    const hours = Math.floor((elapsedTime % oneDay) / oneHour);
    const minutes = Math.floor((elapsedTime % oneHour) / oneMinute);
    const seconds = Math.floor((elapsedTime % oneMinute) / oneSecond);

    if (daysElement) daysElement.textContent = days;
    if (hoursElement) hoursElement.textContent = addZero(hours);
    if (minutesElement) minutesElement.textContent = addZero(minutes);
    if (secondsElement) secondsElement.textContent = addZero(seconds);
  }
  /* Tạo hoa, lá và tim bay */

  function createFlowerLayer() {
    if (document.querySelector(".flower-layer")) return;

    const flowerLayer = document.createElement("div");
    const decorations = [
      "🌸",
      "🌼",
      "🪻",
      "🌷",
      "🌿",
      "💙",
      "💜",
      "✨"
    ];

    const isMobile = window.matchMedia(
      "(max-width: 720px)"
    ).matches;

    const flowerCount = isMobile ? 14 : 24;

    flowerLayer.className = "flower-layer";
    flowerLayer.setAttribute("aria-hidden", "true");

    for (let i = 0; i < flowerCount; i++) {
      const flower = document.createElement("span");
      const duration = 11 + Math.random() * 9;

      flower.className = "floating-flower";
      flower.textContent =
        decorations[
          Math.floor(Math.random() * decorations.length)
        ];

      flower.style.setProperty(
        "--left",
        `${Math.random() * 100}%`
      );

      flower.style.setProperty(
        "--flower-size",
        `${14 + Math.random() * 16}px`
      );

      flower.style.setProperty(
        "--drift",
        `${Math.random() * 100 - 50}px`
      );

      flower.style.setProperty(
        "--drift-back",
        `${Math.random() * 100 - 50}px`
      );

      flower.style.animationDuration = `${duration}s`;
      flower.style.animationDelay =
        `-${Math.random() * duration}s`;

      flowerLayer.appendChild(flower);
    }

    document.body.appendChild(flowerLayer);
  }

  createFlowerLayer();
  updateLoveCounter();
  setInterval(updateLoveCounter, 1000);

  /* Điều khiển bài Có Em */

  const defaultMusicSource =
    "https://www.youtube.com/embed/DcCISK3sCYg?autoplay=1&loop=1&playlist=DcCISK3sCYg&controls=0";

  let musicPlaying = false;

  function playMusic() {
    if (!musicPlayer) return;

    const musicSource =
      musicPlayer.getAttribute("data-src") || defaultMusicSource;

    musicPlayer.setAttribute("src", musicSource);
    musicPlaying = true;

    if (musicText) {
      musicText.textContent = "Tắt nhạc";
    }

    if (musicButton) {
      musicButton.setAttribute("aria-pressed", "true");
    }
  }

  function stopMusic() {
    if (!musicPlayer) return;

    musicPlayer.removeAttribute("src");
    musicPlaying = false;

    if (musicText) {
      musicText.textContent = "Bật nhạc";
    }

    if (musicButton) {
      musicButton.setAttribute("aria-pressed", "false");
    }
  }

  if (musicButton) {
    musicButton.addEventListener("click", function () {
      if (musicPlaying) {
        stopMusic();
      } else {
        playMusic();
      }
    });
  }

  /* Mở món quà */

  if (openGift) {
    openGift.addEventListener("click", function () {
      if (welcome) {
        welcome.hidden = true;
      }

      if (mainContent) {
        mainContent.hidden = false;
      }

      window.scrollTo({
        top: 0,
        behavior: "auto"
      });

      playMusic();
    });
  }

  /* Mở lá thư */

  if (openLetter) {
    openLetter.addEventListener("click", function () {
      openLetter.hidden = true;

      if (loveLetter) {
        loveLetter.hidden = false;

        setTimeout(function () {
          loveLetter.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });
        }, 100);
      }
    });
  }

  /* Hiệu ứng xuất hiện khi cuộn */

  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12
      }
    );

    revealElements.forEach(function (element) {
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach(function (element) {
      element.classList.add("visible");
    });
  }

  /* Hiệu ứng trái tim cuối trang */

  function createHeartParticles() {
    if (!finalHeart) return;

    const heartPosition = finalHeart.getBoundingClientRect();
    const centerX = heartPosition.left + heartPosition.width / 2;
    const centerY = heartPosition.top + heartPosition.height / 2;

    const symbols = [
  "💙",
  "💜",
  "🩷",
  "🌸",
  "🌼",
  "🪻",
  "✨",
  "💫"
];

    for (let i = 0; i < 24; i++) {
      const particle = document.createElement("span");
      const angle = (Math.PI * 2 * i) / 24 + Math.random() * 0.3;
      const distance = 90 + Math.random() * 170;
      const moveX = Math.cos(angle) * distance;
      const moveY = Math.sin(angle) * distance;
      const rotation = Math.random() * 240 - 120;

      particle.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

      particle.style.position = "fixed";
      particle.style.left = `${centerX}px`;
      particle.style.top = `${centerY}px`;
      particle.style.zIndex = "9999";
      particle.style.fontSize = `${14 + Math.random() * 18}px`;
      particle.style.pointerEvents = "none";

      document.body.appendChild(particle);

      const animation = particle.animate(
        [
          {
            opacity: 1,
            transform: "translate(-50%, -50%) scale(0.4)"
          },
          {
            opacity: 0,
            transform:
              `translate(calc(-50% + ${moveX}px), ` +
              `calc(-50% + ${moveY}px)) ` +
              `rotate(${rotation}deg) scale(1.3)`
          }
        ],
        {
          duration: 1100 + Math.random() * 700,
          easing: "cubic-bezier(0.17, 0.67, 0.34, 1)"
        }
      );

      animation.onfinish = function () {
        particle.remove();
      };
    }
  }

    /* Nhấp trái tim đủ 8 lần */

  const heartMessages = [
    "Lần 1/8: Một cái nhấp nhẹ từ bà chã 💙",
    "Lần 2/8: Bấy bì của anh giỏi quá =))))",
    "Lần 3/8: Nhấp tiếp đi, chưa tới bí mật đâu 😚",
    "Lần 4/8: Gần 4 tháng của hai đứa mình đó ✨",
    "Lần 5/8: Hơn nửa đường rồi nè bà chã 👀",
    "Lần 6/8: Anh yêu Duyên nhiều lắm đó 💙",
    "Lần 7/8: Còn đúng một lần cuối thôi!",
    "Lần 8/8: Anh yêu bà chã Duyên nhất ❤️"
  ];

  let heartClickCount = 0;

  if (heartInstruction) {
    heartInstruction.textContent =
      "Nhấp vào trái tim 8 lần đi bà chã 💙 (0/8)";
    heartInstruction.hidden = false;
  }

  if (finalMessage) {
    finalMessage.hidden = true;
  }

  if (finalHeart) {
    finalHeart.addEventListener("click", function () {
      if (heartClickCount >= heartMessages.length) {
        return;
      }

      heartClickCount += 1;

      createHeartParticles();

      finalHeart.animate(
        [
          { transform: "scale(1)" },
          { transform: "scale(1.25)" },
          { transform: "scale(1)" }
        ],
        {
          duration: 350,
          easing: "ease-out"
        }
      );

      if (heartInstruction) {
        heartInstruction.hidden = false;
        heartInstruction.textContent =
          heartMessages[heartClickCount - 1];
      }

      if (heartClickCount === heartMessages.length) {
        if (finalMessage) {
          finalMessage.hidden = false;
        }

        finalHeart.setAttribute(
          "aria-label",
          "Đã nhấp đủ 8 lần"
        );

        finalHeart.style.cursor = "default";
      }
    });
  }
});
