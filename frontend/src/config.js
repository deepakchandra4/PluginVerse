const app_config = {
  apiUrl: 'http://localhost:5000',
  title: 'PluginVerse',
  pluginData: [
    {
      name: 'Manage Products',
      description: 'Manage your products',
      image: '/product-manage.jpeg',
      selectorid: 'storeplugin'
    },
    {
      name: 'Product Browser',
      description: 'Browse your products',
      image: '/product-manage.jpeg',
      selectorid: 'browseplugin'
    },
    {
      name: 'Manage Cart',
      description: 'Manage your cart',
      image: '/cart-manage.jpg',
      selectorid: 'browsepluginwithcart'
    },
    {
      name: 'Manage Orders',
      description: 'Manage your orders',
      image: '/order-manage.jpg',
      selectorid: 'orderplugin'
    },
    {
      name: 'Payment Plugin',
      description: 'Manage your payments',
      image: '/payment-manage.png',
      selectorid: 'paymentplugin'
    }
  ]
};

export default app_config;
