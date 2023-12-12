import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Player } from './player.entity';






@ObjectType()
export class UserLoginHistory {

   
    @Field(() => String, {nullable:false})
    player_id!: string;

    @Field(() => String, {nullable:false})
    ip!: string;

    @Field(() => Date, {nullable:false})
    login_time!: Date;

    @Field(() => Player, {nullable:false})
    players?: Player;


}




