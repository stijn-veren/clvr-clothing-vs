const APP_DATA = {
  title: 'CLVR Clothing',
  fullName: 'CLVR Clothing by Veren Studio',
  copyright: 'Copyright 2021',
  phone: '+380 (123) 456-78-90',
  email: 'clvr.clothing@gmail.com',
  menu: [
    { id: 1, title: 'Shop', link: 'shop' },
    { id: 2, title: 'About', link: 'about' },
    { id: 3, title: 'Contacts', link: 'contacts' },
  ],
}

export const getAppData = () => {
  return APP_DATA
}
