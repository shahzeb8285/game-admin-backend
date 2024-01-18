import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Current_active_playersMinAggregate {

    @Field(() => String, {nullable:true})
    player_id_r?: string;

    @Field(() => Date, {nullable:true})
    last_active_time?: Date | string;
}
