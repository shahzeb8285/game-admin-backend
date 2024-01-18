import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PlayerLoginLogWhereInput } from './player-login-log-where.input';

@InputType()
export class PlayerLoginLogListRelationFilter {

    @Field(() => PlayerLoginLogWhereInput, {nullable:true})
    every?: PlayerLoginLogWhereInput;

    @Field(() => PlayerLoginLogWhereInput, {nullable:true})
    some?: PlayerLoginLogWhereInput;

    @Field(() => PlayerLoginLogWhereInput, {nullable:true})
    none?: PlayerLoginLogWhereInput;
}
