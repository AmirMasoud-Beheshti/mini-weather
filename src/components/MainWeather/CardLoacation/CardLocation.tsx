import styles from './CardLocation.module.scss'
export interface CardLocationProps{
  location?:string
  weatherDescription?:string
}
const CardLocation = (props:CardLocationProps) => {
  const {location='Tehran', weatherDescription='few clouds'} = props
  return (
    <div className={styles['location']}>
      <h1 className={styles['location__name']}>{location}</h1>
      <span className={styles['location__description']}>{weatherDescription}</span>
    </div>
  )
}

export default CardLocation