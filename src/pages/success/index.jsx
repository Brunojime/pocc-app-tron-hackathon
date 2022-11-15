import React from 'react'
import { useRouter } from 'next/router'
import { useServices } from '../../data/providers/ServicesProvider'

const Success = props => {
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
      } else {
        createWalletAddress()
      }
    })
  }
  return (
    <div className='main-container responsive-container'>
      <div className='container-home-img'>
        <img className='img-logo' alt='logo-POCP' src='https://res.cloudinary.com/crecy-io/image/upload/v1668421690/Crecy%20-%20rescheduling%20screens/Devpost-POCP/POCP_devpost_tc38i4.png'></img>
      </div>
      <div className='container-collection'>
        <h1 className='title-app'>Congratulations!</h1>
        <h1 className='paragraph-app'>🥳 Your course approbation was recorded</h1>
      </div>
      <div className='container-home-img-certificate'>
        <img className='img-pocp' alt='logo-POCP' src='https://res.cloudinary.com/crecy-io/image/upload/v1668421758/Crecy%20-%20rescheduling%20screens/Devpost-POCP/POCP_card_o1pdn7.png'></img>
      </div>
      <div className='container-text-minted'>
        <h1 className='paragraph-minted'>Minted in your address: TAp7tZfgHJUsMtABvPkUBTbJJDhZnrhGZw</h1>
      </div>
      <div className='container-text-success'>
        <h1 className='paragraph-description'>Now you your Proof of Course Completion ⚡️</h1>
      </div>
      <div className='get-address'>
        {/* <input className='input-address' type={'text'} placeholder='Your reference' value={addressWallet} onChange={(e) => setAddressWallet(e.target.value)}/> */}
        <button className='button-address' onClick={() => onClickValidateAddress()}>
          Share
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
          .container-home-img {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            margin: 20px 0px;
          }
          .img-logo {
            width: 280px;
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
            width: 280px;
            height: 280px;
            object-fit: contain;
          }
          .container-collection {
            width: 350px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }
          .container-text-success {
            width: 350px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .container-text-minted {
            width: 350px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .title-app {
            color: #f8ae3d;
            font-size: 1.5em;
            margin: 10px 0px;
            font-family: arial;
          }
          .paragraph-app {
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
          .paragraph-minted {
            color: #f8ae3d;
            font-size: 1em;
            text-align: center;
            font-family: arial;
            margin: 0px;
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
            margin: 0px 0px 20px 0px;
          }
          input:hover {
            border: 1px solid #f8ae3d
          }
          input:focus {
            outline-width: 0;
          }
          .get-address {
            display: flex;
            flex-direction: column;
          }
          .button-address {
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
            .container-home-img {
              justify-content: center;
              align-items: center;
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

export default Success
