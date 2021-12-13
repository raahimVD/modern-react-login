import React, { useContext , useState} from "react";
import {
    BoldLink,
    BoxContainer,
    FormContainer,
    Input,
    MutedLink,
    SubmitButton,
    ErrorText,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import OtpInput from 'react-otp-input';

export function OTPForm(props) {
    const { switchToSignup } = useContext(AccountContext);
    const [otp, setOtp] = useState('');
    const [isError, showError] = useState(false);

    const handleChange = (otp) =>{
        console.log(otp)
        setOtp(otp)
        showError(false);
    }
    const otpValid = () => {
        otp == '666666' ? switchToSignup() : showError(true);
    }
    return (
        <BoxContainer>
            <OtpInput
                placeholder={'123456'}
                value={otp}
                // containerStyle={{width : '100%'}}
                inputStyle={{width : '35px', height : '45px'}}
                onChange={handleChange}
                numInputs={6}
                separator={<span>-</span>}
                isInputNum
            />
            {/* <FormContainer> */}
            {/* <MuiPhoneNumber defaultCountry={'pk'} placeholder="mobile number" />, */}
            {/* <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" /> */}
            {/* </FormContainer> */}
            {isError && <ErrorText>Please enter a valid otp</ErrorText>}
            <Marginer direction="vertical" margin={40} />

            {/* <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToMain}>
          Signup
        </BoldLink>
      </MutedLink> */}
            <SubmitButton type="submit" onClick={otpValid}>Continue</SubmitButton>
        </BoxContainer>
    );
}
