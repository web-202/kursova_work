import { NavLink } from "react-router-dom";


const Loyauts = () => {
    return (
        <>
            <div className="main-sizm">
                <p className="main-qxv">
                    <hr style={{ marginTop: '10px' }} />
                    <p className="main-dcv" onClick={() => window.location.href = '/status'}>
                        <h3 style={{ cursor: 'pointer' }} className='title-sizm'>
                            Статус учасника бойових дій
                            <p style={{ float: 'right', marginRight: '30px' }}>
                            -{">"}
                            </p>
                        </h3>
                    </p>
                    <hr />

                    <p className="main-dcv" onClick={() => window.location.href = '/status'}>
                        <h3 className='title-sizm'>
                            Статус особи з інвалідністю внаслідок війни
                            <p style={{ float: 'right', marginRight: '30px' }}>
                            -{">"}
                            </p>
                        </h3>
                    </p>
                    <hr />

                    <p className="main-dcv" onClick={() => window.location.href = '/status'}>
                        <h3 className='title-sizm'>
                            Статус учасника війни
                            <p style={{ float: 'right', marginRight: '30px' }}>
                            -{">"}
                            </p>
                        </h3>
                    </p>
                    <hr />
                </p>
            </div>


        </>
    )
}

export default Loyauts;