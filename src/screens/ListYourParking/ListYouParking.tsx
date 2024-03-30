"use client";
import React, { useState } from "react";
import { DND } from "@/components";
import Image from "next/image";

const ListYouParking = () => {
  const [file, setFile] = useState<File[] | []>([]);
  const [isSecurity, setIsSecurity] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col flex-grow">
      <form onSubmit={onSubmit} className="flex-grow">
        <div className="grid grid-cols-12 h-full">
          <div className="col-span-5 px-8 py-6">
            <DND value={file} onChange={(files) => setFile(files)} />
          </div>
          <div className="col-span-7">
            <h1 className="text-center text-xl font-semibold mt-4">
              Register Your Parking Space
            </h1>
            <div className="flex flex-col gap-y-5 mt-6 px-10">
              <div className="input-group form-control">
                <label className="label" htmlFor="">
                  Name
                </label>
                <div>
                  <input className="input input-bordered" type="text" />
                </div>
              </div>{" "}
              <div className="input-group form-control">
                <label className="label" htmlFor="">
                  Address
                </label>
                <div>
                  <input className="input input-bordered" type="text" />
                  <div className="flex items-center gap-x-2 mt-1 justify-end">
                    <input
                      className="checkbox w-4 h-4 rounded-[4px] p-0"
                      id="take_current_location"
                      name="take_current_location"
                      type="checkbox"
                    />
                    <label className="text-sm" htmlFor="take_current_location">
                      {" "}
                      Take Current Location
                    </label>
                  </div>
                </div>
              </div>{" "}
              <div className="input-group form-control">
                <label className="label" htmlFor="">
                  Area
                </label>
                <div>
                  <select className="select select-bordered" name="" id="">
                    <option value="">avadi</option>
                    <option value="">ambattur</option>
                  </select>
                </div>
              </div>
              <div className="input-group form-control">
                <label className="label" htmlFor="">
                  Mobile No
                </label>
                <div>
                  <input className="input input-bordered" type="text" />
                </div>
              </div>{" "}
              <div className="input-group form-control">
                <label className="label" htmlFor="">
                  Security Camera
                </label>
                <div className="flex gap-x-24">
                  <label htmlFor="yes" className="flex flex-row gap-x-4">
                    <span>Yes</span>
                    <input
                      className="checkbox"
                      id="yes"
                      name="security_camera"
                      type="radio"
                      checked={isSecurity}
                      onChange={(e) => setIsSecurity(true)}
                    />
                  </label>
                  <label htmlFor="no" className="flex flex-row gap-x-4">
                    <span>No</span>
                    <input
                      className="checkbox"
                      id="no"
                      name="security_camera"
                      type="radio"
                      checked={!isSecurity}
                      onChange={(e) => setIsSecurity(false)}
                    />
                  </label>
                </div>
              </div>{" "}
              {isSecurity && (
                <div className="input-group form-control">
                  <label htmlFor=""></label>
                  <div className="form-control flex gap-x-24">
                    <div className="label">
                      <span className="label-text">
                        Security Description (optional)
                      </span>
                    </div>
                    <textarea
                      className="textarea textarea-bordered h-24"
                      placeholder="Bio"
                    ></textarea>
                  </div>
                </div>
              )}
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ListYouParking;
