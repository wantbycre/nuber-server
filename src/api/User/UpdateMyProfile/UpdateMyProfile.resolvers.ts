import User from "../../../entities/User";
import { UpdateMyProfileMutationArgs, UpdateMyProfileResponse } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import cleanNullArgs from "../../../utils/cleanNullArg";
import privateResolver from "../../../utils/privateResolver";

const resolvers: Resolvers = {
    Mutation: {
        UpdateMyProfile: privateResolver(
            async(
                _, 
                args: UpdateMyProfileMutationArgs, 
                { req }
            ): Promise<UpdateMyProfileResponse> => {
                const user: User = req.user;
                //TODO: #1.59 여기서 작성할 내용이지만 미리 써있음 아마 니콜라스 순서가 뒤죽박죽된듯
                const notNull: any = cleanNullArgs(args);
                if(notNull.password !== null) {
                    user.password = notNull.password;
                    user.save();
                    delete notNull.password;
                }
                try{
                    await User.update({ id: user.id }, { ...notNull });
                    return {
                        ok: true,
                        error: null
                    }
                } catch(error){
                    return {
                        ok: false,
                        error: error.message
                    }                    
                }
            })
    }
}

export default resolvers;