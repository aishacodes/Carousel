import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Sliderr from "./slider";

const Home: NextPage = () => {
  return (
    <>
      <Sliderr device="laptop" />
    </>
  );
};

export default Home;
