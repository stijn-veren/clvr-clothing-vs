const CATALOGUE_DATA = [
  {
    id: '0',
    title: 'Hats',
    name: 'hats',
    imgUrl: '100.jpg',
    items: [
      {
        id: '110',
        title: 'Sweater',
        name: 'sweater',
        imgUrl: '110.jpg',
        price: '345',
      },
      {
        id: '120',
        title: 'Jacket',
        name: 'jacket',
        imgUrl: '120.jpg',
        price: '764',
      },
      {
        id: '130',
        title: 'Socks',
        name: 'socks',
        imgUrl: '130.jpg',
        price: '357',
      },
      {
        id: '140',
        title: 'Shorts',
        name: 'shorts',
        imgUrl: '140.jpg',
        price: '976',
      },
      {
        id: '150',
        title: 'Tracksuit',
        name: 'tracksuit',
        imgUrl: '150.jpg',
        price: '235',
      },
      {
        id: '160',
        title: 'Vest',
        name: 'vest',
        imgUrl: '160.jpg',
        price: '356',
      },
    ],
  },
  {
    id: '1',
    title: 'Jackets',
    name: 'jackets',
    imgUrl: '200.jpg',
    items: [
      {
        id: '210',
        title: 'Pajamas',
        name: 'pajamas',
        imgUrl: '210.jpg',
        price: '567',
      },
      {
        id: '220',
        title: 'Shoes',
        name: 'shoes',
        imgUrl: '220.jpg',
        price: '336',
      },
      {
        id: '230',
        title: 'Boots',
        name: 'boots',
        imgUrl: '230.jpg',
        price: '564',
      },
      {
        id: '240',
        title: 'Raincoat',
        name: 'raincoat',
        imgUrl: '240.jpg',
        price: '347',
      },
      {
        id: '250',
        title: 'Tanktop',
        name: 'tanktop',
        imgUrl: '250.jpg',
        price: '373',
      },
      {
        id: '260',
        title: 'Swimsuit',
        name: 'swimsuit',
        imgUrl: '260.jpg',
        price: '345',
      },
    ],
  },
  {
    id: '2',
    title: 'Sneakers',
    name: 'sneakers',
    imgUrl: '300.jpg',
    items: [
      {
        id: '310',
        title: 'Heels ',
        name: 'heels',
        imgUrl: '310.jpg',
        price: '678',
      },
      {
        id: '320',
        title: 'Blouse',
        name: 'blouse',
        imgUrl: '320.jpg',
        price: '236',
      },
      { id: '330', title: 'Bra', name: 'bra', imgUrl: '330.jpg', price: '235' },
      {
        id: '340',
        title: 'Panties',
        name: 'panties',
        imgUrl: '340.jpg',
        price: '134',
      },
      {
        id: '350',
        title: 'Stockings',
        name: 'stockings',
        imgUrl: '350.jpg',
        price: '367',
      },
      {
        id: '360',
        title: 'Shirt',
        name: 'shirt',
        imgUrl: '360.jpg',
        price: '567',
      },
    ],
  },
  {
    id: '3',
    title: 'Womens',
    name: 'womens',
    imgUrl: '400.jpg',
    items: [
      { id: '410', title: 'Tie', name: 'tie', imgUrl: '410.jpg', price: '256' },
      {
        id: '420',
        title: 'Briefs',
        name: 'briefs',
        imgUrl: '420.jpg',
        price: '345',
      },
      {
        id: '430',
        title: 'Accessory',
        name: 'accessory',
        imgUrl: '430.jpg',
        price: '204',
      },
      {
        id: '440',
        title: 'Scarf',
        name: 'scarf',
        imgUrl: '440.jpg',
        price: '186',
      },
      {
        id: '450',
        title: 'Glasses',
        name: 'glasses',
        imgUrl: '450.jpg',
        price: '786',
      },
      { id: '460', title: 'Bag', name: 'bag', imgUrl: '460.jpg', price: '878' },
    ],
  },
  {
    id: '4',
    title: 'Mens',
    name: 'mens',
    imgUrl: '500.jpg',
    items: [
      { id: '510', title: 'Bag', name: 'bag', imgUrl: '510.jpg', price: '453' },
      {
        id: '520',
        title: 'Bracelet',
        name: 'bracelet',
        imgUrl: '520.jpg',
        price: '537',
      },
      {
        id: '530',
        title: 'Belt',
        name: 'belt',
        imgUrl: '530.jpg',
        price: '204',
      },
      {
        id: '540',
        title: 'Purse',
        name: 'purse',
        imgUrl: '540.jpg',
        price: '456',
      },
      {
        id: '550',
        title: 'Wallet',
        name: 'wallet',
        imgUrl: '550.jpg',
        price: '767',
      },
      {
        id: '560',
        title: 'Ring',
        name: 'ring',
        imgUrl: '560.jpg',
        price: '789',
      },
    ],
  },
]

export const getCatalogueData = () => {
  return CATALOGUE_DATA
}

export const getSection = (sectionName) => {
  return CATALOGUE_DATA.find(
    (catalogueItem) => catalogueItem.name === sectionName
  )
}

export const getProduct = (sectionName, productId) => {
  const section = getSection(sectionName)

  return section.items.find((product) => product.id === productId)
}
