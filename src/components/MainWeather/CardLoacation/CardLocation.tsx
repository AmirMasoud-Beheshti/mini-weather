import './CardLocation.scss'
export interface CardLocationProps{
  location?:string
  weatherDescription?:string
}
const CardLocation = (props:CardLocationProps) => {
  const {location='Tehran', weatherDescription='few clouds'} = props
  return (
    <div className='location'>
      <h1  className='location__name'>{location}</h1>
      <span  className='location__description'>{weatherDescription}</span>
    </div>
  )
}

export default CardLocation