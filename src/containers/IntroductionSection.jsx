import React from 'react';
// import GroomPic from '../images/groom-avatar.png';
// import BridePic from '../images/bride-avatar.png';
import ChaitanyaPic from '../images/chaitanya-pic.jpeg';
import MolikaPic from '../images/molika-pic.jpg';
import IntroCard from '../components/IntroCard';

const IntroductionSection = () => {
  let chaitanyaDesc = `
  <div>
  <p>Engineer- MBA by profession, travel enthusiast and sports lover by heart. I like meeting new people and gather different experiences.  </p> <p>
Couldn’t have asked for a better life partner than her who understands my jokes and sarcasm.😀 She knows when she needs to act maturely and can be childish at times, which is a rare quality. </p> <p> Looking forward to the next phase of fun and better life.</p></div>`;

  let MolikaDesc = `
<div>
<p>
Ek ladki hai deewaani si <br />
Jo thodi hai sayani si <br />

Aankho mei masti chehre pe muskaan, <br />
Peshey se engineer hai, Molika uska naam. <br />
Desi Indian khaane ka mijaaz hai rkhti, <br />
Cooking mei bhi badi hai dilchaspi. <br />
Apni neend ise hai badi pyaari, <br />
Fitness ko lekar bhi kbhi kbhi ho jaati h baawri. <br />
Har gaane pe kamar thirakti, paer nahi thakte iske, <br />
Ghoomne ka plan banalo toh bags humesha ready rakhti. <br />
Family and friends mein iski jaan hai basti, <br />
Office ka kaam bhi khoob mann se karti. <br />
Uski zindagi mein ek nayi subah aayi jab Ramji ne uski jodi Chaitanya ke saath banayi !!! <br />
(to be continued...:)) <p/>

<p>In Chaitanya, I have found the one my soul loves. <br />
Thank you Chaitanya ! <br/>
for choosing me to spend the rest of life with :)
</p>
</div>

`;
  return (
    <div>
      <section className='introduction-section'>
        <div className='section-heading intro-heading'>The Couple</div>
        <div>
          <div className='container'>
            <div className='row intro-cards mt-5 mb-3'>
              {/* <div className='col-md-1 d-none d-md-block'></div> */}
              <div className='col-md-6 col-sm-12'>
                <IntroCard
                  profilepic={ChaitanyaPic}
                  name='Chaitanya Agrawal'
                  description={chaitanyaDesc}
                />
              </div>

              <div className='col-md-6 col-sm-12'>
                <IntroCard
                  profilepic={MolikaPic}
                  name='Molika Garg'
                  description={MolikaDesc}
                />
              </div>
              {/* <div className='col-md-1 d-none d-md-block'></div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntroductionSection;
