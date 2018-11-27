import Verification from "../../../entities/Verification";
import {
  StartPhoneVerificationMutationArgs,
  StartPhoneVerificationResponse
} from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import { sendVerificationSMS } from "../../../utils/sendSMS";

const resolvers: Resolvers = {
  Mutation: {
    StartPhoneVerification: async (
      _,
      args: StartPhoneVerificationMutationArgs
    ): Promise<StartPhoneVerificationResponse> => {
      const { phoneNumber } = args;
      try {
        const existingVerification = await Verification.findOne({
          payload: phoneNumber
        });
        if (existingVerification) {
          existingVerification.remove();
        }
        const newVerification = await Verification.create({
          payload: phoneNumber,
          target: "PHONE"
        }).save();
        /*
                TODO: 실제 콘솔 Twilio 정상 폰번호 구입시 인증번호등 정상으로 출력됩니다.
                TODO: 학습자는 Twilio 결제가 $1달러면 되는데 업그레이드 해야되서 $20달러가 필요..
                Verification {
                    target: 'PHONE',
                    payload: '+8201020851230',
                    key: '35583',
                    id: 1,
                    createdAt: 2018-11-07T06:55:05.655Z,
                    updatedAt: 2018-11-07T06:55:05.655Z 
                }
                */
        // TODO: 여기 콘솔에 상단 Key를 직접 집어 넣으면 됩니다. 오예!!!!!
        console.log("newVerification:: ", newVerification);
        await sendVerificationSMS(newVerification.payload, newVerification.key);
        return {
          ok: true,
          error: null
        };
      } catch (error) {
        return {
          ok: false,
          error: error.message
        };
      }
    }
  }
};

export default resolvers;
