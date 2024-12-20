import { TRANSITION_EASINGS } from "@nextui-org/framer-transitions";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";

interface CreateModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onOpenChange: () => void;
  title: string;
  size?:
    | "5xl"
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "full";
}

const CreateModal = ({
  children,
  isOpen,
  onOpenChange,
  title,
  size = "5xl",
}: CreateModalProps): React.ReactElement => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size={size}
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
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>{children}</ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateModal;
