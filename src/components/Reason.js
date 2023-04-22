let Reason = (params) => {
    return(
        <>
        <div className={params.className}>
            <img src="./images/SLOC logo.png" alt="" className="reason-logo" />
            <h2>{params.heading}</h2>
            <p>{params.content}</p>
        </div>
        </>
    )
}

export default Reason;