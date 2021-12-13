import React, { useContext, useState } from "react";
import {
    BoldLink,
    BoxContainer,
    FormContainer,
    Input,
    MutedLink,
    SmallText,
    SubmitButton,
    ErrorText
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import OtpInput from 'react-otp-input';

export function Payment(props) {
    const { switchToConfirmPayment } = useContext(AccountContext);
    const [tPin, setTpin] = useState('');
    const [isError, showError] = useState(false);

    const handleChange = (tPin) => {
        setTpin(tPin)
    }
    const confirmPayment = () => {
        tPin != '1111' ? showError(true) : switchToConfirmPayment()
    }
    return (
        <BoxContainer>
            <table>
                <tr>
                    <td colSpan={6}><SmallText><b>Total Invoice</b></SmallText></td>
                    <td colSpan={2}><SmallText>Rs.10,000</SmallText></td>
                </tr>
                <tr>
                    <td colSpan={7}><SmallText>Pay in 4 interest free installments</SmallText></td>
                    <td></td>
                </tr>
                <tr>
                    <td colSpan={6}><SmallText><b>Pay Today</b></SmallText></td>
                    <td colSpan={2}><SmallText><b>Rs.2500</b></SmallText></td>
                </tr>
                <tr>
                    <td colSpan={6}><SmallText>Next Month</SmallText></td>
                    <td colSpan={2}><SmallText>Rs.2500</SmallText></td>
                </tr>
                <tr>
                    <td colSpan={6}><SmallText>In January 2022</SmallText></td>
                    <td colSpan={2}><SmallText>Rs.2500</SmallText></td>
                </tr>
                <tr>
                    <td colSpan={6}><SmallText>In Febuary 2022</SmallText></td>
                    <td colSpan={2}><SmallText>Rs.2500</SmallText></td>
                </tr>
            </table>
            <SmallText><b>Payment Method</b></SmallText>
            <table>
                <tr>
                    <td colSpan={1} rowSpan={2}><img width="18%" src="https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Logo.png" alt="" /></td>
                    <td colSpan={2} rowSpan={2}><SmallText>***** 4322 07/26</SmallText></td>
                    <td colSpan={2} rowSpan={2}><img width="100%" src="https://www.pngrepo.com/download/315639/chevron-right.png" alt="" /></td>

                </tr>
                <tr>
                    <td colSpan={6}><SmallText><b></b></SmallText></td>
                    <td colSpan={2}><SmallText></SmallText></td>
                </tr>
            </table>
            <Marginer direction="vertical" margin={10} />
            <SmallText><b>Enter your Baadmay T-Pin</b></SmallText>
            <Marginer direction="vertical" margin={5} />
            <OtpInput
                placeholder={'1234'}
                value={tPin}
                // containerStyle={{width : '100%'}}
                inputStyle={{ width: '35px', height: '45px' }}
                onChange={handleChange}
                numInputs={4}
                separator={<span>-</span>}
                isInputNum
            />
            {isError && <ErrorText>Please enter Valid T-Pin</ErrorText>}

            {/* <OtpInput
                placeholder={'1234'}
                value={tPin}
                // containerStyle={{widtd : '100%'}}
                inputStyle={{widtd : '35px', height : '45px'}}
                onChange={handleChange}
                numInputs={4}
                separator={<span>-</span>}
                isInputNum
            /> */}
            {/* <FormContainer> */}
            {/* <MuiPhoneNumber defaultCountry={'pk'} placeholder="mobile number" />, */}
            {/* <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" /> */}
            {/* </FormContainer> */}
            <Marginer direction="vertical" margin={10} />

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
            <SubmitButton type="" onClick={confirmPayment}>Confirm</SubmitButton>
        </BoxContainer>
    );
}
