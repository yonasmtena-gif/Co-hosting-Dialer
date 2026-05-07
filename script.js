const STORAGE_KEY = "cohosting-dialer-contacts-v1";
const DB_NAME = "cohosting-dialer-db";
const DB_STORE = "records";
const DB_RECORD_KEY = "contacts";
const API_URL = "http://127.0.0.1:8765/api/contacts";

const contacts = [
  {
    name: "GT Guest House & Apartments",
    phones: ["+251 913 886 391", "+251 930 011 1199"],
    propertyHistory: "Website: https://www.gtguesthouse.com",
  assessments: [],
  },
  {
    name: "C Fun Addis Hotel",
    phones: ["+251 911 203 563", "+251 930 337 133", "+251 930 337 233"],
    propertyHistory: "Source: Google Maps",
    assessments: [],
  },
  {
    name: "Daylin Guest House",
    phones: ["+251 974 474 545"],
    propertyHistory: "Website: https://daylinguesthouse.com",
    assessments: [],
  },
  {
    name: "Hammer Luxury Guesthouse",
    phones: ["+251 956 650 560"],
    propertyHistory: "Website: https://www.hammerluxuryaddis.com",
    assessments: [],
  },
  {
    name: "Ankober Guest House (Bole)",
    phones: ["+251 929 900 606", "+251 116 23 00 10"],
    propertyHistory: "Website: https://www.ankoberpalace.com",
    assessments: [],
  },
  {
    name: "Liya Guest House",
    phones: ["+251 931 222 727", "+251 913 962 955", "+251 93 674 7234", "+251 95 111 0071"],
    propertyHistory: "Website: https://liyatguesthouse.com",
    assessments: [],
  },
  {
    name: "Miheret Guesthouse",
    phones: ["+251 968 777 700", "+251 116 587 600"],
    propertyHistory: "Website: https://miheretguesthouse.com",
    assessments: [],
  },
  {
    name: "Kefetew Guest House",
    phones: ["+251 913 114 956"],
    propertyHistory: "Website: https://www.kefetew.com",
    assessments: [],
  },
  {
    name: "Tryst Boutique Hotel",
    phones: ["+251 980 554 896"],
    propertyHistory: "Source: Google Maps",
    assessments: [],
  },
  {
    name: "Mazeki Addis Boutique Hotel",
    phones: ["+251 925 78 80 80"],
    propertyHistory: "Source: Expedia information",
    assessments: [],
  },
  {
    name: "Vamos Guest House",
    phones: ["+251 948 323 232"],
    propertyHistory: "Source: Google Maps",
    assessments: [],
  },
  {
    name: "Vamos Addis Hotel",
    phones: ["+251 116 89 03 04"],
    propertyHistory: "Source: https://yandex.com/maps/org/vamos_addis_hotel/114804717379/",
    assessments: [],
  },
  {
    name: "Keba Guest House",
    phones: ["+251 911 111 991", "+251 921 33 28 89", "+251 617 708 7855"],
    propertyHistory: "Website: https://kebaguesthouse.vercel.app/",
    assessments: [],
  },
  {
    name: "Goza Guest House",
    phones: ["+251 92 392 9656"],
    propertyHistory: "Source: Google Maps",
    assessments: [],
  },
  {
    name: "Choice Guest House 2",
    phones: ["+251 911 30 40 40"],
    propertyHistory: "Source: Google Maps",
    assessments: [],
  },
  {
    name: "Happy Guest House",
    phones: ["+251 91 143 8087"],
    propertyHistory: "Source: https://wanderlog.com/place/details/13027098/happy-guest-house--pension",
    assessments: [],
  },
  {
    name: "Kebron Guest House",
    phones: ["+251 92 755 8546"],
    propertyHistory: "Source: Google Maps",
    assessments: [],
  },
  {
    name: "Nigus Boutique Hotel",
    phones: ["+1 855 437 8999"],
    propertyHistory: "Booking support / information page",
    assessments: [],
  },
  {
    name: "Zemilo Hotel Apartment",
    phones: ["+251 116 66 2319", "+251 927 11 11 33", "+251 927 11 11 44"],
    propertyHistory: "Website: https://www.zemilohotelapartment.com",
    assessments: [],
  },
  {
    name: "Adites Guest House",
    phones: ["+251 912 64 8221", "+251 116 68 6131"],
    propertyHistory: "Imported from Call list yordi2",
    assessments: [],
  },
  {
    name: "Shalla Guest House & Wellness Center",
    phones: ["+251 91 308 09 63"],
    propertyHistory: "Imported from Call list yordi2",
    assessments: [],
  },
  {
    name: "Hannan Guesthouse & Restaurant",
    phones: ["+251 11 416 0628", "+251 93 010 5437"],
    propertyHistory: "Imported from Call list yordi2",
    assessments: [],
  },
  {
    name: "Alem Guest House / Pension",
    phones: ["+251 913 88 86 48"],
    propertyHistory: "Imported from Call list yordi2",
    assessments: [],
  },
  {
    name: "Bole Central Apartment",
    phones: ["+251 951 51 51 74"],
    propertyHistory: "Imported from Call list yordi2",
    assessments: [],
  },
  {
    name: "Weygoss Guest House",
    phones: ["+251 115 51 22 05", "+251 929 418 809"],
    propertyHistory: "Imported from Call list yordi2",
    assessments: [],
  },
  {
    name: "Victoria Hotel Apartment",
    phones: ["+251 986 258 222"],
    propertyHistory: "Source: Google Maps",
    assessments: [],
  },
  {
    name: "Denver Boutique Hotel",
    phones: ["+251 111 263485", "+251 982 117 777"],
    propertyHistory: "Imported from Call list yordi2",
    assessments: [],
  },
  {
    name: "70 Dereja Hotel",
    phones: ["+251 929 930 270"],
    propertyHistory: "Website: http://www.70derejahotel.com",
    assessments: [],
  },
  {
    name: "Sarem International Hotel",
    phones: ["+251 111 262 088"],
    propertyHistory: "Website: http://www.saremhotel.com",
    assessments: [],
  },
  {
    name: "Yegna Guest House",
    phones: ["+251 116 392 616"],
    propertyHistory: "Imported from Call list yordi2",
    assessments: [],
  },
  {
    name: "Fenet Pension",
    phones: ["0987564323"],
    propertyHistory: "Imported from Call list yordi2",
    assessments: [],
  },
  {
    name: "Libanos Pension",
    phones: ["+251 911 442 286"],
    propertyHistory: "Imported from Call list yordi2",
    assessments: [],
  },
  {
    name: "Sinte Guesthouse",
    phones: ["+251 116 355 553", "+251 941 42 4333"],
    propertyHistory: "Imported from Call list yordi2",
    assessments: [],
  },
  {
    name: "Birhanu Guest House",
    phones: ["+251 910 15 54 11"],
    propertyHistory: "Imported from Call list yordi2",
    assessments: [],
  },
  {
    name: "Bereket / Fbk Guest House",
    phones: ["+251 970 99 99 97"],
    propertyHistory: "Imported from Call list yordi2",
    assessments: [],
  },
  {
    name: "Capital Hotel and Spa",
    phones: ["+251 116 672 100"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Jupiter International Hotel",
    phones: ["+251 115 526 370"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Ararsa Guesthouse",
    phones: ["+251 913 152 926"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Tazina Guest House",
    phones: ["+251 116 465 905"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Addis Guest House",
    phones: ["+251 116 189 491"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Yedesta Flower Guest House",
    phones: ["+251 114 672 660"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Addis B and B Guest House",
    phones: ["+251 911 456 662"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "De Michael Pension",
    phones: ["+251 111 275 115"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Addis Work Guest House",
    phones: ["+251 116 466 189"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Ebenezer Guest House",
    phones: ["+251 111 231 155"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Gebar Shire Guest House",
    phones: ["+251 344 444 264"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Mimenalu Guest House",
    phones: ["+251 116 180 357"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Ekko Guest House",
    phones: ["+251 115 528 720"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Berf Pension",
    phones: ["+251 576 614 096"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Agge Guest House",
    phones: ["+251 116 638 484"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Toronto Guest House",
    phones: ["+251 116 622 742"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Expats Furnished Apartments",
    phones: ["+251 943 100 055", "+251 922 323 136"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Fournir Properties",
    phones: ["+251 911 123 605", "+251 911 123 831", "+251 982 707 172"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "KirayAddis",
    phones: ["+251 901 565 953", "+251 957 828 292"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Sersa Furnished Apartments",
    phones: ["+251 929 189 630"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Addis Property Listing (Old Airport)",
    phones: ["+251 945 468 824"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Diplomat Luxury Apartments",
    phones: ["+251 113 729 550", "+251 966 118 310"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "My Plaza Apartments",
    phones: ["+251 975 404 044"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Blue Sapphire Tours Rentals",
    phones: ["+251 912 610 367"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Rental Agent (Addis)",
    phones: ["+251 947 346 536"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "BNB Properties",
    phones: ["+251 999 084 808", "+251 980 685 777"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Aymen Furnished Apartment",
    phones: ["+251 966 411 111"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Center Point Addis",
    phones: ["+251 116 625 555"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Alsam Real Estate (Mexico)",
    phones: ["+251 911 202 020"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Live Ethio Real Estate",
    phones: ["+251 911 000 000"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Samson Abera (Rental Agent)",
    phones: ["+251 911 333 444"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Zewditu Furnished Apartments",
    phones: ["+251 911 505 505"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Bole High View Apartments",
    phones: ["+251 911 404 040"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Getfam Hotel Apartments",
    phones: ["+251 116 633 333"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Harmony Furnished Suites",
    phones: ["+251 116 616 999"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Bole Bamboo Apartments",
    phones: ["+251 911 102 030"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Hilton Addis (Apartment Services)",
    phones: ["+251 115 170 000"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Sheraton Addis (Long-term)",
    phones: ["+251 115 171 717"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Grand Palace Hotel Apartments",
    phones: ["+251 115 506 677"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Elilly International (Suites)",
    phones: ["+251 115 587 777"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Monarch Hotel Apartments",
    phones: ["+251 116 620 088"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Friendship International Apartments",
    phones: ["+251 116 182 233"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Saro Maria Hotel Apartments",
    phones: ["+251 116 670 200"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Ramada Addis (Serviced)",
    phones: ["+251 116 392 020"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Hyatt Regency Apartments",
    phones: ["+251 115 171 234"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Mado Hotel (Furnished)",
    phones: ["+251 116 621 111"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Edna Mall Apartments",
    phones: ["+251 911 223 344"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Waryt Real Estate",
    phones: ["+251 114 650 000"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Sunshine Real Estate (Rentals)",
    phones: ["+251 115 515 151"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Ayat Real Estate (Furnished)",
    phones: ["+251 116 612 255"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Gift Real Estate",
    phones: ["+251 116 611 111"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Flintstone Homes (Rentals)",
    phones: ["+251 116 614 444"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Tsehay Real Estate",
    phones: ["+251 911 000 001"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Noah Real Estate",
    phones: ["+251 911 000 002"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Nigist Towers Guest House",
    phones: ["+251 115 509 770"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Silus Guest House",
    phones: ["+251 111 558 833"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
  {
    name: "Bole Guest House",
    phones: ["+251 911 209 516"],
    propertyHistory: "Imported from Guest house call list",
    assessments: [],
  },
];

const contactList = document.querySelector("#contact-list");
const contactName = document.querySelector("#contact-name");
const contactPhones = document.querySelector("#contact-phones");
const propertyHistory = document.querySelector("#property-history");
const dashboardPanel = document.querySelector(".dashboard-panel");
const search = document.querySelector("#search");
const startCall = document.querySelector("#start-call");
const timer = document.querySelector("#timer");
const callStatus = document.querySelector("#call-status");
const waveform = document.querySelector("#waveform");
const assessmentForm = document.querySelector("#assessment-form");
const historyView = document.querySelector("#history-view");
const historyList = document.querySelector("#history-list");
const historySummary = document.querySelector("#history-summary");
const assessmentTab = document.querySelector("#assessment-tab");
const historyTab = document.querySelector("#history-tab");
const openDrawer = document.querySelector("#open-drawer");
const closeDrawer = document.querySelector("#close-drawer");
const sidebar = document.querySelector("#contact-sidebar");
const drawerBackdrop = document.querySelector("#drawer-backdrop");
const locationSelect = document.querySelector("#location");
const otherLocationWrap = document.querySelector("#other-location-wrap");
const otherLocationInput = document.querySelector("#other-location");
const elevatorOption = document.querySelector("#elevator-option");
const furnishingFieldset = document.querySelector("#furnishing-fieldset");
const exportCsvButton = document.querySelector("#export-csv");
const exportJsonButton = document.querySelector("#export-json");

let activeIndex = 0;
let callStartedAt = null;
let timerId = null;

function formatPhone(phone) {
  return phone;
}

function telHref(phone) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

function primaryPhone(contact) {
  return contact.phones[0];
}

function databasePayload() {
  return contacts.map((contact) => ({
    name: contact.name,
    phones: contact.phones,
    propertyHistory: contact.propertyHistory,
    assessments: contact.assessments,
  }));
}

function openDatabase() {
  return new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) {
      reject(new Error("IndexedDB is not available."));
      return;
    }

    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      request.result.createObjectStore(DB_STORE);
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function readIndexedDatabase() {
  const database = await openDatabase();

  return new Promise((resolve, reject) => {
    const transaction = database.transaction(DB_STORE, "readonly");
    const store = transaction.objectStore(DB_STORE);
    const request = store.get(DB_RECORD_KEY);

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
    transaction.oncomplete = () => database.close();
  });
}

async function writeIndexedDatabase(payload) {
  const database = await openDatabase();

  return new Promise((resolve, reject) => {
    const transaction = database.transaction(DB_STORE, "readwrite");
    const store = transaction.objectStore(DB_STORE);
    const request = store.put(payload, DB_RECORD_KEY);

    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
    transaction.oncomplete = () => database.close();
  });
}

function mergeSavedContacts(savedContacts) {
  if (!Array.isArray(savedContacts)) return;

  for (const contact of contacts) {
    const savedContact = savedContacts.find((item) => item.name === contact.name);
    if (savedContact) {
      contact.assessments = Array.isArray(savedContact.assessments) ? savedContact.assessments : [];
    }
  }
}

async function readServerDatabase() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Could not read local database server.");
  }
  return response.json();
}

async function writeServerDatabase(payload) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Could not write local database server.");
  }
}

async function loadDatabase() {
  let savedContacts = null;

  try {
    savedContacts = await readServerDatabase();
  } catch (error) {
    console.warn("Could not load local database server, using browser backup.", error);
  }

  try {
    savedContacts = savedContacts || (await readIndexedDatabase());
  } catch (error) {
    console.warn("Could not load IndexedDB database, using backup storage.", error);
  }

  if (!savedContacts) {
    const saved = localStorage.getItem(STORAGE_KEY);
    savedContacts = saved ? JSON.parse(saved) : null;
  }

  mergeSavedContacts(savedContacts);
}

async function saveDatabase() {
  const payload = databasePayload();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));

  try {
    await writeServerDatabase(payload);
  } catch (error) {
    console.warn("Could not save local database server; browser backup was updated.", error);
  }

  try {
    await writeIndexedDatabase(payload);
  } catch (error) {
    console.warn("Could not save IndexedDB database; backup storage was updated.", error);
  }
}

function getCheckedValues(formData, key) {
  return formData.getAll(key).filter(Boolean);
}

function formatList(values) {
  return values.length ? values.join(", ") : "None selected";
}

function latestAssessment(contact) {
  return contact.assessments.at(-1);
}

function resultClass(callResult) {
  if (callResult === "Connected: Interested") return "result-interested";
  if (callResult === "Connected: Not Interested") return "result-not-interested";
  if (callResult === "No Answer") return "result-no-answer";
  if (callResult === "Follow-up") return "result-follow-up";
  return "";
}

function renderContacts() {
  const query = search.value.trim().toLowerCase();
  contactList.innerHTML = "";

  contacts
    .map((contact, index) => ({ contact, index }))
    .filter(({ contact }) => {
      const haystack = `${contact.name} ${contact.phones.join(" ")} ${contact.propertyHistory}`.toLowerCase();
      return haystack.includes(query);
    })
    .forEach(({ contact, index }) => {
      const button = document.createElement("button");
      const latest = latestAssessment(contact);
      button.className = `contact-item ${latest ? resultClass(latest.callResult) : ""}${index === activeIndex ? " active" : ""}`;
      button.type = "button";
      button.innerHTML = `
        <strong>${contact.name}</strong>
        <span>${contact.phones.map(formatPhone).join(" / ")}</span>
        <span>${contact.propertyHistory}</span>
        ${latest ? `<span class="result-label">${latest.callResult}</span>` : ""}
      `;
      button.addEventListener("click", () => {
        setActiveContact(index);
        closeMobileDrawer();
        if (window.matchMedia("(max-width: 980px)").matches) {
          dashboardPanel.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
      contactList.appendChild(button);
    });
}

function setActiveContact(index) {
  activeIndex = index;
  const contact = contacts[activeIndex];

  contactName.textContent = contact.name;
  contactPhones.innerHTML = contact.phones
    .map((phone) => `<a class="phone-link" href="${telHref(phone)}">${formatPhone(phone)}</a>`)
    .join("");
  startCall.href = telHref(primaryPhone(contact));
  propertyHistory.textContent = contact.propertyHistory;
  assessmentForm.reset();
  syncSmartFields();
  showTab("assessment");
  stopTimer();
  renderContacts();
}

function updateTimer() {
  if (!callStartedAt) return;

  const elapsed = Math.floor((Date.now() - callStartedAt) / 1000);
  const minutes = String(Math.floor(elapsed / 60)).padStart(2, "0");
  const seconds = String(elapsed % 60).padStart(2, "0");
  timer.textContent = `${minutes}:${seconds}`;
}

function startTimer() {
  callStartedAt = Date.now();
  clearInterval(timerId);
  timerId = setInterval(updateTimer, 1000);
  updateTimer();
  callStatus.textContent = "Call Live";
  callStatus.classList.add("live");
  waveform.classList.add("active");
}

function stopTimer() {
  clearInterval(timerId);
  timerId = null;
  callStartedAt = null;
  timer.textContent = "00:00";
  callStatus.textContent = "Ready";
  callStatus.classList.remove("live");
  waveform.classList.remove("active");
}

async function saveAssessment(event) {
  event.preventDefault();

  const formData = new FormData(assessmentForm);
  const selectedLocation = formData.get("location");
  const propertyType = formData.get("propertyType");
  const assessment = {
    savedAt: new Date().toLocaleString(),
    callResult: formData.get("callResult"),
    location: selectedLocation === "Other" ? formData.get("otherLocation") || "Other" : selectedLocation,
    propertyType,
    offers: getCheckedValues(formData, "offers"),
    furnishing: propertyType === "Hotel" ? "Not needed for hotel" : formData.get("furnishing") || "Not selected",
    price: formData.get("price") || "Not provided",
  };

  contacts[activeIndex].assessments.push(assessment);
  await saveDatabase();
  renderHistory();

  const nextIndex = (activeIndex + 1) % contacts.length;
  setActiveContact(nextIndex);
}

function exportRows() {
  return contacts.flatMap((contact) =>
    contact.assessments.map((assessment, index) => ({
      contactName: contact.name,
      phones: contact.phones.join(" / "),
      source: contact.propertyHistory,
      assessmentNumber: index + 1,
      savedAt: assessment.savedAt,
      callResult: assessment.callResult,
      location: assessment.location,
      propertyType: assessment.propertyType,
      offers: formatList(assessment.offers),
      furnishing: assessment.furnishing,
      price: assessment.price,
    }))
  );
}

function csvValue(value) {
  return `"${String(value ?? "").replaceAll('"', '""')}"`;
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function exportCsv() {
  const rows = exportRows();
  const headers = [
    "Contact Name",
    "Phones",
    "Source",
    "Assessment Number",
    "Saved At",
    "Call Result",
    "Location",
    "Property Type",
    "Offers",
    "Furnishing",
    "Price",
  ];
  const keys = [
    "contactName",
    "phones",
    "source",
    "assessmentNumber",
    "savedAt",
    "callResult",
    "location",
    "propertyType",
    "offers",
    "furnishing",
    "price",
  ];
  const csv = [headers.map(csvValue).join(",")]
    .concat(rows.map((row) => keys.map((key) => csvValue(row[key])).join(",")))
    .join("\n");

  downloadFile("cohosting-call-data.csv", csv, "text/csv");
}

function exportJson() {
  downloadFile("cohosting-call-data.json", JSON.stringify(exportRows(), null, 2), "application/json");
}

function renderHistory() {
  historyList.innerHTML = "";

  const savedContacts = contacts.filter((contact) => contact.assessments.length);
  const savedCallCount = contacts.reduce((total, contact) => total + contact.assessments.length, 0);
  historySummary.textContent = `Saved calls: ${savedCallCount}`;

  if (!savedContacts.length) {
    historyList.innerHTML = '<div class="empty-state">No saved call history yet.</div>';
    return;
  }

  for (const contact of savedContacts) {
    const latest = contact.assessments.at(-1);
    const card = document.createElement("article");
    card.className = "history-card";
    card.innerHTML = `
      <h3>${contact.name}</h3>
      <p><strong>Phone:</strong> ${contact.phones.map(formatPhone).join(" / ")}</p>
      <p><strong>Saved:</strong> ${latest.savedAt}</p>
      <p><strong>Call Result:</strong> ${latest.callResult}</p>
      <p><strong>Location:</strong> ${latest.location}</p>
      <p><strong>Type:</strong> ${latest.propertyType}</p>
      <p><strong>Offers:</strong> ${formatList(latest.offers)}</p>
      <p><strong>Furnishing:</strong> ${latest.furnishing}</p>
      <p><strong>Price:</strong> ${latest.price}</p>
    `;
    historyList.appendChild(card);
  }
}

function syncSmartFields() {
  const selectedLocation = locationSelect.value;
  const propertyType = new FormData(assessmentForm).get("propertyType");

  otherLocationWrap.hidden = selectedLocation !== "Other";
  otherLocationInput.required = selectedLocation === "Other";
  if (selectedLocation !== "Other") {
    otherLocationInput.value = "";
  }

  const hideElevator = propertyType === "Villa";
  elevatorOption.classList.toggle("smart-hidden", hideElevator);
  if (hideElevator) {
    elevatorOption.querySelector("input").checked = false;
  }

  const hideFurnishing = propertyType === "Hotel";
  furnishingFieldset.classList.toggle("smart-hidden", hideFurnishing);
  if (hideFurnishing) {
    furnishingFieldset.querySelectorAll("input").forEach((input) => {
      input.checked = false;
    });
  }
}

function showTab(tabName) {
  const showHistory = tabName === "history";
  assessmentForm.hidden = showHistory;
  historyView.hidden = !showHistory;
  assessmentTab.classList.toggle("active", !showHistory);
  historyTab.classList.toggle("active", showHistory);
  assessmentTab.setAttribute("aria-selected", String(!showHistory));
  historyTab.setAttribute("aria-selected", String(showHistory));
}

function openMobileDrawer() {
  sidebar.classList.add("open");
  drawerBackdrop.hidden = false;
}

function closeMobileDrawer() {
  sidebar.classList.remove("open");
  drawerBackdrop.hidden = true;
}

search.addEventListener("input", renderContacts);
startCall.addEventListener("click", startTimer);
assessmentForm.addEventListener("submit", saveAssessment);
assessmentForm.addEventListener("change", syncSmartFields);
assessmentTab.addEventListener("click", () => showTab("assessment"));
historyTab.addEventListener("click", () => showTab("history"));
exportCsvButton.addEventListener("click", exportCsv);
exportJsonButton.addEventListener("click", exportJson);
openDrawer.addEventListener("click", openMobileDrawer);
closeDrawer.addEventListener("click", closeMobileDrawer);
drawerBackdrop.addEventListener("click", closeMobileDrawer);

async function init() {
  await loadDatabase();
  renderContacts();
  renderHistory();
  setActiveContact(0);
}

init();
