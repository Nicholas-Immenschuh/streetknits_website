import Link from 'next/link';

export default function Donate() {
  return (
    <>
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
                <Link href="/donate" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Donate</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>
        </nav>
      </header>

      <main id="donatePageBackgroundContainer">
          <article>
            <section>
                <div className="textBackgroundImageContainer" style={{left: '20%'}}>
                <img className="cloudScalableVectorGraphic" src= "../donateCloud1.svg" alt="cloud"/>
                <p className="textBackgroundImageText" style={{color: '#F49BAD', top: '45%', left: '50%'}}>
                  We are a community of knitters who want to help keep people safe and warm during the winter. 
                  Would you like to join us? Donating knitted goods is a great place to start!
                </p>
              </div>
            </section>

            <section>
              <div className="textBackgroundImageContainer" style={{right: '10%'}}>
                <img className="cloudScalableVectorGraphic" src= "../donateCloud2.svg" alt="cloud"/>
                <p className="textBackgroundImageText" style={{color: '#89B7B7', top: '51%', left: '49%'}}>
                  Send StreetKnits an email if you would like to mail knitwear or yarn. 
                  Also, if you are short on time and knitting supplies and prefer to donate in another way, 
                  monetary donations are helpful for buying yarn, needles, and organizing knitting workshops.
                </p>
              </div>
            </section>
          
            <section>
              <div className="donateSignContainer">
                <img className="donateSignScalableVectorGraphic" src= "../donateSign.svg" alt="sign"/>
                <h1 style={{ color: '#000000', position: 'absolute', top: '10%', left: '49%', transform: 'translate(-50%, -50%)'}}>
                  Donations
                </h1>
                <p style={{ color: '#000000', position: 'absolute', top: '30%', left: '49%', transform: 'translate(-50%, -50%)', whiteSpace: 'pre'}}>
            
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
                <p style={{position: 'absolute', top: '43%', left: '38%', fontWeight: 'bold'}}>Venmo: "accountName" </p>
              </div>
            </section>
        </article>
      </main>

      <footer style={{backgroundColor: '#99C440'}}>
        <p> A website by: Nicholas Immenschuh, Timothy Judge, Nathan Moon, Matthew Wenzel, and Bryce Williams.</p>
      </footer>
    </>
  );
}