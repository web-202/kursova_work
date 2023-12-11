import { useEffect, useState } from 'react'
import axios from 'axios'

export default function News() {

    const [data, setData] = useState([])

    const [isCollapsed1, setIsCollapsed1] = useState(true);
    const [isCollapsed2, setIsCollapsed2] = useState(true);
    const [isCollapsed3, setIsCollapsed3] = useState(true);
    const [isCollapsed4, setIsCollapsed4] = useState(true);
    const [isCollapsed5, setIsCollapsed5] = useState(true);
    const [isCollapsed6, setIsCollapsed6] = useState(true);
    const [isCollapsed7, setIsCollapsed7] = useState(true);
    const [isCollapsed8, setIsCollapsed8] = useState(true);

    const toggleCollapse = (value) => {
        if (value === 1) {
            setIsCollapsed1(!isCollapsed1);
        }
        if (value === 2) {
            setIsCollapsed2(!isCollapsed2);
        }
        if (value === 3) {
            setIsCollapsed3(!isCollapsed3);
        }
        if (value === 4) {
            setIsCollapsed4(!isCollapsed4);
        }
        if (value === 5) {
            setIsCollapsed5(!isCollapsed5);
        }
        if (value === 6) {
            setIsCollapsed6(!isCollapsed6);
        }
        if (value === 7) {
            setIsCollapsed7(!isCollapsed7);
        }
        if (value === 8) {
            setIsCollapsed8(!isCollapsed8);
        }
    };

    useEffect(() => {
        handler()
    }, [])

    const handler = async () => {
        try {
            const response = await axios.get('http://localhost:5000/status')
                .then(response => {
                    setData(response.data[0])
                })
                .catch(error => {
                    console.log(error)
                })

        } catch (error) {
            console.log('error')
        }
    }
    return (
        <>
            <div className="main-sizm">
                <p className="main-qxv">
                    <p className="main-dcv" onClick={e => toggleCollapse(1)}>
                        <h3 className='title-sizm'>
                            {data.title}
                            <p style={{ float: 'right', marginRight: '30px' }}>
                                {isCollapsed1 ? '+' : '-'}
                            </p>
                        </h3>
                    </p>
                    <hr />
                    <div className={`collapses ${isCollapsed1 ? '' : 'open'}`}>
                        <div >
                            {data.data}
                        </div><hr />
                    </div>

                    <p className="main-dcv" onClick={e => toggleCollapse(2)}>
                        <h3 className='title-sizm'>
                            {data.title1}
                            <p style={{ float: 'right', marginRight: '30px' }}>
                                {isCollapsed2 ? '+' : '-'}
                            </p>
                        </h3>
                    </p>
                    <hr />
                    <div className={`collapses ${isCollapsed2 ? '' : 'open'}`}>
                        <div>
                            <span>
                                {data.data1}
                            </span>
                        </div><hr />
                    </div>

                    <p className="main-dcv" onClick={e => toggleCollapse(3)}>
                        <h3 className='title-sizm'>
                            {data.title2}
                            <p style={{ float: 'right', marginRight: '30px' }}>
                                {isCollapsed3 ? '+' : '-'}
                            </p>
                        </h3>
                    </p>
                    <hr />
                    <div className={`collapses ${isCollapsed3 ? '' : 'open'}`}>
                        <div>
                            <span>
                                {data.data2}
                            </span>
                        </div><hr />
                    </div>

                    <p className="main-dcv" onClick={e => toggleCollapse(4)}>
                        <h3 className='title-sizm'>
                            {data.title3}
                            <p style={{ float: 'right', marginRight: '30px' }}>
                                {isCollapsed4 ? '+' : '-'}
                            </p>
                        </h3>
                    </p>
                    <hr style={{ margin: '0' }} />
                    <div className={`collapses ${isCollapsed4 ? '' : 'open'}`}>
                        <div>
                            <span>
                                {data.data3}
                            </span>
                        </div><hr />
                    </div>

                </p>
            </div>
        </>
    );
}