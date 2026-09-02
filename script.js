/* =========================================================
   SUZAN ROYALE — FIVE-STAR LUXURY HOTEL & HOSPITALITY
   Unified Master Interactive Script
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  /* =======================================================
     1. ROOMS MASTER DATABASE
     ======================================================= */
  const ROOMS_DATA = {
    deluxe: {
      type: "deluxe",
      name: "Deluxe Room",
      category: "Deluxe Collection",
      rateNum: 18000,
      price: "₹18,000 / night",
      size: "520 sq.ft.",
      guests: "2 Guests",
      description:
        "A serene retreat with a plush king bed, soft ambient lighting, custom walnut furnishings and a tranquil city outlook.",
      images: [
        "assets/rooms/deluxe-1.jpg",
        "assets/rooms/deluxe-2.jpg",
        "assets/rooms/deluxe-3.jpg"
      ],
      amenities: [
        "Plush King Bed",
        "Italian Marble Bath",
        "Quiet City Outlook",
        "High-Speed Fiber Wi-Fi",
        "24/7 Room Service",
        "Aromatherapy Pillow Menu"
      ]
    },
    executive: {
      type: "executive",
      name: "Executive Suite",
      category: "Executive Collection",
      rateNum: 35000,
      price: "₹35,000 / night",
      size: "780 sq.ft.",
      guests: "3 Guests",
      description:
        "A separate living lounge, floor-to-ceiling panoramic windows and refined architectural details crafted for longer luxury stays.",
      images: [
        "assets/rooms/executive-1.jpg",
        "assets/rooms/executive-2.jpg",
        "assets/rooms/executive-3.jpg"
      ],
      amenities: [
        "Separate Living Lounge",
        "Floor-to-Ceiling Windows",
        "Walk-in Rain Shower",
        "Complimentary Minibar",
        "Executive Lounge Access",
        "Nespresso Coffee Bar"
      ]
    },
    "grand-luxury": {
      type: "grand-luxury",
      name: "Grand Luxury Suite",
      category: "Signature Collection",
      rateNum: 48000,
      price: "₹48,000 / night",
      size: "950 sq.ft.",
      guests: "3 Guests",
      description:
        "A beautifully appointed residential suite offering expansive salon seating, sophisticated art pieces and an elevated five-star luxury experience.",
      images: [
        "assets/rooms/grand-luxury-1.jpg",
        "assets/rooms/grand-luxury-2.jpg",
        "assets/rooms/grand-luxury-3.jpg"
      ],
      amenities: [
        "Private Dining Area",
        "Deep Soaking Tub",
        "Panoramic Skyline View",
        "Dedicated Butler Service",
        "Evening Cocktail Hour",
        "Luxury Diptyque Toiletries"
      ]
    },
    "premium-twin": {
      type: "premium-twin",
      name: "Premium Twin Room",
      category: "Deluxe Collection",
      rateNum: 22000,
      price: "₹22,000 / night",
      size: "580 sq.ft.",
      guests: "2 Guests",
      description:
        "A graceful twin accommodation offering twin queen beds, generous lounge seating, bespoke workstation and premier hospitality.",
      images: [
        "assets/rooms/premium-twin-1.jpg",
        "assets/rooms/premium-twin-2.jpg",
        "assets/rooms/premium-twin-3.jpg"
      ],
      amenities: [
        "Two Queen Beds",
        "Bespoke Workstation",
        "Garden & Pool View",
        "Smart Climate Control",
        "Designer Bathrobes",
        "Daily Fresh Fruit Basket"
      ]
    },
    presidential: {
      type: "presidential",
      name: "Presidential Suite",
      category: "Royal Collection",
      rateNum: 62000,
      price: "₹62,000 / night",
      size: "1,400 sq.ft.",
      guests: "4 Guests",
      description:
        "An exceptional suite created for dignitaries and discerning travelers seeking spacious surroundings, private study and extraordinary care.",
      images: [
        "assets/rooms/presidential-1.jpg",
        "assets/rooms/presidential-2.jpg",
        "assets/rooms/presidential-3.jpg"
      ],
      amenities: [
        "Master Bedroom & Dressing Room",
        "Expansive Dining Salon",
        "Private Study & Library",
        "Chauffeured Airport Sedan",
        "24-Hour Dedicated Butler",
        "Champagne Welcome Flute"
      ]
    },
    royal: {
      type: "royal",
      name: "Royal Suite",
      category: "Signature Residence",
      rateNum: 75000,
      price: "₹75,000 / night",
      size: "1,850 sq.ft.",
      guests: "4 Guests",
      description:
        "Our crown penthouse residence — expansive entertaining spaces, private terrace jacuzzi, master kitchen and 360-degree panoramic views.",
      images: [
        "assets/rooms/royal-1.jpg",
        "assets/rooms/royal-2.jpg",
        "assets/rooms/royal-3.jpg"
      ],
      amenities: [
        "Signature Penthouse Floor",
        "Private Terrace Jacuzzi",
        "Chef Degustation Kitchen",
        "Private VIP Elevator Access",
        "Unlimited Spa Treatments",
        "Unrestricted Concierge Chauffeur"
      ]
    }
  };

  /* =======================================================
     2. NAVIGATION & HEADER SCROLL
     ======================================================= */
  const siteHeader = document.getElementById("siteHeader");
  const menuToggle = document.getElementById("menuToggle");
  const mobileNavigation = document.getElementById("mobileNavigation");

  function handleHeaderScroll() {
    if (!siteHeader) return;
    if (window.scrollY > 24) {
      siteHeader.classList.add("scrolled");
    } else {
      siteHeader.classList.remove("scrolled");
    }
  }

  handleHeaderScroll();
  window.addEventListener("scroll", handleHeaderScroll, { passive: true });

  if (menuToggle && mobileNavigation) {
    menuToggle.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      const isOpen = mobileNavigation.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    mobileNavigation.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNavigation.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Close mobile navigation on click outside
  document.addEventListener("click", function (e) {
    if (
      mobileNavigation &&
      mobileNavigation.classList.contains("open") &&
      !mobileNavigation.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      mobileNavigation.classList.remove("open");
      if (menuToggle) {
        menuToggle.setAttribute("aria-expanded", "false");
      }
    }
  });

  /* =======================================================
     3. ROOM DETAILS MODAL (Home & Rooms Pages)
     ======================================================= */
  const roomModal = document.getElementById("roomModal");
  const modalClose = document.getElementById("modalClose");
  const modalBackdrop = document.getElementById("modalBackdrop");
  const modalRoomName = document.getElementById("modalRoomName");
  const modalRoomDesc = document.getElementById("modalRoomDescription");
  const modalRoomPrice = document.getElementById("modalRoomPrice");
  const modalRoomSize = document.getElementById("modalRoomSize");
  const modalRoomGuests = document.getElementById("modalRoomGuests");
  const modalCategory = document.getElementById("modalCategory");
  const modalGallery = document.getElementById("roomGallery");
  const modalAmenities = document.getElementById("modalAmenities");
  const modalReserveBtn = document.getElementById("modalReserve");

  function openRoomModal(roomKey) {
    const room = ROOMS_DATA[roomKey];
    if (!room || !roomModal) return;

    if (modalRoomName) modalRoomName.textContent = room.name;
    if (modalRoomDesc) modalRoomDesc.textContent = room.description;
    if (modalRoomPrice) modalRoomPrice.textContent = room.price;
    if (modalRoomSize) modalRoomSize.textContent = room.size;
    if (modalRoomGuests) modalRoomGuests.textContent = room.guests;
    if (modalCategory) modalCategory.textContent = room.category || "Rooms & Suites";

    if (modalGallery) {
      modalGallery.innerHTML = "";
      room.images.forEach(function (imgSrc) {
        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = room.name;
        img.loading = "lazy";
        modalGallery.appendChild(img);
      });
    }

    if (modalAmenities) {
      modalAmenities.innerHTML = "";
      room.amenities.forEach(function (amenityText) {
        const li = document.createElement("li");
        li.textContent = amenityText;
        modalAmenities.appendChild(li);
      });
    }

    if (modalReserveBtn) {
      modalReserveBtn.onclick = function () {
        closeRoomModal();
        window.location.href = `reservations.html?room=${encodeURIComponent(room.name)}`;
      };
    }

    roomModal.classList.add("open");
    roomModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  }

  function closeRoomModal() {
    if (!roomModal) return;
    roomModal.classList.remove("open");
    roomModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  if (modalClose) modalClose.addEventListener("click", closeRoomModal);
  if (modalBackdrop) modalBackdrop.addEventListener("click", closeRoomModal);

  // Bind all buttons with data-room attribute
  document.querySelectorAll("[data-room]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const roomKey = btn.getAttribute("data-room");
      if (roomKey && ROOMS_DATA[roomKey]) {
        openRoomModal(roomKey);
      }
    });
  });

  /* =======================================================
     4. ROOMS PAGE DYNAMIC CATALOG & FILTERS
     ======================================================= */
  const roomsContainer = document.getElementById("roomsContainer");
  const roomFilterBtns = document.querySelectorAll(".room-filter-btn");

  if (roomsContainer) {
    function renderRoomCatalog(filterKey) {
      roomsContainer.innerHTML = "";
      const keys = Object.keys(ROOMS_DATA);
      const filteredKeys =
        !filterKey || filterKey === "all"
          ? keys
          : keys.filter(function (k) {
            return k === filterKey;
          });

      filteredKeys.forEach(function (k) {
        const room = ROOMS_DATA[k];
        const card = document.createElement("article");
        card.className = "catalog-card";
        card.innerHTML = `
          <div class="catalog-gallery">
            <img src="${room.images[0]}" alt="${room.name}" loading="lazy">
            <img src="${room.images[1]}" alt="${room.name}" loading="lazy">
            <img src="${room.images[2]}" alt="${room.name}" loading="lazy">
          </div>
          <div class="catalog-body">
            <p class="eyebrow">${room.category}</p>
            <h3>${room.name}</h3>
            <p>${room.description}</p>
            <div class="catalog-meta">
              <span class="price">${room.price}</span>
              <span style="color: var(--muted); font-size: 0.72rem; letter-spacing: 0.14em; text-transform: uppercase;">
                ${room.size} &bull; ${room.guests}
              </span>
            </div>
            <div class="catalog-actions">
              <button type="button" class="btn-detail" data-view-key="${k}">
                View Details
              </button>
              <a href="reservations.html?room=${encodeURIComponent(room.name)}" class="btn-book">
                Reserve Suite
              </a>
            </div>
          </div>
        `;

        card.querySelector(".btn-detail").addEventListener("click", function () {
          openRoomModal(k);
        });

        roomsContainer.appendChild(card);
      });
    }

    renderRoomCatalog("all");

    roomFilterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        roomFilterBtns.forEach(function (b) {
          b.classList.remove("active");
        });
        btn.classList.add("active");
        const filter = btn.getAttribute("data-filter");
        renderRoomCatalog(filter);
      });
    });
  }

  /* =======================================================
     5. HOME PAGE INLINE RESERVATIONS FORM
     ======================================================= */
  const homeReservationForm = document.getElementById("reservationForm");
  const homeConfirmation = document.getElementById("reservationConfirmation");
  const homeConfirmationTitle = document.getElementById("confirmationTitle");
  const homeConfirmationDetails = document.getElementById("confirmationDetails");
  const newReservationBtn = document.getElementById("newReservation");

  // Set default dates if inputs exist
  const checkInInput = document.getElementById("checkIn");
  const checkOutInput = document.getElementById("checkOut");
  if (checkInInput && checkOutInput) {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 2);
    checkInInput.value = today.toISOString().split("T")[0];
    checkOutInput.value = tomorrow.toISOString().split("T")[0];
  }

  if (homeReservationForm) {
    homeReservationForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const guestName = document.getElementById("guestName")?.value || "Distinguished Guest";
      const checkIn = document.getElementById("checkIn")?.value || "Upcoming";
      const checkOut = document.getElementById("checkOut")?.value || "Upcoming";
      const guests = document.getElementById("guests")?.value || "2 Guests";
      const roomType = document.getElementById("roomType")?.value || "Deluxe Room";
      const email = document.getElementById("email")?.value || "guest@suzanroyale.com";
      const phone = document.getElementById("phone")?.value || "+91 90000 00000";

      const bookingRef = "SR-" + Math.floor(10000 + Math.random() * 90000);

      // Save to localStorage
      saveBookingToStorage({
        id: bookingRef,
        roomName: roomType,
        guestName: guestName,
        checkIn: checkIn,
        checkOut: checkOut,
        guests: guests + " Guests",
        email: email,
        phone: phone,
        status: "Confirmed",
        amount: "₹36,000",
        addons: ["Welcome Champagne Flutes"]
      });

      if (homeConfirmationTitle) {
        homeConfirmationTitle.textContent = `Thank you, ${guestName}`;
      }

      if (homeConfirmationDetails) {
        homeConfirmationDetails.innerHTML = `
          <div class="confirmation-row">
            <span>Booking Reference</span>
            <span><strong>${bookingRef}</strong></span>
          </div>
          <div class="confirmation-row">
            <span>Guest Name</span>
            <span>${guestName}</span>
          </div>
          <div class="confirmation-row">
            <span>Selected Residence</span>
            <span>${roomType}</span>
          </div>
          <div class="confirmation-row">
            <span>Dates</span>
            <span>${checkIn} &rarr; ${checkOut}</span>
          </div>
          <div class="confirmation-row">
            <span>Occupancy</span>
            <span>${guests} Guests</span>
          </div>
          <div class="confirmation-row">
            <span>Contact</span>
            <span>${email} &bull; ${phone}</span>
          </div>
        `;
      }

      homeReservationForm.hidden = true;
      if (homeConfirmation) homeConfirmation.hidden = false;
    });
  }

  if (newReservationBtn) {
    newReservationBtn.addEventListener("click", function () {
      if (homeConfirmation) homeConfirmation.hidden = true;
      if (homeReservationForm) {
        homeReservationForm.hidden = false;
        homeReservationForm.reset();
      }
    });
  }

  /* =======================================================
     6. RESERVATIONS PAGE COMPREHENSIVE BOOKING ENGINE
     ======================================================= */
  const fullBookingForm = document.getElementById("fullBookingForm");
  const bookingConfirmScreen = document.getElementById("bookingConfirmationScreen");
  const bookAnotherBtn = document.getElementById("bookAnotherBtn");

  if (fullBookingForm) {
    const bookCheckIn = document.getElementById("bookCheckIn");
    const bookCheckOut = document.getElementById("bookCheckOut");
    const summaryRoomTitle = document.getElementById("summaryRoomTitle");
    const summaryNightlyRate = document.getElementById("summaryNightlyRate");
    const summaryNights = document.getElementById("summaryNights");
    const summaryRoomSubtotal = document.getElementById("summaryRoomSubtotal");
    const summaryAddonsSubtotal = document.getElementById("summaryAddonsSubtotal");
    const summaryTaxes = document.getElementById("summaryTaxes");
    const summaryGrandTotal = document.getElementById("summaryGrandTotal");

    // Initialize default dates
    const today = new Date();
    const futureDate = new Date();
    futureDate.setDate(today.getDate() + 2);
    if (bookCheckIn) bookCheckIn.value = today.toISOString().split("T")[0];
    if (bookCheckOut) bookCheckOut.value = futureDate.toISOString().split("T")[0];

    // Check URL parameters for pre-selected room
    const urlParams = new URLSearchParams(window.location.search);
    const preRoom = urlParams.get("room");
    if (preRoom) {
      document.querySelectorAll(".room-select-card").forEach(function (card) {
        if (card.getAttribute("data-room").toLowerCase() === preRoom.toLowerCase()) {
          document.querySelectorAll(".room-select-card").forEach(function (c) {
            c.classList.remove("selected");
          });
          card.classList.add("selected");
          const radio = card.querySelector("input[type='radio']");
          if (radio) radio.checked = true;
        }
      });
    }

    function calculateBooking() {
      let currentRate = 18000;
      let currentRoomName = "Deluxe Room";

      const selectedRadio = fullBookingForm.querySelector("input[name='selectedRoom']:checked");
      if (selectedRadio) {
        const parentCard = selectedRadio.closest(".room-select-card");
        if (parentCard) {
          currentRate = parseInt(parentCard.getAttribute("data-rate"), 10) || 18000;
          currentRoomName = parentCard.getAttribute("data-room") || "Deluxe Room";
        }
      }

      // Calculate nights
      let nights = 1;
      if (bookCheckIn && bookCheckOut && bookCheckIn.value && bookCheckOut.value) {
        const d1 = new Date(bookCheckIn.value);
        const d2 = new Date(bookCheckOut.value);
        const diff = Math.ceil((d2 - d1) / (1000 * 60 * 60 * 24));
        nights = diff > 0 ? diff : 1;
      }

      const roomSubtotal = currentRate * nights;

      // Calculate add-ons
      let addonsSubtotal = 0;
      fullBookingForm.querySelectorAll(".addon-card input[type='checkbox']:checked").forEach(function (cb) {
        const cost = parseInt(cb.value, 10) || 0;
        if (cb.getAttribute("data-per-night") === "true") {
          addonsSubtotal += cost * nights;
        } else {
          addonsSubtotal += cost;
        }
      });

      const taxes = Math.round((roomSubtotal + addonsSubtotal) * 0.18);
      const grandTotal = roomSubtotal + addonsSubtotal + taxes;

      if (summaryRoomTitle) summaryRoomTitle.textContent = currentRoomName;
      if (summaryNightlyRate) summaryNightlyRate.textContent = "₹" + currentRate.toLocaleString("en-IN");
      if (summaryNights) summaryNights.textContent = `${nights} ${nights === 1 ? "Night" : "Nights"}`;
      if (summaryRoomSubtotal) summaryRoomSubtotal.textContent = "₹" + roomSubtotal.toLocaleString("en-IN");
      if (summaryAddonsSubtotal) summaryAddonsSubtotal.textContent = "₹" + addonsSubtotal.toLocaleString("en-IN");
      if (summaryTaxes) summaryTaxes.textContent = "₹" + taxes.toLocaleString("en-IN");
      if (summaryGrandTotal) summaryGrandTotal.textContent = "₹" + grandTotal.toLocaleString("en-IN");
    }

    calculateBooking();

    // Event listeners on room radio cards
    document.querySelectorAll(".room-select-card").forEach(function (card) {
      card.addEventListener("click", function () {
        document.querySelectorAll(".room-select-card").forEach(function (c) {
          c.classList.remove("selected");
        });
        card.classList.add("selected");
        const radio = card.querySelector("input[type='radio']");
        if (radio) radio.checked = true;
        calculateBooking();
      });
    });

    if (bookCheckIn) bookCheckIn.addEventListener("change", calculateBooking);
    if (bookCheckOut) bookCheckOut.addEventListener("change", calculateBooking);
    fullBookingForm.querySelectorAll(".addon-card input[type='checkbox']").forEach(function (cb) {
      cb.addEventListener("change", calculateBooking);
    });

    // Handle full booking submission
    fullBookingForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const guestName = document.getElementById("bookGuestName")?.value || "Distinguished Guest";
      const guestEmail = document.getElementById("bookGuestEmail")?.value || "guest@suzanroyale.com";
      const guestPhone = document.getElementById("bookGuestPhone")?.value || "+91 90000 00000";
      const guestGuests = document.getElementById("bookGuests")?.value || "2";
      const guestCheckIn = bookCheckIn?.value || "Upcoming";
      const guestCheckOut = bookCheckOut?.value || "Upcoming";
      const selectedRoom = fullBookingForm.querySelector("input[name='selectedRoom']:checked")?.value || "Deluxe Room";
      const grandTotalText = summaryGrandTotal ? summaryGrandTotal.textContent : "₹21,240";

      const selectedAddons = [];
      fullBookingForm.querySelectorAll(".addon-card input[type='checkbox']:checked").forEach(function (cb) {
        selectedAddons.push(cb.getAttribute("data-name") || "Bespoke Enhancement");
      });

      const bookingRef = "SR-" + Math.floor(10000 + Math.random() * 90000);

      // Save to localStorage
      saveBookingToStorage({
        id: bookingRef,
        roomName: selectedRoom,
        guestName: guestName,
        checkIn: guestCheckIn,
        checkOut: guestCheckOut,
        guests: guestGuests + " Guests",
        email: guestEmail,
        phone: guestPhone,
        status: "Confirmed",
        amount: grandTotalText,
        addons: selectedAddons
      });

      // Show confirmation screen
      const confirmedGreeting = document.getElementById("confirmedGuestGreeting");
      const confirmedDetails = document.getElementById("confirmedSummaryDetails");

      if (confirmedGreeting) {
        confirmedGreeting.textContent = `Welcome, ${guestName}`;
      }

      if (confirmedDetails) {
        confirmedDetails.innerHTML = `
          <div class="confirmation-row">
            <span>Booking Reference</span>
            <span><strong>${bookingRef}</strong></span>
          </div>
          <div class="confirmation-row">
            <span>Selected Suite</span>
            <span>${selectedRoom}</span>
          </div>
          <div class="confirmation-row">
            <span>Stay Dates</span>
            <span>${guestCheckIn} &rarr; ${guestCheckOut}</span>
          </div>
          <div class="confirmation-row">
            <span>Guests</span>
            <span>${guestGuests} Guests</span>
          </div>
          <div class="confirmation-row">
            <span>Contact</span>
            <span>${guestEmail} &bull; ${guestPhone}</span>
          </div>
          <div class="confirmation-row">
            <span>Bespoke Add-ons</span>
            <span>${selectedAddons.length > 0 ? selectedAddons.join(", ") : "Standard Amenities"}</span>
          </div>
          <div class="confirmation-row">
            <span>Total Guaranteed</span>
            <span><strong style="color: var(--primary); font-size: 1.1rem;">${grandTotalText}</strong></span>
          </div>
        `;
      }

      document.getElementById("bookingFormWrapper").hidden = true;
      if (bookingConfirmScreen) bookingConfirmScreen.hidden = false;
      window.scrollTo({ top: 300, behavior: "smooth" });
    });
  }

  if (bookAnotherBtn) {
    bookAnotherBtn.addEventListener("click", function () {
      if (bookingConfirmScreen) bookingConfirmScreen.hidden = true;
      const wrap = document.getElementById("bookingFormWrapper");
      if (wrap) {
        wrap.hidden = false;
        if (fullBookingForm) fullBookingForm.reset();
      }
    });
  }

  /* =======================================================
     7. GUEST DASHBOARD LOCALSTORAGE SYNC & RENDERER
     ======================================================= */
  function getStoredBookings() {
    try {
      const data = localStorage.getItem("suzan_royale_reservations");
      if (data) {
        return JSON.parse(data);
      }
    } catch (err) {
      console.warn("Storage parse error", err);
    }
    // Default initial seed booking if clean state
    return [
      {
        id: "SR-94120",
        roomName: "Royal Suite",
        guestName: "Lady Eleanor Vance",
        checkIn: "2026-09-10",
        checkOut: "2026-09-14",
        guests: "2 Guests",
        email: "eleanor.vance@luxury.com",
        phone: "+91 98888 77777",
        status: "Confirmed",
        amount: "₹3,54,000",
        addons: ["Airport Chauffeur Transfer", "Champagne & Truffles on Arrival"]
      }
    ];
  }

  function saveBookingToStorage(bookingObj) {
    const list = getStoredBookings();
    list.unshift(bookingObj);
    try {
      localStorage.setItem("suzan_royale_reservations", JSON.stringify(list));
    } catch (e) {
      console.warn("Failed to persist booking", e);
    }
  }

  const activeBookingsContainer = document.getElementById("activeBookingsContainer");
  const dashUserName = document.getElementById("dashUserName");
  const dashUserInitials = document.getElementById("dashUserInitials");
  const statActiveCount = document.getElementById("statActiveCount");

  if (activeBookingsContainer) {
    function renderDashboard() {
      const bookings = getStoredBookings();
      activeBookingsContainer.innerHTML = "";

      if (statActiveCount) {
        statActiveCount.textContent = bookings.length;
      }

      if (bookings.length > 0 && dashUserName) {
        dashUserName.textContent = bookings[0].guestName;
        if (dashUserInitials) {
          const names = bookings[0].guestName.trim().split(" ");
          const initials =
            names.length > 1
              ? names[0][0] + names[names.length - 1][0]
              : names[0].substring(0, 2).toUpperCase();
          dashUserInitials.textContent = initials;
        }
      }

      if (bookings.length === 0) {
        activeBookingsContainer.innerHTML = `
          <div class="empty-state-box">
            <p class="eyebrow">No Upcoming Bookings</p>
            <h3>Your sanctuary awaits</h3>
            <p style="margin-bottom: 24px;">You currently have no active suite reservations at SUZAN ROYALE.</p>
            <a href="reservations.html" class="button button-primary">
              Book Your Next Stay
            </a>
          </div>
        `;
        return;
      }

      bookings.forEach(function (b, index) {
        // Resolve image
        let imgSrc = "assets/rooms/deluxe-1.jpg";
        if (b.roomName.includes("Executive")) imgSrc = "assets/rooms/executive-1.jpg";
        else if (b.roomName.includes("Grand")) imgSrc = "assets/rooms/grand-luxury-1.jpg";
        else if (b.roomName.includes("Twin")) imgSrc = "assets/rooms/premium-twin-1.jpg";
        else if (b.roomName.includes("Presidential")) imgSrc = "assets/rooms/presidential-1.jpg";
        else if (b.roomName.includes("Royal")) imgSrc = "assets/rooms/royal-1.jpg";

        const card = document.createElement("div");
        card.className = "booking-item-card";
        card.innerHTML = `
          <img src="${imgSrc}" alt="${b.roomName}" class="booking-item-thumb">
          <div class="booking-item-info">
            <span class="badge">${b.status || "Confirmed"}</span>
            <h3>${b.roomName}</h3>
            <div class="booking-meta-row" style="flex-wrap: wrap;">
              <span><strong>Reference:</strong> ${b.id}</span>
              <span><strong>Dates:</strong> ${b.checkIn} &rarr; ${b.checkOut}</span>
              <span><strong>Guests:</strong> ${b.guests}</span>
              <span><strong>Guaranteed:</strong> ${b.amount}</span>
            </div>
            ${b.addons && b.addons.length > 0
            ? `<p style="margin-top: 8px; font-size: 0.78rem; color: var(--primary);"><strong>Enhancements:</strong> ${b.addons.join(", ")}</p>`
            : ""
          }
          </div>
          <div class="booking-item-actions">
            <a href="contact.html" class="button button-gold-outline" style="padding: 10px 14px; font-size: 0.62rem;">
              Concierge Request
            </a>
            <button type="button" class="button button-outline cancel-booking-btn" data-index="${index}" style="padding: 10px 14px; font-size: 0.62rem; color: #e57373 !important; border-color: rgba(229,115,115,0.4);">
              Cancel Stay
            </button>
          </div>
        `;

        card.querySelector(".cancel-booking-btn").addEventListener("click", function () {
          if (confirm(`Are you sure you wish to cancel reservation ${b.id}?`)) {
            const list = getStoredBookings();
            list.splice(index, 1);
            try {
              localStorage.setItem("suzan_royale_reservations", JSON.stringify(list));
            } catch (e) { }
            renderDashboard();
          }
        });

        activeBookingsContainer.appendChild(card);
      });
    }

    renderDashboard();
  }

  /* =======================================================
     8. DINING PAGE FILTERS & LIGHTBOX
     ======================================================= */
  const foodFilterBtns = document.querySelectorAll(".food-filter-btn");
  const foodCards = document.querySelectorAll(".food-card");
  const diningGalleryItems = document.querySelectorAll(".dining-gallery-item");
  const diningLightbox = document.getElementById("diningLightbox");
  const diningLightboxImg = document.getElementById("diningLightboxImage");
  const diningLightboxClose = document.getElementById("diningLightboxClose");

  if (foodFilterBtns.length > 0 && foodCards.length > 0) {
    foodFilterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        foodFilterBtns.forEach(function (b) {
          b.classList.remove("active");
        });
        btn.classList.add("active");

        const selectedCat = btn.getAttribute("data-category");
        foodCards.forEach(function (card) {
          const cardCat = card.getAttribute("data-category");
          if (selectedCat === "all" || cardCat === selectedCat) {
            card.classList.remove("hidden");
          } else {
            card.classList.add("hidden");
          }
        });
      });
    });
  }

  // Lightbox
  if (diningLightbox && diningLightboxImg) {
    function openLightbox(src, alt) {
      diningLightboxImg.src = src;
      diningLightboxImg.alt = alt || "SUZAN ROYALE Dining";
      diningLightbox.classList.add("open");
      diningLightbox.setAttribute("aria-hidden", "false");
      document.body.classList.add("dining-lightbox-open");
    }

    function closeLightbox() {
      diningLightbox.classList.remove("open");
      diningLightbox.setAttribute("aria-hidden", "true");
      document.body.classList.remove("dining-lightbox-open");
    }

    if (diningLightboxClose) {
      diningLightboxClose.addEventListener("click", closeLightbox);
    }

    diningLightbox.addEventListener("click", function (e) {
      if (e.target === diningLightbox) {
        closeLightbox();
      }
    });

    diningGalleryItems.forEach(function (item) {
      item.addEventListener("click", function () {
        const img = item.querySelector("img");
        if (img) openLightbox(img.src, img.alt);
      });
    });

    document.querySelectorAll(".food-card-img").forEach(function (item) {
      item.addEventListener("click", function () {
        const img = item.querySelector("img");
        if (img) openLightbox(img.src, img.alt);
      });
    });
  }

  /* =======================================================
     9. CONTACT PAGE FAQ ACCORDION & INQUIRY FORM
     ======================================================= */
  const faqQuestions = document.querySelectorAll(".faq-question");
  const contactForm = document.getElementById("contactForm");
  const contactConfirm = document.getElementById("contactConfirmationBox");

  faqQuestions.forEach(function (q) {
    q.addEventListener("click", function () {
      const parent = q.closest(".faq-item");
      if (parent) {
        parent.classList.toggle("open");
      }
    });
  });

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      contactForm.hidden = true;
      if (contactConfirm) contactConfirm.hidden = false;
    });
  }

  /* =======================================================
     10. GLOBAL ESCAPE KEY HANDLER
     ======================================================= */
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeRoomModal();
      if (typeof closeLightbox === "function") {
        closeLightbox();
      }
      if (mobileNavigation && menuToggle) {
        mobileNavigation.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    }
  });

  console.log("SUZAN ROYALE — Master Luxury Experience Initialized.");
});