const translations = {
  ka: {
    title: "ტაქსის გადახდა",
    contactText: "დამიკავშირდით ან ეწვიეთ ჩემს გვერდს",
  facebookBtn: "Facebook",
  whatsappBtn: "WhatsApp",
    choose: "აირჩიეთ ბანკი",
    BOG: "საქართველოს ბანკი",
    TBC: "თიბისი ბანკი",
    LIB: "ლიბერთი ბანკი",
    back: "უკან",
    receiver: "მიმღები",
    person: "ბაჩანა კუპრეიშვილი",
    iban: "ანგარიშის ნომერი",
    copy: "ანგარიშის ნომრის ასლის გაკეთება",
    pay: "განახორციელეთ ჩარიცხვა",
    how: "როგორ მუშაობს?",
    step1: "აირჩიეთ ბანკი",
    step2: "დააკოპირეთ ანგარიშის ნომერი",
    step3: "გახსენით ბანკის აპლიკაცია",
    step4: "ჩასვით ნომერი, შეიყვანეთ თანხა და დაადასტურეთ"
  },
  en: {
    title: "Taxi Payment",
    contactText: "Contact me or visit my page",
    facebookBtn: "Facebook",
    whatsappBtn: "WhatsApp",
    choose: "Choose a bank",
    BOG: "Bank of Georgia",
    TBC: "TBC bank",
    LIB: "Liberty Bank",
    back: "Back",
    receiver: "Receiver",
    person: "Bachana Kupreishvili",
    iban: "Account number",
    copy: "Copy account number",
    pay: "Make transfer",
    how: "How does it work?",
    step1: "Choose a bank",
    step2: "Copy the account number",
    step3: "Open your bank app",
    step4: "Paste, enter amount and confirm"
  },
  ru: {
    title: "Оплата такси",
    contactText: "Свяжитесь со мной или посетите страницу",
    facebookBtn: "Facebook",
    whatsappBtn: "WhatsApp",
    choose: "Выберите банк",
    BOG: "Банк Грузии",
    TBC: "ТБС Банк",
    LIB: "Либерти Банк",
    back: "Назад",
    receiver: "Получатель",
    person: "Бачана Купреишвили",
    iban: "Номер счёта",
    copy: "Скопировать номер счёта",
    pay: "Осуществить перевод",
    how: "Как это работает?",
    step1: "Выберите банк",
    step2: "Скопируйте номер счёта",
    step3: "Откройте банковское приложение",
    step4: "Вставьте номер, введите сумму и подтвердите"
  }
};

function setLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = translations[lang][el.dataset.i18n];
  });
  localStorage.setItem("lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  setLang(localStorage.getItem("lang") || "ka");
});
