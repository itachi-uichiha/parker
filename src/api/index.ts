import { createClient } from "@supabase/supabase-js";
import {
  createParkingTypes,
  deleteParkingType,
  signInTypes,
  signUpTypes,
  updateParkingTypes,
} from "./types";
import bcrypt from "bcryptjs-react";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);

const salt = bcrypt.genSaltSync(process.env.NEXT_PUBLIC_SALT_COUNT as any);

const signIn = async (payload: signInTypes) => {
  try {
    let { data: auth, error } = (await supabase
      .from("auth")
      .select("*")
      .eq("email", payload.email)) as any;
    if (auth?.length > 0) {
      return { status: 400, message: "Enter a Valid Email ID" };
    } else {
      let status = false;
      bcrypt.compare(
        payload.password,
        auth?.password,
        function (err, res) {
          if (res) {
            status = true;
          }
        }
      );
      if (status) {
        return {
          status: 200,
          message: "Successfully logged In!",
          data: auth,
        };
      } else {
        return { status: 400, message: "Invalid Password" };
      }
    }
  } catch (err) {
    console.log("err in sign in service", err);
  }
};

const signUp = async (payload: signUpTypes) => {
  try {
    const { password, ...rest } = payload;
    const hashPassword = bcrypt.hashSync(password, salt);
    const newPayload = {
      password: hashPassword,
      ...rest,
    };
    const { data: signUp, error } = await supabase
      .from("auth")
      .insert([newPayload])
      .select();
    if (error) return { status: error.code, message: error.message };
    return {
      status: 200,
      message: "Successfully Completed Sign Up Process!",
      data: signUp,
    };
  } catch (err) {
    console.log("err in sign up service", err);
  }
};

const createParking = async (payload: createParkingTypes) => {
  try {
    const { data: create, error } = await supabase
      .from("parkings")
      .insert([payload])
      .select();
    if (error) return { status: error.code, message: error.message };
    return {
      status: 200,
      message: "Successfully Upload Parking Details!",
      data: create,
    };
  } catch (err) {
    console.log("err in create parking service", err);
  }
};

const listParkings = async () => {
  try {
    let { data: parkings, error } = await supabase.from("parkings").select("*");
    if (error) return { status: error.code, message: error.message };
    return {
      status: 200,
      message: "Successfully Fetched All Parking Details!",
      data: parkings,
    };
  } catch (err) {
    console.log("err in list parking service", err);
  }
};

const updateParking = async (payload: updateParkingTypes) => {
  try {
    const { data: update, error } = await supabase
      .from("parkings")
      .update(payload)
      .eq("id", payload.id)
      .select();
    if (error) return { status: error.code, message: error.message };
    return {
      status: 200,
      message: "Successfully Updated Parking Details!",
      data: update,
    };
  } catch (err) {
    console.log("err in update parking service", err);
  }
};

const deleteParking = async (payload: deleteParkingType) => {
  try {
    const { data, error } = await supabase
      .from("parkings")
      .delete()
      .eq("id", payload.id);
    if (error) return { status: error.code, message: error.message };
    return {
      status: 200,
      message: "Successfully Deleted Parking Details!",
      data: data,
    };
  } catch (err) {
    console.log("err in update parking service", err);
  }
};

export {
  signIn,
  signUp,
  createParking,
  listParkings,
  updateParking,
  deleteParking,
};