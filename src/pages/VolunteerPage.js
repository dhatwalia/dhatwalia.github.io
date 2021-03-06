import React from 'react';

const VolunteerPage = () => (
    <>

        <h1>Volunteer</h1>
        <img src={process.env.PUBLIC_URL + '/helpage-india.png'} alt='help-age-india-logo' class="image-100"/> 
        <p>
            HelpAge India is a charity in India that has worked with and for disadvantaged elderly for nearly four decades. It has been running in India since 1978. There is an estimated 106 million elderly in India. HelpAge advocates for their needs, such as Universal Pension, quality healthcare and abuse faced by senior citizens. It advocates for elder-friendly policies and works towards their implementation. It also works with Senior Citizens Associations to understand the needs of the disadvantaged elderly by working with them.
        </p>
        <p>
            The aim is to help elders live active, dignified and healthier lives. HelpAge's focus over the years has moved from Welfare to Development.
        </p>
        <figure>
        <img src={process.env.PUBLIC_URL + '/helping-elders.jpg'} alt='covid19-relief-india' class="image-80" />
        <figcaption>Distribution of family Survival Kits for senior citizens in Kannigapuram, Chennai, India during COVID-19 pandemic.</figcaption>
        </figure>
        <p>
            It provides elderly relief through various interventions for the elderly. It features one of the most extensive mobile healthcare programs through its Mobile Healthcare Units in India. It provides free healthcare services to destitute elders. It also helps elders earn their livelihood through the formation of Elder-Self-Help Groups, making them self-reliant. It conducts cataract surgeries to restore their sight. It's Support-a-Gran program looks after their basic needs. It also features Elder Helplines across India. It provides relief and rehabilitation for elders post disasters.
        </p>
        <a class="button" href="https://www.helpageindia.org/donate/" target="_blank" rel="noreferrer">Donate</a>
        <br/><br/>
        <img src={process.env.PUBLIC_URL + '/bluesea.jpg'} alt='bluesea-foundation-logo' class="image-100"/>
        <p>            
            Blue Sea Foundation is a Canadian charitable foundation that has been working with other charities to make the world better since 2010. Headquatered in Kitchener, they work exclusively with social service charities who serve the most precarious, marginalized, and neglected people in Canada and around the world.
        </p>
        <p>
            They are known mainly for their three charitable campagins:
            <ol>
                <li>Coldest Night of the years - A winterrific family-friendly walk to raise money for local charities serving people experiencing hurt, hunger, and homelessness.</li>
                <li>Ride for Refuge - A family-friendly cycling and walking fundraiser that supports charities who provide refuge and hope for displaced, vulnerable, and exploited people everywhere.</li>
                <li>The Grand Parade - A super-fun, family-friendly fundraising walk that celebrates and supports aging Canadians and their families across Canada.</li>
            </ol>
        </p>
        <figure>
        <img src={process.env.PUBLIC_URL + '/homeless.jpg'} alt='homeless-person' class="image-80" />
        <figcaption>A helpless homeless person braving the harsh winter.</figcaption>
        </figure>
        <p>
            They are driven by the suffering and need in our world, and believe that the best way to make a difference is to build your charity's fundraising and financial health. What powers their efforts is the deep desire to see charities better funded and thriving as a force in our communities.
        </p>
        <a class="button" href="http://www.blueseafoundation.org/" target="_blank" rel="noreferrer">Website</a>
        <br/><br/>
    </>
);

export default VolunteerPage;
