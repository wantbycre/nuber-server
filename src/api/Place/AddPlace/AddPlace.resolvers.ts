import User from "../../../entities/User";
import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";
import Place from "../../../entities/Place";
import { AddPlaceMutationArgs, AddPlaceResoponse } from "../../../types/graph";

const resolvers: Resolvers = {
    Mutation: {
        AddPlace: privateResolver(async(
            _, 
            __, 
            args: AddPlaceMutationArgs, 
            { req }
        ): Promise<AddPlaceResoponse> => {
            const user: User = req.user;
            try{
                await Place.create({ ...args, user}).save();

                return {
                    ok: true,
                    error: null
                }
            } catch(error) {
                return {
                    ok: false,
                    error: error.message
                }
            }
        })
    }
}

export default resolvers;