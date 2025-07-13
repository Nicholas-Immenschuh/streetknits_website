import Link from 'next/link';

export default function Donate() {
  return (
    <div id="donatePageContainer">
      <header>
        <nav className="navbar">
            <div className="navbar-container">
              <div className="navbar-logo">
                <Link href="/">
                  <img src="../StreetKnitsLogo.png" alt="Streetknits Logo" className="navbar-logo-image" />
                </Link>
                <Link href="/">
                  <span className="navbar-logo-text">StreetKnits</span>
                </Link>
              </div>
              <div className="navbar-links">
                <Link href="/donate" id="donatePageDonateText">Donate</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>
        </nav>
      </header>

      <main id="donatePageBackgroundContainer">
          <article>
            <section>
                <div className="cloudScalableVectorGraphicContainer" style={{left: '20%'}}>
                <img className="cloudScalableVectorGraphic" src= "../donateCloud1.svg" alt="cloud"/>
                <p className="cloudScalableVectorGraphicText" style={{color: '#F49BAD', top: '45%', left: '50%'}}>
                  We are a community of knitters who want to help keep people safe and warm during the winter. 
                  Would you like to join us? Donating knitted goods is a great place to start!
                </p>
              </div>
            </section>

            <section>
              <div className="cloudScalableVectorGraphicContainer" style={{right: '10%'}}>
                <img className="cloudScalableVectorGraphic" src= "../donateCloud2.svg" alt="cloud"/>
                <p className="cloudScalableVectorGraphicText" style={{color: '#89B7B7', top: '51%', left: '49%'}}>
                  Send StreetKnits an email if you would like to mail knitwear or yarn. 
                  Also, if you are short on time and knitting supplies and prefer to donate in another way, 
                  monetary donations are helpful for buying yarn, needles, and organizing knitting workshops.
                </p>
              </div>
            </section>
          
            <section>
              <div id="donateSignScalableVectorGraphicContainer">
                <img id="donateSignScalableVectorGraphic" src= "../donateSign.svg" alt="sign"/>
                <h1>
                  Donations
                </h1>
                <p>
                  2014 - Simpson Housing Services (Minneapolis, MN): 56    
                  <br></br>2015 - New Community Shelter (Green Bay, WI):       185
                  <br></br>2016 - New Community Shelter (Green Bay, WI):       203
                  <br></br>2017 - New Community Shelter (Green Bay, WI):       262
                  <br></br>2018 - Food and Shelter (Norman, OK):                     285
                  <br></br>​2019 - Food and Shelter (Norman, OK):                     338
                  <br></br>​2020 - Food and Shelter (Norman, OK):                     354
                  <br></br>​2021 - Food and Shelter (Norman, OK):                     408 
                  <br></br>2022 - Food and Shelter (Norman, OK):                     416
                  <br></br>2023 - Food and Shelter (Norman, OK):                     742
                  <br></br>​2024 - Food and Shelter (Norman, OK):                     362
                  <br></br>2025 - in progess...                                                      ???
                </p>
                <div id="venmoContainer">
                  <p>
                    Venmo: "accountName" 
                  </p>
                </div>
              </div>
            </section>
        </article>
      </main>

      <footer>
        <p> 
          A website redesign by Nicholas Immenschuh
        </p>
      </footer>
    </div>
  );
}