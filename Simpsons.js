import './Simpsons.css'
 export function Simpson({pTitle, picture, pSurname, pInfo}) {


    return (
    <div className={'person'}>
        <h2>{pTitle}</h2>
        <h3>{pSurname}</h3>
        <p>{pInfo}</p>
        <img src={picture} alt=""/>
    </div>
 );
}