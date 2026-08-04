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
    /* Tạo sao băng */

  function createShootingStars() {
    const starsContainer = document.getElementById("stars");

    if (
      !starsContainer ||
      starsContainer.querySelector(".shooting-star")
    ) {
      return;
    }

    const isMobile = window.matchMedia(
      "(max-width: 720px)"
    ).matches;

    const shootingStarCount = isMobile ? 4 : 7;

    for (let i = 0; i < shootingStarCount; i++) {
      const shootingStar = document.createElement("span");
      const duration = 8 + Math.random() * 7;

      shootingStar.className = "shooting-star";
      shootingStar.setAttribute("aria-hidden", "true");

      shootingStar.style.setProperty(
        "--shoot-top",
        `${5 + Math.random() * 50}%`
      );

      shootingStar.style.setProperty(
        "--shoot-duration",
        `${duration}s`
      );

      shootingStar.style.setProperty(
        "--shoot-delay",
        `-${Math.random() * duration}s`
      );

      starsContainer.appendChild(shootingStar);
    }
  }

  createShootingStars();
    /* ===== Gói hiệu ứng động ===== */

  function addDynamicEffects() {
    const reduceMotion = false;

    /* Thanh tiến trình cuộn */

    const scrollProgress = document.createElement("div");
    scrollProgress.className = "scroll-progress";
    scrollProgress.setAttribute("aria-hidden", "true");
    document.body.appendChild(scrollProgress);

    let scrollTicking = false;

    function updateScrollProgress() {
      const pageHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        pageHeight > 0
          ? (window.scrollY / pageHeight) * 100
          : 0;

      scrollProgress.style.width = `${progress}%`;
      scrollTicking = false;
    }

    window.addEventListener(
      "scroll",
      function () {
        if (!scrollTicking) {
          requestAnimationFrame(updateScrollProgress);
          scrollTicking = true;
        }
      },
      { passive: true }
    );

    setTimeout(updateScrollProgress, 100);

    if (reduceMotion) return;

    /* Bong bóng ánh sáng */

    const orbLayer = document.createElement("div");
    const isMobile = window.matchMedia(
      "(max-width: 720px)"
    ).matches;

    const orbCount = isMobile ? 7 : 13;
    const orbColors = [
      "rgba(62, 194, 255, 0.9)",
      "rgba(142, 105, 255, 0.85)",
      "rgba(255, 101, 183, 0.8)",
      "rgba(255, 224, 120, 0.75)"
    ];

    orbLayer.className = "ambient-orb-layer";
    orbLayer.setAttribute("aria-hidden", "true");

    for (let i = 0; i < orbCount; i++) {
      const orb = document.createElement("span");
      const color =
        orbColors[Math.floor(Math.random() * orbColors.length)];
      const duration = 7 + Math.random() * 8;

      orb.className = "ambient-orb";

      orb.style.setProperty(
        "--orb-left",
        `${Math.random() * 100}%`
      );

      orb.style.setProperty(
        "--orb-top",
        `${Math.random() * 100}%`
      );

      orb.style.setProperty(
        "--orb-size",
        `${7 + Math.random() * 22}px`
      );

      orb.style.setProperty(
        "--orb-x",
        `${Math.random() * 100 - 50}px`
      );

      orb.style.setProperty(
        "--orb-y",
        `${Math.random() * 130 - 65}px`
      );

      orb.style.setProperty(
        "--orb-duration",
        `${duration}s`
      );

      orb.style.setProperty(
        "--orb-delay",
        `-${Math.random() * duration}s`
      );

      orb.style.background =
        `radial-gradient(circle at 35% 35%, ` +
        `#ffffff, ${color} 32%, transparent 72%)`;

      orbLayer.appendChild(orb);
    }

    document.body.appendChild(orbLayer);

    /* Hạt sáng khi nhấp màn hình */

    const sparkSymbols = ["✦", "✧", "💙", "💜", "🌸"];

    document.addEventListener("click", function (event) {
      if (
        event.target.closest &&
        event.target.closest("#finalHeart")
      ) {
        return;
      }

      if (event.clientX === 0 && event.clientY === 0) return;

      const sparkCount = isMobile ? 5 : 8;

      for (let i = 0; i < sparkCount; i++) {
        const spark = document.createElement("span");
        const angle =
          (Math.PI * 2 * i) / sparkCount +
          Math.random() * 0.35;

        const distance = 35 + Math.random() * 55;

        spark.className = "tap-spark";
        spark.textContent =
          sparkSymbols[
            Math.floor(Math.random() * sparkSymbols.length)
          ];

        spark.style.setProperty(
          "--spark-left",
          `${event.clientX}px`
        );

        spark.style.setProperty(
          "--spark-top",
          `${event.clientY}px`
        );

        spark.style.setProperty(
          "--spark-x",
          `${Math.cos(angle) * distance}px`
        );

        spark.style.setProperty(
          "--spark-y",
          `${Math.sin(angle) * distance}px`
        );

        spark.style.setProperty(
          "--spark-spin",
          `${Math.random() * 180 - 90}deg`
        );

        spark.style.setProperty(
          "--spark-size",
          `${11 + Math.random() * 8}px`
        );

        document.body.appendChild(spark);

        setTimeout(function () {
          spark.remove();
        }, 900);
      }
    });

    /* Nút có sóng sáng */

    const rippleButtons = document.querySelectorAll(
      ".primary-button, .envelope-button, #musicButton"
    );

    rippleButtons.forEach(function (button) {
      button.addEventListener("pointerdown", function (event) {
        const rectangle = button.getBoundingClientRect();
        const ripple = document.createElement("span");

        ripple.className = "button-ripple";
        ripple.style.left =
          `${event.clientX - rectangle.left}px`;
        ripple.style.top =
          `${event.clientY - rectangle.top}px`;

        button.appendChild(ripple);

        setTimeout(function () {
          ripple.remove();
        }, 750);
      });
    });

    /* Làm số bộ đếm nảy */

    ["days", "hours", "minutes", "seconds"].forEach(
      function (id) {
        const numberElement = document.getElementById(id);

        if (!numberElement) return;

        const numberObserver = new MutationObserver(function () {
          numberElement.classList.remove("counter-pop");
          void numberElement.offsetWidth;
          numberElement.classList.add("counter-pop");
        });

        numberObserver.observe(numberElement, {
          childList: true
        });
      }
    );

    /* Hiện từng phần khi cuộn */

    document.body.classList.add("motion-ready");

    const motionSections = document.querySelectorAll(
      "#mainContent section"
    );

    if ("IntersectionObserver" in window) {
      const motionObserver = new IntersectionObserver(
        function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("motion-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.08
        }
      );

      motionSections.forEach(function (section, index) {
        section.classList.add("motion-section");
        section.style.setProperty(
          "--motion-delay",
          `${(index % 3) * 90}ms`
        );

        motionObserver.observe(section);
      });
    } else {
      motionSections.forEach(function (section) {
        section.classList.add(
          "motion-section",
          "motion-visible"
        );
      });
    }

    /* Thẻ nghiêng theo chuột */

    if (window.matchMedia("(pointer: fine)").matches) {
      const motionCards = document.querySelectorAll(
        ".content-card, .wish-card, .timeline-item, .final-message"
      );

      motionCards.forEach(function (card) {
        card.classList.add("motion-card");

        card.addEventListener("pointermove", function (event) {
          const rectangle = card.getBoundingClientRect();

          const x =
            (event.clientX - rectangle.left) /
            rectangle.width;

          const y =
            (event.clientY - rectangle.top) /
            rectangle.height;

          const rotateY = (x - 0.5) * 7;
          const rotateX = (0.5 - y) * 7;

          card.style.transform =
            `perspective(900px) ` +
            `rotateX(${rotateX}deg) ` +
            `rotateY(${rotateY}deg) ` +
            `translateY(-4px)`;
        });

        card.addEventListener("pointerleave", function () {
          card.style.transform =
            "perspective(900px) rotateX(0) rotateY(0)";
        });
      });
    }
  }

  addDynamicEffects();
  
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
