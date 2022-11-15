import React from 'react'

const Home = props => {
  return (
    <div className='main-container responsive-container'>
      <div className='container-home-img'>
        <img className='img-logo' alt='logo-POCP' src='https://res.cloudinary.com/crecy-io/image/upload/v1668421690/Crecy%20-%20rescheduling%20screens/Devpost-POCP/POCP_devpost_tc38i4.png'></img>
      </div>
      <div className='container-home-mobile'>
        <img className='img-start' src='https://res.cloudinary.com/crecy-io/image/upload/v1668421757/Crecy%20-%20rescheduling%20screens/Devpost-POCP/Lightning_hackthon_tcqztt.png'></img>
        <h1 className='title-app'>
          The Proof of Course<br/>Completion Protocol
        </h1>
      </div>
      <div className='container-home-img-certificate'>
        <img className='img-pocp' alt='logo-POCP' src='https://res.cloudinary.com/crecy-io/image/upload/v1668427229/Crecy%20-%20rescheduling%20screens/Devpost-POCP/POCP_new_card_u85dit.png'></img>
      </div>
      <div className='container-information'>
        <h1 className='paragraph-app'>
          POCP - The bookmarkes of your educational journey.
        </h1>
        <h1 className='paragraph-app-text'>
          POCPs are digital certificates, minted in recognition of sucessful course compeltion.
        </h1>
        <h1 className='paragraph-app-subtext'>
          Each POCP is a gift from a professor to students, in recognition of sucessful course completion.
        </h1>
        <h1 className='paragraph-app-subtext'>
          By minting these certificates to the blockchain, students can easily share the information about completed courses with their friends, employers and universities
        </h1>
      </div>
      <div className="container-home-second">
        <div className="container-home-img-certificate-second">
          <img
            className="img-icon-second"
            alt="logo-POCP"
            src="https://res.cloudinary.com/crecy-io/image/upload/v1668421815/Crecy%20-%20rescheduling%20screens/Devpost-POCP/POCP_grad_cap_mrhgma.png"
          ></img>
        </div>
        <h1 className="title-app">What is POCP?</h1>
        <p className="paragraph-app-second">
          POCP is a new way of keeping a reliable record of educational journey. 
          Every time students successfully complete a course, they get a unique badge 
          that is supported by a cryptographic record.
        </p>
      </div>
      <div className="container-home-second">
        <div className="container-home-img-certificate-second">
          <img
            className="img-icon-second"
            alt="logo-POCP"
            src="https://res.cloudinary.com/crecy-io/image/upload/v1668471034/Crecy%20-%20rescheduling%20screens/Devpost-POCP/POCP_unversity_lm8dmr.png"
          ></img>
        </div>
        <h1 className="title-app">Why to use POCP ?</h1>
        <p className="paragraph-description-second">POCP allows:</p>
        <p className="paragraph-description-second">
          1) Professors to better engage with their students and recognize
          their efforts in an innovative way. Providing students with unique
          badges also leads to a network effect where students for free promote
          courses by sharing POCPs on social media platforms, and/or by
          showing them to employers, universities.
        </p>
        <p className="paragraph-description-second">
          2) Students to easily share their academic achievements with their
          friends/colleagues and/or emoployer/university and do it in a new way that 
          attracts more attention and brings additional recognition for them.
        </p>
      </div>
      <style jsx>
        {`
          .container-information {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .container-home {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 40px 30px
          }
          .container-home-mobile {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .container-home-img {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
            margin-bottom: 20px;
          }
          .container-home-img-certificate {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 30px 0px;

          }
          .main-container {
            min-height: 100% !important;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            background-color: #060516;
          }
          .img-logo {
            width: 140px;
            object-fit: contain;
          }
          .img-start {
            width: 25px;
            object-fit: contain;
          }
          .img-pocp {
            width: 280px;
            height: 280px;
            object-fit: contain;
          }
          .title-app {
            color: #f8ae3d;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 1.5em;
            margin: 0px;
            padding-left: 10px;
          }
          .paragraph-app {
            width: 75%;
            font-family: Arial, Helvetica, sans-serif;
            color: #f8ae3d;
            font-size: 1.3em;
            margin: 0px;
            text-align: left;
            margin-top: 10px;
          }
          .paragraph-app-text {
            width: 75%;
            color: white;
            font-weight: 500;
            font-size: 1.2em;
            margin: 0px;
            text-align: left;
            margin-top: 20px;
            font-family: Arial, Helvetica, sans-serif;
          }
          .paragraph-app-subtext {
            width: 75%;
            color: #ffffff66;
            font-weight: 400;
            font-size: 1.2em;
            margin: 0px;
            text-align: left;
            margin-top: 30px;
            font-family: Arial, Helvetica, sans-serif;
          }
          .paragraph-description {
            color: #fff;
            font-size: 1em;
            text-align: left;
            font-family: Arial, Helvetica, sans-serif;
          }
          .input-address {
            min-width: 300px;
            min-height: 40px;
            border-radius: 15px;
            background-color: transparent;
            border: 1px solid white;
            color: white;
            padding-left: 30px;
            cursor: pointer;
            margin: 0px 0px 5px 0px;
            font-family: Arial, Helvetica, sans-serif;
          }
          input:hover {
            border: 1px solid #f8ae3d
          }
          input:focus {
            outline-width: 0;
          }
          .get-address {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            margin-top: 20px;
            margin-bottom: 30px;
          }
          .button-address {
            background-color: #f8ae3d;
            color: white;
            min-width: 300px;
            max-width: 301px;
            min-height: 40px;
            border-radius: 15px;
            border: 1px solid #f8ae3d;
            cursor: pointer;
          }
          .container-home-second {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 40px 30px;
          }
          .container-home-img-second {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            margin: 40px 0px;
          }
          .container-home-img-certificate-second {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 10px 0px;
          }
          .main-container-second {
            min-height: 100% !important;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            background-color: #060516;
          }
          .img-logo-second {
            width: 280px;
            object-fit: contain;
          }
          .img-logo-second {
            width: 280px;
            object-fit: contain;
          }
          .img-icon-second {
            width: 80px;
            height: 80px;
            object-fit: contain;
          }
          .title-app-second {
            color: #f8ae3d;
            font-size: 2.5em;
            font-family: Arial, Helvetica, sans-serif;
            margin: 0px, 0px, 30px, 0px;

            text-align: center;
          }
          .paragraph-app-second {
            color: #ffffff66;
            font-size: 1.2em;
            margin: 0px;
            font-family: Arial, Helvetica, sans-serif;
            text-align: center;
            margin-top: 20px; 
          }
          .paragraph-description-second {
            color: #ffffff66;
            font-size: 1.2em;
            align-self: flex-start;
            font-family: Arial, Helvetica, sans-serif;
          }
          .input-address-second {
            min-width: 300px;
            min-height: 40px;
            border-radius: 15px;
            background-color: transparent;
            border: 1px solid white;
            font-family: Arial, Helvetica, sans-serif;
            color: white;
            padding-left: 30px;
            cursor: pointer;
            margin: 0px 0px 20px 0px;
          }
          input:hover {
            border: 1px solid #f8ae3d;
          }
          input:focus {
            outline-width: 0;
          }
          .get-address-second {
            display: flex;
            flex-direction: column;
          }
          .button-address-second {
            background-color: #f8ae3d;
            color: white;
            min-width: 300px;
            min-height: 40px;
            border-radius: 15px;
            border: 1px solid #f8ae3d;
            cursor: pointer;
          }
          @media (max-width: 480px) {
            .responsive-container {
              padding: 0px 1vw;
            }
            .container-home {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin: 20px 15px;
            }
            .container-home-mobile {
              justify-content: center;
              margin: 10px 0px
            }
            .get-address {
              width: 70%;
              justify-content: center;
            }
          }
          @media (min-width: 481px) and (max-width: 768px) {
            .responsive-container {
              padding: 0px 2vw;
            }
          }
          @media (min-width: 769px) and (max-width: 1024px) {
            .responsive-container {
              padding: 0px 3vw;
            }
          }
          @media (min-width: 1025px) and (max-width: 1490px) {
            .responsive-container {
              padding: 0px 5vw;
            }
          }
          @media (min-width: 1491px) {
            .responsive-container {
              padding: 0px 15vw;
            }
          }
        `}
      </style>
    </div>
  )
}

export default Home
