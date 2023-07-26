import React from 'react'
import './Landing.css'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className='landing-main-div'>
        <section className='landing-welcome-section'> 
                <img className="new-collection-img"src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80" alt="new collection" />
                <div className='new-collection-texts'>
                    <h3>okayyyyy</h3>
                    <p>abraca dabra</p>
                    <button>Shop the Collection</button>

                </div>

        </section>

        <section className='categories'>
            <div className='landing-categories-div'>
                <Link to ="">
                <img src="https://images.unsplash.com/photo-1581541234269-03d5d8576c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1092&q=80" alt="chairs" />
                  </Link>
               
            </div>
            <div className='landing-categories-div'>

                <Link>
                <img src="https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1109&q=80" alt="sofas" />

                </Link>
               

            </div>
            <div className='landing-categories-div'>
                <Link>
                <img src="https://img.freepik.com/free-vector/vector-set-floor-table-lamps-with-black-nightstand-isolated-white-background_1284-48473.jpg?w=900&t=st=1690319164~exp=1690319764~hmac=bb55452d06e4173f6070303aac170711af258101597251cb1025b03cb95726b0" alt="lamps" />
                </Link>
                

            </div>

        </section>

    </div>
  )
}

export default Landing