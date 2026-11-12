const categories = [
  { id: 'nuts', name: 'Орехи', image: 'assets/catalog/small/105.webp' },
  { id: 'seeds', name: 'Семена', image: 'assets/catalog/small/190.webp' },
  { id: 'dried-fruit', name: 'Сухофрукты', image: 'assets/catalog/small/6491.webp' },
  { id: 'candied', name: 'Цукаты', image: 'assets/catalog/small/5501.webp' },
  { id: 'mixes', name: 'Ореховые смеси', image: 'assets/catalog/small/7649.webp' },
  { id: 'snacks', name: 'Перекусы', image: 'assets/catalog/small/7964.webp' },
  { id: 'tea', name: 'Чай', image: 'assets/catalog/small/6222.webp' },
  { id: 'chocolate', name: 'В шоколаде', image: 'assets/catalog/small/4007.webp' },
  { id: 'butters', name: 'Пасты и урбечи', image: 'assets/catalog/small/5992.webp' },
  { id: 'spices', name: 'Специи', image: 'assets/catalog/small/188.webp' },
  { id: 'honey', name: 'Мёд', image: 'assets/catalog/small/6606.webp' },
  { id: 'gifts', name: 'Подарочные наборы', image: 'assets/catalog/small/6151.webp' },
];
const featuredIds = ['105', '7597', '5122', '6491', '5178'];
const featuredNames = {
  105: 'Грецкий орех Бабочка Экстра',
  7597: 'Миндаль Нонпарель',
  5122: 'Жареные солёные фисташки',
  6491: 'Натуральная курага',
  5178: 'Королевские финики',
};
const productsById = new Map(products.map(product => [product.id, product]));
const variantsByProduct = new Map(products.map(product => {
  const base = { id: product.id, weight: product.weight, price: product.price };
  const variants = [base, ...(product.variants || [])].map(variant => ({ ...variant, product }));
  variants.sort((a, b) => (weightInGrams(a.weight) || Infinity) - (weightInGrams(b.weight) || Infinity));
  return [product.id, variants];
}));
const variantsById = new Map(Array.from(variantsByProduct.values()).flat().map(variant => [variant.id, variant]));
const selectedVariants = new Map();
const formatter = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 2, minimumFractionDigits: 0 });
const storageKey = 'meganats-cart-v1';
const batchSize = 12;
const demoDeliveryFee = 350;
const featuredDuration = 7000;
const pageParams = new URLSearchParams(window.location.search);
const initialCategory = pageParams.get('category');
let category = categories.some(item => item.id === initialCategory) ? initialCategory : 'all';
let productLimit = batchSize;
let featuredIndex = 0;
let featuredTimer;
let featuredAnimation;
let featuredProgressAnimation;
let featuredRemaining = featuredDuration;
let featuredStartedAt = null;
let featuredHovered = false;
let toastTimeout;
let headerInView = false;
let checkoutReceipt = null;

const byId = id => document.getElementById(id);
const search = byId('catalog-search');
const catalogHref = search ? '#catalog' : 'index.html#catalog';
const sort = byId('catalog-sort');
const categorySelect = byId('catalog-category');
const catalogMenu = document.querySelector('.catalog-menu');
const mobileCatalogMenu = document.querySelector('.mobile-catalog-menu');
const cartDialog = byId('cart-dialog');
const menuDialog = byId('menu-dialog');
const productDialog = byId('product-dialog');
const checkoutDialog = byId('checkout-dialog');
const checkoutForm = byId('checkout-form');
const floatingCart = document.querySelector('.floating-cart');
const featuredProduct = byId('featured-product');
const featuredCarousel = byId('featured-slider');
const featuredPagination = byId('featured-pagination');
const featuredMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const cart = readCart();

function readCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || '{}');
    return new Map(Object.entries(saved).filter(([id, quantity]) =>
      variantsById.has(id) && Number.isSafeInteger(quantity) && quantity > 0 && quantity <= 99));
  } catch {
    return new Map();
  }
}

function escapeText(value) {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
}

function icon(name) {
  return `<svg class="icon" aria-hidden="true" focusable="false"><use href="assets/icons.svg#${name}"></use></svg>`;
}

function money(value) {
  return formatter.format(value);
}

function weightInGrams(weight) {
  const match = weight.match(/^(?:(\d+)\s*×\s*)?(\d+(?:[.,]\d+)?)\s*(кг|г)$/);
  if (!match) return null;
  return Number(match[1] || 1) * Number(match[2].replace(',', '.')) * (match[3] === 'кг' ? 1000 : 1);
}

function currentVariant(product) {
  return variantsById.get(selectedVariants.get(product.id) || product.id);
}

function unitPrice(variant) {
  const grams = weightInGrams(variant.weight);
  return grams > 0 ? `${money(variant.price * 100 / grams)} / 100 г` : '';
}

function packPicker(product, variant) {
  const variants = variantsByProduct.get(product.id);
  if (variants.length === 1) return `<span class="weight">${escapeText(variant.weight)}</span>`;
  const options = variants.map(option =>
    `<option value="${option.id}" ${option.id === variant.id ? 'selected' : ''}>${escapeText(option.weight)}</option>`).join('');
  return `<select class="weight" data-pack-select="${product.id}" aria-label="Фасовка: ${escapeText(product.name)}">${options}</select>`;
}

function renderUnitPrice(variant) {
  const price = unitPrice(variant);
  return `<p class="unit-price" data-pack-unit ${price ? '' : 'hidden'}>${price}</p>`;
}

function updateSelectedPack(event) {
  const picker = event.target.closest('[data-pack-select]');
  if (!picker) return;
  const productId = picker.dataset.packSelect;
  const variant = variantsById.get(picker.value);
  if (variant?.product.id !== productId) return;
  selectedVariants.set(productId, variant.id);
  for (const scope of document.querySelectorAll(`[data-pack-product="${productId}"]`)) {
    const price = scope.querySelector('[data-pack-price]');
    const unit = scope.querySelector('[data-pack-unit]');
    const select = scope.querySelector('[data-pack-select]');
    price.textContent = money(variant.price);
    if (select) select.value = variant.id;
    if (unit) {
      unit.textContent = unitPrice(variant);
      unit.hidden = !unit.textContent;
    }
    const featuredWeight = scope.querySelector('.featured-weight');
    if (featuredWeight) featuredWeight.textContent = variant.weight;
  }
  if (sort?.value.startsWith('price-')) {
    const keepFocus = picker === document.activeElement && picker.closest('.product');
    renderCatalog();
    if (keepFocus) {
      const replacement = byId('products').querySelector(`[data-pack-select="${productId}"]`);
      (replacement || sort).focus({ preventScroll: true });
    }
  }
}

function categoryLink(item) {
  const href = search ? '#catalog' : `index.html?category=${encodeURIComponent(item.id)}#catalog`;
  return `<a href="${href}" data-category="${item.id}">${icon(item.id === 'all' ? 'catalog' : item.id === 'gifts' ? 'gift' : item.id)}<span>${escapeText(item.name)}</span></a>`;
}

function renderNavigation() {
  const links = categories.map(categoryLink).join('');
  const allCategories = [{ id: 'all', name: 'Все товары' }, ...categories];
  const catalogLinks = categoryLink(allCategories[0]) + links;
  byId('catalog-menu-items').innerHTML = catalogLinks;
  byId('mobile-categories').innerHTML = catalogLinks;
  byId('footer-categories').innerHTML = links;
  const categoryGrid = byId('category-grid');
  if (categoryGrid) categoryGrid.innerHTML = categories.map(item => `
    <a class="category" href="#catalog" data-category="${item.id}" aria-label="${escapeText(item.name)} — к товарам">
      <span class="category-preview">
        <img src="${item.image}" width="360" height="270" alt="" loading="lazy" decoding="async">
      </span>
      <h3>${escapeText(item.name)}</h3><span class="ribbon">К товарам</span>
    </a>`).join('');
  if (categorySelect) categorySelect.innerHTML = allCategories.map(item =>
    `<option value="${item.id}">${escapeText(item.name)}</option>`).join('');
}

function normalize(text) {
  return text.toLocaleLowerCase('ru').replaceAll('ё', 'е').trim();
}

function renderCatalog() {
  if (!search) return;
  const words = normalize(search.value).split(/\s+/).filter(Boolean);
  const matched = products.filter(product => {
    if (category !== 'all' && product.category !== category) return false;
    const section = categories.find(item => item.id === product.category)?.name || '';
    const weights = variantsByProduct.get(product.id).map(variant => variant.weight).join(' ');
    const searchable = normalize(`${product.name} ${weights} ${section} ${Object.values(product.facts || {}).join(' ')}`);
    return words.every(word => searchable.includes(word));
  });

  if (sort.value === 'price-asc') matched.sort((a, b) => currentVariant(a).price - currentVariant(b).price);
  if (sort.value === 'price-desc') matched.sort((a, b) => currentVariant(b).price - currentVariant(a).price);
  if (sort.value === 'name') matched.sort((a, b) => a.name.localeCompare(b.name, 'ru'));

  categorySelect.value = category;
  byId('results-count').textContent = `Найдено товаров: ${matched.length}`;
  document.querySelector('.more-button').hidden = matched.length <= productLimit;
  byId('products').innerHTML = matched.length
    ? matched.slice(0, productLimit).map(renderProduct).join('')
    : `<div class="empty-products"><p>По вашему запросу ничего не найдено.</p><button class="text-link" type="button" data-action="reset">${icon('reset')}Сбросить поиск и фильтры</button></div>`;
}

function renderProduct(product) {
  const name = escapeText(product.name);
  const title = escapeText(product.cardTitle || product.name);
  const note = product.cardNote ? `<span class="product-name-note">${escapeText(product.cardNote)}</span>` : '';
  const variant = currentVariant(product);
  const thumbnail = product.image.replace('/catalog/', '/catalog/small/');
  return `<article class="product" data-pack-product="${product.id}">
    <button type="button" class="product-photo" data-action="product" data-id="${product.id}" aria-label="${name} — подробнее">
      <img src="${thumbnail}" srcset="${thumbnail} 360w, ${product.image} 720w" sizes="(max-width: 798px) 44vw, (max-width: 1050px) 29vw, 285px" width="720" height="540" alt="" loading="lazy" decoding="async">
    </button>
    <div class="product-content">
      <h3>
        <button type="button" class="product-name" data-action="product" data-id="${product.id}">
          <span class="product-name-main">${title}</span>
          ${note}
        </button>
      </h3>
      <div class="product-meta">
        <p class="price" data-pack-price aria-live="polite">${money(variant.price)}</p>
        ${packPicker(product, variant)}
        ${renderUnitPrice(variant)}
      </div>
      <button class="ribbon" type="button" data-action="add" data-id="${product.id}" aria-label="В корзину: ${name}">${icon('bag')}Добавить</button>
    </div>
  </article>`;
}

function renderFeatured() {
  const product = productsById.get(featuredIds[featuredIndex]);
  const variant = currentVariant(product);
  featuredProduct.innerHTML = `
    <div class="featured-frame">
      <img src="${product.image}" width="720" height="540" alt="${escapeText(product.name)}" loading="lazy" decoding="async">
    </div>
    <div class="featured-copy" data-pack-product="${product.id}">
      <h3>${escapeText(featuredNames[product.id])}</h3>
      <p class="price" data-pack-price>${money(variant.price)}</p>
      <p class="featured-weight">${escapeText(variant.weight)}</p>
      <button class="ribbon" type="button" data-action="product" data-id="${product.id}">${icon('eye')}Смотреть товар</button>
    </div>`;
}

function renderFeaturedPagination() {
  featuredPagination.innerHTML = featuredIds.map((id, index) => `
    <button class="carousel-dot" type="button" data-action="featured-slide" data-index="${index}"
      aria-label="Слайд ${index + 1} из ${featuredIds.length}: ${escapeText(featuredNames[id])}" aria-controls="featured-product">
      <span class="carousel-dot-fill" aria-hidden="true"></span>
    </button>`).join('');
}

function updateFeaturedPagination() {
  featuredPagination.querySelectorAll('.carousel-dot').forEach((button, index) => {
    button.setAttribute('aria-current', String(index === featuredIndex));
    button.querySelector('.carousel-dot-fill').style.transform = 'scaleX(0)';
  });
}

function stopFeaturedTimer() {
  clearTimeout(featuredTimer);
  featuredTimer = null;
  if (featuredStartedAt !== null) {
    featuredRemaining = Math.max(0, featuredRemaining - (performance.now() - featuredStartedAt));
    featuredStartedAt = null;
  }
  featuredProgressAnimation?.cancel();
  featuredProgressAnimation = null;
  const fill = featuredPagination.querySelector('[aria-current="true"] .carousel-dot-fill');
  if (fill) fill.style.transform = `scaleX(${featuredMotion.matches ? 1 : 1 - featuredRemaining / featuredDuration})`;
}

function scheduleFeatured() {
  if (!featuredCarousel) return;
  stopFeaturedTimer();
  if (featuredMotion.matches || document.hidden || featuredHovered || featuredCarousel.contains(document.activeElement)
    || document.querySelector('dialog[open]')) return;
  const fill = featuredPagination.querySelector('[aria-current="true"] .carousel-dot-fill');
  featuredStartedAt = performance.now();
  if (fill && typeof fill.animate === 'function') {
    featuredProgressAnimation = fill.animate([
      { transform: `scaleX(${1 - featuredRemaining / featuredDuration})` },
      { transform: 'scaleX(1)' },
    ], { duration: featuredRemaining, easing: 'linear', fill: 'forwards' });
  }
  featuredTimer = setTimeout(() => {
    featuredStartedAt = null;
    featuredRemaining = 0;
    moveFeatured(1);
  }, featuredRemaining);
}

function moveFeatured(step, announce = false) {
  stopFeaturedTimer();
  featuredRemaining = featuredDuration;
  featuredIndex = (featuredIndex + step + featuredIds.length) % featuredIds.length;
  featuredAnimation?.cancel();
  renderFeatured();
  updateFeaturedPagination();
  if (!featuredMotion.matches && typeof featuredProduct.animate === 'function') {
    featuredAnimation = featuredProduct.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 360, easing: 'ease-out',
    });
  }
  if (announce) byId('featured-status').textContent = `${featuredIndex + 1} из ${featuredIds.length}: ${featuredNames[featuredIds[featuredIndex]]}`;
  scheduleFeatured();
}

function showProduct(product) {
  const variant = currentVariant(product);
  const facts = Object.entries(product.facts || {}).map(([label, value]) =>
    `<div><dt>${escapeText(label)}</dt><dd>${escapeText(value)}</dd></div>`).join('');
  byId('product-detail').innerHTML = `
    <figure class="detail-photo">
      <img src="${product.image}" width="720" height="540" alt="${escapeText(product.name)}">
      <figcaption>Иллюстрация продукта</figcaption>
    </figure>
    <div data-pack-product="${product.id}">
      <h2 id="product-title">${escapeText(product.name)}</h2>
      <div class="packaging-field"><span>Фасовка</span>${packPicker(product, variant)}</div>
      ${facts ? `<dl class="product-facts">${facts}</dl>` : ''}
      <p class="price" data-pack-price aria-live="polite">${money(variant.price)}</p>
      ${renderUnitPrice(variant)}
      <button class="ribbon" type="button" data-action="add" data-id="${product.id}">${icon('bag')}В корзину</button>
    </div>`;
  productDialog.showModal();
}

function cartLines() {
  return Array.from(cart, ([id, quantity]) => {
    const variant = variantsById.get(id);
    return { variant, quantity, total: Math.round(variant.price * 100) * quantity / 100 };
  });
}

function cartTotal() {
  return cartLines().reduce((total, line) => total + Math.round(line.total * 100), 0) / 100;
}

function updateFloatingCart() {
  const visible = cart.size > 0 && !headerInView;
  floatingCart.hidden = !visible;
  document.body.classList.toggle('cart-shortcut-active', visible);
}

function renderCart() {
  const count = Array.from(cart.values()).reduce((total, quantity) => total + quantity, 0);
  document.querySelectorAll('[data-cart-count]').forEach(node => { node.textContent = count; });
  const items = byId('cart-items');
  const scrollTop = items.scrollTop;
  items.innerHTML = cart.size ? cartLines().map(({ variant, quantity, total }) => {
    const { id, product, weight } = variant;
    const name = escapeText(product.name);
    const thumbnail = product.image.replace('/catalog/', '/catalog/small/');
    return `<article class="cart-row">
      <img src="${thumbnail}" width="70" height="53" alt="">
      <div>
        <h3>${name}</h3>
        <p>${escapeText(weight)} · ${money(total)}</p>
        <div class="cart-row-actions">
          <div class="quantity" role="group" aria-label="Количество: ${name}">
            <button type="button" data-action="minus" data-id="${id}" aria-label="Уменьшить количество">${icon('minus')}</button>
            <span>${quantity}</span>
            <button type="button" data-action="plus" data-id="${id}" aria-label="Увеличить количество" ${quantity >= 99 ? 'disabled' : ''}>${icon('plus')}</button>
          </div>
          <button class="text-link remove" type="button" data-action="remove" data-id="${id}" aria-label="Удалить: ${name}">${icon('trash')}Удалить</button>
        </div>
      </div>
    </article>`;
  }).join('') : `<div class="cart-empty"><p>В корзине пока пусто</p><a href="${catalogHref}" data-category="all" class="ribbon">${icon('bag')}К покупкам</a></div>`;
  items.scrollTop = scrollTop;
  byId('cart-summary').hidden = !cart.size;
  const total = money(cartTotal());
  byId('cart-total').textContent = total;
  byId('floating-total').textContent = total;
  updateFloatingCart();
}

function setQuantity(id, quantity) {
  if (quantity < 1) cart.delete(id);
  else cart.set(id, Math.min(quantity, 99));
  try {
    localStorage.setItem(storageKey, JSON.stringify(Object.fromEntries(cart)));
  } catch {
    // The cart still works in memory when local storage is unavailable.
  }
  renderCart();
}

function addToCart(productId) {
  const product = productsById.get(productId);
  const id = currentVariant(product).id;
  const quantity = cart.get(id) || 0;
  if (quantity >= 99) {
    showToast('Максимум 99 упаковок одного товара.');
    return;
  }
  setQuantity(id, quantity + 1);
  if (productDialog.open) {
    productDialog.close();
    cartDialog.showModal();
  } else {
    showToast(`В корзине: ${product.name}, ${variantsById.get(id).weight}`);
  }
}

function showToast(message) {
  const toast = document.querySelector('.toast');
  toast.textContent = message;
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => { toast.textContent = ''; }, 2600);
}

function downloadText(filename, lines) {
  const url = URL.createObjectURL(new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function orderLineText(lines) {
  return lines.map(({ variant, quantity, total }) =>
    `${variant.product.name} (${variant.weight}) × ${quantity} — ${money(total)}`);
}

function downloadCart() {
  if (!cart.size) return;
  downloadText('МегаНатс — список покупок.txt', [
    'МегаНатс — список покупок', '', ...orderLineText(cartLines()), '',
    `Итого: ${money(cartTotal())}`, 'Цены предварительные.',
  ]);
}

function checkoutMethod() {
  return checkoutForm.elements.method.value === 'courier' ? 'courier' : 'pickup';
}

function updateCheckout() {
  const courier = checkoutMethod() === 'courier';
  const subtotal = cartTotal();
  const fee = courier ? demoDeliveryFee : 0;
  byId('address-fields').hidden = !courier;
  checkoutForm.elements.city.disabled = !courier;
  checkoutForm.elements.address.disabled = !courier;
  byId('fulfillment-note').textContent = courier ? `Тестовый тариф доставки: ${money(fee)}.` : 'Самовывоз без доплаты. Адрес точки будет указан перед запуском.';
  byId('checkout-subtotal').textContent = money(subtotal);
  byId('checkout-fee').textContent = fee ? money(fee) : 'Без доплаты';
  byId('checkout-total').textContent = money(subtotal + fee);
}

function resetCheckout() {
  checkoutReceipt = null;
  checkoutForm.reset();
  for (const input of checkoutForm.querySelectorAll('input')) input.setCustomValidity('');
  byId('checkout-confirmation').hidden = true;
  checkoutForm.hidden = false;
}

function openCheckout() {
  if (!cart.size) return;
  resetCheckout();
  byId('checkout-lines').innerHTML = cartLines().map(({ variant, quantity, total }) =>
    `<li><span>${escapeText(variant.product.name)} · ${escapeText(variant.weight)} × ${quantity}</span><strong>${money(total)}</strong></li>`).join('');
  updateCheckout();
  cartDialog.close();
  checkoutDialog.showModal();
}

function confirmCheckout(event) {
  event.preventDefault();
  if (!cart.size || checkoutReceipt) return;
  const { name, phone, city, address } = checkoutForm.elements;
  const courier = checkoutMethod() === 'courier';
  const validPhone = /^\+?[\d\s().-]+$/.test(phone.value.trim()) && /^\d{7,15}$/.test(phone.value.replace(/\D/g, ''));
  name.setCustomValidity(name.value.trim() ? '' : 'Укажите имя.');
  phone.setCustomValidity(validPhone ? '' : 'Укажите телефон: от 7 до 15 цифр.');
  city.setCustomValidity(!courier || city.value.trim() ? '' : 'Укажите город.');
  address.setCustomValidity(!courier || address.value.trim() ? '' : 'Укажите адрес доставки.');
  if (!checkoutForm.reportValidity()) return;
  const number = 'Т-' + Date.now().toString(36).toUpperCase();
  const subtotal = cartTotal();
  const fee = courier ? demoDeliveryFee : 0;
  checkoutReceipt = {
    number, lines: cartLines(), subtotal, fee, name: name.value.trim(), phone: phone.value.trim(),
    method: courier ? 'Доставка' : 'Самовывоз', address: courier ? `${city.value.trim()}, ${address.value.trim()}` : '',
  };
  byId('checkout-result').textContent = `Заказ ${number} · ${checkoutReceipt.method} · ${money(subtotal + fee)}`;
  checkoutForm.hidden = true;
  byId('checkout-confirmation').hidden = false;
  byId('checkout-result-title').focus();
}

function downloadOrder() {
  if (!checkoutReceipt) return;
  const { number, lines, subtotal, fee, name, phone, method, address } = checkoutReceipt;
  downloadText(`МегаНатс — тестовый заказ ${number}.txt`, [
    `МегаНатс — тестовый заказ ${number}`, '',
    `Имя: ${name}`, `Телефон: ${phone}`, `Получение: ${method}`,
    ...(address ? [`Адрес: ${address}`] : []), '', ...orderLineText(lines), '',
    `Товары: ${money(subtotal)}`, `Получение: ${money(fee)}`, `Итого: ${money(subtotal + fee)}`,
    'Тестовый заказ. В магазин не отправлен.',
  ]);
}

function selectCategory(id, resetSearch) {
  category = id;
  if (resetSearch && search) search.value = '';
  productLimit = batchSize;
  renderCatalog();
}

function openSearch() {
  if (!search) {
    window.location.href = 'index.html?search=1#catalog';
    return;
  }
  selectCategory('all', false);
  byId('catalog').scrollIntoView();
  search.focus({ preventScroll: true });
}

function onClick(event) {
  if (catalogMenu.open && !catalogMenu.contains(event.target)) catalogMenu.open = false;
  const control = event.target.closest('[data-category], [data-action]');
  if (!control) {
    const navLink = event.target.closest('dialog a[href^="#"]');
    if (navLink) navLink.closest('dialog').close();
    if (event.target instanceof HTMLDialogElement) {
      const rect = event.target.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) event.target.close();
    }
    return;
  }
  const { action, category: requestedCategory, id } = control.dataset;
  if (requestedCategory) {
    selectCategory(requestedCategory, control.matches('a'));
    catalogMenu.open = false;
    control.closest('dialog')?.close();
    return;
  }

  switch (action) {
    case 'dismiss-announcement': control.closest('.announcement').hidden = true; break;
    case 'search': openSearch(); break;
    case 'cart': cartDialog.showModal(); break;
    case 'menu': menuDialog.showModal(); break;
    case 'close': control.closest('dialog').close(); break;
    case 'prev':
    case 'next': moveFeatured(action === 'next' ? 1 : -1, true); break;
    case 'featured-slide': moveFeatured(Number(control.dataset.index) - featuredIndex, true); break;
    case 'more': productLimit += batchSize; renderCatalog(); break;
    case 'reset': selectCategory('all', true); search.focus(); break;
    case 'product': showProduct(productsById.get(id)); break;
    case 'add': addToCart(id); break;
    case 'plus':
    case 'minus':
    case 'remove': {
      const next = action === 'remove' ? 0 : cart.get(id) + (action === 'plus' ? 1 : -1);
      setQuantity(id, next);
      const nextControl = cartDialog.querySelector(`[data-action="${action}"][data-id="${id}"]:not(:disabled)`)
        || cartDialog.querySelector('.quantity button, .cart-empty a');
      nextControl?.focus();
      break;
    }
    case 'download': downloadCart(); break;
    case 'checkout': openCheckout(); break;
    case 'back-to-cart': checkoutDialog.close(); cartDialog.showModal(); break;
    case 'download-order': downloadOrder(); break;
  }
}

search?.addEventListener('input', () => { productLimit = batchSize; renderCatalog(); });
sort?.addEventListener('change', () => { productLimit = batchSize; renderCatalog(); });
categorySelect?.addEventListener('change', () => selectCategory(categorySelect.value, false));
document.addEventListener('click', onClick);
document.addEventListener('change', updateSelectedPack);
checkoutForm.addEventListener('change', event => {
  if (event.target.name === 'method') updateCheckout();
});
checkoutForm.addEventListener('input', event => event.target.setCustomValidity(''));
checkoutForm.addEventListener('submit', confirmCheckout);
checkoutDialog.addEventListener('close', resetCheckout);
menuDialog.addEventListener('close', () => { mobileCatalogMenu.open = false; });
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(([entry]) => {
    headerInView = entry.isIntersecting;
    updateFloatingCart();
  });
  observer.observe(document.querySelector('.site-header'));
}
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && catalogMenu.open) {
    catalogMenu.open = false;
    catalogMenu.querySelector('summary').focus();
  }
});
featuredCarousel?.addEventListener('pointerenter', event => {
  if (event.pointerType !== 'mouse') return;
  featuredHovered = true;
  scheduleFeatured();
});
featuredCarousel?.addEventListener('pointerleave', event => {
  if (event.pointerType !== 'mouse') return;
  featuredHovered = false;
  scheduleFeatured();
});
featuredCarousel?.addEventListener('focusin', scheduleFeatured);
featuredCarousel?.addEventListener('focusout', () => setTimeout(scheduleFeatured, 0));
document.addEventListener('visibilitychange', scheduleFeatured);
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.addEventListener('close', scheduleFeatured);
  dialog.addEventListener('toggle', scheduleFeatured);
});
featuredMotion.addEventListener('change', scheduleFeatured);
renderNavigation();
if (featuredProduct) {
  renderFeaturedPagination();
  renderFeatured();
  updateFeaturedPagination();
  scheduleFeatured();
}
renderCatalog();
renderCart();
if (search && pageParams.get('search') === '1') openSearch();
byId('contact-form')?.addEventListener('submit', event => event.preventDefault());
window.addEventListener('pageshow', event => {
  if (!event.persisted) return;
  const saved = readCart();
  cart.clear();
  saved.forEach((quantity, id) => cart.set(id, quantity));
  renderCart();
});
