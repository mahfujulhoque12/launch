import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { fetchLaunches } from './LaunchesSlice';
import { v4 as uuidv4 } from 'uuid';
import style from './launchesStyle.css'

const LaunchesView = () => {
    const {isLoading,launches,error}=useSelector((state)=>state.Launches)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchLaunches())
    },[])
    return (
        <div>
          {isLoading && <h3>Loading...</h3>}
          {error && <h3>{error}</h3>}
         <section>
         {launches && launches.map((launche)=>{
            return <article key={uuidv4()}>
                <h3><span>Flight-Number:</span>  {launche.flight_number}</h3>
                <h4><span>Mission-Name:</span> {launche.mission_name}</h4>
                <h4><span>Launch-Year:</span> {launche.launch_year}</h4>
                <h4><span>Launch-date-unix:</span> {launche.launch_date_unix}</h4>
                <h4><span>Launch-date-utc:</span> {launche.launch_date_utc}</h4>
                <h4><span>Launch-date-local:</span> {launche.launch_date_local}</h4>
                <h4><span>Tentative-max-precision:</span> {launche.tentative_max_precision}</h4>
                <h4><span>launch-window:</span> {launche.launch_window}</h4>
                <h4><span>Rocket-id:</span>  {launche.rocket.rocket_id}</h4>
                <h4><span>Rocket-name</span> {launche.rocket.rocket_name}</h4>
                <h4><span>Rocket-type</span> {launche.rocket.rocket_type}</h4>
                
            </article>
          })}
         </section>
        </div>
    );
};

export default LaunchesView;