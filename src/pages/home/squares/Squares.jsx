import MdSquare from '../../../components/md-square/MdSquare';
import {MdAccessTimeFilled} from 'react-icons/md';
import {FaMapMarkerAlt} from 'react-icons/fa';
import {FiPhoneCall} from 'react-icons/fi';
import './squares.css';


const Squares = () => {
  return (
    <section className='md-squares'>
      <MdSquare title="10 AM - 7 PM" desc="Opening Hour" icon={<MdAccessTimeFilled className='md-square-icon'/>}/>
      <MdSquare title="GEC, Chittagong" desc="Address" icon={<FaMapMarkerAlt className='md-square-icon'/>}/>
      <MdSquare title="+880123443" desc="Call Now" icon={<FiPhoneCall className='md-square-icon'/>}/>
    </section>
  )
}

export default Squares