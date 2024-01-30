import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Player_login_logsMinAggregate {

    @Field(() => String, {nullable:true})
    player_login_log_id?: string;

    @Field(() => String, {nullable:true})
    player_id?: string;

    @Field(() => String, {nullable:true})
    ip?: string;

    @Field(() => Date, {nullable:true})
    login_time?: Date | string;
}
