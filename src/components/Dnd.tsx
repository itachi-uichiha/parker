"use client";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";
import { AddPhotoIcon, CloseIcon } from "@/assets/icons";
import { TDnd } from "./types";
import Image from "next/image";
import Close from "./Close";
import Alert from "./Alert";
import { InfoCircleIcon } from "@/assets/icons/InfoCircleIcon";
import Modal from "./Modal/Modal";

const Dnd: TDnd = ({ value, onChange }) => {
  const MAX = 3;
  const NO_OF_FILE_ALLOWED = MAX - value.length;
  const DISABLED = NO_OF_FILE_ALLOWED === 0;
  const [isOpen, setIsOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState<number | null>(null);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    fileRejections,
  } = useDropzone({
    accept: {
      "image/*": [".jpeg", ".png", ".jpg"],
    },
    onDrop(acceptedFiles, fileRejections) {
      if (fileRejections.length) {
        return;
      }
      const cancelEvent = onChange([...value, ...acceptedFiles]);
      if (cancelEvent) return;
    },
    multiple: true,
    maxFiles: MAX,
    disabled: DISABLED,
  });

  const deleteFile = (index: number) => {
    const newVal = [...value];
    newVal.splice(index, 1);
    onChange(newVal);
  };

  return (
    <div className="flex flex-col">
      {fileRejections.length > 0 && (
        <Alert message={fileRejections[0].errors[0].message} />
      )}
      <div
        className={`custom-border-dashed w-full h-full flex-[0.7] ${
          DISABLED ? "!bg-black/10 cursor-not-allowed" : ""
        } ${isDragAccept ? "file-accepted" : ""} ${
          isDragReject ? "file-denined" : ""
        } flex-[1] w-full flex justify-start items-center relative`}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <div className="flex items-center justify-center flex-col w-full h-[450px] p-4">
          {isDragActive ? (
            <>
              {isDragAccept && (
                <>
                  <AddPhotoIcon width={60} height={60} fill="#ccc" />
                  <p>Drop the files here ...</p>
                </>
              )}{" "}
              {isDragReject && (
                <>
                  <CloseIcon width={60} height={60} fill="#ccc" />
                  <p>File type is not accecpted</p>
                </>
              )}
            </>
          ) : (
            <div className="flex justify-center items-center gap-x-2">
              <p>{"Drag and Drop to upload Media"}</p>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-end mt-1">
        <small className="flex items-center gap-x-1">
          <InfoCircleIcon width={15} height={15} /> Number of files allowed:{" "}
          {NO_OF_FILE_ALLOWED}
        </small>
      </div>
      {value?.length ? (
        <div className="relative w-full h-full flex-[0.3] mt-4">
          <div className="flex flex-row gap-x-6">
            {value.map((item, index) => (
              <div
                onClick={() => {
                  setIsOpen(true);
                  setImageIndex(index);
                }}
                className="relative w-[150px] h-[150px] cursor-pointer"
              >
                <Close onClick={() => deleteFile(index)} />
                <img
                  src={URL.createObjectURL(item)}
                  alt={item.name}
                  // layout="fill"
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          setImageIndex(null);
        }}
        title="View Media"
      >
        <div className="mt-4">
          {typeof imageIndex === "number" && (
            <img
              alt="media"
              className="w-full h-full"
              src={URL.createObjectURL(value[imageIndex])}
            />
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Dnd;
