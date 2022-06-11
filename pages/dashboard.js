import React, { useEffect } from 'react'
import Apartment from '../components/apartment'
import { accomodations } from '../data'

const Dashboard = () => {

    useEffect(() => {
        console.log(accomodations)
    }, [])
  return (
    <div style={{backgroundColor: '#F8F9FA'}}>

        <div className="container">
            <div className="row">
                {
                    accomodations.map(a => {
                        return (
                            <div key={a.id} className="col-md-4">
                                <Apartment accomodation={a} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
        
        
    </div>
  )
}

export default Dashboard