const fullHeart = <i className="fa-solid fa-heart"></i>
const crackedHeart = <i className="fa-solid fa-heart-crack"></i>
const emptyHeart = <i className="fa-regular fa-heart"></i>

type HealthProps = {
    health: number
}

const Health = ({ health }: HealthProps) => {
    const calcHeart = (idx: number) => {
        if(Math.floor(health) > idx){
            return fullHeart;
        } 
        if(health > idx) {
            return crackedHeart;
        }
        return emptyHeart;
    }
  return (<div className="health">
    {calcHeart(0)}
    {calcHeart(1)}
    {calcHeart(2)}
    {calcHeart(3)}
    {calcHeart(4)}
    </div>)
}

export default Health