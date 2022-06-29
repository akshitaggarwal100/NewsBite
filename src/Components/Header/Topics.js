import './header.css';
import { BsArrowUpCircleFill } from 'react-icons/bs';
import { MdBusinessCenter } from 'react-icons/md';
import { FaBasketballBall, FaTheaterMasks } from 'react-icons/fa';
import { BiChip } from 'react-icons/bi';
import { ImLab } from 'react-icons/im'

function Topics(props) {

  function handleChange(topic) {
    props.handleTopic(topic);
  }

  return (
    <ul className={props.menu ? 'topics' : 'disable'}>
      <li className={`topic ${props.topic === 'general' ? 'active' : 'notActive'}`} onClick={() => handleChange('general')}> <BsArrowUpCircleFill className='topicIcon' />Top News </li>
      <li className={`topic ${props.topic === 'technology' ? 'active' : 'notActive'}`} onClick={() => handleChange('technology')}> <BiChip className='topicIcon' />Technology </li>
      <li className={`topic ${props.topic === 'business' ? 'active' : 'notActive'}`} onClick={() => handleChange('business')}> <MdBusinessCenter className='topicIcon' />Business </li>
      <li className={`topic ${props.topic === 'science' ? 'active' : 'notActive'}`} onClick={() => handleChange('science')}> <ImLab className='topicIcon' />Science </li>
      <li className={`topic ${props.topic === 'entertainment' ? 'active' : 'notActive'}`} onClick={() => handleChange('entertainment')}> <FaTheaterMasks className='topicIcon' />Entertainment </li>
      <li className={`topic ${props.topic === 'sports' ? 'active' : 'notActive'}`} onClick={() => handleChange('sports')}> <FaBasketballBall className='topicIcon' />Sports </li>
    </ul>
  )
}

export default Topics;