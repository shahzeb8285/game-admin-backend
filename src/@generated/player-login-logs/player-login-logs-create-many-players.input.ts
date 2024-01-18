import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class player_login_logsCreateManyPlayersInput {

    @Field(() => String, {nullable:false})
    ip!: string;

    @Field(() => Date, {nullable:false})
    login_time!: Date | string;
}
