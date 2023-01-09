import Button from 'react-bootstrap/Button';  
export default function FifthSection({children}) {
    return (
        <div className='d-flex flex-column align-items-center py-5 bg-light'>
            <p style={{fontSize: '28px'}}>Sign up and get started.</p>
            <Button className='mt-5 py-3 px-5' style={{borderRadius: '30px'}} variant="primary">Get Started</Button>{' '} 
        </div>
    )
}