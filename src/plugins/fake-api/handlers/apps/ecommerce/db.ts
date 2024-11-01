import type { Customer, ECommerceProduct, Order, Referrals, Review } from '@db/apps/ecommerce/types'
import auFlag from '@images/icons/countries/au.png'
// import brFlag from '@images/icons/countries/br.png'
// import cnFlag from '@images/icons/countries/cn.png'
// import frFlag from '@images/icons/countries/fr.png'
// import inFlag from '@images/icons/countries/in.png'
// import usFlag from '@images/icons/countries/us.png'

import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
// import avatar3 from '@images/avatars/avatar-3.png'
// import avatar4 from '@images/avatars/avatar-4.png'
// import avatar5 from '@images/avatars/avatar-5.png'
// import avatar6 from '@images/avatars/avatar-6.png'
// import avatar7 from '@images/avatars/avatar-7.png'
import avatar8 from '@images/avatars/avatar-8.png'
// import avatar9 from '@images/avatars/avatar-9.png'
// import avatar10 from '@images/avatars/avatar-10.png'
// import avatar11 from '@images/avatars/avatar-11.png'
// import avatar12 from '@images/avatars/avatar-12.png'
// import avatar13 from '@images/avatars/avatar-13.png'
// import avatar14 from '@images/avatars/avatar-14.png'
// import avatar15 from '@images/avatars/avatar-15.png'

import product1 from '@images/ecommerce-images/product-1.png'
// import product10 from '@images/ecommerce-images/product-10.png'
// import product11 from '@images/ecommerce-images/product-11.png'
// import product12 from '@images/ecommerce-images/product-12.png'
// import product13 from '@images/ecommerce-images/product-13.png'
// import product14 from '@images/ecommerce-images/product-14.png'
// import product15 from '@images/ecommerce-images/product-15.png'
// import product16 from '@images/ecommerce-images/product-16.png'
// import product17 from '@images/ecommerce-images/product-17.png'
// import product18 from '@images/ecommerce-images/product-18.png'
// import product19 from '@images/ecommerce-images/product-19.png'
import product2 from '@images/ecommerce-images/product-2.png'
// import product20 from '@images/ecommerce-images/product-20.png'
// import product24 from '@images/ecommerce-images/product-24.png'
// import product3 from '@images/ecommerce-images/product-3.png'
// import product4 from '@images/ecommerce-images/product-4.png'
// import product5 from '@images/ecommerce-images/product-5.png'
// import product6 from '@images/ecommerce-images/product-6.png'
// import product7 from '@images/ecommerce-images/product-7.png'
// import product8 from '@images/ecommerce-images/product-8.png'
// import product9 from '@images/ecommerce-images/product-9.png'

interface DB {
  products: ECommerceProduct[]
  orderData: Order[]
  customerData: Customer[]
  reviews: Review[]
  referrals: Referrals[]
}

export const db: DB = {
  products: [
    {
      id: 1,
      productName: 'iPhone 14 Pro',
      category: 'Electronics',
      stock: true,
      sku: 19472,
      price: '$999',
      qty: 665,
      status: 'Inactive',
      image: product1,
      productBrand: 'Super Retina XDR display footnote Pro Motion technology',
    },
    {
      id: 2,
      productName: 'Echo Dot (4th Gen)',
      category: 'Electronics',
      stock: false,
      sku: 72836,
      price: '$25.50',
      qty: 827,
      status: 'Published',
      image: product2,
      productBrand: 'Echo Dot Smart speaker with Alexa',
    },
  ],
  reviews: [
    {
      id: 1,
      product: 'iPhone 14 Pro',
      companyName: 'Super Retina XDR display footnote Pro Motion technology',
      productImage: product1,
      reviewer: 'Zane Scraggs',
      email: 'zscraggs0@flavors.me',
      avatar: avatar1,
      date: '5/28/2020',
      status: 'Published',
      review: 2,
      head: 'lorem ipsum dolor',
      para: 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    },
    {
      id: 2,
      product: 'Echo Dot (4th Gen)',
      companyName: 'Echo Dot Smart speaker with Alexa',
      productImage: product2,
      reviewer: 'Stacey Hallgalley',
      email: 'shallgalley1@google.nl',
      avatar: avatar2,
      date: '3/21/2021',
      status: 'Published',
      review: 5,
      head: 'libero ut',
      para: 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    },
  ],
  referrals: [
    {
      id: 1,
      user: 'Koressa Leyfield',
      email: 'kleyfield0@columbia.edu',
      avatar: avatar1,
      referredId: 3398,
      status: 'Unpaid',
      value: '$6655.92',
      earning: '$380.17',
    },
    {
      id: 2,
      user: 'Tania Brotherhood',
      email: 'tbrotherhood1@bing.com',
      avatar: '',
      referredId: 6740,
      status: 'Unpaid',
      value: '$2113.04',
      earning: '$716.72',
    },
  ],
  orderData: [
    {
      id: 1,
      order: 5434,
      customer: 'Gabrielle Feyer',
      email: 'gfeyer0@nyu.edu',
      avatar: avatar8,
      payment: 1,
      status: 'Delivered',
      spent: 73.98,
      method: 'paypalLogo',
      date: '5/16/2022',
      time: '2:11 AM',
      methodNumber: 6522,
    },
    {
      id: 2,
      order: 6745,
      customer: 'Jackson Deignan',
      email: 'jdeignan1@dell.com',
      avatar: avatar8,
      payment: 3,
      status: 'Delivered',
      spent: 100.39,
      method: 'paypalLogo',
      date: '5/3/2023',
      time: '7:26 PM',
      methodNumber: 7538,
    },
  ],
  customerData: [
    {
      id: 1,
      customer: 'Stanfield Baser',
      customerId: 879861,
      email: 'sbaser0@boston.com',
      country: 'Australia',
      countryFlag: auFlag,
      countryCode: 'lk',
      order: 157,
      totalSpent: 2074.22,
      avatar: avatar1,
    },
    {
      id: 2,
      customer: 'Laurie Dax',
      customerId: 178408,
      email: 'ldax1@lycos.com',
      country: 'Australia',
      countryFlag: auFlag,
      countryCode: 'ru',
      order: 663,
      totalSpent: 2404.19,
      avatar: avatar2,
    },
  ],
}
