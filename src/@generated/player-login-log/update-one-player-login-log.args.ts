import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlayerLoginLogUpdateInput } from './player-login-log-update.input';
import { Type } from 'class-transformer';
import { PlayerLoginLogWhereUniqueInput } from './player-login-log-where-unique.input';

@ArgsType()
export class UpdateOnePlayerLoginLogArgs {

    @Field(() => PlayerLoginLogUpdateInput, {nullable:false})
    @Type(() => PlayerLoginLogUpdateInput)
    data!: PlayerLoginLogUpdateInput;

    @Field(() => PlayerLoginLogWhereUniqueInput, {nullable:false})
    @Type(() => PlayerLoginLogWhereUniqueInput)
    where!: PlayerLoginLogWhereUniqueInput;
}
