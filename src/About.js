import React from 'react';
import Navbar from './App';
import coachJen from './coachJen.png';

function About(){
    return(
        <div>
            <Navbar />
            <br></br>
            <AboutContent />
        </div>
    );
}

function AboutContent(){
    return(
        <div className='AboutContent'>
            <div className='jenSummary'>
                <h1>
                About: Coach Jen
                </h1>
                <p>
                My name is Jen Olk and I have been an enthusiastic leader of the swim community for over 35 years.  I began teaching swim lessons as a teenager before going on to school in which I earned an undergrad degree in education and a masters in both outdoor education and experiential learning. Through this process, my knowledge of the sport of swimming developed.  This, in combination with my many years of hands-on experience, have given me significant professional experience in the sport, helping me to become an expert across all levels and abilities.
                <br></br>
                <br></br>
                
                I have been an integral part of the swim community- helping people achieve their goals in backyard pools, open water settings in lakes, and high level competitions.  Most recently, I led nearly 120 swimmers as head coach of Chelsea Aquatic club.  I created training programs for swimmers who were brand new to the sport all the way through Junior National level qualifiers and NCAA Division 1 athletes.  My love for swimming carried over into the triathlon world as I led the Chelsea Triathlon club for many years.  I work with all levels of youth and adults including swimmers with special needs or medically sensitive individuals.
                <br></br>
                <br></br>

                Most importantly, however, I am a mother of four.  My children have now grown old enough for me to dive full-time into my love of the water and open up a storefront.  This will allow me  to continue to grow out my dream of helping the community.  I am most passionate about teaching and look forward to having a convenient location to share this with more people. 
                
                </p>
            </div>

            <div className='jenPhotoContainer'>
                <img src={coachJen} className='jenPhoto'></img>
            </div>
        </div>
    )
}



export default About;