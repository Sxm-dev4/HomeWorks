 export const menuData = {
  title: 'Root',
  link: '/',
  component: 'HomePage',
  children: [
    {
      title: 'Dashboard',
      link: '/dashboard',
      component: 'DashboardPage',
      children: [
        {
          title: 'Analísis',
          link: '/dashboard/analytics',
          component: 'AnalyticsPage',
          children: []
        },
        {
          title: 'Reportes',
          link: '/dashboard/reports',
          component: 'ReportsPage',
          children: []
        }
      ]
    },
    {
      title: 'Productos',
      link: '/products',
      component: 'ProductsPage',
      children: [
        {
          title: 'Electrónica',
          link: '/products/electronics',
          component: 'ElectronicsPage',
          children: []
        },
        {
          title: 'Ropa',
          link: '/products/clothing',
          component: 'ClothingPage',
          children: []
        }
      ]
    },
    {
      title: 'Configuración',
      link: '/settings',
      component: 'SettingsPage',
      children: [
        {
          title: 'Perfil',
          link: '/settings/profile',
          component: 'ProfilePage',
          children: []
        },
        {
          title: 'Seguridad',
          link: '/settings/security',
          component: 'SecurityPage',
          children: []
        }
      ]
    },
    {
      title: 'Ayuda',
      link: '/help',
      component: 'HelpPage',
      children: []
    }
  ]
};
