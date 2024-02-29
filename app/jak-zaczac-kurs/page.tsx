import React from 'react';
import { anton } from '../fonts';
import Image from 'next/image';
import Photo from '../../public/photo.svg';
import Doctors from '../../public/doctors.svg';
import Document from '../../public/document.svg';
import LogoW from '../../public/logo-w.webp';
import DivOpacityAnimation from '../components/animations/DivOpacityAnimation';
import ZIndexWrapper from '../components/zIndexWrapper';

const HowToStartCourse = () => {
  return (
    <ZIndexWrapper>
      <DivOpacityAnimation delay={0.1}>
        <div className='flex justify-center items-center'>
          <div className='max-w-[1200px] py-20 sm:px-10 px-4'>
            <h1
              className={`${anton.className} max-w-64 mx-auto text-4xl text-center pb-2 mb-2 border-b-2 border-[#CE2029]`}
            >
              Jak zacząć kurs
            </h1>
            <div className='flex flex-col gap-10 sm:text-lg text-base'>
              <div className='flex sm:flex-row flex-col-reverse items-center justify-center sm:gap-4 gap-2 pt-4'>
                <p>
                  <span className='font-semibold'>Zdjęcie</span> - identyczne
                  jak do dowodu osobistego, powinno być kolorowe i aktualne.
                </p>
                <Image src={Photo} alt='Photo' className='sm:w-32 w-28' />
              </div>
              <div className='flex sm:flex-row flex-col items-center sm:gap-4 gap-2'>
                <Image src={Doctors} alt='Dwóch lekarzy' className='sm:w-32 w-28' />
                <p>
                  <span className='font-semibold'>Badania lekarskie</span> -
                  lekarz uprawniony do badania kierowców wyda orzeczenie o braku
                  przeciwskazań zdrowotnych do kierowania pojazdami. Nie
                  potrzebujesz skierowania, koszt badania zazwyczaj wynosi 200
                  zł.
                </p>
              </div>
              <div className='flex sm:flex-row flex-col-reverse items-center justify-between sm:gap-4 gap-2'>
                <p>
                  <span className='font-semibold'>PKK</span> - potrzebne Ci
                  będzie wykonane wcześniej zdjęcie oraz badania lekarskie, nie
                  zapomnij także zabrać ze sobą dowodu osobistego lub
                  legitymacji. Uzyskaj numer profilu kandydata na kierowcę:
                  <br />
                  <span>
                    - w urzędzie miasta - jeśli mieszkasz w Tarnobrzegu,
                  </span>
                  <br />
                  <span>
                    - w urzędzie starostwa powiatowego - jeśli mieszkasz poza
                    Tarnobrzegiem.
                  </span>
                  <br />
                </p>
                <Image src={Document} alt='Dokument' className='sm:w-32 w-28' />
              </div>
              <div className='flex sm:flex-row flex-col items-center sm:gap-4 gap-2'>
                <Image src={LogoW} alt='Logo Wojtek' className='sm:w-32 w-28' />
                <p>
                  <span className='font-semibold'>OSK WOJTEK</span> - przyjdź do
                  naszego ośrodka z numerem PKK i rozpocznij kurs na prawo
                  jazdy!
                </p>
              </div>
            </div>
          </div>
        </div>
      </DivOpacityAnimation>
    </ZIndexWrapper>
  );
};

export default HowToStartCourse;
