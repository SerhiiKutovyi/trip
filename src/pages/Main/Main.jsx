import { useState } from 'react';

import Modal from 'components/Modal/Modal';
import css from './Main.module.css';
import SearchTrip from 'components/SearchYourTrip/SearchTrip';
import BtnOpenModal from 'components/Button/BtnOpenModal/BtnOpenModal';
import Week from 'components/Week/Week';

function Main() {
  const [modal, setModal] = useState(false);

  return (
    <main className={css.main}>
      <section className={css.section}>
        <SearchTrip />
        <BtnOpenModal onOpen={() => setModal(true)} />
        <Modal isOpen={modal} onClose={() => setModal(false)} />
        <Week />
      </section>
    </main>
  );
}

export default Main;
