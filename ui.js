const root = document.documentElement;

function setTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

document.addEventListener("DOMContentLoaded", () => {
  setTheme(localStorage.getItem("theme") || "dark");

  document.querySelectorAll(".bank-card").forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("active");
    });
  });
});

function toggleTheme() {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  setTheme(next);
}

function toggleLang() {
  const langs = ["ka", "en", "ru"];
  const current = localStorage.getItem("lang") || "ka";
  const next = langs[(langs.indexOf(current) + 1) % langs.length];
  setLang(next);
}

function copyIBAN(id) {
  navigator.clipboard.writeText(document.getElementById(id).innerText);
  alert("Copied");
}

function openBank(bank) {
  const ua = navigator.userAgent.toLowerCase();
  const isAndroid = /android/.test(ua);

  const banks = {
    bog: {
      android: "intent://#Intent;package=ge.bog.mobilebank;end",
      web: "https://bog.ge"
    },
    bogKids: {
      android: "intent://#Intent;package=ge.bog.mbankjunior;end",
      web: "https://bog.ge/kids"
    },
    tbc: {
      android: "intent://#Intent;package=ge.tbc.mobilebank;end",
      web: "https://www.tbcbank.ge"
    },
    liberty: {
      android: "https://libertybank.ge/ka/",
      web: "https://libertybank.ge/ka/"
    }
  };

  const link = isAndroid ? banks[bank].android : banks[bank].web;
  window.location.href = link;
}
