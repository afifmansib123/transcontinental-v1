import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Bank',
      email: 'admin1@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
      isExporter: false,
    },
    {
      name: 'Afif',
      email: 'admin2@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
      isExporter: false,
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
      isExporter: false,
    },
    {
      name: 'Kram',
      email: 'kram@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
      isExporter: true,
    },
  ],
  products: [
    {
      name: 'Sany Excavator',
      slug: 'EXC00000001',
      category: 'excavator',
      image1: '/images/image1.jpeg',
      image2: '/images/image2.jpeg',
      image3: '/images/image3.jpeg',
      price: 9000,
      brand: 'Sany',
      rating: 4.5,
      numReviews: 10,
      countInStock: 9,
      description: 'Highest level standard factory tech , low cost equipment , will be your good chioce. Big market presence among the Sany excavator in global.',
      isFeatured: true,
      banner: '/images/featured-1.jpeg',
    },
    {
      name: 'Sany Excavator',
      slug: 'EXC00000002',
      category: 'excavator',
      image1: '/images/image1.jpeg',
      image2: '/images/image2.jpeg',
      image3: '/images/image3.jpeg',
      price: 8000,
      brand: 'Sany',
      rating: 3.2,
      numReviews: 10,
      countInStock: 20,
      description: 'One of Our Best Manufactured Bulldozers locally from thailand',
      isFeatured: true,
      banner: '/images/featured-2.jpeg',
      
      
    },
    {
      name: 'Sany Excavator',
      slug: 'EXC00000003',
      category: 'excavator',
      image1: '/images/image1.jpeg',
      image2: '/images/image2.jpeg',
      image3: '/images/image3.jpeg',
      price: 9010,
      brand: 'Sany',
      rating: 4.5,
      numReviews: 10,
      countInStock: 9,
      description: 'this is another variant of Highest level standard factory tech , low cost equipment , will be your good chioce. Big market presence among the Sany excavator in global.',
      isFeatured: true,
      banner: '/images/featured-3.gif',
      
    },
    {
      name: 'Non Branded Excavator',
      slug: 'EXC00000004',
      category: 'excavator',
      image1: '/images/image1.jpeg',
      image2: '/images/image2.jpeg',
      image3: '/images/image3.jpeg',
      price: 90,
      brand: 'Non-Brand(2nd hand)',
      rating: 2.9,
      numReviews: 13,
      countInStock: 1,
      description: 'A second hand local made excavator going for cheap price',
     
      
    },
    {
      name: 'Volvo excavator',
      slug: 'EXC00000005',
      category: 'excavator',
      image1: '/images/image1.jpeg',
      image2: '/images/image2.jpeg',
      image3: '/images/image3.jpeg',
      price: 958,
      brand: 'Volvo',
      rating: 3.5,
      numReviews: 7,
      countInStock: 20,
      description: 'Brand New Volvo Excavator',
    },
    {
      name: 'non branded excavator',
      slug: 'EXC00000006',
      category: 'excavator',
      image1: '/images/image1.jpeg',
      image2: '/images/image2.jpeg',
      image3: '/images/image3.jpeg',
      price: 750,
      brand: 'Non-branded',
      rating: 2.4,
      numReviews: 14,
      countInStock: 20,
      description: 'Non - Branded second hand excavator',
    },
    {
      name: 'Industrial Garment Machine',
      slug: 'GM00000001',
      category: 'machine',
      image1: '/images/image1.jpeg',
      image2: '/images/image2.jpeg',
      image3: '/images/image3.jpeg',
      price: 75001,
      brand: 'CHINAMADE',
      rating: 2.4,
      numReviews: 14,
      countInStock: 2,
      description: 'A great product to be used in industry for garment manufactures',
    },
    {
      name: 'Industrial Rubber Machine',
      slug: 'RM00000001',
      category: 'machine',
      image1: '/images/image1.jpeg',
      image2: '/images/image2.jpeg',
      image3: '/images/image3.jpeg',
      price: 5001,
      brand: 'MAKO',
      rating: 2.4,
      numReviews: 14,
      countInStock: 2,
      description: 'For Manufacture of rubber made products',
    },
    {
      name: 'Thairung Car',
      slug: 'SUV00000001',
      category: 'car',
      image1: '/images/image1.jpeg',
      image2: '/images/image2.jpeg',
      image3: '/images/image3.jpeg',
      price: 5001,
      brand: 'ThaiRung',
      rating: 2.4,
      numReviews: 14,
      countInStock: 2,
      description: 'One of the revolutions of Automotive Industry - Thailand Manufactured Thairung SUV',
    },
    {
      name: 'Onions',
      slug: 'RF00000001',
      category: 'vegetables',
      image1: '/images/image1.jpeg',
      image2: '/images/image2.jpeg',
      image3: '/images/image3.jpeg',
      price: 5001,
      brand: 'NON-Brand',
      rating: 2.4,
      numReviews: 14,
      countInStock: 2,
      description: 'Get Fresh Onions From The farmers Of Thailand',
    },
    {
      name: 'Farming Truck',
      slug: 'AM00000001',
      category: 'vegetables',
      image1: '/images/image1.jpeg',
      image2: '/images/image2.jpeg',
      image3: '/images/image3.jpeg',
      price: 8003,
      brand: 'JCX INT',
      rating: 2.4,
      numReviews: 14,
      countInStock: 2,
      description: 'Tructor for Farming Thailand Produced',
    },
  ],
};

export default data;
