import React from "react";
import './battle.css';
import brand from './brand_battle_logo.png';


const battle = () =>{
    return(
        <div className="app">
      <header className="header">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Anta&family=Madimi+One&family=Rajdhani:wght@300;400;500;600;700&display=swap')
        </style>

        {/* Logo at the top left corner */}
        <img src="https://i.postimg.cc/CxrpfCT0/lagaoo-ye.jpg" class="logoo" alt="Logo" />

        <nav className="navbar">
          <ul>
            <li><a href='\'>Home</a></li>
            <li><a href='\'>About</a></li>
            <li><a href='\'>Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Body */}
      {/* <video src="bg.mp4" width="640" height="360" controls>
      </video> */}

      <div className="body">
        <h1 id="brand"> BRAND BATTLE </h1>
        <img src={brand} class="battle_logo" alt="Brand Battle" />
        {/* <h3 id="slogan"> WHERE BRANDS CLASH AND LEGENDS RISE !</h3> */}
        <div className="blog-post">
          <p id="para">  Welcome to Brands Battle, where the world's top brands compete for supremacy! Our platform brings together leading brands from various industries to showcase their products, innovations, and customer appeal in an exciting head-to-head battle.Brands Battle is an electrifying competition that pits renowned brands against each other in a friendly yet fierce showdown. With each brand vying for the top spot, the battle unfolds across multiple rounds, allowing audiences to witness the clash of titans firsthand.During each round of Brands Battle, participants have the opportunity to cast their votes for their favorite brands. Whether it's superior quality, innovative design, or exceptional customer service, voters are encouraged to support the brands that resonate with them the most.</p>
        </div>
        {/* About Section */}
        <div className="about-section">
          <span><h2>ABOUT THE EVENT</h2></span>
          <p> prepare to embark on a journey of
            entrepreneurial discovery like no other at brand
            battle, the crowning jewel of e-summit 24. in this
            exhilarating competition, teams of 1-3 members
            will immerse themselves in the dynamic world of
            branding, where every idea is a potential gamechanger and every strategy a pathway to
            success. as the heartbeat of e-summit 24, brand
            battle beckons participants to unleash their
            creativity, ignite their passion, and push the
            boundaries of innovation. from crafting
            compelling marketing campaigns to sculpting
            unique brand identities, participants will navigate
            through a series of exhilarating challenges that
            will test their ingenuity, resilience, and strategic
            prowess. it's more than just a competition; it's a
            celebration of entrepreneurship, creativity, and
            the relentless pursuit of excellence. join us at
            brand battle and be part of an unforgettable
            experience where dreams take flight and the
            future of branding is reimagined!</p>
        </div>
        <div>
          <span><h2>RULES OF THE EVENT</h2></span>
          <ul className="rules">
            <li>Team Composition: Teams may consist of 1-2 members.</li>
            <li>Category Selection: Teams will choose from a variety of business categories such as e-commerce, food, technology, fashion, and more.</li>
            <li>Brand Selection: Within their chosen category, teams will select a brand to represent during the competition.</li>
            <li>Competition Rounds: The competition will consist of multiple rounds, each focusing on different aspects of branding and marketing.</li>
            <li>Round 1: Marketing Strategy</li>
            <li>Round 2: Unique Selling Proposition (USP) and Execution</li>
            <li>Round 3: Overall Brand Evaluation</li>
            <li>Objective: Teams will showcase their branding prowess by developing comprehensive strategies, presenting unique selling propositions, and demonstrating the overall strength and appeal of their chosen brand.</li>
            <li>Judging Criteria: Judges will evaluate teams based on creativity, innovation, feasibility, and effectiveness of their branding strategies.</li>
            <li>Team Interaction: During each round, teams may interact with each other and with judges to defend their strategies and respond to feedback.</li>
            <li>Elimination Rounds: After each round, a certain number of teams will be eliminated based on their performance.</li>
            <li>Final Evaluation: The top teams remaining after the elimination rounds will compete in the final round, where the ultimate winner will be determined based on their overall performance throughout the competition.</li>
            <li>Prizes: Prizes will be awarded to the top-performing teams, including cash prizes, certificates, and goodies.</li>
            <li>Fair Play: All participants are expected to adhere to the principles of fair play and sportsmanship throughout the competition.</li>
          </ul>
        </div>
        <div>
          <span><h2>DATE, TIMININGS & VENUE</h2></span>
          will be intimidated later
        </div>
        <div>
          <span><h2>REGISTRATION LINK</h2></span>
          <a href='\'>register here</a>
        </div>
      </div>
    </div>
    )
}

export default battle;