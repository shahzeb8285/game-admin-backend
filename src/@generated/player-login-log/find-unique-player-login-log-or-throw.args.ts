import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlayerLoginLogWhereUniqueInput } from './player-login-log-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquePlayerLoginLogOrThrowArgs {

    @Field(() => PlayerLoginLogWhereUniqueInput, {nullable:false})
    @Type(() => PlayerLoginLogWhereUniqueInput)
    where!: PlayerLoginLogWhereUniqueInput;
}
