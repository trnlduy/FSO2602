const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

const bannerURL = 'assets/images/banner.png';
const womenURL = 'assets/images/women.png';
const menURL = 'assets/images/men.png';
const kidsURL = 'assets/images/kids.png';
const promoURL = 'assets/images/promo.png';

const newMain = `      <main class="flex-1">
        <!-- Banner Section -->
        <section class="relative h-[85vh] w-full overflow-hidden">
          <div
            class="absolute inset-0 bg-cover bg-center"
            data-alt="Cinematic high-end fashion editorial showing a model in minimalist clothing"
            style="background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url('${bannerURL}');"
          ></div>
          <div class="relative h-full flex flex-col items-center justify-end pb-24 px-6 text-center text-white">
            <h2 class="text-5xl md:text-7xl font-black mb-6 tracking-tight max-w-4xl">
              Elevating the Modern Silhouette
            </h2>
            <p class="text-lg md:text-xl font-light mb-10 max-w-2xl opacity-90">
              Experience the Autumn/Winter collection where craftsmanship meets contemporary design.
            </p>
            <button class="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all shadow-xl shadow-primary/20">
              Shop New Arrivals
            </button>
          </div>
        </section>

        <!-- Featured Collections -->
        <section class="max-w-7xl mx-auto px-6 py-20">
          <div class="flex items-end justify-between mb-12">
            <div>
              <span class="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-2 block">Curated Styles</span>
              <h3 class="text-3xl md:text-4xl font-bold tracking-tight">Featured Collections</h3>
            </div>
            <a class="hidden md:flex items-center gap-2 font-semibold text-sm border-b-2 border-primary pb-1" href="product.html">View All Collections</a>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="group relative aspect-[3/4] overflow-hidden rounded-xl cursor-pointer">
              <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style="background-image: url('${womenURL}');"></div>
              <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
              <div class="absolute bottom-8 left-8">
                <h4 class="text-white text-3xl font-bold mb-2">Women</h4>
                <span class="text-white/80 text-sm font-medium uppercase tracking-widest border-b border-white/40 pb-1">Discover</span>
              </div>
            </div>
            <div class="group relative aspect-[3/4] overflow-hidden rounded-xl cursor-pointer">
              <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style="background-image: url('${menURL}');"></div>
              <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
              <div class="absolute bottom-8 left-8">
                <h4 class="text-white text-3xl font-bold mb-2">Men</h4>
                <span class="text-white/80 text-sm font-medium uppercase tracking-widest border-b border-white/40 pb-1">Discover</span>
              </div>
            </div>
            <div class="group relative aspect-[3/4] overflow-hidden rounded-xl cursor-pointer">
              <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style="background-image: url('${kidsURL}');"></div>
              <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
              <div class="absolute bottom-8 left-8">
                <h4 class="text-white text-3xl font-bold mb-2">Kids</h4>
                <span class="text-white/80 text-sm font-medium uppercase tracking-widest border-b border-white/40 pb-1">Discover</span>
              </div>
            </div>
          </div>
        </section>

        <!-- New Arrivals -->
        <section class="bg-slate-50 dark:bg-slate-900/50 py-24">
          <div class="max-w-7xl mx-auto px-6">
            <div class="flex items-center justify-between mb-12">
              <div>
                <span class="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-2 block">Just Dropped</span>
                <h3 class="text-3xl font-bold tracking-tight">New Arrivals</h3>
              </div>
              <a class="hidden md:flex items-center gap-2 font-semibold text-sm border-b-2 border-primary pb-1" href="product.html">Shop All</a>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div class="group cursor-pointer">
                <div class="aspect-[4/5] bg-white dark:bg-slate-800 rounded-lg overflow-hidden relative mb-4">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO5yYngFxvQseBPLx31SX14BFn7qkevdzIOYlZrW9ZVIy8mfxu8bA9qT5FtYFZZcxnfCTOwa8xK5k3f6NBhxtCkKp73JyIUvtSI2a_36WlKezOSg0iUJGEHrW5loN-0CRQhl8KW3hcMstn161xPDx1H3zLYiXQz5eK8PV_9BrZ9t5q0Nl_4S75TGl04a1jgBFlhBvKFHSw_HX2WQf9SVr-wWpaI3q7gebJ4MlXY5i9nZXfSYOpz7vECAOtm7kbpmtRv_enuoclv_I" alt="Product" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span class="absolute top-4 left-4 bg-white text-xs font-bold px-2 py-1 rounded">NEW</span>
                  <button class="absolute bottom-4 right-4 bg-white/90 p-3 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all text-slate-900 shadow-lg">
                    <span class="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                  </button>
                </div>
                <h5 class="font-bold text-slate-800 dark:text-slate-200">Tailored Silk Blazer</h5>
                <p class="text-slate-500 text-sm mb-1">Ivory White</p>
                <p class="font-bold text-primary">$1,250</p>
              </div>
              <div class="group cursor-pointer">
                <div class="aspect-[4/5] bg-white dark:bg-slate-800 rounded-lg overflow-hidden relative mb-4">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtiC4SF2c_muMOvSiA3T3ju0-t8tdkHzW1W2rIc17QoWFLYEYoKBNo5cbynRSeCBE81KZbz9tQomW3V9kfsm-UnR5KyYebRdyuk23CivXSJWN3_P0xN5Fh-yqiFLaW5N8dYgnmOp9Q4jtsT-Fx7BbGqNjvGxfehzFiY1BZNamp-_TSgZGdCknQNI2aO7xZK1IZ5ulO_ou6hqFWf94d0lnLrVbtGSrVkZpKYLGwhitjN5XXknHeZ-JM-v29KgmqV4YHHL7edSAaehU" alt="Product" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span class="absolute top-4 left-4 bg-white text-xs font-bold px-2 py-1 rounded">NEW</span>
                  <button class="absolute bottom-4 right-4 bg-white/90 p-3 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all text-slate-900 shadow-lg">
                    <span class="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                  </button>
                </div>
                <h5 class="font-bold text-slate-800 dark:text-slate-200">Double-Breasted Wool Coat</h5>
                <p class="text-slate-500 text-sm mb-1">Charcoal</p>
                <p class="font-bold text-primary">$2,400</p>
              </div>
              <div class="group cursor-pointer hidden md:block">
                <div class="aspect-[4/5] bg-white dark:bg-slate-800 rounded-lg overflow-hidden relative mb-4">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM4Pjl_e5qRYlrQZe18EbTHrRK5UbhSr9-zdGy-WcfjjdsUG-XLaTOwpSq7dQk_8h1q5kf8bcj6S6cKGF1nLxFa5sUQ7_uWS66cIgnqc3u92Dai_TInZgfFeuOP6q60BscX3QmTnS2DVy5ipBTTj_nhPxnCBbv2TZ_ZEUQO4lGATu9BgtYnJuMSrjaPMt9Sb1R8vZOYkuP3FtBXpOtzOGLA8TrnxFf0em8VwKnb5y54iWSrD0zSFhLPSGMYzUeUSb3suEfJl7yXuI" alt="Product" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span class="absolute top-4 left-4 bg-white text-xs font-bold px-2 py-1 rounded">NEW</span>
                  <button class="absolute bottom-4 right-4 bg-white/90 p-3 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all text-slate-900 shadow-lg">
                    <span class="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                  </button>
                </div>
                <h5 class="font-bold text-slate-800 dark:text-slate-200">Grand Tote Leather Bag</h5>
                <p class="text-slate-500 text-sm mb-1">Tan</p>
                <p class="font-bold text-primary">$890</p>
              </div>
              <div class="group cursor-pointer hidden md:block">
                <div class="aspect-[4/5] bg-white dark:bg-slate-800 rounded-lg overflow-hidden relative mb-4">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_rcY9K4yfbFQmAcOERdEycowl3ViiYFYw4SvtfD1UJeguH6qek5mj8t_tG3emucpfxzBPBmrAsO9ZhrOS5vpuvnzHMw-oI8lpnZOmU-OEeTOaMZcTqROA0xUjLr_QKNqPynr0HDr1GzaJEEjHW3SVgKG1Oyl5UsjHIrXB_hqCi4x0vI9EigiMuWRmBZXcTFPjZNUhJF0MjUjZnly4wyBfNZ8iIoW1JE5Rjymc1bWx7WdSFDN1lP8A_7u8vmSmpnwrjD9k3hSh-GQ" alt="Product" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span class="absolute top-4 left-4 bg-white text-xs font-bold px-2 py-1 rounded">NEW</span>
                  <button class="absolute bottom-4 right-4 bg-white/90 p-3 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all text-slate-900 shadow-lg">
                    <span class="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                  </button>
                </div>
                <h5 class="font-bold text-slate-800 dark:text-slate-200">Cashmere Knit Sweater</h5>
                <p class="text-slate-500 text-sm mb-1">Oatmeal</p>
                <p class="font-bold text-primary">$450</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Categories -->
        <section class="max-w-7xl mx-auto px-6 py-20">
          <div class="text-center mb-12">
            <h3 class="text-3xl font-bold tracking-tight">Shop by Category</h3>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <a href="product.html" class="flex flex-col items-center group">
              <div class="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden bg-slate-100 mb-6 border border-slate-200 group-hover:border-primary transition-colors">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtiC4SF2c_muMOvSiA3T3ju0-t8tdkHzW1W2rIc17QoWFLYEYoKBNo5cbynRSeCBE81KZbz9tQomW3V9kfsm-UnR5KyYebRdyuk23CivXSJWN3_P0xN5Fh-yqiFLaW5N8dYgnmOp9Q4jtsT-Fx7BbGqNjvGxfehzFiY1BZNamp-_TSgZGdCknQNI2aO7xZK1IZ5ulO_ou6hqFWf94d0lnLrVbtGSrVkZpKYLGwhitjN5XXknHeZ-JM-v29KgmqV4YHHL7edSAaehU" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
              </div>
              <h5 class="font-semibold text-lg text-slate-800 dark:text-slate-200">Outerwear</h5>
            </a>
            <a href="product.html" class="flex flex-col items-center group">
              <div class="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden bg-slate-100 mb-6 border border-slate-200 group-hover:border-primary transition-colors">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO5yYngFxvQseBPLx31SX14BFn7qkevdzIOYlZrW9ZVIy8mfxu8bA9qT5FtYFZZcxnfCTOwa8xK5k3f6NBhxtCkKp73JyIUvtSI2a_36WlKezOSg0iUJGEHrW5loN-0CRQhl8KW3hcMstn161xPDx1H3zLYiXQz5eK8PV_9BrZ9t5q0Nl_4S75TGl04a1jgBFlhBvKFHSw_HX2WQf9SVr-wWpaI3q7gebJ4MlXY5i9nZXfSYOpz7vECAOtm7kbpmtRv_enuoclv_I" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
              </div>
              <h5 class="font-semibold text-lg text-slate-800 dark:text-slate-200">Tailoring</h5>
            </a>
            <a href="product.html" class="flex flex-col items-center group">
              <div class="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden bg-slate-100 mb-6 border border-slate-200 group-hover:border-primary transition-colors">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM4Pjl_e5qRYlrQZe18EbTHrRK5UbhSr9-zdGy-WcfjjdsUG-XLaTOwpSq7dQk_8h1q5kf8bcj6S6cKGF1nLxFa5sUQ7_uWS66cIgnqc3u92Dai_TInZgfFeuOP6q60BscX3QmTnS2DVy5ipBTTj_nhPxnCBbv2TZ_ZEUQO4lGATu9BgtYnJuMSrjaPMt9Sb1R8vZOYkuP3FtBXpOtzOGLA8TrnxFf0em8VwKnb5y54iWSrD0zSFhLPSGMYzUeUSb3suEfJl7yXuI" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
              </div>
              <h5 class="font-semibold text-lg text-slate-800 dark:text-slate-200">Bags</h5>
            </a>
            <a href="product.html" class="flex flex-col items-center group">
              <div class="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden bg-slate-100 mb-6 border border-slate-200 group-hover:border-primary transition-colors">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_rcY9K4yfbFQmAcOERdEycowl3ViiYFYw4SvtfD1UJeguH6qek5mj8t_tG3emucpfxzBPBmrAsO9ZhrOS5vpuvnzHMw-oI8lpnZOmU-OEeTOaMZcTqROA0xUjLr_QKNqPynr0HDr1GzaJEEjHW3SVgKG1Oyl5UsjHIrXB_hqCi4x0vI9EigiMuWRmBZXcTFPjZNUhJF0MjUjZnly4wyBfNZ8iIoW1JE5Rjymc1bWx7WdSFDN1lP8A_7u8vmSmpnwrjD9k3hSh-GQ" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
              </div>
              <h5 class="font-semibold text-lg text-slate-800 dark:text-slate-200">Knitwear</h5>
            </a>
          </div>
        </section>

        <!-- Promotional Banner -->
        <section class="relative md:h-[60vh] h-[40vh] w-full overflow-hidden mt-8 mb-24 bg-slate-900">
          <div class="absolute inset-0 bg-cover bg-center opacity-70" style="background-image: url('${promoURL}');"></div>
          <div class="relative h-full flex flex-col items-center justify-center p-6 text-center text-white max-w-3xl mx-auto">
            <span class="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4">Limited Time</span>
            <h2 class="text-4xl md:text-5xl font-black mb-6 drop-shadow-lg">Mid-Season Sale Event</h2>
            <p class="text-lg md:text-xl font-medium mb-8 drop-shadow-md">Enjoy up to 40% off selected items across all categories.</p>
            <a href="product.html" class="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-full font-bold transition-all shadow-xl hover:shadow-2xl">Shop The Sale</a>
          </div>
        </section>

        <!-- Best Sellers -->
        <section class="max-w-7xl mx-auto px-6 mb-24">
          <div class="flex items-center justify-between mb-12">
            <div>
              <span class="text-slate-500 font-bold text-xs uppercase tracking-[0.2em] mb-2 block">Most Loved</span>
              <h3 class="text-3xl font-bold tracking-tight">Best Sellers</h3>
            </div>
            <div class="flex gap-2">
              <button class="w-10 h-10 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <span class="material-symbols-outlined text-[20px]">chevron_left</span>
              </button>
              <button class="w-10 h-10 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <span class="material-symbols-outlined text-[20px]">chevron_right</span>
              </button>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="group cursor-pointer" onclick="window.location.href='product-detail.html'">
                <div class="aspect-[3/4] bg-white dark:bg-slate-800 rounded-xl overflow-hidden relative mb-4">
                  <img alt="Wool Coat" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtiC4SF2c_muMOvSiA3T3ju0-t8tdkHzW1W2rIc17QoWFLYEYoKBNo5cbynRSeCBE81KZbz9tQomW3V9kfsm-UnR5KyYebRdyuk23CivXSJWN3_P0xN5Fh-yqiFLaW5N8dYgnmOp9Q4jtsT-Fx7BbGqNjvGxfehzFiY1BZNamp-_TSgZGdCknQNI2aO7xZK1IZ5ulO_ou6hqFWf94d0lnLrVbtGSrVkZpKYLGwhitjN5XXknHeZ-JM-v29KgmqV4YHHL7edSAaehU" />
                  <button class="absolute bottom-6 right-6 bg-white/90 dark:bg-slate-900/90 p-4 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all text-slate-900 shadow-xl hover:bg-primary hover:text-white transition-colors duration-300">
                    <span class="material-symbols-outlined font-bold">add_shopping_cart</span>
                  </button>
                </div>
                <h5 class="font-bold text-lg text-slate-800 dark:text-slate-200">Double-Breasted Wool Coat</h5>
                <p class="font-bold text-primary mt-1">$2,400</p>
              </div>
              <div class="group cursor-pointer" onclick="window.location.href='product-detail.html'">
                <div class="aspect-[3/4] bg-white dark:bg-slate-800 rounded-xl overflow-hidden relative mb-4">
                  <img alt="Silk Blazer" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO5yYngFxvQseBPLx31SX14BFn7qkevdzIOYlZrW9ZVIy8mfxu8bA9qT5FtYFZZcxnfCTOwa8xK5k3f6NBhxtCkKp73JyIUvtSI2a_36WlKezOSg0iUJGEHrW5loN-0CRQhl8KW3hcMstn161xPDx1H3zLYiXQz5eK8PV_9BrZ9t5q0Nl_4S75TGl04a1jgBFlhBvKFHSw_HX2WQf9SVr-wWpaI3q7gebJ4MlXY5i9nZXfSYOpz7vECAOtm7kbpmtRv_enuoclv_I" />
                  <button class="absolute bottom-6 right-6 bg-white/90 dark:bg-slate-900/90 p-4 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all text-slate-900 shadow-xl hover:bg-primary hover:text-white transition-colors duration-300">
                    <span class="material-symbols-outlined font-bold">add_shopping_cart</span>
                  </button>
                </div>
                <h5 class="font-bold text-lg text-slate-800 dark:text-slate-200">Tailored Silk Blazer</h5>
                <p class="font-bold text-primary mt-1">$1,250</p>
              </div>
              <div class="group cursor-pointer" onclick="window.location.href='product-detail.html'">
                <div class="aspect-[3/4] bg-white dark:bg-slate-800 rounded-xl overflow-hidden relative mb-4">
                  <img alt="Leather Bag" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM4Pjl_e5qRYlrQZe18EbTHrRK5UbhSr9-zdGy-WcfjjdsUG-XLaTOwpSq7dQk_8h1q5kf8bcj6S6cKGF1nLxFa5sUQ7_uWS66cIgnqc3u92Dai_TInZgfFeuOP6q60BscX3QmTnS2DVy5ipBTTj_nhPxnCBbv2TZ_ZEUQO4lGATu9BgtYnJuMSrjaPMt9Sb1R8vZOYkuP3FtBXpOtzOGLA8TrnxFf0em8VwKnb5y54iWSrD0zSFhLPSGMYzUeUSb3suEfJl7yXuI" />
                  <button class="absolute bottom-6 right-6 bg-white/90 dark:bg-slate-900/90 p-4 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all text-slate-900 shadow-xl hover:bg-primary hover:text-white transition-colors duration-300">
                    <span class="material-symbols-outlined font-bold">add_shopping_cart</span>
                  </button>
                </div>
                <h5 class="font-bold text-lg text-slate-800 dark:text-slate-200">Grand Tote Leather Bag</h5>
                <p class="font-bold text-primary mt-1">$890</p>
              </div>
          </div>
        </section>

        <!-- Newsletter Signup Section -->
        <section class="bg-primary text-white py-24 mb-20 mx-4 md:mx-auto max-w-6xl rounded-3xl relative overflow-hidden shadow-2xl">
          <div class="absolute top-0 right-0 p-12 opacity-10 blur-xl">
             <span class="material-symbols-outlined text-[300px]">diamond</span>
          </div>
          <div class="relative z-10 flex flex-col items-center text-center px-6">
            <span class="font-bold text-xs uppercase tracking-[0.4em] mb-4 opacity-80">Join The Elite</span>
            <h2 class="text-4xl md:text-5xl font-black mb-6">Stay in the Loop</h2>
            <p class="text-white/90 max-w-lg mb-10 text-lg">Sign up to our newsletter and get 15% off your first luxury piece, plus exclusive early access to our seasonal collections.</p>
            <div class="w-full max-w-md flex flex-col sm:flex-row gap-3">
              <input type="email" placeholder="Your email address..." class="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/60 rounded-full px-6 py-4 focus:ring-2 focus:ring-white focus:outline-none backdrop-blur-sm transition-all" />
              <button class="bg-white text-primary border border-white font-bold tracking-widest uppercase text-sm px-8 py-4 rounded-full hover:bg-slate-100 transition-colors shadow-lg">Subscribe</button>
            </div>
          </div>
        </section>
      </main>`;

const updatedHtml = html.replace(/<main class="flex-1">[\s\S]*?<\/main>/, newMain.trim());

fs.writeFileSync('index.html', updatedHtml, 'utf8');
console.log('index.html completely updated successfully.');
