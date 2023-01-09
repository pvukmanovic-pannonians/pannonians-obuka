export default function Tab ({arr}) {
    return (
        <>
         {arr.map(item => {
                return <div className="col-4" key={item.id}>
                        <span className="d-flex justify-content-center"><img className="" src={item.img} alt="" /></span>
                        <div className="d-flex justify-content-center align-items-center">
                            <p className="mx-3 px-3 py-2 mb-0 step-border">{item.step}</p>
                            <p className="mb-0">{item.desc}</p>
                        </div>
                    </div>
            })}
        </>  
    )
}