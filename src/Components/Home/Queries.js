import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../lottie/25046-faq-ask-and-you-get-an-answer.json';

const Queries = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
    return (
       <div>
        <h2 className='text-center text-warning mt-5'>Frequently asked Questions</h2>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 mt-5 pt-5 w-full margin'>
                <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        How you can trust us?
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Our only mission is to preserve our commitment to provide the best travel and tour services within client’s budget. Our satisfaction comes only when we can make our clients happy and turn their holidays into a joyful tour. We never treat our client as a stranger. We take every possible step to reach above our client’s expectation. </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Why we are best at our service?
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Easy for travelers to search for and book travel arrangements—everything from flights and accommodations to car rentals can be booked in just a few clicks. All types of travelers will find what they’re looking for online, whether that’s comprehensive booking capabilities with mega-sized inventory, hotels and experiences with a social impact component, or just the most affordable route to a destination.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        The services we are best.
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Outdoor recreation activities, airlines, car rentals, cruise lines, hotels, railways, travel insurance, package tours, insurance, guide books, VIP airport lounge access, arranging logistics for luggage and medical items delivery for travellers upon request, public transport timetables. </div>
    </div>
  </div>
</div>
                </div>
                <div className='col-md-6 w-full'>
                <Lottie 
	    options={defaultOptions}
        height={500}
       
      />
                </div>
            </div>
        </div>
       </div>
    );
};

export default Queries;