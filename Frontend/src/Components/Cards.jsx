import '../Components/Cards.css';
import { Link } from 'react-router-dom';


const Cards = () => {
    return (
        <section className="card-section">

            <h2 className="explore-heading">Explore Features</h2>
            <div className="card-container">
                <div className="card">
                    <div className="icon">
                        {/* <img src="https://img.freepik.com/free-vector/cute-astronaut-waving-hand-game-controller-cartoon-vector-icon-illustration-technology-science-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3714.jpg?size=626&ext=jpg&ga=GA1.2.97462443.1689537207&semt=ais" /> */}
                    </div>
                    <p className="title">Appoinment Booking</p> <br />
                    <br />
                    {/* <p className="text">If you are Game Freak.Play Some Simple games and Make Your Pockets Heavy Bruhh!!</p> */}
                    <Link to="/Signup"><button className='btn'>Book</button></Link>
                    {/* <Link to="/patient" style={{ textDecoration: "none", color: "black", listStyle: "none" }}><button >Register</button></Link> */}

                </div>

                <div className="card">
                    <div className="icon">
                        {/* <img src="https://img.freepik.com/free-vector/cute-astronaut-waving-hand-game-controller-cartoon-vector-icon-illustration-technology-science-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3714.jpg?size=626&ext=jpg&ga=GA1.2.97462443.1689537207&semt=ais" /> */}
                    </div>
                    <p className="title">Routine Checkup</p>
                    <br />
                    <br />
                    {/* <p className="text">If you are Game Freak.Play Some Simple games and Make Your Pockets Heavy Bruhh!!</p> */}
                    <Link><button className='btn'>Check</button></Link>
                </div>
            </div>
        </section>
    );
};

export default Cards;
