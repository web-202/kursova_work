import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/first.css'
import { NavLink } from 'react-router-dom';


export default function First() {

    const [data, setData] = useState([])

    useEffect(() => {
        handler()
    }, [])

    const handler = async () => {
        try {
            const response = await axios.get('http://localhost:5000/main')
                .then(response => {
                    setData(response.data[0])
                    console.log(response.data[0])
                })
                .catch(error => {
                    console.log(error)
                })

        } catch (error) {
            console.log('error')
        }
    }
    return (
        <div className="main-first">
            <div className="main">
                <div>
                    <h1 className='title'>
                        {data.title}
                    </h1>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                        <h3 style={{ width: '70%', textAlign: 'center' }}>{data.itis}</h3>
                    </div>
                    <h4>{data.title1}</h4>
                    <span className='title-small'>{data.data1}</span>

                    <h4>{data.title2}</h4>
                    <span className='title-small'>{data.data2}</span>

                    <h4>{data.title3}</h4>
                    <span className='title-small'>{data.data3}</span>

                    <h4>{data.title4}</h4>
                    <span className='title-small'>{data.data4}</span>

                    <h4>{data.title5}</h4>
                    <span className='title-small'>{data.data5}</span>

                    {/* <hr /> */}
                </div>

                <div style={{border: '1px solid black'}}>
                    <div style={{ textAlign: 'center', margin: '20px' }}>
                        <h1 style={{ fontFamily: 'serif' }}>База знань ветерана</h1>
                        <h4 style={{ fontFamily: 'serif' }}>Служби та підтримки</h4>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', marginTop: '20px' }}>
                        <div class="card" style={{ width: '18rem', margin: '10px' }}>
                            <div className="card-body">
                                <h4 className="card-title">Гарантії та пільги</h4>
                                <p className="card-text">Тут ви можете дізнатись про пільги на проїзд, навчання, комунальні послуги для осіб з інвалідністю, учасників бойових дій, членів сімей</p>
                                <NavLink to='/support' className="btn btn-primary">Перейти</NavLink>
                            </div>
                        </div>

                        <div class="card" style={{ width: '18rem', margin: '10px' }}>
                            <div className="card-body">
                                <h4 className="card-title">Реабілітація</h4>
                                <p className="card-text">Тут ви можете дізнатись про пільги на проїзд, навчання, комунальні послуги для осіб з інвалідністю, учасників бойових дій, членів сімей</p>
                                <NavLink to='/rehabilitation' className="btn btn-primary">Перейти</NavLink>
                            </div>
                        </div>

                        <div class="card" style={{ width: '18rem', margin: '10px' }}>
                            <div className="card-body">
                                <h4 className="card-title">Статуси</h4>
                                <p className="card-text">Тут ви можете дізнатись про пільги на проїзд, навчання, комунальні послуги для осіб з інвалідністю, учасників бойових дій, членів сімей</p>
                                <NavLink to='/statusVariants' className="btn btn-primary">Перейти</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}