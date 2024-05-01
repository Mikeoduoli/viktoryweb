import React from 'react'

const Nav = () => {
  return (
    <>
    <div className="nav-container">
    <a href="#"><img src=''/>Logo</a>
    <div>
        <ul className="flex bg-white border-2 border-l-blue-500 rounded-lg w-[45%] justify-between p-4 text-[#FFA500]">
            {/* <Link><li>Home</li></Link>
            <Link><li>Shop</li></Link>
            <Link><li>Brand</li></Link>
            <Link><li>About</li></Link>
            <Link><li>Contact US</li></Link> */}
            <li className="active" href="#">Home</li>
            <li href="#">Shop</li>
            <li href="#">Brand</li>
            <li href="#">About</li>
            <li href="#">About</li>
            <li href="#">Contact US</li>
        </ul>
    </div>
        <section className="">
            <article>

            </article>

            <article>

            </article>
        </section>
        </div>
      </>
  )
}

export default Nav
