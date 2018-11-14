import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";
import { DeletePlaceMutationArgs, DeletePlaceResponse } from "../../../types/graph";
import User from "../../../entities/User";
import Place from "../../../entities/Place";

const resolvers: Resolvers = {
    Mutation: {
        DeletePlace: privateResolver(async(
            _, 
            args: DeletePlaceMutationArgs, 
            { req }
        ): Promise<DeletePlaceResponse> => {
            const user: User = req.user;

            try {
                const place = await Place.findOne({ id: args.placeId});
                if(place) {
                    if(place.id === user.id) {

                    }else {
                        return {
                            ok: false,
                            error: "Not Authorized"
                        }
                    }
                }else {
                    return {
                        ok: false,
                        error: "Place Not Found!"
                    }
                }
            }catch(error){
                return {
                    ok: false,
                    error: error.message
                }
            }
        })
    }
};

export default resolvers;