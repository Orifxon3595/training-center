export default [
  {
    title: 'Home',
    to: { name: 'root' },
    icon: { icon: 'bx-home-alt' },
  },
  {
    title: 'Students',
    to: 'apps-students',
    icon: { icon: 'bx-user' },
  },
  {
    title: 'Cours and Groups',
    to: 'apps-cours-and-group',
    icon: { icon: 'bx-book-reader' },
  },
  {
    title: 'Ecommerce',
    icon: { icon: 'bx-cart-alt' },
    children: [
      {
        title: 'Customer',
        children: [
          { title: 'List', to: 'apps-ecommerce-customer-list' },
          { title: 'Details', to: { name: 'apps-ecommerce-customer-details-id', params: { id: 478426 } } },
        ],
      },
    ],
  },
]
