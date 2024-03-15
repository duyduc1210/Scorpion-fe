import FooterPage from "../../../components/Pages/FooterPage";
import HeaderPage from "../../../components/Pages/HeaderPage";

const Facilities = () => {
    return (
      <>
      <HeaderPage/>
      <main>
		<div className="container"/>

			
			<div className="page-header-container">
				<h2 className="page-header">Star Hotel Facilities</h2>
				<hr />
				<p className="page-sub-header">
					Get the most of our hotel facilities. Enjoy the state of <br/> the art facilities in our hotel
				</p>
			</div>
		
			<section className="upper-section">
				<div className="row center-lg">
					<div className="col image-col right-marg">
						<div className="large-image-container">
							<img src="./assets/img/telephone.webp" alt="room-image-large" className="large-image"/>
						</div>

					</div>
				
					<div className="col">
						<h3 className="right-title">Access to 24hr Digital <br/> Telephone Services</h3>
						<p>
							With our feature rich Digital telephone services, you <br/> will have the flexibility you
							have always wanted with <br/> voice communication from your home or business.
						</p>
						<br/>
						<h3>More Details</h3>
						<ul className="facilities-list">
							<li>
								<div>
									<img src="assets/img/check-square.svg" alt="tick" className="list-icon"/>
									<p className="list-text">Unlimited Long Distance</p>
								</div>
							</li>
							<li>
								<div>
									<img src="assets/img/check-square.svg" alt="tick" className="list-icon"/>
									<p className="list-text">Caller ID</p>
								</div>
							</li>
							<li>
								<div>
									<img src="assets/img/check-square.svg" alt="tick" className="list-icon"/>
									<p className="list-text">Caller Waiting</p>
								</div>
							</li>
						</ul>
						<a href="#" className="btn btn-fill btn-large">View More</a>
					</div>
				</div>
			</section>
			
			<div className="up">
				<h2 className="page-header">Other Facilities</h2>
				<hr />
			</div>

			
			<div className="container">
				<div className="containera">

					<div className="gallery">

						<div className="gallery-item">
							<img className="gallery-image" src="./assets/img/gymnasium.webp" alt="gym"/>
							<h4>
								GYMNASIUM
							</h4>
							<p className="imggrid">
								We have the most equipped gymnasium in the country with an instructor
								always available.
							</p>
						</div>

						<div className="gallery-item">
							<img className="gallery-image" src="./assets/img/helipad.webp" alt="helipad"/>
							<h4>HELIPAD</h4>
							<p className="imggrid">
								Access to the state of the art helipad coupled with pilots with over
								ten years experience.
							</p>
						</div>

						<div className="gallery-item">
							<img className="gallery-image" src="./assets/img/restaurants.webp" alt="restaurants"/>
							<h4>RESTAURANTS</h4>
							<p className="imggrid">
								We have the best local and intercontinental dishes you have ever
								tasted before in our hotel.
							</p>
						</div>

						<div className="gallery-item">
							<img className="gallery-image" src="./assets/img/swimming_pool.webp" alt="swim"/>
							<h4>SWIMMING POOLS</h4>
							<p className="imggrid">
								We have the best equipped swimming pool in the country with an
								instructor waiting to guide you
							</p>
						</div>

					</div>

				</div>
			</div>

	</main>

      <FooterPage/>
      </>
    );
  };
  
export default Facilities;
  