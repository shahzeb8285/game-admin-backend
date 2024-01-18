import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PlayerLoginLogCreateInput } from './player-login-log-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePlayerLoginLogArgs {

    @Field(() => PlayerLoginLogCreateInput, {nullable:false})
    @Type(() => PlayerLoginLogCreateInput)
    data!: PlayerLoginLogCreateInput;
}
