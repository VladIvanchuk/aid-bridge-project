"use client";

import { useAuth } from "@/contexts/AuthContext";
import { TRANSITION_EASINGS } from "@nextui-org/framer-transitions";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import { Auth, CreateProfile } from "..";

const AuthModal = (): React.ReactElement => {
  const { isOpen, onOpenChange, createProfile } = useAuth();
  return (
    <>
      <Modal
        size={createProfile ? "full" : "lg"}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              scale: 1,
              y: "var(--slide-enter)",
              opacity: 1,
              transition: {
                scale: {
                  duration: 0.4,
                  ease: TRANSITION_EASINGS.ease,
                },
                opacity: {
                  duration: 0.4,
                  ease: TRANSITION_EASINGS.ease,
                },
                y: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.6,
                },
              },
            },
            exit: {
              scale: 1.1,
              y: "var(--slide-exit)",
              opacity: 0,
              transition: {
                duration: 0.3,
                ease: TRANSITION_EASINGS.ease,
              },
            },
          },
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {createProfile ? "Створіть профіль" : "Авторизація"}
              </ModalHeader>
              <ModalBody>
                {createProfile ? <CreateProfile /> : <Auth />}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthModal;
