import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import {useState} from 'react';

const AddMovie = (props) => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalInputTitle, setModalInputTitle] = useState('');
    const [modalInputPoster, setModalInputPoster] = useState('');
    const [modalInputRating, setModalInputRating] = useState('');
    const [modalInputDescription, setModalInputDescription] = useState('');
    const [modalInputTrailer, setModalInputTrailer] = useState('');
    
    const showModal = () => {setIsModalVisible(true);};

    const handleOk = () => {props.onOk({title : modalInputTitle,posterUrl : modalInputPoster,rate : modalInputRating, description : modalInputDescription, trailer : modalInputTrailer});setIsModalVisible(false);};

    const handleCancel = () => {setIsModalVisible(false);};

    const modalTitleHandler = e => {setModalInputTitle(e.target.value)};

    const modalPosterHandler = e => {setModalInputPoster(e.target.value)};

    const modalRatingHandler = e => {setModalInputRating(e.target.value)};

    const modalDescriptionHandler = e => {setModalInputDescription(e.target.value)};

    const modalTrailerHandler = e => {setModalInputTrailer(e.target.value)};

return (
    <div>
        <Button className='addBtn' type="danger" onClick={showModal}> Add New Serie </Button>
        <Modal title="Add series" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} className='pop-up-modal'>
            <label>Title :</label>
            <br></br>
            <input type='text' placeholder="series title..." value={modalInputTitle} onChange={modalTitleHandler}></input>
            <br></br>
            <label> Poster :</label>
            <br></br>
            <input type='text' placeholder="add a valid url link..." value={modalInputPoster} onChange={modalPosterHandler}></input>
            <br></br>
            <label>Trailer :</label>
            <br></br>
            <input type='text' placeholder="add a valid url link..." value={modalInputTrailer} onChange={modalTrailerHandler}></input>
            <br></br>
            <label>Rating :</label>
            <br></br>
            <input type='number' placeholder="add a rating from 0 to 5..." value={modalInputRating} onChange={modalRatingHandler}></input>
            <br></br>
            <label>Description :</label>
            <br></br>
            <textarea type='text' placeholder='add your description' value={modalInputDescription} onChange={modalDescriptionHandler} cols='35' rows='8'></textarea>
        </Modal>
    </div>
);
}
export default AddMovie;