export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: "Умная колонка Яндекс Станция Лайт фиолетовый",
    price:27065,
    description: "Яндекс.Станция Лайт — это яркая и компактная умная колонка, которая управляется голосом и сенсорными кнопками. Она здорово украсит интерьер и сможет развлечь ребенка: матовый корпус приятно держать в руках, а расцветка порадует глаз.",
    img: "https://resources.cdn-kaspi.kz/img/m/p/h9f/hfc/64362954719262.jpg?format=gallery-medium",
    rating: 4,
    url: "https://kaspi.kz/shop/p/jandeks-stantsija-lait-fioletovyi-101870266/?c=750000000"
  },
  {
    id: 2,
    name: "Мышь LS Pro черный",
    price:1287,
    description: "Беспроводная черная матовая (Soft-touch покрытие) блютуз (bluetooth) мышь c светодиодной RGB подсветкой",
    img: "https://resources.cdn-kaspi.kz/img/m/p/h2f/h61/82393746636830.png?format=gallery-medium",
    rating: 5,
    url: "https://kaspi.kz/shop/p/ls-pro-chernyi-107622516/?c=750000000"
  },
  {
    id: 3,
    name: "Блендер SM-7700 серебристый",
    price:8616,
    description: "Блендер 2 в 1. Блендер + измельчитель (кофемолка), 3 скорости + импульс, стеклянная колба, серебристый цвет.",
    img: "https://resources.cdn-kaspi.kz/img/m/p/h78/he6/81315957440542.png?format=gallery-medium",
    rating: 4,
    url: "https://kaspi.kz/shop/p/sm-7700-serebristyi-110902818/?c=750000000"
  },
  {
    id: 4,
    name: "Wi-Fi роутер TP-LINK Archer C80",
    price:25240,
    description: "Двухдиапазонный роутер TP-LINK Archer C80 выполнен в черном цвете. Его корпус создан для работы только в помещениях. Он обеспечен внешними несъемными антеннами в количестве 4 штук. ",
    img: "https://resources.cdn-kaspi.kz/img/m/p/h13/h0f/63885265829918.jpg?format=gallery-medium",
    rating: 3,
    url: "https://kaspi.kz/shop/p/wi-fi-router-tp-link-archer-c80-100663389/?c=750000000"
  },
  {
    id: 5,
    name: "Планшет Apple iPad 2021 Wi-Fi 10.2 дюйм 3 Гб/64 Гб серый",
    price:154478,
    description: "Мощный. Простой в использовании и универсальный. iPad создан специально для ваших любимых занятий. Работайте, играйте, творите, учитесь, общайтесь и делайте множество других дел.",
    img: "https://resources.cdn-kaspi.kz/img/m/p/he4/hdd/64320699203614.jpg?format=gallery-medium",
    rating: 3,
    url: "https://kaspi.kz/shop/p/apple-ipad-2021-wi-fi-10-2-djuim-3-gb-64-gb-seryi-102301598/?c=750000000"
  },
  {
    id: 6,
    name: 'Смартфон Apple iPhone 13 128Gb Midnight черный',
    price: 291962,
    description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.',
    img: "https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium",
    rating: 5,
    url: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000"
  },
  {
    id: 7,
    name: 'Зарядное устройство Apple 20W USB-C Power Adapter + Apple USB-C - Lightning 1 м',
    price: 8534,
    description: 'Компактный адаптер питания Apple USB-C мощностью 20 Вт позволяет быстро и эффективно заряжать устройства Apple. Совместим с любыми моделями Apple Watch, iPhone и iPod. ',
    img: "https://resources.cdn-kaspi.kz/img/m/p/h84/hd8/64039078559774.jpg?format=gallery-medium",
    rating: 2,
    url: "https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-apple-usb-c---lightning-1-m-101103131/?c=750000000"
  },
  {
    id: 8,
    name: "Bluetooth адаптер Hoco UA18 черный",
    price:1141,
    description: "Hoco UA18, адаптер USB на BT v5.0, поддержка подключения нескольких устройств, для динамиков, наушников, клавиатуры и мыши, принтеров и т. д.",
    img: "https://resources.cdn-kaspi.kz/img/m/p/hd0/h07/65123186278430.jpg?format=gallery-medium",
    rating: 2,
    url: "https://kaspi.kz/shop/p/hoco-ua18-chernyi-104906550/?c=750000000"
  },
  {
    id: 9,
    name: 'SPLAT зубная паста Отбеливание Плюс 100 мл',
    price: 799,
    description: 'Зубная паста Professional Отбеливание Плюс со фтором ухаживает за зубами и безопасно отбеливает их благодаря уникальному чистящему комплексу Sp.White System. ',
    img: "https://resources.cdn-kaspi.kz/img/m/p/ha5/hdf/63847123779614.jpg?format=gallery-medium",
    rating: 4,
    url: "https://kaspi.kz/shop/p/splat-zubnaja-pasta-otbelivanie-pljus-100-ml-100194785/?c=750000000"
  },
  {
    id: 10,
    name: 'Herbal Essences Глубокое восстановление Марокканское Аргановое Масло шампунь 400 мл',
    price: 1998,
    description: 'Веганский шампунь Herbal Essences (Хербал Эсенсес) Глубокое Восстановление из коллекции Марокканское аргановое масло подходит для поврежденных волос. ',
    img: "https://resources.cdn-kaspi.kz/img/m/p/h59/hb6/85192570175518.jpg?format=gallery-medium",
    rating: 5,
    url: "https://kaspi.kz/shop/p/herbal-essences-glubokoe-vosstanovlenie-marokkanskoe-arganovoe-maslo-shampun-400-ml-100224196/?c=750000000"
  }
];
