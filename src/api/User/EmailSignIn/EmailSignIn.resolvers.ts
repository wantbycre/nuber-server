import User from "../../../entities/User";
import { 
    EmailSignInMutationArgs,
    EmailSignInResponse 
} from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";

const resolvers: Resolvers = {
    Mutation: {
        EmailSingIn: async(
            _, 
            args: EmailSignInMutationArgs
        ) : Promise<EmailSignInResponse> => {
            const { email } = args;

            try {
                const user = User.findOne({ email });

            } catch (error) {
                return {
                    ok: false,
                    error: error.message,
                    token: null
                }
            }

        }
    }
}

export default resolvers;