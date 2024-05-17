import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import Auth from "../Auth/Auth";
import { TRANSITION_EASINGS } from "@nextui-org/framer-transitions";

const CreateModal = (): React.ReactElement => {
  const { isOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Modal
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
                Створити
              </ModalHeader>
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

export default CreateModal;
