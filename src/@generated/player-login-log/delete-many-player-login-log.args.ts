import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlayerLoginLogWhereInput } from './player-login-log-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPlayerLoginLogArgs {

    @Field(() => PlayerLoginLogWhereInput, {nullable:true})
    @Type(() => PlayerLoginLogWhereInput)
    where?: PlayerLoginLogWhereInput;
}
