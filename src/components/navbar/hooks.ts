export const useCustom = () => {
  const titles = 'React | MovieDB'

  const navbarList = [
    {
      titles: 'Home',
      paths: '/',
    },
    {
      titles: 'Favorites',
      paths: '/favorites',
    },
    {
      titles: 'Profile',
      paths: '/profile',
    },
  ]

  return {
    datas: {
      titles,
      navbarList,
    },
  }
}
