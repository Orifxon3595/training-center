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
    title: 'Dasturlar',
    icon: { icon: 'bx-book-reader' },
    children: [
      {
        title: 'Kurslar',
        to: 'apps-programs-cours'
      },
      {
        title: 'Guruhlar',
        to: 'apps-programs-groups'
      }
    ]
  },
]
