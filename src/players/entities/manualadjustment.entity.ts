import { ObjectType, Field, Int, ID, Float } from '@nestjs/graphql';
// import { Player } from './player.entity';
import { Admin } from '../../@generated/admin/admin.model';
import { Player } from '../../@generated/player/player.model';
// import { Admin } from '../../admins/entities/admin.entity';






@ObjectType()
export class ManualAdjustment1 {

  
    @Field(() => ID, {nullable:false})
    manual_adjustment_id!: string;

    @Field(() => String, {nullable:false})
    player_id!: string;

    @Field(() => String, {nullable:false})
    reason!: string;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => Date, {nullable:false})
    cdate!: Date;

    @Field(() => Player, {nullable:false})
    players?: Player;

    @Field(() => Admin, {nullable:false})
    admins?: Admin;

}




