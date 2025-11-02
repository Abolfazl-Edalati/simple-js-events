/*
 * (ایونت ۸) DOMContentLoaded
 * این ایونت زمانی اجرا می‌شود که کل سند HTML بارگذاری شده و آماده است.
 */
document.addEventListener("DOMContentLoaded", () => {
  console.log("صفحه آماده شد! (ایونت DOMContentLoaded)");

  // --- متغیرهای سراسری برای سبد خرید ---
  const cartCountDisplay = document.getElementById("cart-count");
  let totalCartItems = 0; // متغیر برای نگهداری تعداد کل سبد خرید
  // ---

  // -----------------------------------------------------------------
  // ۱. ایونت Click (سبد خرید)
  const increaseBtn = document.getElementById("increase-btn");
  const decreaseBtn = document.getElementById("decrease-btn");
  const quantityDisplay = document.getElementById("quantity-display");
  const clickOutput = document.getElementById("click-output");

  let quantity = 0;
  decreaseBtn.disabled = true;

  // ایونت CLICK برای دکمه "افزایش"
  increaseBtn.addEventListener("click", () => {
    quantity++;
    totalCartItems++; // <-- (تغییر جدید) تعداد کل سبد را هم زیاد کن

    quantityDisplay.textContent = quantity;
    cartCountDisplay.textContent = totalCartItems; // <-- (تغییر جدید) نمایشگر هدر را آپدیت کن

    clickOutput.textContent = "یک محصول اضافه شد! (ایونت Click)";
    decreaseBtn.disabled = false;
  });

  // ایونت CLICK برای دکمه "کاهش"
  decreaseBtn.addEventListener("click", () => {
    if (quantity > 0) {
      quantity--;
      totalCartItems--; // <-- (تغییر جدید) تعداد کل سبد را کم کن

      quantityDisplay.textContent = quantity;
      cartCountDisplay.textContent = totalCartItems; // <-- (تغییر جدید) نمایشگر هدر را آپدیت کن

      clickOutput.textContent = "یک محصول کم شد! (ایونت Click)";
    }

    if (quantity === 0) {
      decreaseBtn.disabled = true;
      clickOutput.textContent = "سبد خرید خالی شد.";
    }
  });

  // -----------------------------------------------------------------
  // ۲. ایونت Mouseover (و Mouseout برای تکمیل دمو)
  const hoverArea = document.getElementById("hover-area");
  const hoverOutput = document.getElementById("hover-output");

  hoverArea.addEventListener("mouseover", () => {
    hoverOutput.textContent = "ماوس وارد کادر شد. (ایونت Mouseover)";
    hoverArea.style.backgroundColor = "#b2ebf2";
  });

  hoverArea.addEventListener("mouseout", () => {
    hoverOutput.textContent = "ماوس از کادر خارج شد.";
    hoverArea.style.backgroundColor = "#e0f7fa";
  });

  // -----------------------------------------------------------------
  // ۳. ایونت Keydown
  const keydownInput = document.getElementById("keydown-input");
  const keydownOutput = document.getElementById("keydown-output");

  keydownInput.addEventListener("keydown", (event) => {
    keydownOutput.textContent = `دکمه "${event.key}" فشرده شد. (ایونت Keydown)`;
  });

  // -----------------------------------------------------------------
  // ۴. ایونت Submit
  const testForm = document.getElementById("test-form");
  const submitOutput = document.getElementById("submit-output");

  testForm.addEventListener("submit", (event) => {
    event.preventDefault();
    submitOutput.textContent = "فرم ارسال شد! (ایونت Submit)";
  });

  // -----------------------------------------------------------------
  // ۵. ایونت Change
  const selectInput = document.getElementById("select-input");
  const changeOutput = document.getElementById("change-output");

  selectInput.addEventListener("change", () => {
    changeOutput.textContent = `مقدار به "${selectInput.value}" تغییر کرد. (ایونت Change)`;
  });

  // -----------------------------------------------------------------
  // ۶. ایونت Scroll (مربوط به کل پنجره)
  const scrollOutput = document.getElementById("scroll-output");

  window.addEventListener("scroll", () => {
    scrollOutput.textContent = `${window.scrollY.toFixed(0)} پیکسل از بالا`;
  });

  // -----------------------------------------------------------------
  // ۷. ایونت Click (تغییر رنگ پس‌زمینه) - (جایگزین ایونت Resize)
  const colorBtnWhite = document.getElementById("color-btn-white");
  const colorBtnBlue = document.getElementById("color-btn-blue");
  const colorBtngreen = document.getElementById("color-btn-green");
  const colorOutput = document.getElementById("color-output");

  // ایونت Click برای دکمه سفید
  colorBtnWhite.addEventListener("click", () => {
    document.body.style.backgroundColor = "#f9f9f9";
    colorOutput.textContent = "رنگ پس‌زمینه: سفید";
  });

  // ایونت Click برای دکمه آبی
  colorBtnBlue.addEventListener("click", () => {
    document.body.style.backgroundColor = "#e0f7fa";
    colorOutput.textContent = "رنگ پس‌زمینه: آبی روشن";
  });

  // ایونت Click برای دکمه خاکستری
  colorBtngreen.addEventListener("click", () => {
    document.body.style.backgroundColor = "#3ab600ff";
    colorOutput.textContent = "رنگ پس‌زمینه: خاکستری";
  });
  // --- پایان بخش ۷ ---
});
