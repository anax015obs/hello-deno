import React, { useEffect } from "react";
import Logo from "../components/logo.tsx";
import useCounter from "../lib/useCounter.ts";
const ucworks = await import("ucworks-client-desktop-common");

export default function Home() {
  useEffect(() => {
    console.log(ucworks);
  }, []);
  const [count, isSyncing, increase, decrease] = useCounter();
  const { isOpen, openModal, closeModal, Modal } = ucworks.useModal();
  return (
    <div>
      <button
        onClick={() => {
          openModal();
        }}
      >
        click me!
      </button>
      {isOpen && (
        <Modal>
          <div>haha</div>
        </Modal>
      )}
    </div>
  );
}
