import Link from 'next/link';

export default function NavBar() {
    return (
        <div className="nav-bar">
            <Link href="/products/category/tableware"
                className='nav-item'>
                Tableware
            </Link>
            <Link href="/products/category/cookware"
                className='nav-item'>
                Cookware
            </Link>
            <Link href="/products/category/home-accessories"
                className='nav-item'>
                Home accessories
            </Link>
            <Link href="/products/category/lighting"
                className='nav-item'>
                Lighting
            </Link>
            <Link href="/products/category/textile"
                className='nav-item'>
                Textile
            </Link>
            <Link href="/products/category/furniture"
                className='nav-item'>
                Furniture
            </Link>
        </div>
    );
}