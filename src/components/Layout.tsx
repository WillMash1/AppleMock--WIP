import Navbar from './Navbar/Navbar'
import iphone2 from '../assets/images/iphone2.jpg'
import iphoneBlue from '../assets/images/products/iphoneBlue.jpg'
import { NavBarLinksType } from '@/types/types'
import ProductCard, { ProductCardProps } from './ProductCard/ProductCard';

function Layout() {
  const navBarLinks: NavBarLinksType = {
    links:
      [
        {
          link: 'Store',
          subLinksData:[ 
          {
            title: 'Shop',
            sublinks: ['Shop the Latest', 'Mac' , 'iPad', 'iPhone', 'Apple Watch', 'Apple Vision Pro', 'Accessories'],
          },
          {
            title: 'Quick Links',
            sublinks: ['Find a Store', 'Order Status' , 'Apple Trade In', 'Financing'],
          },
          {
            title: 'Shop Special Stores',
            sublinks: ['Certified Refurbished', 'Education ' , 'Business', 'Veterans & Military', 'Government'],
          },
        ]
        },
        {
          link: 'Mac',
          subLinksData:[ 
          {
            title: 'Mac 1',
            sublinks: ['test', 'test' , 'test', 'test', 'test', 'test', 'test'],
          },
          {
            title: 'Mac 2',
            sublinks: ['test', 'test' , 'test', 'test', 'test', 'test', 'test'],
          },
          {
            title: 'Mac 3',
            sublinks: ['test', 'test' , 'test', 'test', 'test', 'test', 'test'],
          },
        ]
        },
        {
          link: 'iPad',
          subLinksData:[ 
            {
              title: 'iPad 1',
              sublinks: ['test', 'test' , 'test', 'test', 'test', 'test', 'test'],
            },
            {
              title: 'iPad 2',
              sublinks: ['test', 'test' , 'test', 'test', 'test', 'test', 'test'],
            },
            {
              title: 'iPad 3',
              sublinks: ['test', 'test' , 'test', 'test', 'test', 'test', 'test'],
            },
          ]
        },
        {
          link: 'iPhone',
          subLinksData:[ 
            {
              title: 'iPhone 1',
              sublinks: ['test', 'test' , 'test', 'test', 'test', 'test', 'test'],
            },
            {
              title: 'iPhone 2',
              sublinks: ['test', 'test' , 'test', 'test', 'test', 'test', 'test'],
            },
            {
              title: 'iPhone 3',
              sublinks: ['test', 'test' , 'test', 'test', 'test', 'test', 'test'],
            },
          ]
        },
        {
          link: 'Watch',
          subLinksData:[ 
            {
              title: 'Watch 1',
              sublinks: ['test', 'test' , 'test', 'test', 'test', 'test', 'test'],
            },
            {
              title: 'Watch 2',
              sublinks: ['test', 'test' , 'test', 'test', 'test', 'test', 'test'],
            },
            {
              title: 'Watch 3',
              sublinks: ['test', 'test' , 'test', 'test', 'test', 'test', 'test'],
            },
          ]
        },
        {
          link: 'Vision',
          subLinksData:[ 
            {
              title: 'Vision 1',
              sublinks: ['test', 'test' , 'test', 'test', 'test', 'test', 'test'],
            },
            {
              title: 'Vision 2',
              sublinks: ['test', 'test' , 'test', 'test', 'test', 'test', 'test'],
            },
            {
              title: 'Vision 3',
              sublinks: ['test', 'test' , 'test', 'test', 'test', 'test', 'test'],
            },
          ]
        },
        {
          link: 'AirPods',
          subLinksData:[ 
            {
              title: 'AirPods 1',
              sublinks: ['test', 'test' , 'test', 'test', 'test', 'test', 'test'],
            },
            {
              title: 'AirPods 2',
              sublinks: ['test', 'test' , 'test', 'test', 'test', 'test', 'test'],
            },
            {
              title: 'AirPods 3',
              sublinks: ['test', 'test' , 'test', 'test', 'test', 'test', 'test'],
            },
          ]
        },
        {
          link: 'Tv & Home',
          subLinksData:[ 
            {
              title: 'Tv & Home 1',
              sublinks: ['test', 'test' , 'test', 'test', 'test', 'test', 'test'],
            },
            {
              title: 'Tv & Home 2',
              sublinks: ['test', 'test' , 'test', 'test', 'test', 'test', 'test'],
            },
            {
              title: 'Tv & Home 3',
              sublinks: ['test', 'test' , 'test', 'test', 'test', 'test', 'test'],
            },
          ]
        },
        {
          link: 'Entertainment',
          subLinksData:[ 
            {
              title: 'Entertainment 1',
              sublinks: ['test', 'test' , 'test', 'test', 'test', 'test', 'test'],
            },
            {
              title: 'Entertainment 2',
              sublinks: ['test', 'test' , 'test', 'test', 'test', 'test', 'test'],
            },
            {
              title: 'Entertainment 3',
              sublinks: ['test', 'test' , 'test', 'test', 'test', 'test', 'test'],
            },
          ]
        },
        {
          link: 'Accessories',
        },
        {
          link: 'Support',
        },
      ]

  } ;

  const cardProps: ProductCardProps = {
    title: 'iPhone 16 Pro',
    subtitle: 'Hello, Apple Intelligence.',
    imageSrc: iphone2,
    size: {},
  }

  const secondCardProps: ProductCardProps = {
    title: 'iPhone 16 Pro',
    subtitle: 'Hello, Apple Intelligence.',
    imageSrc: iphoneBlue,
    size: {},
  }
  
  return (
    <>
        <div className='flex flex-col'>
            <Navbar {...navBarLinks}/>
            {/* <div className='h-[570px]'>
              <img src={iphone2} alt="" className='w-full h-full object-cover' />
            </div> */}

            <div className='flex flex-col w-full'>
              <ProductCard imageSrc={cardProps.imageSrc} size={cardProps.size} subtitle={cardProps.subtitle} title={cardProps.title}/>
              <ProductCard imageSrc={secondCardProps.imageSrc} size={secondCardProps.size} subtitle={secondCardProps.subtitle} title={secondCardProps.title}/>
            </div>
        
        </div>
    </>
  )
}

export default Layout
