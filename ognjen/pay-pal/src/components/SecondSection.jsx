import ItemCard from "./ItemCard"
export default function SecondSection ({children}) {
    return (
     <div className="section2 d-flex flex-column align-items-center mt-5 py-5">
        <h2 className="mt-3 py-2">PayPal is for everyone who pays or gets paid.</h2>
        <div className="d-flex mt-4 py-3">
            <ItemCard className="col-4" title='Individuals'></ItemCard>
            <ItemCard className="col-4" title='Buisnisses'></ItemCard>
            <ItemCard className="col-4" title='Partners'></ItemCard>
        </div>
     </div>
    )
}