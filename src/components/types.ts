import React from "react";

type TDndProps = {
  value: File[];
  onChange: (value: File[]) => void | any;
};
export type TDnd = React.FC<TDndProps>;

type TModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
};
export type TModal = React.FC<TModalProps>;
