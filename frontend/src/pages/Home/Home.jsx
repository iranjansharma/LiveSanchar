import React from "react";
import styles from "./Home.module.css";
import { Link, useHistory } from "react-router-dom";
import Card from "../../components/shared/Card/Card";
import Button from "../../components/button/Button";

const Home = () => {
  const signInLink = {
    marginLeft: "10px",
    color: "#0077ff",
    fontWeight: "bold",
    textDecoration: "none",
  };
  const history = useHistory();

  function startRegister() {
    history.push("/register");
  }
  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome To LiveSanchar !" icon="logo">
        <p className={styles.text}>
          We're working hard to get Livesanchar ready for everyone! While we
          wrap up the finishing youches, we're adding people gradually to make
          sure nothing breaks
        </p>
        <div>
          <Button onClick={startRegister} text="Get your username" />
        </div>
        <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>Have an invite text?</span>
          <Link style={signInLink} to="/login">
            Sign In
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
