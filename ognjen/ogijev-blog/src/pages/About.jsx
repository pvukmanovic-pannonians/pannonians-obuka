export default function About() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', padding: '0 20px', alignItems: 'center', justifyContent: 'center'}}>
            <h1>About</h1>
            <p style={{maxWidth: '800px'}}>Makers, breakers, earth shakers. We are page that brings you all inclusive information on fields of humanity.
                We care not for discrimination, defamation and other foolish things. All are welcome to write articles on our page.
                Welcome and let those whom you dislike feel the sting of your pen.
            </p>
            <div style={{height: '450px', width: '450px'}}>
                <img style={{maxWidth: '100%', maxHeight: '100%'}} src="https://creakyjoints.org/wp-content/uploads/2020/07/0220_Chronic_Pain_Speedometer_Logo.jpg" alt="" />
            </div>
        </div>
    )
}