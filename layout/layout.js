import Head from "next/head";
import Modal from 'react-modal'

import useFOM from "../hooks/useFOM";
import { Sidebar, ProductModal } from "../components";
// import productModal from "../components/productModal";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#F0EADA'
  },
};

Modal.setAppElement('#__next');

export default function Layout({ children, page }) {

  const { modalState, handleChangeModal } = useFOM()
  const title = `Fresh Coffee - ${page === undefined ? 'Loading...' : page}`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Food Order Manager"/>
      </Head>

      <div className="md:flex bg-yellow">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
          <Sidebar />
        </aside>
        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <div className="p-10">
            {children}
          </div>
        </main>
      </div>

      {
        modalState && (
          <Modal
            isOpen={modalState}
            onRequestClose={handleChangeModal}
            style={customStyles}
          >
            <ProductModal />
          </Modal>
        )
      }
    </>
  )
}