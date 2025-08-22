import React, { useEffect, useState } from 'react';
import './OpeningScreen.css'; // optional: extract styles to CSS module or inline them

const slides = [
  {
    image: '/assets/Trump.jpeg',
    caption: 'DJT in Milwaukee, 2024',
  },
  {
    image: '/assets/Farage.jpeg',
    caption: 'Nigel Farage after the 2025 UK local elections',
  },
  {
    image: '/assets/Iran.jpg',
    caption: 'Protests in Iran after the death of Mahsa Amini, 2022',
  },
  {
    image: '/assets/Serbia.jpg',
    caption: 'Anti-government protests in Serbia, 2024',
  },
];

export default function OpeningScreen({ setScene }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
      <div className="opening-screen container">
        <h1>Change</h1>

        <div className="opening-text">
            Voters in liberal democracies demand it.
        </div>

        <div className="opening-text">
            Subjects in authoritarian regimes strive for it.
        </div>
        
        {/* Image Carousel */}
        <div className="carousel-container">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url('${slide.image}')` }}
              onClick={() => setCurrentSlide((index + 1) % slides.length)}
            >
              <div className="carousel-caption">{slide.caption}</div>
            </div>
          ))}
          <div className="carousel-indicators">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        <div className="opening-text">
          Vast numbers of the world's population today are unhappy with the status quo. They want, hope, pray for something new. 
        </div>

        <div className="opening-text">
          The current state of affairs, in the economy, in public services, in local, national and international politics, is 
          deeply unsatisfactory to most people. The "system" seems broken. It needs to change.
        </div>

        <div className="opening-text">
          <span className="highlight">Change to what, though? In what direction?</span>
        </div>

        <div className="opening-text">
          People's voting behaviour is not particularly revealing of the direction of the demanded change. 
        </div>

        <div className="image-container">
          <img className="smaller-image" src="/assets/HopeObama.png" alt="HOPE poster of the Obama presidential campaign" />
          <div className="image-caption">
            'Hope' by Shepard Fairey, 2008
          </div>
        </div>

        <div className="opening-text">
          Voters of mainstream parties often get disappointed by the lack or speed of change. Disenchanted by their current leaders, cursing their bad luck, many of them then vote for populist 
          alternatives and get hit by too much change, often in a different direction than what they envisaged.  
        </div>


        <div className="opening-text">There is a dire need for directionality of change.</div>

        <div className="opening-text">
          Defending the status quo has become a losing political strategy for social democrats and liberals in the liberal democracies 
          of the “West”. <a href="https://www.theguardian.com/us-news/2025/aug/01/kamala-harris-politics-colbert" target="_blank" rel="noopener noreferrer"> Even Kamala Harris has reached the 
          conclusion that the system is broken and we are not in a business-as-usual scenario. </a>  
        </div>

        <div className="opening-text">
          Sure, we can continue blaming the voters, consider them ignorant deplorables, scorn their inability to understand economic statistics 
          or the importance of democratic institutions. But without acknowledging the faults of the current system, we will not be able to 
          create a positive vision of change that people can embrace. 
        </div>

        <div className="opening-text">
          <span className="highlight"> <p> <a href="https://www.ft.com/content/c2bcf288-afb6-4b24-8107-c483c3394c74" target="_blank" rel="noopener noreferrer"> 
          There is a dire need for the political centre to create a positive vision of change. </a> </p> </span>
        </div>

        <div className="opening-text">
          Is there a viable alternative to the unpopular status quo, an alternative that we could embrace and remain liberal?
        </div>

        <div className="opening-text">
          The aim of this tool is to present a possible direction of change from the current broken system. 
        </div>

        <div className="call-to-action">
          <div className="opening-text">
          I would love to tell you more about this, but first I would like you to take a quick survey, which would hopefully 
          make this interaction more fun. 
          </div>
          <button onClick={() => setScene("component:PoliticalSurvey")}>Go to survey</button>
          <button onClick={() => setScene("component:Summary")}>No time for surveys, take me to the super-short TL;DR<sup>1</sup> version</button>
          
          <div className="privacy-note">
            No identification data (e-mail, IP address, or whatever) is collected for this, I promise!
          </div>
          <footnote><sup>1</sup>Too long; didn't read</footnote>
        </div>
      </div>
  );
}
