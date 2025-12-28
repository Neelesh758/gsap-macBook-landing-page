import React from 'react'
import { navlist } from '../constants'

function Navbar() {
  return (
    <header>
      <nav>
        <img src="./logo.svg" alt="Apple Logo" />

        <ul>
          {
            navlist.map((Link)=>(
              <li key={Link.label}>
                <a href={Link.label}>{Link.label}</a>
              </li>
            ))
          }
        </ul>
        <div className='flex justify-center gap-3'>
          <button>
            <img src="./search.svg" alt="Search" />
          </button>
          <button>
            <img src="./cart.svg" alt="Cart" />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar