import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Player_login_logsMaxAggregate {

    @Field(() => String, {nullable:true})
    player_id_r?: string;

    @Field(() => String, {nullable:true})
    ip?: string;

    @Field(() => Date, {nullable:true})
    login_time?: Date | string;
}
