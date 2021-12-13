import React, { useState } from "react";
import styled from "styled-components";
import { LoginForm } from "./loginForm";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import { SignupForm } from "./signupForm";
import { MainForm } from "./mainForm";
import { OTPForm } from "./otpForm";
import { SetupPin } from "./setupPin";
import { ConfirmPin } from "./confirmPin";
import { Payment } from "./payment";
import { ConfirmPayment } from "./confirmPayment";
const BoxContainer = styled.div`
  width: 280px;
  min-height: 680px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  background: rgba(96, 22, 235, 1);
  background: linear-gradient(
    58deg,
    rgba(96, 22, 235, 1) 20%,
    rgba(96, 12, 215, 1) 100%
  );
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

const HeaderSmallText = styled.h4`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

export function AccountBox(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("main");

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 400);
  };

  const switchToMain = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("main");
    }, 400);
  };
  const switchToOTP = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("OTP");
    }, 400);
  };
  const switchToSetupPin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("SetPin");
    }, 400);
  };
  const switchToConfirmPin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("ConfirmPin");
    }, 400);
  };
  const switchToPayment = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("Payment");
    }, 400);
  };
  const switchToConfirmPayment = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("ConfirmPayment");
    }, 400);
  };

  const contextValue = { switchToSignup, switchToSignin, switchToMain, switchToOTP, switchToSetupPin, switchToConfirmPin, switchToPayment, switchToConfirmPayment };

  return (
    <AccountContext.Provider value={contextValue}>
      <BoxContainer>
        <TopContainer>
          <BackDrop
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={backdropVariants}
            transition={expandingTransition}
          />
          {active === "main" && (
            <HeaderContainer>
              <HeaderText>Baadmay</HeaderText>
              <HeaderSmallText>Login or create a new account</HeaderSmallText>
              <SmallText>Enter your mobile number to login </SmallText>
            </HeaderContainer>
          )}
          {active === "OTP" && (
            <HeaderContainer>
              <HeaderText>Baadmay</HeaderText>
              {/* <HeaderText>Baadmay</HeaderText> */}
              <HeaderSmallText>Verify your mobile number</HeaderSmallText>
              <SmallText>Please enter OTP sent via SMS to  </SmallText>
              <SmallText>+92 333 4567895  </SmallText>
            </HeaderContainer>
          )}
          {active === "signin" && (
            <HeaderContainer>
              <HeaderText>Baadmay</HeaderText>
              <HeaderText>Welcome</HeaderText>
              <HeaderText>Back</HeaderText>
              <SmallText>Please sign-in to continue!</SmallText>
            </HeaderContainer>
          )}
          {active === "signup" && (
            <HeaderContainer>
              <HeaderText>Baadmay</HeaderText>
              <HeaderText>You're almost done!</HeaderText>
              {/* <HeaderText>Account</HeaderText> */}
              <SmallText>Please enter the following information to create you accout</SmallText>
              {/* <SmallText>Please sign-up to continue!</SmallText> */}
            </HeaderContainer>
          )}
          {active === "SetPin" && (
            <HeaderContainer>
              <HeaderText>Baadmay</HeaderText>
              <HeaderText>Let's setup a T-Pin</HeaderText>
              {/* <HeaderText>Account</HeaderText> */}
              <SmallText>Please enter your T-Pin</SmallText>
              {/* <SmallText>Please sign-up to continue!</SmallText> */}
            </HeaderContainer>
          )}
          {active === "ConfirmPin" && (
            <HeaderContainer>
              <HeaderText>Baadmay</HeaderText>
              <HeaderText>Confirm your T-Pin</HeaderText>
              {/* <HeaderText>Account</HeaderText> */}
              <SmallText>Please enter your T-Pin</SmallText>
              {/* <SmallText>Please sign-up to continue!</SmallText> */}
            </HeaderContainer>
          )}
          {active === "Payment" && (
            <HeaderContainer>
              <HeaderText>Pay with Baadmay</HeaderText>
              {/* <HeaderText>Confirm your T-Pin</HeaderText> */}
              {/* <HeaderText>Account</HeaderText> */}
              <SmallText>In collaboration with KHAADI</SmallText>
              {/* <SmallText>Please sign-up to continue!</SmallText> */}
            </HeaderContainer>
          )}
          {active === "ConfirmPayment" && (
            <HeaderContainer>
              {/* <HeaderText>Pay with Baadmay</HeaderText> */}
              {/* <HeaderText>Confirm your T-Pin</HeaderText> */}
              {/* <HeaderText>Account</HeaderText> */}
              {/* <SmallText>In collaboration with KHAADI</SmallText> */}
              {/* <SmallText>Please sign-up to continue!</SmallText> */}
              <img src={require('../images/confirmPayment.png').default} style={{width:'inherit', position:'absolute', top: 0}} />
            </HeaderContainer>
          )}
        </TopContainer>
        <InnerContainer>
          {active === "main" && <MainForm />}
          {active === "OTP" && <OTPForm />}
          {active === "signup" && <SignupForm />}
          {active === "signin" && <LoginForm />}
          {active === "SetPin" && <SetupPin />}
          {active === "ConfirmPin" && <ConfirmPin />}
          {active === "Payment" && <Payment />}
          {active === "ConfirmPayment" && <ConfirmPayment />}
        </InnerContainer>
      </BoxContainer>
    </AccountContext.Provider>
  );
}
