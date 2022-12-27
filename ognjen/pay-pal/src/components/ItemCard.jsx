import Button from 'react-bootstrap/Button';

export default function ItemCard ({title}) {
    const cardImg = {
        Individuals: 'https://www.paypalobjects.com/digitalassets/c/website/marketing/emea/gb/en/home/woman_side_icon.jpeg',
        Buisnisses: 'https://www.paypalobjects.com/digitalassets/c/website/marketing/emea/gb/en/home/pos_machine_icon.jpeg',
        Partners: 'https://www.paypalobjects.com/digitalassets/c/website/marketing/emea/gb/en/home/shopping_bag_icon.jpeg'
    }
    const description = {
        Individuals: 'Find out why we have more than 200M active accounts worldwide.',
        Buisnisses: 'Join more than 7 million businesses around the world offering PayPal.',
        Partners: 'Work with PayPal to offer your customers world class payment solutions.'
    }

    return (
        <div className="d-flex flex-column align-items-center mt-2 px-3">
            <img src={cardImg[title]} style={{height: '70px', width: '70px'}} className='mb-3 ms-auto me-auto' alt="" />
            <h3 className="m-0 py-2">{title}</h3>
            <p className="w-100 px-2 d-flex flex-wrap py-2 text-center">{description[title]}</p>
            <Button className='py-3 px-5' style={{borderRadius: '30px'}} variant="outline-primary">Learn More</Button>{' '}  
        </div>
    )
}