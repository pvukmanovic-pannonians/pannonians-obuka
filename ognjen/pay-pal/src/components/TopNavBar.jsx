import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';

export default function TopNavBar({children}) {
    return (
        <div className="top-nav-bar">
            <div className='col-2'>
                <div style={{ height: '100%', width: '130px', padding: '10px 0 0 10px' }}>
                    <img style={{ height: '100%', width: '100%' }} src="https://www.paypalobjects.com/digitalassets/c/website/logo/full-text/pp_fc_hl.svg" alt="Home" />
                </div>
            </div>
            <ul style={{ width: '100%', height: '100%', textDecoration: 'none', listStyle: 'none', display: 'flex', justifyContent: 'center', marginBottom: 'none'}}>
                <li className="nav-bar-link py-4 px-4">Personal <FontAwesomeIcon icon={faAngleDown}/></li>
                <li className="nav-bar-link py-4 px-4">Buisness <FontAwesomeIcon icon={faAngleDown}/></li>
                <li className="nav-bar-link py-4 px-4">Partners and Developers</li>
            </ul>            
            <div className='col-2'>
                <div className='d-flex justify-content-center align-items-center h-100'>
                    <Button className='mx-1' style={{borderRadius: '40px'}} variant="outline-primary">Log in</Button>{' '}
                    <Button className='mx-1' style={{borderRadius: '40px'}} variant="primary">Sign up</Button>{' '}
                </div> 
            </div>
        </div>
    )
}