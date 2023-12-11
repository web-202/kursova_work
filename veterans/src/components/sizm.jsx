import { useEffect, useState } from 'react'
import '../styles/first.css'
import axios from 'axios'

export default function Sizm() {
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
   
    return (
        <div className="main-sizm">
            <p className="main-qxv">
                <hr style={{marginTop: '10px'}}/>
                <p className="main-dcv">
                    <h3 onClick={e => toggleCollapse(1)} className='title-sizm'>
                        Повна назва
                        <p style={{ float: 'right', marginRight: '30px' }}>
                                {isCollapsed1 ? '+' : '-'}
                            </p>
                    </h3>
                </p>
                <hr />
                <div className={`collapses ${isCollapsed1 ? '' : 'open'}`}>
                    <div >
                        Першочергове безплатне забезпечення ліками, лікарськими засобами, імунобіологічними препаратами та виробами медичного призначення, що придбані за рецептами лікаря.
                    </div><hr />
                </div>

                <p className="main-dcv">
                    <h3 onClick={e => toggleCollapse(2)} className='title-sizm'>
                        Зміст пільги
                        <p style={{ float: 'right', marginRight: '30px' }}>
                                {isCollapsed2 ? '+' : '-'}
                            </p>
                    </h3>
                </p>
                <hr />
                <div className={`collapses ${isCollapsed2 ? '' : 'open'}`}>
                    <div>
                        <span>
                            Пільга закріплює право на першочергове безоплатне отримання ліків, лікарських засобів, імунобіологічних препаратів та виробів медичного призначення за рецептами лікарів.Рецепти на такі ліки можуть виписувати лікарі лікувально-профілактичних закладів, в яких обслуговується ветеран. На пільгових умовах можна отримати лікарські засоби, які передбачені у Національному переліку основних лікарських засобів. Такі ліки фінансуються з державного або місцевого бюджету та закуповуються закладами охорони здоров’я. Отримати лікарські засоби можна в державних (у тому числі відомчих) та комунальних медичних закладах. Особи, які мають особливі заслуги перед Батьківщиною, що проходять лікування у відомчих лікувально-профілактичних закладах отримують безкоштовні ліки за рецептом лікаря в аптеках, закріплених за цими закладами.
                        </span>
                    </div><hr />
                </div>

                <p className="main-dcv">
                    <h3 onClick={e => toggleCollapse(3)} className='title-sizm'>
                        Чим регламентовано
                        <p style={{ float: 'right', marginRight: '30px' }}>
                                {isCollapsed3 ? '+' : '-'}
                            </p>
                    </h3>
                </p>
                <hr />
                <div className={`collapses ${isCollapsed3 ? '' : 'open'}`}>
                    <div>
                        <span>
                            п.4 ч.1 ст.16 Закону України «Про статус ветеранів війни, гарантії їх соціального захисту»; Постанова Кабінету Міністрів України «Про впорядкування безоплатного та пільгового відпуску лікарських засобів за рецептами лікарів у разі амбулаторного лікування окремих груп населення та за певними категоріями захворювань» від 17 серпня 1998 р. № 1303; Постанова Кабінету Міністрів України «Про впорядкування безоплатного та пільгового відпуску лікарських засобів за рецептами лікарів у разі амбулаторного лікування окремих груп населення та за певними категоріями захворювань» від 17 серпня 1998 р. № 1303; Постанова Кабінету Міністрів України «Деякі питання реімбурсації лікарських засобів» від 27 лютого 2019 р. № 135; Постанова Кабінету Міністрів України «Деякі питання державного регулювання цін на лікарські засоби і вироби медичного призначення» № 333 від 25.03.2009.
                        </span>
                    </div><hr />
                </div>

                <p className="main-dcv">
                    <h3 onClick={e => toggleCollapse(4)} className='title-sizm'>
                        Необхідні документи
                        <p style={{ float: 'right', marginRight: '30px' }}>
                                {isCollapsed4 ? '+' : '-'}
                            </p>
                    </h3>
                </p>
                <hr />
                <div className={`collapses ${isCollapsed4 ? '' : 'open'}`}>
                    <div>
                        <span>
                            - рецепт лікаря;<br /> - посвідчення особи, що має особливі заслуги перед Батьківщиною.                        
                        </span>
                    </div><hr />
                </div>

                <p className="main-dcv">
                    <h3 onClick={e => toggleCollapse(5)} className='title-sizm'>
                        Хто має право
                        <p style={{ float: 'right', marginRight: '30px' }}>
                                {isCollapsed5 ? '+' : '-'}
                            </p>
                    </h3>
                </p>
                <hr />
                <div className={`collapses ${isCollapsed5 ? '' : 'open'}`}>
                    <div>
                        <span>
                        Особи, що мають особливі заслуги перед Батьківщиною.
                        </span>
                    </div><hr />
                </div>

                <p className="main-dcv">
                    <h3 onClick={e => toggleCollapse(6)} className='title-sizm'>
                    Куди звертатись за отриманням
                    <p style={{ float: 'right', marginRight: '30px' }}>
                                {isCollapsed6 ? '+' : '-'}
                            </p>
                    </h3>
                </p>
                <hr />
                <div className={`collapses ${isCollapsed6 ? '' : 'open'}`}>
                    <div>
                        <span>
                            Першим кроком є звернення до лікаря за отриманням рецепту. Важливою є наявність на рецепті підпису лікаря та його особиста печатка, адже тільки в такому випадку рецепт має юридичну силу. Дізнатись адресу аптеки де можна отримати ліки також можна у лікаря. Під час звернення до аптеки необхідно надати аптекарю рецепт лікаря та документ, що підтверджує статус особи.
                        </span>
                    </div><hr />
                </div>

                <p className="main-dcv">
                    <h3 onClick={e => toggleCollapse(7)} className='title-sizm'>
                        Підстави для відмови надання
                        <p style={{ float: 'right', marginRight: '30px' }}>
                                {isCollapsed7 ? '+' : '-'}
                            </p>
                    </h3>
                </p>
                <hr />
                <div className={`collapses ${isCollapsed7 ? '' : 'open'}`}>
                    <div>
                        <span>
                            Відсутність медичних показань або приналежності до категорії осіб, які мають право на таку пільгу.
                        </span>
                    </div><hr />
                </div>

                <p className="main-dcv">
                    <h3 onClick={e => toggleCollapse(8)} className='title-sizm'>
                        Процедура оскарження відмови
                        <p style={{ float: 'right', marginRight: '30px' }}>
                                {isCollapsed8 ? '+' : '-'}
                            </p>
                    </h3>
                </p>
                <hr />
                <div className={`collapses ${isCollapsed8 ? '' : 'open'}`}>
                    <div>
                        <span>
                            Статтею 22 Закону України «Про статус ветеранів війни, гарантії їх соціального захисту» передбачено, що рішення підприємств, установ і організацій, які надають пільги, можуть бути оскаржені до районної державної адміністрації, виконавчого комітету міської ради або до районного (міського) суду.
                        </span>
                    </div>
                </div>
            </p>
        </div>
    );
}
