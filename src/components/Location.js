import React from 'react'

export default function Location(props) {
    return (
        <section >
            <div>
                <img
                    src={props.imageUrl}
                    alt='setif'
                />
            </div>
            <div className='place--info'>
                <p className='place--line'>
                    {/*<i className='fas fa-map-marker-alt'></i>*/}
                    <span className='place--country'>
                        {props.location}
                        <a
                            className='place--link'
                            href={props.googleMapsUrl}
                        >
                            View on Google Maps
                        </a>
                    </span>
                </p>
                <h1 className='place--location'>{props.title}</h1>
                <h4 className='place--date'>
                    {props.startDate} - {props.endDate}
                </h4>
                <p className='place--desc'>{props.description}</p>
            </div>
        </section>
    );
}