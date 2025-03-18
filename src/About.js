import React from 'react';
import Navbar from './App';
import coachJen from './coachJen.png';
import coachOlivia from './coachOlivia.jpg';

function About(){
    return(
        <div>
            <Navbar />
            <br></br>
            <JenContent />
            <br></br>
            <OliviaContent />
            <br></br>
        </div>
    );
}

function JenContent(){
    return(
        <div className='AboutContent'>
            <div className='coachSummary'>
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

            <div className='coachPhotoContainer'>
                <img src={coachJen} className='coachPhoto'></img>
            </div>
        </div>
    )
}

function OliviaContent(){
    return(
        <div className='AboutContent'>
            <div className='coachSummary'>
                <h1>
                    About: Coach Olivia
                </h1>
                <p>
                    Hi parents! I’m new to many of you and look forward to getting to know your children and you. Let me tell you a bit about my background in swim instruction, athletics, and in general.
                    <br></br>
                    <br></br>

                    I am currently a sophomore at the University of Michigan, studying Kinesiology on a path for a degree in movement science. My goal is to go to medical school and become a physician. 
                    <br></br>
                    <br></br>

                    I am on the Women's varsity crew team at U of M. I just finished up my first year on the team with a Big 10 Championship win. 
                    <br></br>
                    <br></br>

                    I started my coaching career at age ten, working alongside my mom teaching swim lessons in backyard pools. I continued coaching swim lessons at Beach Middle School along with coaching for Chelsea Aquatic Club all throughout high school. In my nine years of coaching with my mom, I have learned how to work with kids of all ages and ability levels as well as how to be creative when communicating with them. 
                    <br></br>
                    <br></br>

                    I continue to work with my mom to further my knowledge and continue to learn about the water. I greatly appreciate the knowledge my mother has continued to give me as we both work to teach the sport we love. 
                    <br></br>
                    <br></br>

                    I started swimming competitively when I was four years old and at age eleven I started open water swimming. I currently have five Chelsea High School varsity records and continue to swim when I get the chance (I am currently training to swim around Mackinac Island with my mom this summer!). Besides swimming, I have been doing triathlons since I was seven years old, played soccer for twelve years, and enjoy running half marathons. I am so grateful that from a young age my mom taught me the importance of being safe in the water, and that she has now given me the opportunity to continue doing what I love. 
                    <br></br>
                    <br></br>

                    With my mom's business growing exponentially I am so happy my mom has asked me to work for her as it gives us the ability to teach so many more kids. Lastly, I just want to recognize how much my mom has done for me and all those that she works with. Everyday Coach Jen continues to share her passion and do what she loves, which is working to make everybody safe in the water. In the end, she and I have the same goal for all our lessons which is teaching kids the tools they need to be safe in the water. I cannot stress enough how important it is to learn to swim! I am super excited to be here this summer and I can’t wait to work with your children!!
                </p>

            </div>

            <div className='coachPhotoContainer'>
                <img src={coachOlivia} className='coachPhoto'></img>
            </div>
        </div>
    )
}


export default About;