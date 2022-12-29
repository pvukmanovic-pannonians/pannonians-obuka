import Button from 'react-bootstrap/Button';

export default function FirstSection ({children}) {
    return (
            <div className='section1 d-flex flex-column justify-content-center align-items-center py-5'>
                <h1 className='py-4' style={{color: 'white'}}>The simpler, safer way to pay and get paid.</h1>
                <Button className='mx-1 mt-3' style={{borderRadius: '40px', fontSize: '15px'}} variant="primary">Sign Up for Free</Button>{' '}
                <p className='mt-3 py-4' style={{color: 'white'}}><span>Own a business?</span> <span style={{fontWeight: 'bold'}}>Open a Business account</span></p>
            </div>
    )
}