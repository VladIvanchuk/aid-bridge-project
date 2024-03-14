import { useAuth } from "@/contexts/AuthContext";
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Tab,
  Tabs,
} from "@nextui-org/react";
import { Auth, LoginForm, SignUpForm } from "..";
import { AuthPage } from "@/types/AuthTypes";
import { TRANSITION_EASINGS } from "@nextui-org/framer-transitions";

const AuthModal = (): React.ReactElement => {
  const { isOpen, onOpenChange,  setAuthType } = useAuth();



  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top"
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
              <ModalHeader className="flex flex-col gap-1">Auth</ModalHeader>
              <ModalBody>
                <Auth />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthModal;
