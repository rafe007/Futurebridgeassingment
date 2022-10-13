
import './movie.css';

const movieCard = (props) => {
   return <div className="moviecard">
       <div>{props.movie_name}</div>
       <div>{props.rating}</div>
       <div>{props.released_date}</div>
   </div>
}

export default movieCard;