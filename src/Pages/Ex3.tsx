import '../css/main.css'
import '../css/Ex3.css'

export default function user(){
    return (
        <div className="profile-container">
            <img src="" alt="" />
            <div className='user'>
                <h1 className='name'>Him</h1>
                <h3 className='subtitle'>what he do</h3>
                <div className='tag'>
                    {/* tag */}
                </div>
            </div>
            <div className='user-desc'>
                {/* description */}
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum blandit mi, sit amet elementum purus bibendum nec. Integer laoreet nibh vitae turpis porta congue.</p>
            </div>
            <div className='user-info'>
                <div className='user-rel'>
                    {/* relation */}
                    <h3>500</h3>
                    <h4>Relations</h4>
                </div>
                <div className='user-pub'>
                    {/* publication */}
                    <h3>500</h3>
                    <h4>Publications</h4>
                </div>
            </div>
            <img src="" alt="" />
        </div>
    );
}