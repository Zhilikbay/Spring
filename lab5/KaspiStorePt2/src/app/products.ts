export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  img: string;
  url: string;
  rating: number;
  category: string;
  likes: number;
}

export const products = [
  {
    id: 1,
    name: 'JSflor Kz 28451505 pink roses 15 pcs',
    price: 14999,
    description: 'type: bouquet\n' +
      'flower type: rose\n' +
      'number of flowers: 15\n' +
      'packaging: kraft paper',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/hc8/h3a/64325270175774.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/jsflor-kz-28451505-rozovye-rozy-15-sht-103484147/?c=750000000',
    rating: 5,
    category: 'Flowers',
    likes: 13
  },
  {
    id: 2,
    name: 'Romeo Astana 12343008 rose 7 pcs 50 cm',
    price: 7500,
    description: 'type: bouquet\n' +
      'flower type: rose\n' +
      'number of flowers: 7\n' +
      'packaging: foamiran',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h8f/h87/65132314066974.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/romeo-astana-12343008-roza-7-sht-50-sm-104725600/?c=750000000',
    rating: 4,
    category: 'Flowers',
    likes: 82
  },
  {
    id: 3,
    name: 'Romeo Astana 12343035 gypsophila 9 pcs 50 cm',
    price: 17990,
    description: 'type: arrangement\n' +
      'flower type: gypsophila\n' +
      'number of flowers: 9\n' +
      'packaging: hat box',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h6c/64907561893918.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/romeo-astana-12343035-gipsofila-9-sht-50-sm-104761625/?c=750000000',
    rating: 5,
    category: 'Flowers',
    likes: 510
  },
  {
    id: 4,
    name: 'Rilak 330852 rose 15 pcs 50 cm\n',
    price: 12399,
    description: 'type: bouquet\n' +
      'flower type: rose\n' +
      'number of flowers: 15\n' +
      'packaging: aqua paper',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/hc3/hab/83673293455390.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/rilak-330852-roza-15-sht-50-sm-113240118/?c=750000000',
    rating: 3,
    category: 'Flowers',
    likes: 175
  },
  {
    id: 5,
    name: 'Vverx Flowers Geraldin rose 13 pcs 60 cm',
    price: 15988,
    description: 'type: bouquet\n' +
      'flower type: rose\n' +
      'number of flowers: 15\n' +
      'packaging: aqua paper',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h0d/h6c/80699261714462.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/vverx-flowers-geraldin-roza-13-sht-60-sm-110290599/?c=750000000',
    rating: 4,
    category: 'Flowers',
    likes: 26
  },
  {
    id: 6,
    name: 'Детское пюре ФрутоНяня Яблоко-Банан-Клубника 90 г',
    price: 285,
    description: 'тип: многокомпонентное\n' +
      'добавки: йогурт\n' +
      'компоненты: фрукты\n' +
      'минимальный возраст: 7 месяцев',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h36/hf0/64024145166366.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/frutonjanja-jabloko-banan-klubnika-90-g-101048221/?c=750000000',
    rating: 5,
    category: 'Children',
    likes: 11
  },
  {
    id: 7,
    name: 'Детское пюре Агуша Яблоко-клубника-малина 90 г',
    price: 299,
    description: 'тип: многокомпонентное\n' +
      'добавки: без добавки\n' +
      'компоненты: фрукты\n' +
      'минимальный возраст: 6 месяцев',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h53/hc1/63957671575582.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/agusha-jabloko-klubnika-malina-90-g-100623509/?c=750000000',
    rating: 4,
    category: 'Children',
    likes: 450
  },
  {
    id: 8,
    name: 'Детское пюре ФрутоНяня Яблоко-банан-творог 6 мес+ 90 г',
    price: 285,
    description: 'тип: многокомпонентное\n' +
      'добавки: творог\n' +
      'компоненты: фрукты\n' +
      'минимальный возраст: 6 месяцев',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/hac/h4f/84933630459934.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/frutonjanja-jabloko-banan-tvorog-6-mes-90-g-100975502/?c=750000000',
    rating: 3,
    category: 'Children',
    likes: 65
  },
  {
    id: 9,
    name: 'Детское пюре Агуша Яблоко 90 г',
    price: 299,
    description: 'тип: однокомпонентное\n' +
      'добавки: без добавки\n' +
      'компоненты: фрукты\n' +
      'минимальный возраст: 4 месяца',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h35/h62/63957235138590.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/agusha-jabloko-90-g-100621391/?c=750000000',
    rating: 5,
    category: 'Children',
    likes: 9146
  },
  {
    id: 10,
    name: 'Детское пюре Агуша Яблоко-банан печенье 90 г',
    price: 749890,
    description: 'тип: многокомпонентное\n' +
      'добавки: печенье\n' +
      'компоненты: фрукты\n' +
      'минимальный возраст: 6 месяцев',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h2d/hd9/85120444760094.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/agusha-jabloko-banan-pechen-e-90-g-100623747/?c=750000000',
    rating: 5,
    category: 'Children',
    likes: 188
  },
  {
    id: 11,
    name: 'Гитара Stagg Homage LF-4100-N Pack 2',
    price: 59200,
    description: 'мензура: 25.6 дюйм.\n' +
      'тип: акустическая\n' +
      'количество струн: 6\n' +
      'для левши: Нет\n' +
      'с подключением: Нет',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/hc7/h2a/80633959251998.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/stagg-homage-lf-4100-n-pack-2-110212097/?c=750000000',
    rating: 5,
    category: 'Guitar',
    likes: 416
  },
  {
    id: 12,
    name: 'Гитара Ronnie Wood AG 38-RDS CMP Red',
    price: 24997,
    description: 'мензура: 24.5 дюйм.\n' +
      'тип: акустическая\n' +
      'количество струн: 6\n' +
      'для левши: Нет\n' +
      'с подключением: Нет',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h84/h7f/64436741242910.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/ronnie-wood-ag-38-rds-cmp-red-104616734/?c=750000000',
    rating: 5,
    category: 'Guitar',
    likes: 278
  },
  {
    id: 13,
    name: 'Гитара Ronnie Wood AG 38-BK CMP AMRWPCM0001 Black',
    price: 25892,
    description: 'мензура: 24.5 дюйм.\n' +
      'тип: акустическая\n' +
      'количество струн: 6\n' +
      'для левши: Нет\n' +
      'с подключением: Нет',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/hbd/h5d/64368290070558.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/ronnie-wood-ag-38-bk-cmp-amrwpcm0001-black-104499839/?c=750000000',
    rating: 4,
    category: 'Guitar',
    likes: 172
  },
  {
    id: 14,
    name: 'Гитара Gmusic 888665456 бежевый',
    price: 85000,
    description: 'мензура: 25.6 дюйм.\n' +
      'тип: акустическая\n' +
      'количество струн: 6\n' +
      'для левши: Нет\n' +
      'с подключением: Да',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/hd9/h78/70058451501086.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/gmusic-888665456-bezhevyi-109347289/?c=750000000',
    rating: 5,
    category: 'Guitar',
    likes: 96
  },
  {
    id: 15,
    name: 'Гитара Ronnie Wood AG 38 N AMREPCM0005 Natural',
    price: 24959,
    description: 'мензура: 24.5 дюйм.\n' +
      'тип: классическая\n' +
      'количество струн: 6\n' +
      'для левши: Нет\n' +
      'с подключением: Нет',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/ha1/h5d/65120313638942.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/ronnie-wood-ag-38-n-amrepcm0005-natural-104868212/?c=750000000',
    rating: 5,
    category: 'Guitar',
    likes: 58
  },
  {
    id: 16,
    name: 'Часы Кварцевые CASIO MTP-1374D-1AVDF сталь',
    price: 30590,
    description: 'Японский гигант Casio – один из лидеров мирового рынка бытовой электроники. Все часы имеют придирчивый контроль качества и обеспечены фирменной гарантией. Сегодня наручные часы CASIO представлены в широком ассортименте с четко обозначенными модельными рядами, что облегчает покупателю выбор подходящих часов.',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h76/h49/63778732965918.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/kvartsevye-casio-mtp-1374d-1avdf-stal--21401209/?c=750000000',
    rating: 4,
    category: 'Wristwatch',
    likes: 128
  },
  {
    id: 17,
    name: 'Часы Кварцевые SKMEI 09927 сталь',
    price: 4500,
    description: 'способ отображения времени: цифровой (электронный)\n' +
      'тип: кварцевые\n' +
      'материал корпуса: сталь\n' +
      'противоударные: Нет\n' +
      'для кого: для мужчин\n' +
      'цвет: черный, ,серебристый',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/hcc/h0c/64922253656094.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/kvartsevye-skmei-09927-stal--104692147/?c=750000000',
    rating: 4,
    category: 'Wristwatch',
    likes: 51
  },
  {
    id: 18,
    name: 'Часы Кварцевые BENYAR BY5140 нержавеющая сталь',
    price: 11494,
    description: 'способ отображения времени: аналоговый (стрелки)\n' +
      'тип: кварцевые\n' +
      'материал корпуса: нержавеющая сталь\n' +
      'противоударные: Да\n' +
      'для кого: для мужчин\n' +
      'цвет: серебристый',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/hef/hb3/65074563088414.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/kvartsevye-benyar-by5140-nerzhavejuschaja-stal--107343037/?c=750000000',
    rating: 5,
    category: 'Wristwatch',
    likes: 984
  },
  {
    id: 19,
    name: 'Часы Механические T-WINNER TWWRG8236M4S1 нержавеющая сталь',
    price: 8989,
    description: 'способ отображения времени: аналоговый (стрелки)\n' +
      'тип: механические\n' +
      'материал корпуса: нержавеющая сталь\n' +
      'противоударные: Нет\n' +
      'для кого: для мужчин\n' +
      'цвет: серебристый',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h2f/80420526915614.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/mehanicheskie-t-winner-twwrg8236m4s1-nerzhavejuschaja-stal--109553960/?c=750000000',
    rating: 3,
    category: 'Wristwatch',
    likes: 85
  },
  {
    id: 20,
    name: 'Часы Кварцевые Tomi B нержавеющая сталь',
    price: 4489,
    description: 'Часы для Мужчин и Женщин (унисекс) наручные кварцевые - современный незаменимый аксессуар. Часы на руку выполненные в черном цвете с уникальным дизайном. Полупрозрачный необычный циферблат.',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/hf2/hd1/66935996743710.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/kvartsevye-tomi-b-nerzhavejuschaja-stal--108063545/?c=750000000',
    rating: 5,
    category: 'Wristwatch',
    likes: 36
  }
];
