import React from 'react';
import { anton } from '../fonts';
import Image from 'next/image';
import OnlinePayment from '../../public/online-payment.webp';
import CashPayment from '../../public/cash-payment.webp';
import MapPin from '../../public/map-pin.svg';
import DivYAnimation from '../components/animations/DivYOpacityAnimation';
import CardWithPhoto from './CardWithPhoto';

const PaymentMethods = () => {
  return (
    <>
      <DivYAnimation>
        <h5 className={`${anton.className} pb-14 mx-auto text-center text-4xl`}>
          Metody Płatności
        </h5>
      </DivYAnimation>
      <DivYAnimation>
        <div className='flex justify-center max-[1100px]:flex-col max-[1100px]:items-center mx-auto gap-10 pb-20 px-6 sm:px-0'>
          <CardWithPhoto
            header='Płatność gotówką'
            text={['Biuro, ul. Zwierzyniecka 18']}
            imgSrc={CashPayment}
            objectPosition='object-top'
          />
          <CardWithPhoto
            header='Płatność przelewem'
            text={['Numer rachunku:', '10 1020 4913 0000 9902 0208 6403']}
            imgSrc={OnlinePayment}
          />
        </div>
      </DivYAnimation>
    </>
  );
};

export default PaymentMethods;