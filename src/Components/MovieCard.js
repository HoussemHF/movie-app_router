import 'antd/dist/antd.css';
import { Rate } from 'antd';
import { Link} from 'react-router-dom';

const MovieCard = (props) => {
    const { item } = props
    return( 
        <div>
            <Link to={`/series/${item.title}`}>
                <div className='series'>
                    <img src={item.posterUrl} alt={item.title} style={{height:'35em', width:'100%'}}></img>
                    <div className='series-info'>
                        <h2>{item.title}</h2>
                        <Rate disabled value={parseInt(item.rate)} style={{fontSize: 25}}/>
                    </div>
                    <div className='series-description'>
                        <h2>Description :</h2>
                        <p>{item.description}</p>
                    </div>
                </div>
            </Link>
        </div>
        )
      }

export default MovieCard;