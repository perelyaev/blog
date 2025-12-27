import { Text, Html, Head, Body } from "@react-email/components";
import * as React from "react";

export default function VerificationOTP(otp: string) {
  console.log(otp)
  return (
    <Html>
      <Head />
      <Body>
        <Text>
          {otp}
        </Text>
      </Body>
    </Html>
  );
}