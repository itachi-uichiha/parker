import { MouseEvent, useEffect, useRef } from "react";

const isClickInsideRectangle = (e: MouseEvent, element: HTMLElement) => {
  const r = element.getBoundingClientRect();

  return (
    e.clientX > r.left &&
    e.clientX < r.right &&
    e.clientY > r.top &&
    e.clientY < r.bottom
  );
};

type Props = {
  title: string;
  isOpen: boolean;
  onProceed?: () => void;
  onClose: () => void;
  children: React.ReactNode;
  hideCloseIcon?: boolean;
};

const DialogModal = ({
  title,
  isOpen,
  onProceed,
  onClose,
  children,
  hideCloseIcon,
}: Props) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      ref.current?.showModal();
      document.body.classList.add("modal-open"); // prevent bg scroll
    } else {
      ref.current?.close();
      document.body.classList.remove("modal-open");
    }
  }, [isOpen]);

  const proceedAndClose = () => {
    onProceed();
    onClose();
  };

  return (
    <dialog
      ref={ref}
      onCancel={onClose}
      onClose={onClose}
      onClick={(e) =>
        ref.current && !isClickInsideRectangle(e, ref.current) && onClose()
      }
      id="my_modal_2"
      className="modal"
    >
      <div className="modal-box">
        {!hideCloseIcon && (
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
        )}
        {children}
        {!!onProceed && (
          <div>
            <button className="btn btn-primary" onClick={proceedAndClose}>
              Proceed
            </button>
            <button className="btn" onClick={onClose}>
              Close
            </button>
          </div>
        )}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default DialogModal;
