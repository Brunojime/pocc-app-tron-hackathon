import React from 'react'
import { useRouter } from 'next/router'
import { useServices } from '../../data/providers/ServicesProvider'

const Home = props => {
  const [addressWallet, setAddressWallet] = React.useState('')
  const router = useRouter()
  const { stateService, services: { 
    getAddress,
    createAddressUser,
  } } = useServices();
  const createWalletAddress = async () => {
    createAddressUser({"address": addressWallet}).then(res => {
      if (res) {
        console.log(res)
      } else {
        console.log('error')
      }
    })
  }
  const onClickValidateAddress = async () => {
    getAddress(addressWallet).then(res => {
      if (res) {
        console.log(res)
        router.push('success')
      } else {
        // createWalletAddress()
        router.push('success')
      }
    })
  }
  return (
    <div className='main-container responsive-container'>
      <div className='container-home-img'>
        <img className='img-logo' alt='logo-POCP' src='https://res.cloudinary.com/crecy-io/image/upload/v1668421690/Crecy%20-%20rescheduling%20screens/Devpost-POCP/POCP_devpost_tc38i4.png'></img>
      </div>
      <div className='container-collection'>
        <h1 className='title-app'>Course collection</h1>
        <h1 className='paragraph-app'>Tron address: TAp7tZfgHJUsMtABvPkUBTbJJDhZnrhGZw</h1>
      </div>
      <div className='container-home-img-certificate'>
        <img className='img-pocp' alt='logo-POCP' src='https://res.cloudinary.com/crecy-io/image/upload/v1668421758/Crecy%20-%20rescheduling%20screens/Devpost-POCP/POCP_card_o1pdn7.png'></img>
        <img className='img-pocp' alt='logo-POCP' src='https://res.cloudinary.com/crecy-io/image/upload/v1668427229/Crecy%20-%20rescheduling%20screens/Devpost-POCP/POCP_new_card_u85dit.png'></img>
        <img className='img-pocp' alt='logo-POCP' src='https://res.cloudinary.com/crecy-io/image/upload/v1668421758/Crecy%20-%20rescheduling%20screens/Devpost-POCP/POCP_card_o1pdn7.png'></img>
        <img className='img-pocp' alt='logo-POCP' src='https://res.cloudinary.com/crecy-io/image/upload/v1668427229/Crecy%20-%20rescheduling%20screens/Devpost-POCP/POCP_new_card_u85dit.png'></img>
      </div>
      <div className='container-collection'>
        <h1 className='paragraph-description'>Mint your course</h1>
      </div>
      <div className='get-address'>
        <input className='input-address' type={'text'} placeholder='Your reference' value={addressWallet} onChange={(e) => setAddressWallet(e.target.value)}/>
        <button className='button-address' onClick={() => onClickValidateAddress()}>
          Mint
        </button>
      </div>
      <style jsx>
        {`
          .main-container {
            min-height: 100% !important;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            background-color: #060516;
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
            align-items: flex-start;
            margin: 20px 0px;
          }
          .img-logo {
            width: 140px;
            object-fit: contain;
          }
          .container-home-img-certificate {
            width: 100%;
            height: 300px;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            margin: 40px 0px;
          }
          .img-pocp {
            width: 90px;
            height: 100px;
            object-fit: contain;
          }
          .container-collection {
            width: 350px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }
          .title-app {
            color: #f8ae3d;
            font-size: 1.5em;
            margin: 10px 0px;
            font-family: arial;
          }
          .paragraph-app {
            width: 75%;
            color: #f8ae3d;
            font-size: 1em;
            margin: 0px;
            font-family: arial;
          }
          .paragraph-description {
            color: #fff;
            font-size: 1.2em;
            text-align: center;
            font-family: arial;
          }
          .input-address {
            min-width: 330px;
            min-height: 40px;
            border-radius: 15px;
            background-color: transparent;
            border: 1px solid white;
            color: white;
            padding-left: 10px;
            cursor: pointer;
            margin: 0px 0px 5px 0px;
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
          @media (max-width: 480px) {
            .responsive-container {
              padding: 0px 1vw;
            }
            .container-home-img {
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
